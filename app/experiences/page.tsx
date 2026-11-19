import type { Metadata } from 'next';
import { ExperienceRecord } from '@/components/experience-record';
import { ResumeDownloadButton } from '@/components/resume-download-button';
import { experienceRecord } from '@/data/experiences';
import {
    pageColumnClass,
    pageHeaderClass,
    pageIntroClass,
    pageMainClass,
    pageTitleClass,
} from '@/lib/styles';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Experience',
    description:
        'Professional experience, education, and certifications of Adi Nata — research engineering, manufacturing software, and secure cloud platforms.',
};

export default function ExperiencePage() {
    return (
        <main id="main-content" className={pageMainClass}>
            <div className={pageColumnClass}>
                <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <header className={cn(pageHeaderClass, 'mb-0')}>
                        <h1 className={pageTitleClass}>Experience</h1>
                        <p className={pageIntroClass}>
                            Roles across research engineering, manufacturing software, and secure
                            cloud platforms — plus education and certifications.
                        </p>
                    </header>
                    <ResumeDownloadButton />
                </div>
                <ExperienceRecord record={experienceRecord} />
            </div>
        </main>
    );
}
