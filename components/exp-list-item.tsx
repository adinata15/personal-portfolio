import Link from 'next/link';
import { ExternalLinkIcon } from '@/components/external-link-icon';
import type { ExpDetails } from '@/data/experiences';
import { cardClass, chipClass, inlineExternalLinkClass } from '@/lib/styles';
import { cn } from '@/lib/utils';

export function ExpListItem({
    duration,
    role,
    company,
    company_link,
    details = [],
    skills = [],
}: ExpDetails) {
    return (
        <li>
            <div className={cn(cardClass, 'sm:p-8')}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="text-base font-semibold leading-snug text-foreground">{role}</h3>
                    {duration ? (
                        <p className="shrink-0 font-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            {duration}
                        </p>
                    ) : null}
                </div>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {company_link ? (
                        <Link
                            className={cn(inlineExternalLinkClass, 'text-muted-foreground')}
                            href={company_link}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${company} (opens in a new tab)`}
                        >
                            <span className="inline-block">
                                {company}
                                <ExternalLinkIcon size="sm" />
                            </span>
                        </Link>
                    ) : (
                        company
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
