import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { NavBar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MouseEffect } from '@/components/mouse-effect';

export const metadata: Metadata = {
    title: "Adi Nata' Portfolio",
    description: "Adi Nata' Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
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
