"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/about", label: "À propos" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navigation principale">
        <Link className="brand-link" href="/" aria-label="BurkinaCollect, accueil">
          <Image
            src="/logo.svg"
            alt="BurkinaCollect"
            width={289}
            height={64}
            priority
          />
        </Link>
        <ul className="nav-links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                className="nav-link"
                href={href}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
