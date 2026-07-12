'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HamburgerMenu } from './hamburger-menu';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { focusRing } from '@/lib/styles';

const pages = [
    { name: 'Home', link: '/' },
    { name: 'Experience', link: '/experiences' },
    { name: 'Projects', link: '/projects' },
    { name: 'Resume', link: '/resume' },
];

export function NavBar() {
    const [isExpanded, setExpanded] = useState(false);
    const pathname = usePathname();
    const menuId = 'mobile-nav-menu';
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const firstLinkRef = useRef<HTMLAnchorElement>(null);
    const wasExpandedRef = useRef(false);

    useEffect(() => {
        if (!isExpanded) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setExpanded(false);
                menuButtonRef.current?.focus();
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isExpanded]);

    useEffect(() => {
        const media = window.matchMedia('(min-width: 768px)');
        const onChange = () => {
            if (media.matches) setExpanded(false);
        };
        media.addEventListener('change', onChange);
        return () => media.removeEventListener('change', onChange);
    }, []);

    useEffect(() => {
        if (isExpanded && !wasExpandedRef.current) {
            firstLinkRef.current?.focus();
        }
        wasExpandedRef.current = isExpanded;
    }, [isExpanded]);

    return (
        <nav
            className="sticky top-0 z-40 flex-col backdrop-blur-sm bg-white/70 dark:bg-gray-900/70"
            aria-label="Primary"
        >
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
                                        isActive &&
                                            'text-green-600 dark:text-green-400 font-medium',
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
                            ref={menuButtonRef}
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
                {pages.map((page, index) => {
                    const isActive =
                        page.link === '/' ? pathname === '/' : pathname.startsWith(page.link);
                    return (
                        <li key={page.name} className="w-full flex">
                            <Link
                                ref={index === 0 ? firstLinkRef : undefined}
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
