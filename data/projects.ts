export type ProjectDetails = {
    title: string;
    project_link: string;
    details: string;
    skills: string[];
    image_path: string;
};

export const projects: ProjectDetails[] = [
    {
        title: 'Background Remover',
        project_link: 'https://github.com/adinata15/bg_remover',
        details:
            'Local CLI tools to convert images to PNG with alpha, detect subject masks, and cut out backgrounds using U²-Net via rembg',
        skills: ['Python', 'rembg', 'ONNX'],
        image_path: '/images/bgremover_workflow.png',
    },
    {
        title: 'Laser Tag',
        project_link: 'https://github.com/adinata15/LaserTag',
        details:
            'A multiplayer laser tag system using Python and C, integrating IoT devices with a real-time game server over secure SSH-tunneled TCP connections.',
        skills: ['Python', 'C', 'Arduino', 'Multithreading', 'Networking', 'IoT'],
        image_path: '/images/laserTag_arch.png',
    },
    {
        title: 'BestFit',
        project_link: 'https://github.com/adinata15/Orbital_2020',
        details:
            'An e-commerce apparel platform built with React, Express, MongoDB, and Node, integrating AWS S3, Stripe, and Python sklearn size-recommendation models.',
        skills: ['React', 'MongoDB', 'JavaScript', 'Node', 'AWS S3', 'Python', 'Stripe', 'Heroku'],
        image_path: '/images/bestfit_logo.png',
    },
    {
        title: 'Personal Portfolio',
        project_link: 'https://github.com/adinata15/personal-portfolio',
        details:
            'A personal portfolio site built with Next.js and Tailwind CSS, showcasing projects, experience, and a downloadable resume.',
        skills: ['Next.js', 'React', 'Tailwind', 'Vercel'],
        image_path: '/images/personal_portfolio.png',
    },
];
