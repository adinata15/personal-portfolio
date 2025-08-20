'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';
import Link from 'next/link';

export function NavBar() {
    return (
        <nav className="py-6 px-8 flex justify-between items-center backdrop-blur-sm bg-white/70 dark:bg-gray-900/70">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-300 rounded-full flex items-center justify-center border-2 border-orange-400 overflow-hidden">
                    <Image
                        src="/images/personal.jpeg"
                        alt="Personal Portrait"
                        width={185}
                        height={185}
                    />
                </div>
                <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Adi Nata
                </span>
            </div>
            <div className="flex items-center space-x-8">
                <div className="hidden md:flex space-x-8">
                    <Link
                        href="/"
                        className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/experience"
                        className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                        Experience
                    </Link>
                    <Link
                        href="#domains"
                        className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                        Project
                    </Link>
                    <Link
                        href="/resume"
                        className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                        Resume
                    </Link>
                </div>
                <ThemeToggle />
            </div>
        </nav>
    );
}
