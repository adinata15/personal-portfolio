'use client';

import { ProjectDetails, ProjectListItem } from '@/components/project-list-item';

const projects: ProjectDetails[] = [
    {
        title: 'Laser Tag',
        project_link: 'https://github.com/adinata15/LaserTag',
        details:
            'A multiplayer laser tag system using Python and C, integrating IoT devices with a real-time game server with secure SSH-tunneled TCP connections',
        skills: ['Python', 'C', 'Arduino', 'Multithreading', 'Networking', 'IoT'],
        image_path: '/images/laserTag_arch.png',
    },
    {
        title: 'BestFit',
        project_link: 'https://github.com/adinata15/Orbital_2020',
        details:
            'An e-commerce apparel platform with React, Express, MongoDB, Node, AWS S3, and Stripe API with integration with Python sklearn size-recommendation models',
        skills: ['React', 'MongoDB', 'JavaScript', 'Node', 'AWS S3', 'Python', 'Stripe', 'Heroku'],
        image_path: '/images/bestfit_logo.png',
    },
    {
        title: 'Personal Portfolio',
        project_link: 'https://github.com/adinata15/personal-portfolio',
        details: 'Personal portfolio website',
        skills: ['NextJS', 'React', 'Tailwind', 'Vercel'],
        image_path: '/images/personal_portfolio.png',
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
