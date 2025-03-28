import "./globals.css";
import { Inter } from "next/font/google";
import ThemeWrapper from "@/components/ThemeWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jaydee Tarpeh – Product Builder, Founder, Explorer",
  description:
    "Jaydee Tarpeh is a Liberian-born Canadian product leader building across Africa and beyond. Portfolio of products, writings, and ideas.",
  metadataBase: new URL("https://jayd.ee"),
  openGraph: {
    title: "Jaydee Tarpeh",
    description:
      "Founder, product leader, and explorer. Building ambitious projects across North America, Africa and the globe.",
    url: "https://jayd.ee",
    siteName: "Jaydee Tarpeh",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jaydee Tarpeh",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaydee Tarpeh",
    description:
      "Founder, product leader, and explorer. Building ambitious projects across Africa and the globe.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} transition-colors bg-white text-black dark:bg-black dark:text-white`}
      >
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
