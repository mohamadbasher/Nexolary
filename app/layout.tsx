import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexolary | בונים את העתיד הדיגיטלי שלכם",
  description:
    "Nexolary — חברת פיתוח ותוכנה: בניית אתרים, אפליקציות אנדרואיד ו-iOS, אבטחת סייבר, בדיקות QA, תיקון באגים ועיצוב חוויית משתמש. פתרונות מקצה לקצה לעסקים ולפרטיים.",
  keywords: [
    "בניית אתרים",
    "פיתוח אפליקציות",
    "אבטחת סייבר",
    "בדיקות תוכנה",
    "QA",
    "עיצוב אתרים",
    "Nexolary",
  ],
  openGraph: {
    title: "Nexolary | בונים את העתיד הדיגיטלי שלכם",
    description:
      "פיתוח אתרים ואפליקציות, אבטחת סייבר, QA ועיצוב — הכול תחת קורת גג אחת.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
