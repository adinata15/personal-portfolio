import type { Metadata } from 'next';
import Link from 'next/link';
import { ExpListItem } from '@/components/exp-list-item';
import { certifications, education, experiences } from '@/data/experiences';
import {
    cardClass,
    focusRing,
    pageHeaderClass,
    pageIntroClass,
    pageTitleClass,
    sectionTitleClass,
} from '@/lib/styles';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Experience',
    description:
        'Professional experience, education, and certifications of Adi Nata — research engineering, manufacturing software, and secure cloud platforms.',
};

const credentialsSubheadingClass =
    'mb-4 text-center text-xl font-semibold text-foreground md:text-left';

function CredentialLink({
    href,
    label,
    className,
}: {
    href: string;
    label: string;
    className: string;
}) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(className, focusRing, 'rounded-sm')}
            aria-label={`${label} (opens in a new tab)`}
        >
            {label}
        </Link>
    );
}

export default function ExperiencePage() {
    return (
        <main id="main-content" className="min-h-screen px-6 py-8 sm:px-8">
            <div className="mx-auto max-w-6xl">
                <header className={pageHeaderClass}>
                    <h1 className={pageTitleClass}>Experience</h1>
                    <p className={pageIntroClass}>
                        Roles across research engineering, manufacturing software, and secure cloud
                        platforms — plus education and certifications.
                    </p>
                </header>

                <ol className="group/list mb-16 block w-full">
                    {experiences.map((experience) => (
                        <ExpListItem
                            key={`${experience.duration}-${experience.role}`}
                            {...experience}
                        />
                    ))}
                </ol>

                <section aria-labelledby="credentials-heading" className="mb-8">
                    <div
                        className="mb-10 border-t border-white/40 dark:border-white/10"
                        aria-hidden="true"
                    />
                    <h2 id="credentials-heading" className={sectionTitleClass}>
                        Credentials
                    </h2>
                    <p className="mb-10 max-w-2xl text-base text-muted-foreground md:text-lg">
                        Formal education and professional certifications that back the work above.
                    </p>

                    <section className="mb-12" aria-labelledby="education-heading">
                        <h3 id="education-heading" className={credentialsSubheadingClass}>
                            Education
                        </h3>
                        <div className={cn(cardClass, 'p-6 sm:p-8')}>
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                <h4 className="text-lg font-semibold leading-snug text-foreground">
                                    {education.role}
                                </h4>
                                <p className="shrink-0 font-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                    {education.duration}
                                </p>
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">
                                {education.company_link ? (
                                    <CredentialLink
                                        href={education.company_link}
                                        label={education.company}
                                        className="font-medium text-muted-foreground hover:text-accent"
                                    />
                                ) : (
                                    <span className="font-medium">{education.company}</span>
                                )}
                            </p>
                            {education.details?.length ? (
                                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-normal text-foreground">
                                    {education.details.map((detail) => (
                                        <li key={detail}>{detail}</li>
                                    ))}
                                </ul>
                            ) : null}
                        </div>
                    </section>

                    <section aria-labelledby="certifications-heading">
                        <h3 id="certifications-heading" className={credentialsSubheadingClass}>
                            Certifications
                        </h3>
                        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {certifications.map((certification) => (
                                <li key={certification.title} className={cn(cardClass, 'p-5')}>
                                    {certification.link ? (
                                        <CredentialLink
                                            href={certification.link}
                                            label={certification.title}
                                            className="font-semibold leading-snug text-foreground hover:text-accent"
                                        />
                                    ) : (
                                        <p className="font-semibold leading-snug text-foreground">
                                            {certification.title}
                                        </p>
                                    )}
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {certification.issuer}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>
                </section>
            </div>
        </main>
    );
}
