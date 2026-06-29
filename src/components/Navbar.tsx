"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{ backgroundColor: "var(--navy)" }}
      className="sticky top-0 z-50 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--navy)",
            }}
            className="font-bold text-sm px-2 py-1 rounded"
          >
            BC
          </span>
          <span className="font-semibold text-white text-lg tracking-tight">
            BurkinaCollect
          </span>
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-6">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    color: active ? "var(--gold)" : "rgba(255,255,255,0.85)",
                    borderBottom: active ? "2px solid var(--gold)" : "2px solid transparent",
                  }}
                  className="text-sm font-medium pb-1 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href="https://github.com/dosteeve2-hash/burkinacollect"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--cyan)" }}
              className="text-sm font-medium hover:underline"
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
