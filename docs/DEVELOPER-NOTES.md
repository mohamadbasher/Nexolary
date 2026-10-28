# Nexolary — הערות פיתוח

> הערות פנימיות להרצה ולחיבור הטופס. לסקירת הפרויקט באנגלית ראו את [README](../README.md).

אתר תדמית (Landing) בעברית RTL לחברת Nexolary — פיתוח אתרים, אפליקציות Android/iOS,
אבטחת סייבר, בדיקות QA, תיקון באגים ועיצוב UI/UX.

נבנה עם **Next.js 16 · React 19 · TypeScript · Tailwind v4**.

## הרצה מקומית

```bash
npm install
npm run dev
```

האתר יעלה בכתובת http://localhost:3000

## בנייה לפרודקשן

```bash
npm run build
npm start
```

## מבנה הפרויקט

```
app/
  layout.tsx      תבנית בסיס (RTL, פונט Heebo, מטא-דאטה)
  page.tsx        הרכבת כל הסקשנים
  globals.css     עיצוב גלובלי, צבעים, אנימציות
components/
  Navbar.tsx      ניווט עליון + תפריט מובייל
  Hero.tsx        כותרת ראשית
  Services.tsx    ששת השירותים
  About.tsx       אודות + ערכים
  TechStack.tsx   שפות וטכנולוגיות
  Process.tsx     תהליך העבודה (5 שלבים)
  Contact.tsx     פרטי קשר + טופס פנייה ללקוחות
  Footer.tsx      פוטר
```

## חיבור טופס הפנייה (כרגע עיצוב בלבד)

טופס יצירת הקשר ב-`components/Contact.tsx` מעוצב ופועל בצד הלקוח, אך **עדיין אינו שולח
נתונים**. שלוש דרכים נפוצות לחבר אותו:

### 1. שירות חיצוני (הכי מהיר) — Formspree
1. פתחו חשבון ב-https://formspree.io וקבלו מזהה טופס.
2. הפכו את ה-`<form>` ל:
   ```tsx
   <form action="https://formspree.io/f/XXXXXXX" method="POST">
   ```
   (והסירו את `onSubmit` / `e.preventDefault`).

### 2. API Route של Next.js + אימייל
1. צרו `app/api/lead/route.ts` שמקבל POST ושולח אימייל (למשל עם Resend / Nodemailer).
2. ב-`handleSubmit` שלחו:
   ```ts
   const data = Object.fromEntries(new FormData(e.currentTarget));
   await fetch("/api/lead", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(data),
   });
   ```

### 3. וואטסאפ / mailto
לפתיחת הודעת וואטסאפ או טיוטת אימייל עם הפרטים — אפשר לבנות קישור מתוך ערכי השדות.

## עדכון פרטי קשר

החליפו את הפרטים לדמה ב-`components/Contact.tsx`:
- אימייל: `hello@nexolary.com`
- טלפון: `050-000-0000`

## דומיין

הדומיין `nexolary.com` נבדק כפנוי (ללא רשומות DNS) — מומלץ לאמת ולרכוש אצל ספק
(Namecheap / GoDaddy / Google Domains) לפני השקה.
