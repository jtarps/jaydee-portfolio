"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "me", href: "/" },
  { label: "working on", href: "/works" },
  { label: "talking about", href: "/writings" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  return (
    <header className="flex justify-between items-center py-4">
      <nav className="flex items-center border border-gray-200 dark:border-gray-700 rounded-full p-1 gap-0.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs sm:text-sm font-medium px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full transition-colors ${
                isActive
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {mounted ? (
          theme === "dark" ? <Sun size={18} /> : <Moon size={18} />
        ) : (
          <Moon size={18} />
        )}
      </button>
    </header>
  );
}
