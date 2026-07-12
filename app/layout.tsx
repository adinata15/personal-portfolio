import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { NavBar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MouseEffect } from '@/components/mouse-effect';
import { siteUrl } from '@/lib/site';

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

const themeInitScript = `(function(){try{var k='portfolio-theme';var t=localStorage.getItem(k);var d=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';var r=(t==='light'||t==='dark')?t:d;if(t!==r)localStorage.setItem(k,r);var e=document.documentElement;e.classList.remove('light','dark');e.classList.add(r);}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
            </head>
            <body className="">
                <ThemeProvider defaultTheme="dark">
                    <a
                        href="#main-content"
                        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-green-700 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:bg-gray-900 dark:focus:text-green-300"
                    >
                        Skip to main content
                    </a>
                    <MouseEffect />
                    <NavBar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
