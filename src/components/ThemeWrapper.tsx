"use client";

import { ThemeProvider } from "next-themes";
import Navbar from "./Navbar";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative min-h-screen max-w-4xl mx-auto px-4 py-6">
        <Navbar />
        {children}
        <footer className="mt-20 text-xs text-center text-gray-400 dark:text-gray-500">
          <p>Currently in Toronto, Canada</p>
          <p className="mt-1">© 2026 Jaydee Tarpeh. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
