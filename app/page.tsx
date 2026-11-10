import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { DomainIcon, InterestIcon, interestNames } from '@/components/domain-icon';
import { SocialLinks } from '@/components/social-links';
import { contactEmail, domains, skillGroups } from '@/data/home';
import {
    cardClass,
    chipClass,
    ctaClass,
    ctaSecondaryClass,
    iconTileClass,
    linkAccentClass,
    sectionTitleClass,
} from '@/lib/styles';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Home',
    description:
        'Adi Nata — Software Engineer building full-stack web apps, distributed backends, and secure cloud platforms. Explore projects, experience, and resume.',
};

const sectionSpacing = 'mb-16 md:mb-20';

export default function MainPage() {
    return (
        <main id="main-content" className="mx-auto max-w-6xl px-6 py-12 sm:px-8 md:py-16">
            <div className={cn('hero-enter', sectionSpacing)}>
                <div className="glass-strong rounded-3xl p-8 md:p-10">
                    <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
                        <div className="relative mx-auto shrink-0 md:mx-0">
                            <div
                                className="absolute -inset-3 rounded-full bg-accent/30 blur-2xl"
                                aria-hidden="true"
                            />
                            <div
                                className="relative h-36 w-36 rounded-full p-[3px] shadow-lg md:h-44 md:w-44"
                                style={{
                                    background:
                                        'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--aurora-2)), hsl(var(--aurora-3)))',
                                }}
                            >
                                <div className="relative h-full w-full overflow-hidden rounded-full bg-neutral-300 dark:bg-neutral-700">
                                    <Image
                                        src="/images/personal.png"
                                        alt="Photo of Adi Nata"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 144px, 176px"
                                        className="object-cover object-[center_18%] brightness-110"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-6xl">
                                Hi, I&apos;m <span className="name-gradient">Adi Nata</span>
                            </h1>
                            <p className="mb-3 max-w-2xl text-balance text-lg text-foreground md:text-xl">
                                Software engineer building full-stack web apps, distributed
                                backends, and secure cloud platforms.
                            </p>
                            <p className="mb-8 max-w-2xl text-base text-muted-foreground">
                                Passionate about technology, nature, and cool stories.
                            </p>
                            <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                                <Link href="/projects" className={ctaClass}>
                                    View Projects
                                </Link>
                                <Link href="/resume" className={ctaSecondaryClass}>
                                    View Resume
                                </Link>
                            </div>
                            <p className="mt-5 space-x-1 text-sm text-muted-foreground">
                                <span>Or</span>
                                <a href="#contact" className={linkAccentClass}>
                                    get in touch
                                </a>
                                <span aria-hidden="true">·</span>
                                <Link href="/experiences" className={linkAccentClass}>
                                    see experience
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section id="about" className={sectionSpacing}>
                <h2 className={sectionTitleClass}>About Me</h2>
                <div className={cn(cardClass, 'grid items-center gap-8 p-8 md:grid-cols-2')}>
                    <p className="text-lg leading-relaxed text-foreground">
                        Software engineer building full-stack apps, distributed backends, and secure
                        cloud platforms across manufacturing, research, and government. Outside of
                        work, I hike, read, and draw inspiration from nature for how I build.
                    </p>
                    <div className="flex items-center justify-center gap-6 sm:gap-8">
                        {interestNames.map((interest, index) => (
                            <Fragment key={interest}>
                                {index > 0 && (
                                    <span className="text-muted-foreground" aria-hidden="true">
                                        ·
                                    </span>
                                )}
                                <span className="flex flex-col items-center text-muted-foreground">
                                    <span className={cn(iconTileClass, 'mb-3')}>
                                        <InterestIcon name={interest} />
                                    </span>
                                    <span className="text-sm italic capitalize">{interest}</span>
                                </span>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </section>

            <section id="skills" className={sectionSpacing}>
                <h2 className={sectionTitleClass}>Technical Skills</h2>
                <div className={cn(cardClass, 'space-y-8 p-8')}>
                    {skillGroups.map((group) => (
                        <div key={group.title}>
                            <h3 className="mb-3 text-center text-lg font-semibold text-foreground md:text-left">
                                {group.title}
                            </h3>
                            <ul
                                className="flex flex-wrap justify-center gap-2 md:justify-start"
                                aria-label={group.title}
                            >
                                {group.skills.map((skill) => (
                                    <li key={skill}>
                                        <span className={chipClass}>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section id="domains" className={sectionSpacing}>
                <h2 className={sectionTitleClass}>Areas of Expertise</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {domains.map((domain) => (
                        <div key={domain.title} className={cardClass}>
                            <div className="mb-4 flex justify-center md:justify-start">
                                <span className={iconTileClass}>
                                    <DomainIcon icon={domain.icon} />
                                </span>
                            </div>
                            <h3 className="mb-3 text-center text-xl font-bold text-foreground md:text-left">
                                {domain.title}
                            </h3>
                            <p className="text-center text-muted-foreground md:text-left">
                                {domain.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact" className="text-center md:text-left">
                <div
                    className={cn(
                        'glass-strong rounded-3xl p-8',
                        'shadow-[0_0_40px_hsl(var(--accent)/0.12)]',
                    )}
                >
                    <h2 className="mb-3 text-balance text-3xl font-bold text-foreground">
                        Let&apos;s Build Something Amazing Together
                    </h2>
                    <p className="mb-2 text-lg text-muted-foreground">
                        Ready to embark on your next technological adventure? Contact me now.
                    </p>
                    <p className="mb-8">
                        <a
                            href={`mailto:${contactEmail}`}
                            className={cn(linkAccentClass, 'text-base font-medium')}
                        >
                            {contactEmail}
                        </a>
                    </p>
                    <SocialLinks />
                </div>
            </section>
        </main>
    );
}
