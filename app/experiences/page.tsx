import type { Metadata } from 'next';
import { ExpListItem } from '@/components/exp-list-item';
import {
    certifications,
    education,
    experiences,
    languages,
} from '@/data/experiences';

export const metadata: Metadata = {
    title: 'Experience',
    description:
        'Professional experience of Adi Nata — research engineering, manufacturing software, and secure cloud platforms.',
};

export default function ExperiencePage() {
    return (
        <main
            id="main-content"
            className="min-h-screen py-8 px-8 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-950 dark:via-blue-950 dark:to-purple-950"
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl mb-20 font-bold text-gray-800 dark:text-gray-200 text-center">
                    Experience
                </h1>
                <ol className="group/list block w-full">
                    {experiences.map((experience) => (
                        <ExpListItem
                            key={`${experience.duration}-${experience.role}`}
                            {...experience}
                        />
                    ))}
                </ol>

                <section className="mt-16 mb-12" aria-labelledby="education-heading">
                    <h2
                        id="education-heading"
                        className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6"
                    >
                        Education
                    </h2>
                    <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-md ring-1 ring-gray-900/10 dark:ring-blue-400/10">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {education.school}
                        </h3>
                        <p className="mt-1 text-gray-700 dark:text-gray-300">{education.degree}</p>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-400">
                            {education.details.map((detail) => (
                                <li key={detail}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="mb-12" aria-labelledby="certifications-heading">
                    <h2
                        id="certifications-heading"
                        className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6"
                    >
                        Certifications
                    </h2>
                    <ul className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-md ring-1 ring-gray-900/10 dark:ring-blue-400/10 list-disc space-y-2 pl-10 text-gray-700 dark:text-gray-300">
                        {certifications.map((certification) => (
                            <li key={certification}>{certification}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-8" aria-labelledby="languages-heading">
                    <h2
                        id="languages-heading"
                        className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6"
                    >
                        Languages
                    </h2>
                    <ul
                        className="flex flex-wrap gap-3"
                        aria-label="Spoken languages"
                    >
                        {languages.map((language) => (
                            <li key={language}>
                                <span className="inline-flex items-center rounded-full bg-green-400 dark:bg-green-400/10 px-3 py-1 text-sm font-medium leading-5 text-green-900 dark:text-green-300 shadow-lg">
                                    {language}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}
