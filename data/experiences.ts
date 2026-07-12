export type ExpDetails = {
    duration: string;
    role: string;
    company: string;
    company_link: string;
    details: string;
    skills: string[];
};

export const experiences: ExpDetails[] = [
    {
        duration: '2026 - Present',
        role: 'Senior Research Engineer',
        company: 'A*STAR Singapore Institute of Manufacturing Technology',
        company_link: 'https://www.a-star.edu.sg/simtech',
        details:
            'Architect and develop software solutions for Singapore labs and manufacturing companies.',
        skills: ['Python', '.NET', 'Microservices'],
    },
    {
        duration: '2024 - 2025',
        role: 'Software Engineer',
        company: 'Vital Thin Film Materials',
        company_link: 'http://www.vitaltfm.com/',
        details:
            'Set up and configure complete IT infrastructure with Meraki network and Dell servers for the Malaysia plant.',
        skills: ['Server Administration', 'Linux', 'C++'],
    },
    {
        duration: '2023 - 2024',
        role: 'Embedded Software Engineer',
        company: 'Continental Automotive',
        company_link: 'https://www.continental-automotive.com/',
        details:
            'Develop communications API between embedded car modules and server via HTTP and MQTT in C and C++ fulfilling ASPICE standard.',
        skills: ['C', 'C++'],
    },
    {
        duration: '2021 - 2022',
        role: 'Business Analyst Intern',
        company: 'Workforce Optimizer',
        company_link: 'https://workforceoptimizer.com/',
        details:
            'Create API to predict manpower demand for upcoming dates in a location based on past data using an LSTM model in Python.',
        skills: ['Python', 'Tensorflow', 'Pandas'],
    },
];
