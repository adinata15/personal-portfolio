import Image from 'next/image';
import Link from 'next/link';
import { ExternalLinkIcon } from '@/components/external-link-icon';
import type { ProjectDetails } from '@/data/projects';
import {
    chipClass,
    glassHoverClass,
    inlineExternalLinkClass,
    listHitAreaClass,
    listHoverPlateClass,
} from '@/lib/styles';
import { cn } from '@/lib/utils';

export function ProjectListItem({
    title,
    project_link,
    details,
    skills,
    image_path,
}: ProjectDetails) {
    return (
        <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all xl:grid-cols-8 xl:gap-8 md:gap-4 xl:hover:!opacity-100 xl:group-hover/list:opacity-50">
                <div
                    className={cn(listHoverPlateClass, 'xl:-inset-x-6 xl:block', glassHoverClass)}
                />
                <div className="z-10 xl:order-2 xl:col-span-6 xl:ml-5">
                    <Link
                        className={cn(inlineExternalLinkClass, 'text-base text-foreground')}
                        href={project_link}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${title} (opens in a new tab)`}
                    >
                        <span className={cn(listHitAreaClass, 'xl:block')} />
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
                    className="aspect-video w-full max-w-md rounded-xl border border-white/50 bg-muted object-cover shadow-sm transition group-hover:border-accent/40 dark:border-white/10 xl:order-1 xl:col-span-2 xl:max-w-none xl:translate-y-1"
                />
            </div>
        </li>
    );
}
