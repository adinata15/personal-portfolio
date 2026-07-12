'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HamburgerMenu } from './hamburger-menu';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const pages = [
    { name: 'Home', link: '/' },
    { name: 'Experience', link: '/experiences' },
    { name: 'Projects', link: '/projects' },
    { name: 'Resume', link: '/resume' },
];

const focusRing =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2';

export function NavBar() {
    const [isExpanded, setExpanded] = useState(false);
    const pathname = usePathname();
    const menuId = 'mobile-nav-menu';

    return (
        <nav className="flex-col backdrop-blur-sm bg-white/70 dark:bg-gray-900/70" aria-label="Primary">
            <div className="py-6 px-8 flex justify-between items-center">
                <Link
                    href="/"
                    className={cn('flex items-center space-x-3 rounded-sm', focusRing)}
                    onClick={() => setExpanded(false)}
                >
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border-2 border-orange-400 overflow-hidden">
                        <Image
                            src="/images/personal.png"
                            alt="Photo of Adi Nata"
                            width={40}
                            height={40}
                            priority
                        />
                    </div>
                    <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Adi Nata
                    </span>
                </Link>
                <div className="flex items-center space-x-8">
                    <div className="hidden md:flex space-x-8">
                        {pages.map((page) => {
                            const isActive =
                                page.link === '/'
                                    ? pathname === '/'
                                    : pathname.startsWith(page.link);
                            return (
                                <Link
                                    key={page.name}
                                    href={page.link}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={cn(
                                        'text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors rounded-sm',
                                        focusRing,
                                        isActive && 'text-green-600 dark:text-green-400 font-medium',
                                    )}
                                >
                                    {page.name}
                                </Link>
                            );
                        })}
                    </div>
                    <ThemeToggle />
                    <div className="md:hidden">
                        <HamburgerMenu
                            expanded={isExpanded}
                            setExpanded={setExpanded}
                            controlsId={menuId}
                        />
                    </div>
                </div>
            </div>
            <ul
                id={menuId}
                hidden={!isExpanded}
                className={isExpanded ? 'flex flex-col w-full md:hidden' : undefined}
            >
                {pages.map((page) => {
                    const isActive =
                        page.link === '/' ? pathname === '/' : pathname.startsWith(page.link);
                    return (
                        <li key={page.name} className="w-full flex">
                            <Link
                                className={cn(
                                    'w-full text-center border border-transparent m-1 h-10 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors inline-flex items-center justify-center',
                                    focusRing,
                                    isActive && 'text-green-600 dark:text-green-400 font-medium',
                                )}
                                href={page.link}
                                aria-current={isActive ? 'page' : undefined}
                                onClick={() => setExpanded(false)}
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
