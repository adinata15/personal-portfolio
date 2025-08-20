'use client';

import { ProjectDetails, ProjectListItem } from '@/components/project-list-item';

const projects: ProjectDetails[] = [
    {
        duration: 'Mar 2022 - Jun 2022',
        title: 'Laser Tag',
        project_link: 'https://github.com/adinata15/LaserTag',
        details:
            'Virtual Reality laser tag game with physical handheld gears (gun, vest, glove, phone) for immersive shooting game experience',
        skills: ['Python', 'C', 'Arduino', 'Multithreading', 'Networking', 'IoT'],
    },
];

export default function ProjectPage() {
    return (
        <div className="flex-col min-h-screen py-8 px-10 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-950 dark:via-blue-950 dark:to-purple-950">
            <h1 className="text-5xl mb-20 font-bold text-gray-800 dark:text-gray-200 text-center">
                Project
            </h1>
            <ol className="group/list inline-block">
                {projects.map((project, index) => {
                    return <ProjectListItem key={index} {...project} />;
                })}
            </ol>
        </div>
    );
}
