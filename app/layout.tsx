import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Last Closed Door | A Novel of Enterprise Transformation, Open Source, and AI",
  description:
    "A narrative nonfiction-style fiction book about the shift from proprietary enterprise systems to open source and AI-driven ecosystems.",
  keywords: [
    "enterprise technology",
    "open source",
    "AI",
    "platform engineering",
    "digital transformation",
    "enterprise architecture",
    "inner source",
    "software leadership",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
