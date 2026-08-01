"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "#services", label: "שירותים" },
  { href: "#about", label: "אודות" },
  { href: "#tech", label: "טכנולוגיות" },
  { href: "#process", label: "תהליך העבודה" },
  { href: "#contact", label: "צור קשר" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        background: "#07070fcc",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <nav
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        <a href="#top" style={{ display: "flex", alignItems: "center" }} aria-label="Nexolary">
          <Image
            src="/nexolary-logo-v2.png"
            alt="Nexolary"
            width={162}
            height={44}
            priority
            style={{ height: 44, width: "auto" }}
          />
        </a>

        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ color: "var(--muted)", fontWeight: 600, fontSize: "0.95rem" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="btn btn-primary nav-cta" style={{ padding: "10px 20px" }}>
          קבלו הצעת מחיר
        </a>

        <button
          aria-label="תפריט"
          className="nav-burger"
          onClick={() => setOpen((v) => !v)}
          style={{
            display: "none",
            background: "transparent",
            border: "1px solid var(--border)",
            borderRadius: 10,
            color: "var(--text)",
            width: 42,
            height: 42,
            cursor: "pointer",
            fontSize: "1.3rem",
          }}
        >
          ☰
        </button>
      </nav>

      {open && (
        <div
          className="container"
          style={{ paddingBottom: 18, display: "flex", flexDirection: "column", gap: 12 }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ color: "var(--muted)", fontWeight: 600, padding: "6px 0" }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary">
            קבלו הצעת מחיר
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-links, .nav-cta { display: none !important; }
          .nav-burger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
