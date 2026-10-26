import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs | BurkinaCollect",
  description:
    "BurkinaCollect est en développement. Aucun tarif ni forfait n’est publié à ce stade.",
};

export default function PricingPage() {
  return (
    <>
      <section className="subpage-hero pricing-hero">
        <div className="subpage-hero-inner">
          <p className="eyebrow">Tarifs</p>
          <h1 className="page-heading">Aucun tarif annoncé à ce stade.</h1>
          <p className="subpage-lead">
            BurkinaCollect est encore en développement. Il n’existe pas de forfait ni
            d’application complète à acheter aujourd’hui.
          </p>
          <a
            className="primary-action"
            href="mailto:docompaore2@gmail.com?subject=Demande%20de%20pilote%20BurkinaCollect"
          >
            Demander un pilote <span className="action-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="section tech-section">
        <div className="section-inner pricing-note">
          <div>
            <h2 className="section-heading">Le périmètre vient avant le prix.</h2>
            <p className="section-lead">
              Les usages, le fonctionnement hors ligne et les besoins de suivi doivent être
              précisés avec les équipes avant de définir une offre.
            </p>
          </div>
          <aside className="pricing-state">
            <strong>Projet en développement</strong>
            <p>
              Une demande de pilote sert à échanger sur le besoin. Elle ne confirme ni la
              disponibilité d’une application, ni un tarif, ni une date de lancement.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
