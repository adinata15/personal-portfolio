import type { Metadata } from 'next';
import { IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { AuroraBackground } from '@/components/aurora-background';
import { NavBar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MouseEffect } from '@/components/mouse-effect';
import { siteUrl } from '@/lib/site';
import { themeBootScript } from '@/lib/theme';
import { cn } from '@/lib/utils';

const ibmPlexSans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-ibm-plex-sans',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-jetbrains-mono',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Adi Nata's Portfolio",
        template: "%s | Adi Nata's Portfolio",
    },
    description:
        'Portfolio of Adi Nata — software engineer specializing in full-stack web, distributed backends, and secure cloud platforms.',
    openGraph: {
        title: "Adi Nata's Portfolio",
        description:
            'Software engineer specializing in full-stack web, distributed backends, and secure cloud platforms.',
        url: siteUrl,
        siteName: "Adi Nata's Portfolio",
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: "Adi Nata's Portfolio",
        description:
            'Software engineer specializing in full-stack web, distributed backends, and secure cloud platforms.',
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn(ibmPlexSans.variable, jetbrainsMono.variable)}
        >
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
            </head>
            <body className="font-sans">
                <ThemeProvider>
                    <a
                        href="#main-content"
                        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:text-accent focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                        Skip to main content
                    </a>
                    <AuroraBackground />
                    <MouseEffect />
                    <NavBar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
