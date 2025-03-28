"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="flex justify-between items-center py-4">
      <nav className="flex gap-4 text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="/works">Works</Link>
        <Link href="/writings">Writings</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact Me</Link>
      </nav>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </header>
  );
}
