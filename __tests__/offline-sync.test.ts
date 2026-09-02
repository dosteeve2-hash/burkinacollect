import { processQueue, type SyncQueueItem } from "../hooks/useOfflineSync";

function item(overrides: Partial<SyncQueueItem> = {}): SyncQueueItem {
  return {
    id: "i1",
    type: "form_submission",
    payload: { village: "Koudougou" },
    createdAt: "2026-06-28T10:00:00.000Z",
    retries: 0,
    ...overrides,
  };
}

describe("processQueue", () => {
  it("vide la file quand tout part", async () => {
    const result = await processQueue([item({ id: "a" }), item({ id: "b" })], async () => true);
    expect(result.synced).toBe(2);
    expect(result.remaining).toHaveLength(0);
    expect(result.failed).toHaveLength(0);
  });

  it("incrémente les tentatives d'un envoi refusé", async () => {
    const result = await processQueue([item({ retries: 0 })], async () => false);
    expect(result.remaining).toHaveLength(1);
    expect(result.remaining[0].retries).toBe(1);
    expect(result.failed).toHaveLength(0);
  });

  it("traite une exception du réseau comme un échec, pas comme un succès", async () => {
    const result = await processQueue([item()], async () => {
      throw new Error("network down");
    });
    expect(result.synced).toBe(0);
    expect(result.remaining).toHaveLength(1);
  });

  // Le cœur du correctif : un item ayant épuisé ses tentatives n'était ni
  // remis dans la file, ni signalé. Une soumission terrain disparaissait.
  it("conserve un item dont les tentatives sont épuisées au lieu de le perdre", async () => {
    const epuise = item({ id: "perdu", retries: 3 });
    const result = await processQueue([epuise], async () => false);

    expect(result.remaining).toHaveLength(0);
    expect(result.failed).toHaveLength(1);
    expect(result.failed[0].id).toBe("perdu");
  });

  it("sépare correctement succès, reprises et abandons", async () => {
    const items = [
      item({ id: "ok", retries: 0 }),
      item({ id: "retry", retries: 1 }),
      item({ id: "abandon", retries: 3 }),
    ];
    const result = await processQueue(items, async (i) => i.id === "ok");

    expect(result.synced).toBe(1);
    expect(result.remaining.map((i) => i.id)).toEqual(["retry"]);
    expect(result.failed.map((i) => i.id)).toEqual(["abandon"]);
  });

  it("ne modifie pas les items d'entrée", async () => {
    const original = item({ retries: 1 });
    const snapshot = { ...original };
    await processQueue([original], async () => false);
    expect(original).toEqual(snapshot);
  });
});
