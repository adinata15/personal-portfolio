import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { NavBar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MouseEffect } from '@/components/mouse-effect';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://adinata.dev';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Adi Nata's Portfolio",
        template: "%s | Adi Nata's Portfolio",
    },
    description:
        'Portfolio of Adi Nata — software engineer specializing in web development, IoT, and embedded systems.',
    openGraph: {
        title: "Adi Nata's Portfolio",
        description:
            'Software engineer specializing in web development, IoT, and embedded systems.',
        url: siteUrl,
        siteName: "Adi Nata's Portfolio",
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: "Adi Nata's Portfolio",
        description:
            'Software engineer specializing in web development, IoT, and embedded systems.',
    },
};

const themeInitScript = `(function(){try{var k='portfolio-theme';var t=localStorage.getItem(k)||'system';var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var r=t==='system'?(d?'dark':'light'):t;var e=document.documentElement;e.classList.remove('light','dark');e.classList.add(r);}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
            </head>
            <body className="">
                <ThemeProvider defaultTheme="system">
                    <MouseEffect />
                    <NavBar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
