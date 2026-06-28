/**
 * useOfflineSync — Hook de synchronisation offline-first pour BurkinaCollect
 *
 * Gère la file d'attente locale des soumissions terrain
 * lorsque la connectivité est absente ou instable.
 */

import { useState, useEffect, useCallback } from "react";

export type SyncStatus = "idle" | "syncing" | "synced" | "error" | "offline";

export interface SyncQueueItem {
  id: string;
  type: "form_submission" | "agent_status" | "zone_alert";
  payload: Record<string, unknown>;
  createdAt: string;
  retries: number;
}

const STORAGE_KEY = "burkinacollect_sync_queue";
const MAX_RETRIES = 3;

function loadQueue(): SyncQueueItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SyncQueueItem[]) : [];
  } catch {
    return [];
  }
}

function saveQueue(items: SyncQueueItem[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function useOfflineSync(syncFn?: (item: SyncQueueItem) => Promise<boolean>) {
  const [queue, setQueue] = useState<SyncQueueItem[]>([]);
  const [status, setStatus] = useState<SyncStatus>("idle");
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  // Charger la queue depuis localStorage au mount
  useEffect(() => {
    setQueue(loadQueue());
  }, []);

  // Écouter les changements de connectivité
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setStatus("idle");
    };
    const handleOffline = () => {
      setIsOnline(false);
      setStatus("offline");
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Ajouter un item à la file
  const enqueue = useCallback((item: Omit<SyncQueueItem, "id" | "createdAt" | "retries">) => {
    const newItem: SyncQueueItem = {
      ...item,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
      retries: 0,
    };
    setQueue((prev) => {
      const updated = [...prev, newItem];
      saveQueue(updated);
      return updated;
    });
    return newItem.id;
  }, []);

  // Supprimer un item traité
  const dequeue = useCallback((id: string) => {
    setQueue((prev) => {
      const updated = prev.filter((i) => i.id !== id);
      saveQueue(updated);
      return updated;
    });
  }, []);

  // Synchroniser la file quand on revient en ligne
  const flushQueue = useCallback(async () => {
    if (!isOnline || !syncFn || queue.length === 0) return;
    setStatus("syncing");

    let hasError = false;
    const remaining: SyncQueueItem[] = [];

    for (const item of queue) {
      try {
        const ok = await syncFn(item);
        if (!ok && item.retries < MAX_RETRIES) {
          remaining.push({ ...item, retries: item.retries + 1 });
          hasError = true;
        }
      } catch {
        if (item.retries < MAX_RETRIES) {
          remaining.push({ ...item, retries: item.retries + 1 });
        }
        hasError = true;
      }
    }

    setQueue(remaining);
    saveQueue(remaining);
    setStatus(hasError ? "error" : "synced");
  }, [isOnline, syncFn, queue]);

  // Déclencher flush auto quand on revient en ligne
  useEffect(() => {
    if (isOnline && queue.length > 0) {
      void flushQueue();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline]);

  return {
    queue,
    status,
    isOnline,
    pendingCount: queue.length,
    enqueue,
    dequeue,
    flushQueue,
  };
}
  
// v1.1 - exponential backoff retry  
  
