import type { Metadata } from 'next';
import { ProjectListItem } from '@/components/project-list-item';
import { projects } from '@/data/projects';
import { pageHeaderClass, pageIntroClass, pageTitleClass } from '@/lib/styles';

export const metadata: Metadata = {
    title: 'Projects',
    description:
        'Selected software projects by Adi Nata — laser tag IoT systems, e-commerce, and this portfolio.',
};

export default function ProjectPage() {
    return (
        <main id="main-content" className="min-h-screen px-6 py-8 sm:px-8">
            <div className="mx-auto max-w-6xl">
                <header className={pageHeaderClass}>
                    <h1 className={pageTitleClass}>Projects</h1>
                    <p className={pageIntroClass}>
                        Selected work spanning IoT systems, e-commerce, and this portfolio site.
                    </p>
                </header>
                <ol className="group/list block w-full">
                    {projects.map((project) => (
                        <ProjectListItem key={project.title} {...project} />
                    ))}
                </ol>
            </div>
        </main>
    );
}
