import Image from "next/image";

export function FieldSyncIllustration() {
  return (
    <figure
      className="story-figure"
      aria-label="Illustration du principe de synchronisation, pas une capture de l'application."
    >
      <span className="story-label">Aperçu illustratif</span>
      <div className="phone-shell" aria-hidden="true">
        <div className="phone-topline">
          <span>FICHE DE COLLECTE</span>
          <Image
            className="phone-topline-mark"
            src="/brand/mark.svg"
            alt=""
            width={64}
            height={64}
          />
        </div>
        <p className="form-title">Visite terrain</p>
        <p className="form-caption">Exemple de fiche, contenu illustratif</p>
        <div className="check-list">
          {["Lieu repéré", "Fiche complétée", "Réponses vérifiées", "Prête à envoyer"].map(
            (label) => (
              <div className="check-row" key={label}>
                <span className="check-box">✓</span>
                <span>{label}</span>
              </div>
            ),
          )}
        </div>
        <div className="offline-badge">
          <span className="offline-badge-mark">✓</span>
          Conservée hors ligne
        </div>
      </div>
      <div className="desk-panel" aria-hidden="true">
        <div className="desk-panel-heading">
          <span>Au bureau</span>
          <span>Aperçu</span>
        </div>
        <p className="desk-panel-subtitle">Réception à la reconnexion</p>
        <div className="desk-line">Fiche de terrain</div>
        <div className="desk-line">Données disponibles</div>
        <div className="desk-line">À vérifier par l’équipe</div>
        <span className="sync-confirmation">Fiche reçue</span>
      </div>
      <div className="sync-transfer" aria-hidden="true">
        Fiche synchronisée
        <span>La connexion est revenue</span>
      </div>
      <figcaption className="story-caption">
        Le produit est en développement. L’application de collecte complète n’est pas encore
        disponible.
      </figcaption>
    </figure>
  );
}

export function BurkinaMapIllustration() {
  return (
    <figure className="map-art">
      <svg
        viewBox="0 0 440 300"
        width={440}
        height={300}
        role="img"
        aria-labelledby="map-title map-description"
      >
        <title id="map-title">Illustration schématique du Burkina Faso</title>
        <desc id="map-description">
          Silhouette dessinée avec des points décoratifs qui évoquent des lieux de collecte.
          Aucune donnée géographique réelle n’est représentée.
        </desc>
        <path
          className="map-land"
          d="m88 88 24-31 34-7 32 6 28-23 36 7 28-12 30 18 32-7 23 24-11 24 24 23-19 20 17 20-30 20 1 24-29 12-17 29-34-10-19 25-32-14-23 21-23-23-29 3-18-28-29-7-8-27-25-15 10-24-16-19z"
        />
        <path
          className="map-road"
          d="m106 113 46 12 39-28 37 35 44-14 40 29M146 172l43-47 20 53 53 22M195 86l-6 39 61 47 26 27"
        />
        <circle className="map-point" cx="151" cy="124" r="5" />
        <circle className="map-point" cx="191" cy="96" r="5" />
        <circle className="map-point" cx="230" cy="132" r="5" />
        <circle className="map-point" cx="276" cy="118" r="5" />
        <circle className="map-point" cx="263" cy="199" r="5" />
      </svg>
      <figcaption className="map-caption">
        Schéma illustratif. Points sans localisation réelle.
      </figcaption>
    </figure>
  );
}
