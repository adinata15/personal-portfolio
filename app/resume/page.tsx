import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Resume',
    description: 'View or download Adi Nata’s resume (PDF).',
};

export default function ResumePage() {
    return (
        <main className="flex flex-col min-h-[calc(100dvh-8rem)]">
            <div className="px-8 pt-6 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 max-w-6xl mx-auto w-full">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    If the PDF viewer does not load,{' '}
                    <Link
                        href="/pdfs/resume.pdf"
                        className="text-green-600 dark:text-green-400 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded-sm"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        open the resume in a new tab
                    </Link>{' '}
                    or{' '}
                    <a
                        href="/pdfs/resume.pdf"
                        download="AdiNata's resume.pdf"
                        className="text-green-600 dark:text-green-400 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded-sm"
                    >
                        download the PDF
                    </a>
                    .
                </p>
            </div>
            <object
                data="/pdfs/resume.pdf"
                type="application/pdf"
                className="w-full flex-1 min-h-[70dvh] border-none"
                aria-label="Adi Nata resume PDF"
            >
                <p className="p-8 text-center text-gray-600 dark:text-gray-400">
                    Your browser cannot display embedded PDFs.{' '}
                    <a
                        href="/pdfs/resume.pdf"
                        className="text-green-600 dark:text-green-400 underline"
                        download="AdiNata's resume.pdf"
                    >
                        Download the resume instead
                    </a>
                    .
                </p>
            </object>
        </main>
    );
}
