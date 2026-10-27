import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BurkinaCollect | Collecter sans réseau",
  description:
    "BurkinaCollect prépare la collecte terrain hors ligne. Le projet est en développement et recherche des organisations pour un pilote.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={albertSans.variable}>
        <Navbar />
        <main>{children}</main>
        <footer className="site-footer">
          <div className="footer-inner">
            <Link href="/" aria-label="BurkinaCollect, accueil">
              <Image
                className="footer-logo"
                src="/logo-sombre.svg"
                alt="BurkinaCollect"
                width={337}
                height={88}
              />
            </Link>
            <nav className="footer-links" aria-label="Navigation de pied de page">
              <Link href="/about">À propos</Link>
              <Link href="/tarifs">Tarifs</Link>
              <a className="footer-contact" href="mailto:docompaore2@gmail.com">
                docompaore2@gmail.com
              </a>
            </nav>
          </div>
          <p className="footer-bottom">
            © {new Date().getFullYear()} BurkinaCollect. Projet en développement au Burkina Faso.
          </p>
        </footer>
      </body>
    </html>
  );
}
