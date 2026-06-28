<div align="center">

<h1>
  <img src="public/favicon.ico" width="32" height="32" alt="logo" />
  BurkinaCollect
</h1>

<p><em>Dashboard de collecte terrain offline-first pour les organisations du Burkina Faso et de l'Afrique de l'Ouest</em></p>

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?style=flat-square&logo=vercel)](https://burkinacollect.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

**[🌍 Voir le site live](https://burkinacollect.vercel.app)** · **[🐛 Signaler un bug](https://github.com/dosteeve2-hash/burkinacollect/issues)** · **[💡 Proposer une fonctionnalité](https://github.com/dosteeve2-hash/burkinacollect/issues)**

</div>

---

## 📖 À propos / About

**FR** — BurkinaCollect est un dashboard de collecte de données terrain conçu pour les organisations locales du Burkina Faso et de la sous-région ouest-africaine. Il fonctionne en mode offline-first, ce qui le rend adapté aux zones à connectivité limitée : agriculture, santé, distribution d'aide, services municipaux, opérations de terrain.

**EN** — BurkinaCollect is an offline-first field data collection dashboard built for local organizations in Burkina Faso and West Africa. It works where connectivity is unreliable: agriculture, healthcare, aid distribution, municipal services, and field operations.

---

## ✨ Fonctionnalités / Features

| Fonctionnalité | Description |
|---|---|
| 📋 **Dashboard opérationnel** | Vue multi-pages des indicateurs terrain en temps réel |
| 🔧 **Form builder** | Construction de formulaires terrain avec champs persistants |
| 🔄 **Sync Queue offline** | File de synchronisation simulée — fonctionne sans connexion |
| 👥 **Gestion des agents** | Statuts opérationnels des agents terrain |
| 🗺️ **Carte des zones** | Alertes géographiques et soumissions en attente |
| 📊 **Dashboard superviseur** | Métriques de qualité et de synchronisation |
| 🔍 **Journal d'audit** | Traçabilité complète des actions importantes |
| 📤 **Export CSV** | Export des données collectées |
| 📱 **Responsive** | Interface adaptée mobile et desktop |

---

## 🛠️ Stack technique

```
Frontend  : Next.js 16 (App Router) + React 19 + TypeScript 5
Styling   : Tailwind CSS v4
Linting   : ESLint 9 + eslint-config-next
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
npm run dev      # Serveur de développement avec Turbopack
npm run build    # Build de production
npm run start    # Démarre le serveur de production
npm run lint     # Analyse statique du code
```

---

## 🌐 Déploiement / Deployment

Le projet est optimisé pour [Vercel](https://vercel.com). Chaque push sur `main` déclenche un déploiement automatique.

```bash
# Via Vercel CLI
vercel --prod
```

**URL de production :** https://burkinacollect.vercel.app

---

## 🗺️ Roadmap

- [ ] Authentification multi-rôles (agent / superviseur / admin)
- [ ] Formulaires dynamiques avec validation avancée
- [ ] Soumissions avec GPS, photos et timestamps
- [ ] Stockage offline via IndexedDB
- [ ] Synchronisation sécurisée vers backend PostgreSQL
- [ ] Analytics et détection d'anomalies
- [ ] Support multilingue (Français, Mooré, Dioula, Fulfuldé)

---

## 📄 Licence / License

Ce projet est sous licence [MIT](LICENSE).

---

<div align="center">

Si ce projet vous inspire, laissez une ⭐ — Fait avec ❤️ au Burkina Faso

**[Steve Donald Compaoré](https://steeve-portfolio-mocha.vercel.app)** · [docompaore2@gmail.com](mailto:docompaore2@gmail.com) · [GitHub](https://github.com/dosteeve2-hash)

*Construire la tech africaine de demain, aujourd'hui.*

</div>
