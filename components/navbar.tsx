'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { PageLinks } from '@/components/page-links';
import { ThemeToggle } from '@/components/theme-toggle';
import { HamburgerMenu } from './hamburger-menu';
import { focusRing, glassPanelClass, portraitFrameClass } from '@/lib/styles';
import { siteLines } from '@/lib/site-lines';
import { cn } from '@/lib/utils';

export function NavBar() {
    const [isExpanded, setExpanded] = useState(false);
    const pathname = usePathname();
    const menuId = 'mobile-nav-menu';
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const firstLinkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isExpanded) {
                setExpanded(false);
                menuButtonRef.current?.focus();
            }
        };

        const handleResize = () => {
            const isDesktop = window.matchMedia('(min-width: 768px)').matches;
            if (isDesktop && isExpanded) setExpanded(false);
        };

        window.addEventListener('keydown', handleEscape);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('keydown', handleEscape);
            window.removeEventListener('resize', handleResize);
        };
    }, [isExpanded]);

    useEffect(() => {
        if (isExpanded) firstLinkRef.current?.focus();
    }, [isExpanded]);

    return (
        <div className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
            <nav
                className={cn(glassPanelClass, 'mx-auto flex max-w-6xl flex-col')}
                aria-label="Primary"
            >
                <div className="flex w-full items-center justify-between px-4 py-3 sm:px-6">
                    <Link
                        href="/"
                        className={cn('flex items-center space-x-3 rounded-sm', focusRing)}
                        onClick={() => setExpanded(false)}
                    >
                        <div className={cn(portraitFrameClass, 'h-10 w-10')}>
                            <Image
                                src="/images/personal.png"
                                alt=""
                                width={40}
                                height={40}
                                priority
                            />
                        </div>
                        <span className="text-xl font-semibold text-foreground">
                            {siteLines.name}
                        </span>
                    </Link>
                    <div className="flex items-center space-x-4 md:space-x-6">
                        <div className="hidden space-x-2 md:flex">
                            <PageLinks pathname={pathname} variant="bar" />
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
                    className={
                        isExpanded
                            ? 'flex w-full flex-col border-t border-white/40 dark:border-white/10 md:hidden'
                            : undefined
                    }
                >
                    <PageLinks
                        pathname={pathname}
                        variant="drawer"
                        onNavigate={() => setExpanded(false)}
                        firstLinkRef={firstLinkRef}
                    />
                </ul>
            </nav>
        </div>
    );
}
