import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skill Forge: Winter Code Camp | GDG Constantine",
  description:
    "Skill Forge Winter Code Camp - a two-week workshops series with hands-on sessions on SoCode and Google Meet organized by GDG Constantine.",
  keywords: [
    "Skill Forge",
    "Winter Code Camp",
    "GDG Constantine",
    "workshops",
    "SoCode",
    "Google Meet",
    "coding",
    "web development",
    "programming",
    "technology",
    "developer community",
    "learning",
    "software development",
    "tech events",
    "coding bootcamp",
    "online workshops",
    "developer workshops",
    "coding sessions",
    "tech education",
    "programming tutorials",
    "git",
    "GitHub",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "frontend development",
    "backend development",
    "full-stack development",
    "open source",
    "collaboration",
    "networking",
    "skill building",
    "career development",
    "tech skills",
    "software engineering",
    "app development",
    "web apps",
    "mobile development",
    "cloud computing",
    "APIs",
    "data structures",
    "algorithms",
    "debugging",
    "version control",
    "team projects",
    "coding challenges",
    "hackathons",
    "tech talks",
    "developer resources",
  ],
  authors: [{ name: "GDG Constantine", url: "https://gdg.community.dev/constantine" }],
  openGraph: {
    title: "Skill Forge: Winter Code Camp | GDG Constantine",
    description:
      "Two-week workshops series with sessions on SoCode and Google Meet by GDG Constantine.",
    url: "/",
    siteName: "Skill Forge: Winter Code Camp",
    images: [
      {
        url: "/og-image.png",
        alt: "Skill Forge Winter Code Camp, GDG Constantine",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skill Forge: Winter Code Camp",
    description:
      "Two-week workshops series with sessions on SoCode and Google Meet by GDG Constantine.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon-logo.svg",
    apple: "/icon-logo.svg",
    shortcut: "/icon-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
