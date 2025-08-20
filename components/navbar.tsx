'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';
import Link from 'next/link';
import { HamburgerMenu } from './hamburger_menu';
import { useState } from 'react';

const pages = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Experience',
        link: '/experiences',
    },
    {
        name: 'Project',
        link: '/projects',
    },
    {
        name: 'Resume',
        link: '/resume',
    },
];

export function NavBar() {
    const [isExpanded, setExpanded] = useState(false);
    return (
        <nav className="flex-col backdrop-blur-sm bg-white/70 dark:bg-gray-900/70">
            <section className="py-6 px-8 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-3">
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
                </Link>
                <div className="flex items-center space-x-8">
                    <div className="hidden md:flex space-x-8">
                        {pages.map((page) => {
                            return (
                                <Link
                                    href={page.link}
                                    className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                                >
                                    {page.name}
                                </Link>
                            );
                        })}
                    </div>
                    <ThemeToggle />
                    <div className="md:hidden">
                        <HamburgerMenu setExpanded={setExpanded} />
                    </div>
                </div>
            </section>
            <ul
                className={
                    isExpanded ? 'flex flex-col w-full content-center justify-center' : 'hidden'
                }
            >
                {pages.map((page) => {
                    return (
                        <li key={`${page.name}`} className="w-full flex">
                            <Link
                                className="w-full content-center text-center border-gray-400 m-1 h-10 rounded dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                                href={page.link}
                            >
                                {page.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
