import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", paddingBlock: 40 }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <Image
          src="/nexolary-logo-v2.png"
          alt="Nexolary"
          width={132}
          height={36}
          style={{ height: 36, width: "auto" }}
        />

        <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
          <a href="#services" style={{ color: "var(--muted)", fontSize: "0.9rem" }}>שירותים</a>
          <a href="#about" style={{ color: "var(--muted)", fontSize: "0.9rem" }}>אודות</a>
          <a href="#tech" style={{ color: "var(--muted)", fontSize: "0.9rem" }}>טכנולוגיות</a>
          <a href="#contact" style={{ color: "var(--muted)", fontSize: "0.9rem" }}>צור קשר</a>
        </div>

        <div style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
          © {new Date().getFullYear()} Nexolary · כל הזכויות שמורות
        </div>
      </div>
    </footer>
  );
}
