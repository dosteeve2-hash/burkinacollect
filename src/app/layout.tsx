import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "BurkinaCollect — Collecte terrain offline-first",
  description:
    "Plateforme de collecte de données terrain au Burkina Faso. Dashboard offline-first pour ONG, gouvernement et enquêtes de terrain.",
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
