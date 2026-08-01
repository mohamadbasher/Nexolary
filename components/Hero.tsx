export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", paddingBlock: "92px 70px" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 880 }}>
        <span className="eyebrow reveal">חברת פיתוח, עיצוב ואבטחת מידע</span>

        <h1
          className="reveal"
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
            lineHeight: 1.15,
            fontWeight: 900,
            margin: "8px 0 18px",
            animationDelay: "0.05s",
          }}
        >
          בונים את הנוכחות הדיגיטלית <br />
          <span className="gradient-text">של העסק שלכם</span>
        </h1>

        <p
          className="reveal"
          style={{
            fontSize: "clamp(1.05rem, 2.4vw, 1.3rem)",
            color: "var(--muted)",
            maxWidth: 640,
            margin: "0 auto 32px",
            animationDelay: "0.12s",
          }}
        >
          אתרים, אפליקציות, אבטחת סייבר, בדיקות איכות ועיצוב — צוות אחד שמלווה אתכם
          מהרעיון הראשוני ועד למוצר חי, מאובטח ומהיר.
        </p>

        <div
          className="reveal"
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            animationDelay: "0.2s",
          }}
        >
          <a href="#contact" className="btn btn-primary">
            בואו נתחיל פרויקט ←
          </a>
          <a href="#services" className="btn btn-ghost">
            לכל השירותים
          </a>
        </div>

        <div
          className="reveal"
          style={{
            display: "flex",
            gap: 40,
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 56,
            animationDelay: "0.28s",
          }}
        >
          {[
            { n: "100%", t: "קוד נקי ומתועד" },
            { n: "24/7", t: "תמיכה וזמינות" },
            { n: "6", t: "תחומי התמחות" },
            { n: "∞", t: "שדרוגים עתידיים" },
          ].map((s) => (
            <div key={s.t} style={{ textAlign: "center" }}>
              <div className="gradient-text" style={{ fontSize: "2rem", fontWeight: 900 }}>
                {s.n}
              </div>
              <div style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{s.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
