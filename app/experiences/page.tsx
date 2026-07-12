import type { Metadata } from 'next';
import { ExpListItem } from '@/components/exp-list-item';
import { experiences } from '@/data/experiences';

export const metadata: Metadata = {
    title: 'Experience',
    description:
        'Professional experience of Adi Nata — research engineering, embedded software, and infrastructure roles.',
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
            </div>
        </main>
    );
}
