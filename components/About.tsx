const values = [
  { t: "מקצועיות", d: "קוד נקי, מתועד ועומד בסטנדרטים הגבוהים ביותר בתעשייה." },
  { t: "שקיפות", d: "אתם מעודכנים בכל שלב — ללא הפתעות בלוחות זמנים או בתקציב." },
  { t: "אבטחה תחילה", d: "כל מוצר נבנה עם חשיבה אבטחתית מהשורה הראשונה של הקוד." },
  { t: "ליווי לאורך זמן", d: "אנחנו לא נעלמים אחרי ההשקה — תמיכה ושדרוגים לאורך כל הדרך." },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--bg-soft)" }}>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}
      >
        <div className="about-text">
          <span className="eyebrow">קצת עלינו</span>
          <h2 style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 900, margin: "0 0 18px" }}>
            מי אנחנו <span className="gradient-text">ב-Nexolary</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem" }}>
            Nexolary היא חברת פיתוח ותוכנה צעירה ורעבה, שהוקמה מתוך אמונה שכל עסק — קטן כגדול —
            ראוי לנוכחות דיגיטלית מקצועית, מהירה ומאובטחת. אנחנו משלבים פיתוח, עיצוב ואבטחת מידע
            לכדי שירות אחד שלם, כך שלא תצטרכו לתאם בין כמה ספקים.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem" }}>
            בין אם אתם צריכים אתר תדמית, אפליקציה לחנות, מערכת ניהול מורכבת, מבדק אבטחה או פשוט
            לתקן באג עקשן — אנחנו כאן כדי לתרגם את הרעיון שלכם למוצר שעובד, מהיר ובטוח.
            המטרה שלנו פשוטה: שהטכנולוגיה תעבוד בשבילכם, לא נגדכם.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
            <a href="#contact" className="btn btn-primary">דברו איתנו</a>
            <a href="#tech" className="btn btn-ghost">הטכנולוגיות שלנו</a>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {values.map((v) => (
            <div key={v.t} className="card" style={{ padding: 22 }}>
              <h3 style={{ margin: "0 0 8px", fontSize: "1.1rem", fontWeight: 800 }}>
                <span className="gradient-text">{v.t}</span>
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.92rem", margin: 0 }}>{v.d}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #about .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
