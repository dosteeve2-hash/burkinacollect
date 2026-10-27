<p align="center"><img src="public/brand/mark.svg" alt="BurkinaCollect" width="72" height="72"></p>

<div align="center">

<h1>
  <img src="public/favicon.ico" width="32" height="32" alt="logo" />
  BurkinaCollect
</h1>

<p><em>Projet en développement : outil de collecte terrain hors ligne pour le Burkina Faso et l'Afrique de l'Ouest. Aujourd'hui : page de présentation et prototype de file de synchronisation.</em></p>

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?style=flat-square&logo=vercel)](https://burkinacollect-bf.vercel.app)

**[🌍 Voir le site de présentation](https://burkinacollect-bf.vercel.app)** · **[🐛 Signaler un bug](https://github.com/dosteeve2-hash/burkinacollect/issues)** · **[💡 Proposer une fonctionnalité](https://github.com/dosteeve2-hash/burkinacollect/issues)**

</div>

---

## 📖 À propos / About

**FR** — BurkinaCollect est un projet d'outil de collecte de données de terrain pour les organisations locales du Burkina Faso et de la sous-région : agriculture, santé, distribution d'aide, services municipaux. Le principe visé est de remplir des fiches sans connexion, puis de synchroniser quand le réseau revient.

**État réel : il n'y a pas encore d'application de collecte.** Le dépôt contient le site de présentation (accueil, à propos, tarifs) et un prototype de file de synchronisation hors ligne, sans interface de collecte ni backend.

**EN** — BurkinaCollect is a planned offline-first field data collection tool for organizations in Burkina Faso and West Africa. **There is no collection app yet**: the repository contains the presentation site (home, about, pricing) and an offline sync-queue prototype, with no collection UI and no backend.

---

## ✅ Ce qui existe aujourd'hui / What exists today

| Élément | État |
|---|---|
| Site de présentation (`/`, `/about`, `/tarifs`) | En ligne ; aucun tarif publié |
| Hook `useOfflineSync` (`hooks/useOfflineSync.ts`) | Prototype : file d'attente dans `localStorage`, tentatives limitées, éléments en échec conservés |
| Tests (`__tests__/offline-sync.test.ts`) et CI | Présents, couvrent la file de synchronisation |

## 🔭 Prévu, pas encore construit / Planned, not built

| Fonctionnalité | État |
|---|---|
| Formulaires de terrain (form builder) | Prévu |
| Soumissions avec GPS, photos, horodatage | Prévu |
| Gestion des agents, tableau de bord superviseur, carte des zones | Prévu |
| Journal d'audit, export CSV | Prévu |
| Stockage hors ligne robuste (IndexedDB) et synchronisation vers un backend | Prévu : la file actuelle simule l'envoi |

---

## 🛠️ Stack technique

```
Frontend  : Next.js 15 (App Router) + React 19 + TypeScript 5
Styling   : Tailwind CSS v4
Linting   : ESLint 9 + eslint-config-next
Tests     : Vitest
Deploy    : Vercel
```

---

## 🚀 Lancer en local / Getting Started

### Prérequis / Prerequisites

- Node.js 20+
- npm ou pnpm

### Installation

```bash
# Cloner le repo
git clone https://github.com/dosteeve2-hash/burkinacollect.git
cd burkinacollect

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

### Scripts disponibles

```bash
npm run dev      # Serveur de développement (Turbopack)
npm run build    # Build de production
npm run start    # Démarre le serveur de production
npm run lint     # Analyse statique du code
npm test         # Tests Vitest (file de synchronisation)
```

---

## 🌐 Déploiement / Deployment

Le projet est optimisé pour [Vercel](https://vercel.com). Chaque push sur `main` déclenche un déploiement automatique.

```bash
# Via Vercel CLI
vercel --prod
```

**Site de présentation :** https://burkinacollect-bf.vercel.app (pas d'application de collecte)

---

## 🗺️ Roadmap

- [ ] Interface de collecte (formulaires de terrain)
- [ ] Authentification multi-rôles (agent / superviseur / admin)
- [ ] Soumissions avec GPS, photos et timestamps
- [ ] Stockage offline via IndexedDB
- [ ] Synchronisation sécurisée vers backend PostgreSQL
- [ ] Analytics et détection d'anomalies
- [ ] Support multilingue (Français, Mooré, Dioula, Fulfuldé)

---

<div align="center">

Si ce projet vous inspire, laissez une ⭐ — Fait avec ❤️ au Burkina Faso

**[Steve Donald Compaoré](https://steeve-portfolio-mocha.vercel.app)** · [docompaore2@gmail.com](mailto:docompaore2@gmail.com) · [GitHub](https://github.com/dosteeve2-hash)

*Construire la tech africaine de demain, aujourd'hui.*

</div>
