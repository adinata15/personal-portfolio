import type { Metadata } from 'next';
import Link from 'next/link';
import { ResumeDownloadButton } from '@/components/resume-download-button';

export const metadata: Metadata = {
    title: 'Resume',
    description: 'View or download Adi Nata’s resume (PDF).',
};

export default function ResumePage() {
    return (
        <main
            id="main-content"
            className="flex flex-col min-h-[calc(100dvh-8rem)] bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-950 dark:via-blue-950 dark:to-purple-950"
        >
            <div className="px-8 pt-6 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-6xl mx-auto w-full">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        Resume
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        If the PDF viewer does not load,{' '}
                        <Link
                            href="/pdfs/resume.pdf"
                            className="text-green-600 dark:text-green-400 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded-sm"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            open the resume in a new tab
                        </Link>
                        .
                    </p>
                </div>
                <ResumeDownloadButton />
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
