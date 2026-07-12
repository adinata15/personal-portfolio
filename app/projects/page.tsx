import type { Metadata } from 'next';
import { ProjectListItem } from '@/components/project-list-item';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
    title: 'Projects',
    description:
        'Selected software projects by Adi Nata — laser tag IoT systems, e-commerce, and this portfolio.',
};

export default function ProjectPage() {
    return (
        <main
            id="main-content"
            className="min-h-screen py-8 px-8 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-950 dark:via-blue-950 dark:to-purple-950"
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl mb-20 font-bold text-gray-800 dark:text-gray-200 text-center">
                    Projects
                </h1>
                <ol className="group/list block w-full">
                    {projects.map((project) => (
                        <ProjectListItem key={project.title} {...project} />
                    ))}
                </ol>
            </div>
        </main>
    );
}
