import Image from 'next/image';
import Link from 'next/link';
import { ExternalLinkIcon } from '@/components/external-link-icon';
import type { ProjectDetails } from '@/data/projects';
import { cardClass, chipClass, inlineExternalLinkClass } from '@/lib/styles';
import { cn } from '@/lib/utils';

const projectImageClass = [
    'aspect-video w-full max-w-md rounded-xl border border-white/50 bg-muted object-cover shadow-sm',
    'transition group-hover:border-accent/40 dark:border-white/10',
    'xl:order-1 xl:col-span-2 xl:max-w-none xl:translate-y-1',
].join(' ');

export function ProjectListItem({
    title,
    project_link,
    details,
    skills,
    image_path,
}: ProjectDetails) {
    return (
        <li>
            <div className={cn(cardClass, 'group grid gap-4 sm:p-8 xl:grid-cols-8 xl:gap-8')}>
                <div className="xl:order-2 xl:col-span-6 xl:ml-5">
                    <Link
                        className={cn(inlineExternalLinkClass, 'text-base text-foreground')}
                        href={project_link}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${title} (opens in a new tab)`}
                    >
                        <span className="inline-block">
                            {title}
                            <ExternalLinkIcon />
                        </span>
                    </Link>
                    <p className="mt-2 text-sm leading-normal text-foreground">{details}</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {skills.map((skill, index) => (
                            <li className="mr-1.5 mt-2" key={`${skill}-${index}`}>
                                <span className={chipClass}>{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <Image
                    alt={`${title} project screenshot`}
                    src={image_path}
                    width={800}
                    height={450}
                    sizes="(max-width: 1280px) 100vw, 200px"
                    className={projectImageClass}
                />
            </div>
        </li>
    );
}
