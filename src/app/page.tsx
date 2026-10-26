import Image from "next/image";
import { BurkinaMapIllustration, FieldSyncIllustration } from "@/components/PublicVisuals";

const flow = [
  {
    title: "La fiche se remplit sur place",
    description:
      "Le geste visé est simple : compléter une fiche sur un téléphone, même quand le réseau manque.",
  },
  {
    title: "Le travail reste sur l’appareil",
    description:
      "Un prototype de file locale de synchronisation existe dans le code. L’interface de collecte complète reste à construire.",
  },
  {
    title: "La synchronisation attend le réseau",
    description:
      "Quand une connexion revient, le principe prévu est de transmettre les éléments en attente. Aucun service de collecte complet n’est encore ouvert.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              <Image
                src="/mark.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />{" "}
              Collecte de terrain
            </p>
            <h1>
              <span>Collectez sans réseau,</span>
              <span>retrouvez tout au bureau.</span>
            </h1>
            <p className="hero-description">
              BurkinaCollect prépare un outil de collecte pensé pour les équipes de terrain
              qui travaillent sans connexion fiable.
            </p>
            <a
              className="primary-action"
              href="mailto:docompaore2@gmail.com?subject=Demande%20de%20pilote%20BurkinaCollect"
            >
              Demander un pilote <span className="action-arrow" aria-hidden="true">→</span>
            </a>
            <p className="hero-footnote">
              Projet en développement. L’application complète de collecte n’est pas encore
              disponible.
            </p>
          </div>
          <FieldSyncIllustration />
        </div>
      </section>

      <section className="section flow-section">
        <div className="section-inner flow-grid">
          <div>
            <h2 className="section-heading">Le terrain continue, même sans signal.</h2>
            <p className="section-lead">
              BurkinaCollect explore une synchronisation qui attend le retour du réseau au lieu
              d’interrompre le travail.
            </p>
          </div>
          <ol className="flow-list">
            {flow.map(({ title, description }) => (
              <li className="flow-item" key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section map-section">
        <div className="section-inner map-layout">
          <div>
            <h2 className="section-heading">Pensé pour les réalités du Burkina Faso.</h2>
            <p className="section-lead">
              Une illustration du contexte visé, pas une carte de couverture ni des données
              issues de collectes réelles.
            </p>
            <p className="map-note">
              Le projet s’adresse aux équipes qui recueillent des informations sur le terrain,
              notamment les enquêteurs et les organisations.
            </p>
          </div>
          <BurkinaMapIllustration />
        </div>
      </section>

      <section className="section truth-section">
        <div className="section-inner truth-layout">
          <div className="truth-block">
            <h2>Déjà présent dans le projet</h2>
            <p>
              Une page publique de présentation et un prototype de file locale qui gère les
              états hors ligne et les tentatives de synchronisation.
            </p>
          </div>
          <div className="truth-block in-progress">
            <h2>Encore en développement</h2>
            <p>
              L’application de collecte complète, ses formulaires utilisables sur le terrain,
              les comptes d’équipe et le service connecté de synchronisation ne sont pas
              disponibles aujourd’hui.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
