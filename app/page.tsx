'use client';

import { useState, useEffect } from 'react';
import { triggerHref } from '@/lib/utils';
import Image from 'next/image';
import { Notification } from '@/components/notification';

export default function MainPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [isNotificationOn, setNotificationOn] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const showNotification = () => {
        setNotificationOn(true);
        setTimeout(() => setNotificationOn(false), 5000);
    };

    const skills = [
        'C',
        'C++',
        'Python',
        'C#',
        'JavaScript',
        'React',
        'Node.js',
        'Docker',
        'Kubernetes',
    ];

    const domains = [
        {
            title: 'Web Development',
            icon: '🌐',
            description: 'Full-stack web applications with modern frameworks',
        },
        { title: 'IoT Systems', icon: '📡', description: 'Connected devices and smart solutions' },
        {
            title: 'Embedded Systems',
            icon: '🔧',
            description: 'Low-level programming and hardware integration',
        },
    ];

    const socials = [
        {
            title: 'Github',
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    className="h-16 w-16"
                    aria-hidden="true"
                >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
            ),
            link: 'https://github.com/adinata15',
        },
        {
            title: 'LinkedIn',
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-14 w-14"
                    aria-hidden="true"
                >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
            ),
            link: 'https://www.linkedin.com/in/adinatatan/',
        },
        {
            title: 'OrchidID',
            svg: (
                <svg
                    className="h-12 w-12"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
                </svg>
            ),
            link: 'https://orcid.org/0009-0004-4517-6795',
        },
        {
            title: 'Email',
            svg: (
                <svg
                    className="h-16 w-16 stroke-gray-800 hover:stroke-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.1"
                        d="M3.09097 6.4173C3 6.76072 3 7.21507 3 7.99997V16C3 16.9319 3 17.3978 3.15224 17.7653C3.35523 18.2554 3.74458 18.6447 4.23463 18.8477C4.60218 19 5.06812 19 6 19H18C18.9319 19 19.3978 19 19.7654 18.8477C20.2554 18.6447 20.6448 18.2554 20.8478 17.7653C21 17.3978 21 16.9319 21 16V7.99997C21 7.21506 21 6.76072 20.909 6.4173C20.852 6.5418 20.7683 6.65652 20.6585 6.75255L13.9755 12.6002C12.8444 13.5899 11.1556 13.5899 10.0245 12.6002L3.3415 6.75255C3.23175 6.65652 3.14804 6.5418 3.09097 6.4173Z"
                    />
                    <path
                        d="M3 8C3 7.06812 3 6.60218 3.15224 6.23463C3.35523 5.74458 3.74458 5.35523 4.23463 5.15224C4.60218 5 5.06812 5 6 5V5H18V5C18.9319 5 19.3978 5 19.7654 5.15224C20.2554 5.35523 20.6448 5.74458 20.8478 6.23463C21 6.60218 21 7.06812 21 8V16C21 16.9319 21 17.3978 20.8478 17.7654C20.6448 18.2554 20.2554 18.6448 19.7654 18.8478C19.3978 19 18.9319 19 18 19V19H6V19C5.06812 19 4.60218 19 4.23463 18.8478C3.74458 18.6448 3.35523 18.2554 3.15224 17.7654C3 17.3978 3 16.9319 3 16V8Z"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4 6L10.683 11.8476C11.437 12.5074 12.563 12.5074 13.317 11.8476L20 6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            link: 'mailto:adinata.softwareengineer@gmail.com',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-950 dark:via-blue-950 dark:to-purple-950">
            {/* Floating Notification Section */}
            <Notification isOpen={isNotificationOn} message="Resume download started" />

            {/* Hero Section */}
            <main className="max-w-6xl mx-auto px-8 py-16">
                <div
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="text-center mb-16">
                        <div className="w-32 h-32 mx-auto mb-8 bg-gray-200 rounded-full flex items-center justify-center border-4 border-orange-400 shadow-lg overflow-hidden">
                            <Image
                                src="/images/personal.png"
                                alt="Personal Portrait"
                                width={185}
                                height={185}
                            />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                            Hi, I{"'"}m
                            <span className="text-green-600 dark:text-green-400"> Adi Nata</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                            Software Engineer passionate about{' '}
                            <span className="text-blue-600 dark:text-blue-400 font-semibold">
                                technology
                            </span>
                            ,
                            <span className="text-green-600 dark:text-green-400 font-semibold">
                                {' '}
                                nature
                            </span>
                            , and
                            <span className="text-purple-600 dark:text-purple-400 font-semibold">
                                {' '}
                                cool stories
                            </span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => triggerHref('#domains')}
                                className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 transition-colors"
                            >
                                View My Work
                            </button>
                            <button
                                onClick={() => triggerHref('#contact')}
                                className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 transition-colors"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <section id="about" className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-md ring-1 ring-gray-900/10 dark:ring-blue-400/10">
                        <div>
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                                I am a versatile software engineer with a passion for creating
                                innovative solutions across multiple domains. When I am not coding,
                                you will find me exploring the great outdoors, reading books, or
                                planning my next adventure.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                My love for nature inspires my approach to technology - building
                                sustainable, efficient, and harmonious systems that make a positive
                                impact.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center items-center space-x-4">
                                <span className="flex-col text-gray-600 dark:text-gray-400">
                                    <p className="mb-4 text-4xl">💻</p>
                                    <p className="italic">Technology</p>
                                </span>
                                <span className="text-gray-600 dark:text-gray-400">•</span>
                                <span className="flex-col text-gray-600 dark:text-gray-400">
                                    <p className="mb-4 text-4xl">🏔️</p>
                                    <p className="italic">Nature</p>
                                </span>
                                <span className="text-gray-600 dark:text-gray-400">•</span>
                                <span className="flex-col text-gray-600 dark:text-gray-400">
                                    <p className="mb-4 text-4xl">📚</p>
                                    <p className="italic">Stories</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
                        Technical Skills
                    </h2>
                    <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-md ring-1 ring-gray-900/10 dark:ring-blue-400/10">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {skills.map((skill, index) => (
                                <span
                                    key={skill}
                                    className={`px-4 py-2 rounded-full text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 ${
                                        index % 3 === 0
                                            ? 'bg-blue-500 hover:bg-blue-600'
                                            : index % 3 === 1
                                              ? 'bg-green-500 hover:bg-green-600'
                                              : 'bg-purple-500 hover:bg-purple-600'
                                    }`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Domains Section */}
                <section id="domains" className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
                        Areas of Expertise
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {domains.map((domain) => (
                            <div
                                key={domain.title}
                                onClick={() => {}}
                                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ring-1 ring-gray-900/10 dark:ring-blue-400/10 hover:ring-gray-900/30 hover:dark:ring-blue-400/30"
                            >
                                <div className="text-4xl mb-4 text-center">{domain.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 text-center">
                                    {domain.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-center">
                                    {domain.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="grid w-full place-items-center my-6 grid-col-1 md:grid-cols-3 gap-6">
                        <button
                            onClick={() => triggerHref('/experiences')}
                            className="px-8 py-3 w-48 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 transition-colors"
                        >
                            View Experiences
                        </button>
                        <button
                            onClick={() => triggerHref('/projects')}
                            className="px-8 py-3 w-48 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 transition-colors"
                        >
                            View Projects
                        </button>
                        <a
                            href="/pdfs/resume.pdf"
                            download="AdiNata's resume.pdf"
                            onClick={showNotification}
                            className="px-8 py-3 w-48 text-center border-2 border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 transition-colors"
                        >
                            View Resume
                        </a>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="text-center">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-600 dark:to-blue-600 rounded-2xl p-8 text-white shadow-lg">
                        <h2 className="text-3xl font-bold mb-4">
                            Let{"'"}s Build Something Amazing Together
                        </h2>
                        <p className="text-xl mb-6 opacity-90">
                            Ready to embark on your next technological adventure? Contact me now!
                        </p>
                        <div
                            aria-label="social-media"
                            className="grid grid-rows-2 grid-cols-2 gap-y-10 sm:grid-rows-1 sm:grid-cols-4  place-items-center h-24"
                        >
                            {socials.map((social) => (
                                <button
                                    key={social.title}
                                    onClick={() => triggerHref(social.link, true)}
                                    className="fill-gray-800 h-auto hover:fill-gray-600"
                                >
                                    {social.svg}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
