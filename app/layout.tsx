import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { NavBar } from '@/components/navbar';

export const metadata: Metadata = {
    title: "Adi Nata' Portfolio",
    description: "Adi Nata' Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="">
                <ThemeProvider defaultTheme="system">
                    <NavBar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
