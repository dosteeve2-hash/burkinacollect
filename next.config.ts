import type { NextConfig } from "next";

// `experimental.outputFileTracingRoot` a été promu hors de `experimental` en
// Next 15 : laissé là, il faisait échouer `next build` à la vérification de
// types. Il pointait par ailleurs deux niveaux au-dessus de la racine du dépôt
// — un reste de scaffold monorepo. L'application étant seule à la racine, la
// valeur par défaut est déjà la bonne : l'option n'a plus lieu d'être.
const nextConfig: NextConfig = {};

export default nextConfig;
