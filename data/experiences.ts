export type ExpDetails = {
    duration: string;
    role: string;
    company: string;
    company_link?: string;
    details?: string[];
    skills?: string[];
};

export const experiences: ExpDetails[] = [
    {
        duration: 'Jan 2026 - Present',
        role: 'Senior Research Engineer',
        company: 'A*STAR Singapore Institute of Manufacturing Technology',
        company_link: 'https://www.a-star.edu.sg/simtech',
        details: [
            'Owned end-to-end delivery of a secure data-sharing platform connecting more than 20 institutes with more than 1500 users, from requirements gathering and architecture through implementation, testing, and deployment. Built the React frontend and MCP-compliant Node.js backend, provisioned AWS infrastructure with Terraform, and automated deployment through GitHub Actions.',
            'Designed and implemented a distributed task orchestration architecture composed of microservices, asynchronous messaging, and API-driven workflow coordination to automate execution across heterogeneous machine systems with .NET, Python, RabbitMQ and MySQL logging database.',
            'Developed SiLA compliant (gRPC-based) hardware adapter library to support standardized machine communication from underlying machine protocol (TCP/IP, serial communication, MODBUS).',
            'Deployed and maintained a containerized data pipeline using Kafka and Debezium CDC to capture, retain, and process manufacturing data from 300 sensors, with 500 ms end-to-end latency from machine data output to ingestion into the TimescaleDB data lake.',
            'Developed a laboratory equipment data pipeline with OpenTelemetry monitoring to process real-time telemetry, retain historical data, and track equipment health and pipeline performance.',
        ],
        skills: [
            'React',
            'Node.js',
            'Terraform',
            'AWS',
            'GitHub Actions',
            '.NET',
            'Python',
            'RabbitMQ',
            'MySQL',
            'gRPC',
            'Kafka',
            'TimescaleDB',
            'OpenTelemetry',
        ],
    },
    {
        duration: 'Apr 2024 - Dec 2025',
        role: 'Software Engineer',
        company: 'Vital Thin Film Materials',
        company_link: 'http://www.vitaltfm.com/',
        details: [
            'Owned full-stack MES development across React dashboards, Node.js backend services, and PostgreSQL databases, continuously streaming machine data and execution status to the frontend for real-time monitoring.',
            'Developed a C++ CNC data ingestion and backend service to process and store machine data in TimescaleDB and central NFS storage, alongside a monitoring service that detected OPC UA task-completion events and notified the Node.js backend via MQTT.',
            'Configured network infrastructure, including Meraki router and firewall setup, wireless heatmap creation, and VPN connection planning.',
            'Authored IT policies such as Disaster Recovery Plan, Incident Response Plan, and Cyber Security Awareness, ensuring compliance with ISO 27701.',
        ],
        skills: [
            'React',
            'Node.js',
            'PostgreSQL',
            'C++',
            'TimescaleDB',
            'OPC UA',
            'MQTT',
            'Meraki',
        ],
    },
    {
        duration: 'Feb 2023 - Mar 2024',
        role: 'Embedded Software Engineer',
        company: 'Continental Automotive',
        company_link: 'https://www.continental-automotive.com/',
        details: [
            'Developed a high-performance C and C++ network communication library to enable secure HTTP and MQTT connections between vehicle firmware and central servers, following Agile methodology.',
            'Enhanced and automated the firmware build process by optimizing the CMake command and creating bash scripts, reducing compilation and build time from 15 minutes to 5 minutes.',
        ],
        skills: ['C', 'C++', 'HTTP', 'MQTT', 'CMake'],
    },
    {
        duration: 'Jan 2022 - Jun 2022',
        role: 'Research Assistant',
        company: 'National University of Singapore',
        company_link: 'https://www.nus.edu.sg/',
        details: [
            'Developed a CNN model to detect malaria-infected cells with 91% accuracy and 95% precision.',
        ],
        skills: ['Python', 'CNN', 'Deep Learning'],
    },
    {
        duration: 'Jun 2021 - Dec 2021',
        role: 'Business Analyst Intern',
        company: 'Workforce Optimizer',
        company_link: 'https://workforceoptimizer.com/',
        details: [
            'Enhanced LSTM forecasting model for manpower allocation, reducing RMSE from 3.4 to 1.2.',
        ],
        skills: ['Python', 'LSTM', 'Tensorflow', 'Pandas'],
    },
    {
        duration: 'Jun 2020 - Jun 2022',
        role: 'Teaching Assistant',
        company: 'National University of Singapore',
        company_link: 'https://www.nus.edu.sg/',
        details: [
            'Mentored over 100 students in C programming with average student rating of 4.7/5.',
        ],
        skills: ['C', 'Teaching'],
    },
];

export const education: ExpDetails = {
    duration: '2018 - 2022',
    role: 'Computer Engineering',
    company: 'National University of Singapore (NUS)',
    company_link: 'https://www.nus.edu.sg/',
    details: [
        'Minor: Financial Mathematics',
        'Activities: Engineering Student Ambassadors',
        'CAP: 4.17/5 (Second Class Honours)',
    ],
};

export type Certification = {
    title: string;
    issuer: string;
    link?: string;
};

export const certifications: Certification[] = [
    {
        title: 'Certified Kubernetes Administrator (CKA)',
        issuer: 'Cloud Native Computing Foundation',
        link: 'https://www.cncf.io/training/certification/cka/',
    },
    {
        title: 'AWS Certified Solutions Architect - Professional',
        issuer: 'Amazon Web Services',
        link: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/',
    },
    {
        title: 'Claude Certified Architect - Foundations',
        issuer: 'Anthropic',
        link: 'https://www.anthropic.com/',
    },
    {
        title: 'OCI Certified Developer - Professional',
        issuer: 'Oracle',
        link: 'https://education.oracle.com/',
    },
    {
        title: 'Certified SAFe 6 Practitioner',
        issuer: 'Scaled Agile',
        link: 'https://scaledagile.com/',
    },
];
