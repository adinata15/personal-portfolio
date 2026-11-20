import Link from 'next/link';
import type { Ref } from 'react';
import { pages, type Page } from '@/data/pages';
import { focusRing } from '@/lib/styles';
import { cn } from '@/lib/utils';

type PageLinksProps = {
    pathname: string;
    variant: 'bar' | 'drawer';
    onNavigate?: () => void;
    firstLinkRef?: Ref<HTMLAnchorElement>;
};

const activeClass = 'bg-accent/15 font-medium text-accent';

const barLinkClass =
    'rounded-full px-3 py-1.5 text-muted-foreground transition-colors duration-200 hover:text-accent';

const drawerLinkClass =
    'm-1 inline-flex min-h-11 w-full items-center justify-center rounded-xl text-muted-foreground transition-colors duration-200 hover:bg-accent/10 hover:text-accent';

function isActive(pathname: string, page: Page): boolean {
    return page.path === '/' ? pathname === '/' : pathname.startsWith(page.path);
}

export function PageLinks({ pathname, variant, onNavigate, firstLinkRef }: PageLinksProps) {
    return (
        <>
            {pages.map((page, index) => {
                const active = isActive(pathname, page);
                const link = (
                    <Link
                        key={variant === 'bar' ? page.name : undefined}
                        ref={variant === 'drawer' && index === 0 ? firstLinkRef : undefined}
                        href={page.path}
                        aria-current={active ? 'page' : undefined}
                        onClick={variant === 'drawer' ? onNavigate : undefined}
                        className={cn(
                            variant === 'bar' ? barLinkClass : drawerLinkClass,
                            focusRing,
                            active && activeClass,
                            active && variant === 'bar' && 'ring-1 ring-accent/25',
                        )}
                    >
                        {page.name}
                    </Link>
                );

                return variant === 'drawer' ? (
                    <li key={page.name} className="flex w-full">
                        {link}
                    </li>
                ) : (
                    link
                );
            })}
        </>
    );
}
