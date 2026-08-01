const services = [
  {
    icon: "🌐",
    title: "בניית אתרים",
    desc: "אתרי תדמית, חנויות מסחר אלקטרוני ומערכות ווב מתקדמות לעסקים ולשימוש אישי — מהירים, רספונסיביים ומותאמים למובייל.",
    points: ["אתרי תדמית ונחיתה", "חנויות אונליין", "מערכות ניהול ודשבורדים"],
  },
  {
    icon: "📱",
    title: "אפליקציות Android ו-iOS",
    desc: "פיתוח אפליקציות מובייל נייטיב ו-Cross-Platform חוויית משתמש חלקה בשתי הפלטפורמות והעלאה לחנויות.",
    points: ["נייטיב (Swift / Kotlin)", "Cross-Platform", "פרסום ב-App Store ו-Google Play"],
  },
  {
    icon: "🛡️",
    title: "אבטחת סייבר",
    desc: "מבדקי חדירה, סקירת קוד מאובטח, הגנה על נתונים והקשחת מערכות לפי תקני OWASP — כדי שתהיו צעד אחד לפני התוקפים.",
    points: ["מבדקי חדירה (Pen-Test)", "סקירת קוד מאובטח", "הקשחה והגנת מידע"],
  },
  {
    icon: "✅",
    title: "בדיקות תוכנה (QA)",
    desc: "בדיקות ידניות ואוטומטיות שמבטיחות שהמוצר עובד בדיוק כמו שצריך — בכל דפדפן, מכשיר ותרחיש שימוש.",
    points: ["בדיקות ידניות ואוטומציה", "בדיקות ביצועים ועומסים", "בדיקות תאימות ונגישות"],
  },
  {
    icon: "🐞",
    title: "תיקון באגים",
    desc: "מאתרים, מאבחנים ומתקנים תקלות בקוד קיים — גם אם לא אנחנו כתבנו אותו. שיפור יציבות וביצועים במהירות.",
    points: ["איתור ואבחון תקלות", "שיפור ביצועים", "ליווי קוד קיים (Legacy)"],
  },
  {
    icon: "🎨",
    title: "עיצוב אתרים וחוויית משתמש",
    desc: "עיצוב UI/UX מודרני שמתרגם את המותג שלכם לממשק יפה, ברור וקל לשימוש שגורם למבקרים להישאר ולהמיר.",
    points: ["עיצוב UI/UX", "מיתוג ושפה ויזואלית", "אבות-טיפוס (Prototypes)"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <span className="eyebrow">מה אנחנו עושים</span>
          <h2 style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 900, margin: 0 }}>
            שירות מלא <span className="gradient-text">מקצה לקצה</span>
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 560, margin: "12px auto 0" }}>
            כל מה שהמוצר הדיגיטלי שלכם צריך — תכנון, פיתוח, אבטחה ובדיקות — תחת קורת גג אחת.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: 22,
          }}
        >
          {services.map((s) => (
            <article key={s.title} className="card" style={{ padding: 28 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "#7c5cff1f",
                  border: "1px solid #7c5cff44",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "1.7rem",
                  marginBottom: 16,
                }}
              >
                {s.icon}
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, margin: "0 0 10px" }}>
                {s.title}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.96rem", margin: "0 0 16px" }}>
                {s.desc}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
                {s.points.map((p) => (
                  <li
                    key={p}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 9,
                      fontSize: "0.9rem",
                      color: "var(--text)",
                    }}
                  >
                    <span style={{ color: "var(--brand-2)" }}>◆</span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
