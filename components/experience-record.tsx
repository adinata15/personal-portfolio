import Link from 'next/link';
import { ExternalLinkIcon } from '@/components/external-link-icon';
import type {
    Certification,
    Education,
    ExperienceRecord as RecordData,
    Role,
} from '@/data/experiences';
import {
    cardClass,
    chipClass,
    focusRing,
    inlineExternalLinkClass,
    sectionTitleClass,
} from '@/lib/styles';
import { cn } from '@/lib/utils';

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

function RoleCard({ role }: { role: Role }) {
    const { duration, title, employer, employerLink, details = [], skills = [] } = role;

    return (
        <li>
            <div className={cn(cardClass, 'sm:p-8')}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="text-base font-semibold leading-snug text-foreground">
                        {title}
                    </h3>
                    {duration ? (
                        <p className="shrink-0 font-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            {duration}
                        </p>
                    ) : null}
                </div>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {employerLink ? (
                        <Link
                            className={cn(inlineExternalLinkClass, 'text-muted-foreground')}
                            href={employerLink}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${employer} (opens in a new tab)`}
                        >
                            <span className="inline-block">
                                {employer}
                                <ExternalLinkIcon size="sm" />
                            </span>
                        </Link>
                    ) : (
                        employer
                    )}
                </p>
                {details.length > 0 && (
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-normal text-foreground">
                        {details.map((detail) => (
                            <li key={detail}>{detail}</li>
                        ))}
                    </ul>
                )}
                {skills.length > 0 && (
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {skills.map((skill, index) => (
                            <li className="mr-1.5 mt-2" key={`${skill}-${index}`}>
                                <span className={chipClass}>{skill}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </li>
    );
}

function EducationCard({ item }: { item: Education }) {
    return (
        <div className={cn(cardClass, 'p-6 sm:p-8')}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h4 className="text-lg font-semibold leading-snug text-foreground">
                    {item.program}
                </h4>
                <p className="shrink-0 font-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {item.duration}
                </p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
                {item.schoolLink ? (
                    <CredentialLink
                        href={item.schoolLink}
                        label={item.school}
                        className="font-medium text-muted-foreground hover:text-accent"
                    />
                ) : (
                    <span className="font-medium">{item.school}</span>
                )}
            </p>
            {item.details?.length ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-normal text-foreground">
                    {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}

function CertificationCard({ certification }: { certification: Certification }) {
    return (
        <li className={cn(cardClass, 'p-5')}>
            {certification.link ? (
                <CredentialLink
                    href={certification.link}
                    label={certification.title}
                    className="font-semibold leading-snug text-foreground hover:text-accent"
                />
            ) : (
                <p className="font-semibold leading-snug text-foreground">{certification.title}</p>
            )}
            <p className="mt-2 text-sm text-muted-foreground">{certification.issuer}</p>
        </li>
    );
}

export function ExperienceRecord({ record }: { record: RecordData }) {
    return (
        <>
            <ol className="mb-16 flex flex-col gap-6">
                {record.roles.map((role) => (
                    <RoleCard key={`${role.duration}-${role.title}`} role={role} />
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
                    <div className="flex flex-col gap-4">
                        {record.education.map((item) => (
                            <EducationCard key={`${item.duration}-${item.program}`} item={item} />
                        ))}
                    </div>
                </section>

                <section aria-labelledby="certifications-heading">
                    <h3 id="certifications-heading" className={credentialsSubheadingClass}>
                        Certifications
                    </h3>
                    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {record.certifications.map((certification) => (
                            <CertificationCard
                                key={certification.title}
                                certification={certification}
                            />
                        ))}
                    </ul>
                </section>
            </section>
        </>
    );
}
