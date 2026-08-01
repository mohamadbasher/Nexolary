"use client";

import { useState } from "react";

const serviceOptions = [
  "בניית אתר",
  "אפליקציית Android / iOS",
  "אבטחת סייבר",
  "בדיקות תוכנה (QA)",
  "תיקון באגים",
  "עיצוב אתר / UX",
  "אחר",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // ── שליחת הטופס (לחיבור עתידי) ───────────────────────────────
    // כרגע הטופס מעוצב בלבד ואינו שולח נתונים לשרת.
    // כדי לחבר שליחה אמיתית, אספו את הנתונים כך:
    //   const data = Object.fromEntries(new FormData(e.currentTarget));
    // ושלחו אותם ל-API route (למשל /app/api/lead/route.ts),
    // לשירות כמו Formspree, או לאימייל. ראו את ה-README לפרטים.
    // ─────────────────────────────────────────────────────────────

    setSent(true);
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: 40,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — details */}
          <div>
            <span className="eyebrow">בואו נדבר</span>
            <h2
              style={{
                fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
                fontWeight: 900,
                margin: "0 0 16px",
              }}
            >
              יש לכם רעיון? <span className="gradient-text">בואו נהפוך אותו למציאות</span>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", marginBottom: 28 }}>
              השאירו פרטים ונחזור אליכם תוך יום עסקים אחד עם הצעת מחיר ראשונית, ללא עלות וללא
              התחייבות. אפשר גם ליצור קשר ישירות:
            </p>

            <div style={{ display: "grid", gap: 16 }}>
              {[
                { icon: "📧", label: "אימייל", value: "info@nexolary.com", href: "mailto:info@nexolary.com" },
                { icon: "📞", label: "טלפון", value: "052-995-0500", href: "tel:+972529950500" },
                { icon: "💬", label: "וואטסאפ", value: "שלחו לנו הודעה", href: "https://wa.me/972529950500" },
                { icon: "📍", label: "מיקום", value: "ישראל · עבודה מרחוק בכל הארץ", href: undefined },
              ].map((c) => {
                const Inner = (
                  <>
                    <span
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 12,
                        background: "#7c5cff1f",
                        border: "1px solid #7c5cff44",
                        display: "grid",
                        placeItems: "center",
                        fontSize: "1.3rem",
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </span>
                    <div>
                      <div style={{ fontSize: "0.82rem", color: "var(--muted)" }}>{c.label}</div>
                      <div style={{ fontWeight: 700 }}>{c.value}</div>
                    </div>
                  </>
                );
                const style = { display: "flex", alignItems: "center", gap: 14 } as const;
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={style}
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label} style={style}>
                    {Inner}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — apply form */}
          <div className="card" style={{ padding: 30 }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 10px" }}>
                <div style={{ fontSize: "3rem", marginBottom: 12 }}>🎉</div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 900, margin: "0 0 10px" }}>
                  הפנייה התקבלה!
                </h3>
                <p style={{ color: "var(--muted)", margin: "0 0 22px" }}>
                  תודה שפניתם ל-Nexolary. נחזור אליכם בהקדם בטלפון או באימייל.
                </p>
                <button className="btn btn-ghost" onClick={() => setSent(false)}>
                  שליחת פנייה נוספת
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 900, margin: "0 0 6px" }}>
                  טופס פנייה מהירה
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "0.92rem", margin: "0 0 22px" }}>
                  מלאו את הפרטים ונחזור אליכם — הכי מהר שאפשר.
                </p>

                <div style={{ display: "grid", gap: 16 }}>
                  <div>
                    <label htmlFor="name">שם מלא *</label>
                    <input id="name" name="name" required placeholder="ישראל ישראלי" />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div>
                      <label htmlFor="email">אימייל *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone">טלפון *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="050-0000000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service">סוג השירות</label>
                    <select id="service" name="service" defaultValue="">
                      <option value="" disabled>
                        בחרו שירות...
                      </option>
                      {serviceOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message">פרטי הפרויקט (לא חובה)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="ספרו לנו בקצרה מה אתם צריכים..."
                    />
                  </div>

                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontWeight: 500,
                      color: "var(--muted)",
                    }}
                  >
                    <input
                      type="checkbox"
                      name="callme"
                      style={{ width: 18, height: 18, flexShrink: 0 }}
                    />
                    אשמח שתתקשרו אליי לתיאום שיחה
                  </label>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                    שליחת פנייה ←
                  </button>

                  <p style={{ fontSize: "0.78rem", color: "var(--muted)", textAlign: "center", margin: 0 }}>
                    בלחיצה על שליחה אתם מאשרים שניצור עמכם קשר בנוגע לפנייתכם.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
