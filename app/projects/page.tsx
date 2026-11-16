import type { Metadata } from 'next';
import { ProjectListItem } from '@/components/project-list-item';
import { projects } from '@/data/projects';
import {
    pageColumnClass,
    pageHeaderClass,
    pageIntroClass,
    pageMainClass,
    pageTitleClass,
} from '@/lib/styles';

export const metadata: Metadata = {
    title: 'Projects',
    description:
        'Selected software projects by Adi Nata — laser tag IoT systems, e-commerce, and this portfolio.',
};

export default function ProjectPage() {
    return (
        <main id="main-content" className={pageMainClass}>
            <div className={pageColumnClass}>
                <header className={pageHeaderClass}>
                    <h1 className={pageTitleClass}>Projects</h1>
                    <p className={pageIntroClass}>
                        Selected work spanning IoT systems, e-commerce, and this portfolio site.
                    </p>
                </header>
                <ol className="flex flex-col gap-6">
                    {projects.map((project) => (
                        <ProjectListItem key={project.title} {...project} />
                    ))}
                </ol>
            </div>
        </main>
    );
}
