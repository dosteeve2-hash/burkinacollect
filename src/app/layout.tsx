import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "BurkinaCollect — Collecte terrain offline-first",
  description:
    "Collecte de données terrain offline-first pour le Burkina Faso, en développement. Projet à l’état de MVP, pilotes recherchés (ONG, enquêtes de terrain).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer
          style={{ backgroundColor: "var(--navy-dark)", color: "var(--gray-100)" }}
          className="py-8 text-center text-sm"
        >
          <p>
            © {new Date().getFullYear()} BurkinaCollect ·{" "}
            <span style={{ color: "var(--gold)" }}>Steeve Donald Compaoré</span>
            {" · "}Ouagadougou, Burkina Faso
          </p>
        </footer>
      </body>
    </html>
  );
}
