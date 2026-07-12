import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { domains, skills } from '@/data/home';
import { ResumeDownloadButton } from '@/components/resume-download-button';
import { SocialLinks } from '@/components/social-links';

export const metadata: Metadata = {
    title: 'Home',
    description:
        'Adi Nata — Software Engineer building web, IoT, and embedded systems. Explore projects, experience, and resume.',
};

const ctaClass =
    'px-8 py-3 text-center border-2 border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2';

export default function MainPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-950 dark:via-blue-950 dark:to-purple-950">
            <main className="max-w-6xl mx-auto px-8 py-16">
                <div className="hero-enter text-center mb-16">
                    <div className="w-32 h-32 mx-auto mb-8 bg-gray-200 rounded-full flex items-center justify-center border-4 border-orange-400 shadow-lg overflow-hidden">
                        <Image
                            src="/images/personal.png"
                            alt="Photo of Adi Nata"
                            width={128}
                            height={128}
                            priority
                            sizes="128px"
                        />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                        Hi, I{"'"}m
                        <span className="text-green-600 dark:text-green-400"> Adi Nata</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Software Engineer passionate about{' '}
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                            technology
                        </span>
                        ,
                        <span className="text-green-600 dark:text-green-400 font-semibold">
                            {' '}
                            nature
                        </span>
                        , and
                        <span className="text-purple-600 dark:text-purple-400 font-semibold">
                            {' '}
                            cool stories
                        </span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#domains" className={ctaClass}>
                            View My Work
                        </a>
                        <a href="#contact" className={ctaClass}>
                            Get In Touch
                        </a>
                    </div>
                </div>

                <section id="about" className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-md ring-1 ring-gray-900/10 dark:ring-blue-400/10">
                        <div>
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                                I am a versatile software engineer with a passion for creating
                                innovative solutions across multiple domains. When I am not coding,
                                you will find me exploring the great outdoors, reading books, or
                                planning my next adventure.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                My love for nature inspires my approach to technology - building
                                sustainable, efficient, and harmonious systems that make a positive
                                impact.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center items-center space-x-4">
                                <span className="flex-col text-gray-600 dark:text-gray-400">
                                    <p className="mb-4 text-4xl" aria-hidden="true">
                                        💻
                                    </p>
                                    <p className="italic">Technology</p>
                                </span>
                                <span className="text-gray-600 dark:text-gray-400" aria-hidden="true">
                                    •
                                </span>
                                <span className="flex-col text-gray-600 dark:text-gray-400">
                                    <p className="mb-4 text-4xl" aria-hidden="true">
                                        🏔️
                                    </p>
                                    <p className="italic">Nature</p>
                                </span>
                                <span className="text-gray-600 dark:text-gray-400" aria-hidden="true">
                                    •
                                </span>
                                <span className="flex-col text-gray-600 dark:text-gray-400">
                                    <p className="mb-4 text-4xl" aria-hidden="true">
                                        📚
                                    </p>
                                    <p className="italic">Stories</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills" className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
                        Technical Skills
                    </h2>
                    <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-md ring-1 ring-gray-900/10 dark:ring-blue-400/10">
                        <ul
                            className="flex flex-wrap gap-3 justify-center"
                            aria-label="Technical skills"
                        >
                            {skills.map((skill, index) => (
                                <li key={skill}>
                                    <span
                                        className={`inline-block px-4 py-2 rounded-full text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 ${
                                            index % 3 === 0
                                                ? 'bg-blue-500 hover:bg-blue-600'
                                                : index % 3 === 1
                                                  ? 'bg-green-500 hover:bg-green-600'
                                                  : 'bg-purple-500 hover:bg-purple-600'
                                        }`}
                                    >
                                        {skill}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section id="domains" className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
                        Areas of Expertise
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {domains.map((domain) => (
                            <div
                                key={domain.title}
                                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-md ring-1 ring-gray-900/10 dark:ring-blue-400/10"
                            >
                                <div className="text-4xl mb-4 text-center" aria-hidden="true">
                                    {domain.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 text-center">
                                    {domain.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-center">
                                    {domain.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="grid w-full place-items-center my-6 grid-cols-1 md:grid-cols-3 gap-6">
                        <Link href="/experiences" className={`${ctaClass} w-48`}>
                            View Experiences
                        </Link>
                        <Link href="/projects" className={`${ctaClass} w-48`}>
                            View Projects
                        </Link>
                        <ResumeDownloadButton />
                    </div>
                </section>

                <section id="contact" className="text-center">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-600 dark:to-blue-600 rounded-2xl p-8 text-white shadow-lg">
                        <h2 className="text-3xl font-bold mb-4">
                            Let{"'"}s Build Something Amazing Together
                        </h2>
                        <p className="text-xl mb-6 opacity-90">
                            Ready to embark on your next technological adventure? Contact me now!
                        </p>
                        <SocialLinks />
                    </div>
                </section>
            </main>
        </div>
    );
}
