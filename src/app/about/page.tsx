import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | BurkinaCollect",
  description:
    "BurkinaCollect est un projet en développement autour de la collecte de terrain et de la synchronisation hors ligne.",
};

export default function AboutPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <p className="eyebrow">À propos</p>
          <h1 className="page-heading">Le réseau ne devrait pas décider du rythme du terrain.</h1>
          <p className="subpage-lead">
            BurkinaCollect est un projet en développement pour mieux relier le travail de
            collecte sur place aux équipes qui le suivent au bureau.
          </p>
          <a
            className="primary-action"
            href="mailto:docompaore2@gmail.com?subject=Demande%20de%20pilote%20BurkinaCollect"
          >
            Demander un pilote <span className="action-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section-inner about-grid">
          <div className="about-copy">
            <h2>Pourquoi ce projet</h2>
            <p>
              Les équipes d’enquête ne travaillent pas toujours là où la connexion est
              disponible. Une collecte numérique utile doit donc tenir compte des interruptions
              de réseau, sans promettre une couverture qui n’existe pas.
            </p>
            <p>
              BurkinaCollect part de ce besoin et cherche des organisations prêtes à préciser
              les usages d’un premier pilote.
            </p>
          </div>
          <aside className="about-status" aria-labelledby="status-title">
            <span className="status-label">État actuel</span>
            <h2 id="status-title">Un projet, pas encore une application complète.</h2>
            <p>
              Le site public présente l’idée. Le dépôt contient un prototype de file locale de
              synchronisation, mais pas de parcours complet pour créer et envoyer des fiches de
              collecte.
            </p>
            <p>
              Les comptes, formulaires terrain et service de synchronisation connecté restent à
              développer.
            </p>
          </aside>
        </div>
      </section>

      <section className="section tech-section">
        <div className="section-inner">
          <h2 className="section-heading">Une base technique encore en construction.</h2>
          <p className="section-lead">
            Le prototype de synchronisation conserve une file dans le navigateur, suit l’état
            de connexion et traite les éléments en attente lorsqu’un mécanisme d’envoi lui est
            fourni.
          </p>
          <div className="tech-strip">
            <div className="tech-item">
              <strong>File locale</strong>
              <span>Éléments en attente enregistrés dans le navigateur.</span>
            </div>
            <div className="tech-item">
              <strong>États réseau</strong>
              <span>Le prototype détecte le retour ou la perte de connexion.</span>
            </div>
            <div className="tech-item">
              <strong>Tentatives</strong>
              <span>Les échecs sont conservés au lieu d’être présentés comme des succès.</span>
            </div>
            <div className="tech-item">
              <strong>À construire</strong>
              <span>Application de collecte et service distant de synchronisation.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
