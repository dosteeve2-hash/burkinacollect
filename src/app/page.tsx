import Link from "next/link";

const features = [
  {
    icon: "📋",
    title: "Dashboard opérationnel",
    desc: "Vue multi-pages des indicateurs terrain en temps réel.",
  },
  {
    icon: "🔄",
    title: "Sync offline-first",
    desc: "File de synchronisation automatique au retour de connexion.",
  },
  {
    icon: "🔧",
    title: "Form builder",
    desc: "Construction de formulaires terrain avec champs persistants.",
  },
  {
    icon: "👥",
    title: "Gestion des agents",
    desc: "Statuts opérationnels des agents terrain en temps réel.",
  },
  {
    icon: "🗺️",
    title: "Carte des zones",
    desc: "Alertes géographiques et soumissions en attente par région.",
  },
  {
    icon: "📤",
    title: "Export CSV",
    desc: "Export immédiat des données collectées pour analyse.",
  },
];

const useCases = [
  { icon: "🌾", label: "Enquêtes agricoles" },
  { icon: "🏥", label: "Suivi santé" },
  { icon: "🏛️", label: "Services gouvernementaux" },
  { icon: "🤝", label: "Opérations ONG" },
  { icon: "📊", label: "Études de marché" },
  { icon: "📍", label: "Recensement terrain" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ backgroundColor: "var(--navy)" }}
        className="py-24 px-4 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <span
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--navy)",
            }}
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
          >
            Burkina Faso · Afrique de l’Ouest
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            La collecte terrain,{" "}
            <span style={{ color: "var(--gold)" }}>digitalisée</span>
          </h1>
          <p
            style={{ color: "rgba(255,255,255,0.75)" }}
            className="text-lg mb-10 max-w-xl mx-auto"
          >
            BurkinaCollect remplace les fiches papier par une solution mobile et
            web — qui fonctionne même sans connexion internet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://burkinacollect.vercel.app"
              style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
              className="px-6 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Voir la démo →
            </a>
            <Link
              href="/about"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
              }}
              className="px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{ backgroundColor: "var(--navy-dark)" }}
        className="py-10 px-4"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { value: "500+", label: "Collecteurs formés" },
            { value: "1 200+", label: "Formulaires créés" },
            { value: "35", label: "Régions couvertes" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p
                style={{ color: "var(--gold)" }}
                className="text-3xl font-extrabold"
              >
                {value}
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }} className="text-sm mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--gray-50)" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            style={{ color: "var(--navy)" }}
            className="text-2xl font-bold text-center mb-12"
          >
            Fonctionnalités clés
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{ borderTop: "3px solid var(--cyan)" }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <span className="text-3xl">{icon}</span>
                <h3
                  style={{ color: "var(--navy)" }}
                  className="font-bold mt-3 mb-2"
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

      {/* Use cases */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            style={{ color: "var(--navy)" }}
            className="text-2xl font-bold mb-3"
          >
            Cas d’usage
          </h2>
          <p style={{ color: "var(--gray-600)" }} className="text-sm mb-10">
            Conçu pour les organisations qui travaillent sur le terrain au Burkina Faso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {useCases.map(({ icon, label }) => (
              <span
                key={label}
                style={{
                  backgroundColor: "var(--gray-100)",
                  color: "var(--navy)",
                  border: "1px solid rgba(30,58,95,0.15)",
                }}
                className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium"
              >
                {icon} {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: "var(--navy)" }}
        className="py-16 px-4 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
            Prêt à digitaliser votre collecte ?
          </h2>
          <p
            style={{ color: "rgba(255,255,255,0.7)" }}
            className="text-sm mb-8"
          >
            Découvrez comment BurkinaCollect peut transformer les opérations de
            votre organisation terrain.
          </p>
          <Link
            href="/about"
            style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
            className="inline-block px-8 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Découvrir le projet →
          </Link>
        </div>
      </section>
    </>
  );
}
