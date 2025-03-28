// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';

type NavbarProps = {
    toggleTheme: () => void;
    darkMode: boolean;
};

export default function Navbar({ toggleTheme, darkMode }: NavbarProps) {
    return (
        <header className="flex justify-between items-center py-4">
            <nav className="flex gap-4 text-sm font-medium">
                <Link href="/">Home</Link>
                <Link href="/works">Works</Link>
                <Link href="/writings">Writings</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact Me</Link>
            </nav>
            <button onClick={() => {
                toggleTheme();
                document.documentElement.classList.toggle('dark');
            }}>
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
        </header>
    );
}