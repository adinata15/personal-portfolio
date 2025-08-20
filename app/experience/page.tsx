'use client';

import { ExpDetails, ListItem } from '@/components/list-item';

const experiences: ExpDetails[] = [
    {
        duration: '2024 - Present',
        role: 'Software Engineer',
        company: 'Vital Thin Film Materials',
        company_link: 'http://www.vitaltfm.com/',
        details:
            'Set up and configure complete IT infrastructure with Meraki network and Dell servers for the Malaysia plant',
        skills: ['Server Administration', 'Linux', 'C++'],
    },
    {
        duration: '2023 - 2024',
        role: 'Embedded Software Engineer',
        company: 'Continental Automotive',
        company_link: 'https://www.continental-automotive.com/',
        details:
            'Develop communications API between embedded car modules and server via HTTP and MQTT connection in C and C++ fulfilling ASPICE standard',
        skills: ['C', 'C++'],
    },
    {
        duration: '2021 - 2022',
        role: 'Business Analyst Intern',
        company: 'Workforce Optimizer',
        company_link: 'https://workforceoptimizer.com/',
        details:
            'Create API to predict manpower demand for upcoming date in a certain location based on past data using LSTM model in Python',
        skills: ['Python', 'Tensorflow', 'Pandas'],
    },
];

export default function ExperiencePage() {
    return (
        <div className="flex-col min-h-screen py-8 px-10 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-950 dark:via-blue-950 dark:to-purple-950">
            <h1 className="text-5xl mb-20 font-bold text-gray-800 dark:text-gray-200 text-center">
                Experience
            </h1>
            <ol className="group/list inline-block">
                {experiences.map((experience) => {
                    return <ListItem {...experience} />;
                })}
            </ol>
        </div>
    );
}
