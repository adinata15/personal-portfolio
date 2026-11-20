import type { Metadata } from 'next';
import { IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { AuroraBackground } from '@/components/aurora-background';
import { NavBar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MouseEffect } from '@/components/mouse-effect';
import { siteUrl } from '@/lib/site';
import { siteLines } from '@/lib/site-lines';
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
        default: siteLines.portfolioTitle,
        template: `%s | ${siteLines.portfolioTitle}`,
    },
    description: siteLines.rootDescription,
    openGraph: {
        title: siteLines.portfolioTitle,
        description: siteLines.specialties,
        url: siteUrl,
        siteName: siteLines.portfolioTitle,
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: siteLines.portfolioTitle,
        description: siteLines.specialties,
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
