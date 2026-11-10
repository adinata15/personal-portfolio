import type { Metadata } from 'next';
import Link from 'next/link';
import { ResumeDownloadButton } from '@/components/resume-download-button';
import {
    glassPanelClass,
    linkAccentClass,
    pageHeaderClass,
    pageIntroClass,
    pageTitleClass,
} from '@/lib/styles';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Resume',
    description: 'View or download Adi Nata’s resume (PDF).',
};

export default function ResumePage() {
    return (
        <main id="main-content" className="flex min-h-[calc(100dvh-8rem)] flex-col">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 pb-4 pt-8 sm:flex-row sm:items-end sm:justify-between sm:px-8">
                <header className={cn(pageHeaderClass, 'mb-0 text-left')}>
                    <h1 className={pageTitleClass}>Resume</h1>
                    <p className={pageIntroClass}>
                        If the PDF viewer does not load,{' '}
                        <Link
                            href="/pdfs/resume.pdf"
                            className={linkAccentClass}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            open the resume in a new tab
                        </Link>
                        .
                    </p>
                </header>
                <ResumeDownloadButton />
            </div>
            <div className="mx-auto mb-8 w-full max-w-6xl flex-1 px-6 sm:px-8">
                <div className={cn(glassPanelClass, 'overflow-hidden')}>
                    <object
                        data="/pdfs/resume.pdf"
                        type="application/pdf"
                        className="min-h-[70dvh] w-full border-none"
                        aria-label="Adi Nata resume PDF"
                    >
                        <p className="p-8 text-center text-muted-foreground">
                            Your browser cannot display embedded PDFs.{' '}
                            <a
                                href="/pdfs/resume.pdf"
                                className={linkAccentClass}
                                download="AdiNata's resume.pdf"
                            >
                                Download the resume instead
                            </a>
                            .
                        </p>
                    </object>
                </div>
            </div>
        </main>
    );
}
