import "./globals.css";
import { Inter } from "next/font/google";
import ThemeWrapper from "@/components/ThemeWrapper";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jaydee Tarpeh",
  description:
    "Born in Liberia. Building things with Claude Code. Toronto-based.",
  metadataBase: new URL("https://jayd.ee"),
  openGraph: {
    title: "Jaydee Tarpeh",
    description:
      "Born in Liberia. Building things with Claude Code. Toronto-based.",
    url: "https://jayd.ee",
    siteName: "Jaydee",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaydee Tarpeh",
    description:
      "Born in Liberia. Building things with Claude Code. Toronto-based.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="transition-colors" suppressHydrationWarning>
      <body className={`min-h-screen ${inter.className}`}>
        <ThemeWrapper>{children}</ThemeWrapper>
        <Analytics />
      </body>
    </html>
  );
}
