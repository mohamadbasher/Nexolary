const steps = [
  { n: "01", t: "שיחת היכרות", d: "מבינים את הצרכים, המטרות והקהל שלכם — ומגדירים יחד את היעדים." },
  { n: "02", t: "אפיון ועיצוב", d: "בונים אפיון מסודר ומציגים עיצוב ואב-טיפוס לאישור לפני שורת קוד." },
  { n: "03", t: "פיתוח ואבטחה", d: "כותבים קוד נקי ומאובטח, עם עדכונים שוטפים לאורך כל הדרך." },
  { n: "04", t: "בדיקות QA", d: "בודקים כל תרחיש, דפדפן ומכשיר — כדי שהכול יעבוד בלי תקלות." },
  { n: "05", t: "השקה וליווי", d: "מעלים לאוויר, ומלווים אתכם עם תמיכה, ניטור ושדרוגים שוטפים." },
];

export default function Process() {
  return (
    <section id="process" className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <span className="eyebrow">איך עובדים איתנו</span>
          <h2 style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 900, margin: 0 }}>
            תהליך העבודה <span className="gradient-text">שלנו</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: 18,
          }}
        >
          {steps.map((s) => (
            <div key={s.n} className="card" style={{ padding: 24 }}>
              <div
                className="gradient-text"
                style={{ fontSize: "2.2rem", fontWeight: 900, marginBottom: 6 }}
              >
                {s.n}
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 800, margin: "0 0 8px" }}>{s.t}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
