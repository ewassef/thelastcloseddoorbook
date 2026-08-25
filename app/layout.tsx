import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import { SITE } from "./site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-karla",
  display: "swap",
});

const description =
  "A novel of systems, incentives, and change. An enterprise architect looks back on a career inside one of the last closed enterprises — and on what it costs to keep a door shut out of habit.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.title} — ${SITE.subtitle}`,
    template: `%s | ${SITE.title}`,
  },
  description,
  authors: [{ name: SITE.author, url: "https://archetypical.software" }],
  keywords: [
    "The Last Closed Door",
    "Eddie Wassef",
    "enterprise architecture novel",
    "platform engineering",
    "open source",
    "inner source",
    "digital transformation",
    "enterprise technology fiction",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "book",
    url: SITE.url,
    siteName: SITE.title,
    title: `${SITE.title} — ${SITE.subtitle}`,
    description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.title} by ${SITE.author}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ewassef",
    title: `${SITE.title} — ${SITE.subtitle}`,
    description,
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: SITE.title,
  author: { "@type": "Person", name: SITE.author, url: "https://archetypical.software" },
  isbn: SITE.isbn,
  bookFormat: "https://schema.org/Paperback",
  numberOfPages: 649,
  inLanguage: "en",
  datePublished: "2026",
  description,
  url: SITE.url,
  image: `${SITE.url}/images/og.jpg`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${karla.variable}`}>
      <head>
        <meta name="theme-color" content="#0b0a09" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
