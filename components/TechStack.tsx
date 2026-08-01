const groups = [
  {
    title: "צד לקוח (Frontend)",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "צד שרת (Backend)",
    items: ["Node.js", "Python", "PHP", "Java", "C# / .NET", "Go"],
  },
  {
    title: "מובייל (Mobile)",
    items: ["Swift (iOS)", "Kotlin (Android)", "React Native", "Flutter / Dart"],
  },
  {
    title: "בסיסי נתונים (Databases)",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
  },
  {
    title: "אבטחת סייבר (Security)",
    items: ["OWASP", "Burp Suite", "Nmap", "Metasploit", "Wireshark", "Pen-Testing"],
  },
  {
    title: "בדיקות איכות (QA)",
    items: ["Selenium", "Cypress", "Playwright", "Jest", "Appium"],
  },
  {
    title: "תשתיות וענן (DevOps & Cloud)",
    items: ["Docker", "Kubernetes", "AWS", "Vercel", "CI/CD", "Git"],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <span className="eyebrow">הארגז כלים שלנו</span>
          <h2 style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 900, margin: 0 }}>
            שפות וטכנולוגיות <span className="gradient-text">שאנחנו עובדים איתן</span>
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 600, margin: "12px auto 0" }}>
            אנחנו בוחרים את הכלי הנכון לכל משימה — ומשתמשים בטכנולוגיות מודרניות, מוכחות
            ובטוחות בכל שכבות המוצר.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
          }}
        >
          {groups.map((g) => (
            <div key={g.title} className="card" style={{ padding: 24 }}>
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  margin: "0 0 14px",
                  color: "var(--brand-2)",
                }}
              >
                {g.title}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {g.items.map((it) => (
                  <span
                    key={it}
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      padding: "6px 12px",
                      borderRadius: 999,
                      background: "#ffffff0a",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
