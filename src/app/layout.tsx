import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AWISE Network - Empowering African Women to Lead Social Change",
  description: "Join African women transforming ideas into impact ventures across Africa. Access curated opportunities, expert mentorship, and capacity building programs.",
  keywords: ["African women", "social entrepreneurship", "mentorship", "impact ventures", "AWISE"],
  openGraph: {
    title: "AWISE Network",
    description: "Empowering African Women to Lead Social Change",
    url: "https://awisenetwork.org",
    siteName: "AWISE Network",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
