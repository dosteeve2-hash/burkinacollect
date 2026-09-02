import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos — BurkinaCollect",
  description:
    "Découvrez la mission de BurkinaCollect : digitaliser la collecte de données terrain au Burkina Faso.",
};

const stats = [
  { value: "500+", label: "Collecteurs formés" },
  { value: "1 200+", label: "Formulaires créés" },
  { value: "35", label: "Régions couvertes" },
];

const useCases = [
  { icon: "🌾", title: "Enquêtes agricoles", desc: "Suivi des cultures, rendements et distribution d'intrants au niveau des villages." },
  { icon: "🏛️", title: "Secteur gouvernemental", desc: "Recensement, état civil, collecte de données pour les services publics décentralisés." },
  { icon: "🤝", title: "ONG & Humanitaire", desc: "Distribution d'aide, suivi de bénéficiaires et rapports terrain en temps réel." },
  { icon: "📊", title: "Études de marché", desc: "Enquêtes consommateurs, sondages et collecte de données commerciales en mobilité." },
  { icon: "🏥", title: "Santé communautaire", desc: "Suivi épidémiologique, vaccination et services de santé primaire hors connexion." },
  { icon: "📍", title: "Recensement terrain", desc: "Cartographie des ménages et populations dans les 45 provinces du Burkina Faso." },
];

const stack = [
  { label: "Framework", value: "Next.js 15 · App Router" },
  { label: "UI", value: "React 19 · TypeScript 5" },
  { label: "Style", value: "Tailwind CSS v4" },
  { label: "Déploiement", value: "Vercel" },
  { label: "Offline", value: "Hook useOfflineSync maison" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ backgroundColor: "var(--navy)" }}
        className="py-20 px-4 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <span
            style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
          >
            Notre Mission
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            À propos de{" "}
            <span style={{ color: "var(--gold)" }}>BurkinaCollect</span>
          </h1>
          <p
            style={{ color: "rgba(255,255,255,0.75)" }}
            className="text-lg max-w-2xl mx-auto"
          >
            Digitaliser la collecte de données terrain au Burkina Faso — pour
            que chaque agent sur le terrain puisse travailler avec précision,
            même sans connexion.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{ backgroundColor: "var(--navy-dark)" }}
        className="py-10 px-4"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p style={{ color: "var(--gold)" }} className="text-3xl font-extrabold">
                {value}
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }} className="text-sm mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Problème / Solution */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--gray-50)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Problème */}
          <div
            style={{ borderLeft: "4px solid var(--gold)" }}
            className="pl-6"
          >
            <h2 style={{ color: "var(--navy)" }} className="text-xl font-bold mb-4">
              Le problème
            </h2>
            <p style={{ color: "var(--gray-600)" }} className="text-sm leading-relaxed mb-4">
              Au Burkina Faso et dans une grande partie de l’Afrique de l’Ouest,
              les agents terrain — enquêteurs, agents de santé, superviseurs ONG —
              utilisent encore des <strong>fiches papier</strong> pour collecter
              leurs données.
            </p>
            <ul style={{ color: "var(--gray-600)" }} className="text-sm space-y-2 list-none">
              {[
                "📄 Pertes de données lors des déplacements",
                "✏️ Erreurs de saisie et doubles emplois",
                "⏳ Délais de traitement de plusieurs semaines",
                "📡 Connectivité inexistante en zone rurale",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div
            style={{ borderLeft: "4px solid var(--cyan)" }}
            className="pl-6"
          >
            <h2 style={{ color: "var(--navy)" }} className="text-xl font-bold mb-4">
              La solution
            </h2>
            <p style={{ color: "var(--gray-600)" }} className="text-sm leading-relaxed mb-4">
              BurkinaCollect est une <strong>application mobile + tableau de bord web</strong>{" "}
              conçue pour fonctionner en mode <em>offline-first</em>. Les agents
              remplissent leurs formulaires sur le terrain, et les données se
              synchronisent automatiquement dès qu’une connexion est disponible.
            </p>
            <ul style={{ color: "var(--gray-600)" }} className="text-sm space-y-2 list-none">
              {[
                "📱 Application mobile légère, disponible hors ligne",
                "🔄 Sync automatique à la reconnexion",
                "🔧 Formulaires personnalisables sans code",
                "📊 Dashboard superviseur en temps réel",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            style={{ color: "var(--navy)" }}
            className="text-2xl font-bold text-center mb-3"
          >
            Cas d’usage
          </h2>
          <p
            style={{ color: "var(--gray-600)" }}
            className="text-center text-sm mb-12"
          >
            BurkinaCollect s’adapte à tous les contextes de collecte terrain.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{ borderTop: "3px solid var(--cyan)" }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <span className="text-3xl">{icon}</span>
                <h3
                  style={{ color: "var(--navy)" }}
                  className="font-bold mt-3 mb-2 text-sm"
                >
                  {title}
                </h3>
                <p style={{ color: "var(--gray-600)" }} className="text-sm">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack technique */}
      <section
        style={{ backgroundColor: "var(--gray-50)" }}
        className="py-16 px-4"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            style={{ color: "var(--navy)" }}
            className="text-2xl font-bold text-center mb-10"
          >
            Stack technique
          </h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {stack.map(({ label, value }, i) => (
              <div
                key={label}
                style={{
                  borderBottom:
                    i < stack.length - 1
                      ? "1px solid var(--gray-100)"
                      : "none",
                }}
                className="flex items-center justify-between px-6 py-4"
              >
                <span
                  style={{ color: "var(--gray-600)" }}
                  className="text-sm font-medium"
                >
                  {label}
                </span>
                <span
                  style={{ color: "var(--navy)", backgroundColor: "var(--gray-100)" }}
                  className="text-sm font-mono px-3 py-1 rounded"
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            style={{ color: "var(--navy)" }}
            className="text-2xl font-bold mb-12"
          >
            L’équipe
          </h2>
          <div
            style={{ border: "2px solid var(--gold)" }}
            className="inline-block rounded-2xl p-8 max-w-sm mx-auto"
          >
            <div
              style={{
                width: 72,
                height: 72,
                backgroundColor: "var(--navy)",
                color: "var(--gold)",
              }}
              className="rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-4"
            >
              SD
            </div>
            <h3
              style={{ color: "var(--navy)" }}
              className="text-lg font-bold mb-1"
            >
              Steeve Donald Compaoré
            </h3>
            <p
              style={{ color: "var(--gold)" }}
              className="text-sm font-semibold mb-3"
            >
              Fondateur &amp; Développeur
            </p>
            <p style={{ color: "var(--gray-600)" }} className="text-sm mb-4">
              Ouagadougou, Burkina Faso
            </p>
            <p style={{ color: "var(--gray-600)" }} className="text-sm leading-relaxed">
              Développeur full-stack passionné par les solutions technologiques
              adaptées au contexte africain. Construit la tech africaine de
              demain, aujourd’hui.
            </p>
            <div className="flex justify-center gap-4 mt-5">
              <a
                href="https://github.com/dosteeve2-hash"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--cyan)" }}
                className="text-sm hover:underline"
              >
                GitHub
              </a>
              <a
                href="mailto:docompaore2@gmail.com"
                style={{ color: "var(--cyan)" }}
                className="text-sm hover:underline"
              >
                Contact
              </a>
              <a
                href="https://steeve-portfolio-mocha.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--cyan)" }}
                className="text-sm hover:underline"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section
        style={{ backgroundColor: "var(--navy)" }}
        className="py-14 px-4 text-center"
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">
            Intéressé par BurkinaCollect ?
          </h2>
          <p
            style={{ color: "rgba(255,255,255,0.7)" }}
            className="text-sm mb-7"
          >
            Contribuez au projet ou contactez-nous pour une collaboration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/dosteeve2-hash/burkinacollect"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
              className="px-6 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Voir sur GitHub →
            </a>
            <Link
              href="/"
              style={{ border: "1px solid rgba(255,255,255,0.3)", color: "white" }}
              className="px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              ← Retour à l’accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
