export type SkillGroup = {
    title: string;
    skills: string[];
};

export const skillGroups: SkillGroup[] = [
    {
        title: 'Programming Languages',
        skills: ['TypeScript', 'JavaScript', 'Python', 'C', 'C++', 'C#'],
    },
    {
        title: 'Web Development',
        skills: ['React', 'Svelte', 'Node.js', 'HTML', 'Tailwind', 'Spring Boot', '.NET'],
    },
    {
        title: 'Databases',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    },
    {
        title: 'DevOps',
        skills: ['Git', 'Docker', 'Kubernetes', 'Terraform', 'AWS', 'OCI', 'GitHub Actions'],
    },
];

export const coreCompetencies =
    'Problem Solving · Fast Learner · Communication · Collaboration · Adaptability · Mobility';

export const domains = [
    {
        title: 'Full-Stack Web',
        icon: '🌐',
        description: 'End-to-end web applications with React, Node.js, and modern frameworks',
    },
    {
        title: 'Distributed Backends',
        icon: '⚙️',
        description: 'Microservices, messaging, and orchestration across heterogeneous systems',
    },
    {
        title: 'Secure Cloud Platforms',
        icon: '☁️',
        description: 'AWS and Kubernetes platforms with Terraform, CI/CD, and strong security',
    },
];

export const socials = [
    {
        title: 'GitHub',
        link: 'https://github.com/adinata15',
        external: true,
    },
    {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/adinatatan/',
        external: true,
    },
    {
        title: 'ORCID',
        link: 'https://orcid.org/0009-0004-4517-6795',
        external: true,
    },
    {
        title: 'Email',
        link: 'mailto:adinata.softwareengineer@gmail.com',
        external: false,
    },
] as const;
