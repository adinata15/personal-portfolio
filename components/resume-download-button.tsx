'use client';

import { useState } from 'react';
import { Notification } from '@/components/notification';

const ctaClass =
    'px-8 py-3 w-48 text-center border-2 border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2';

export function ResumeDownloadButton() {
    const [isNotificationOn, setNotificationOn] = useState(false);

    const showNotification = () => {
        setNotificationOn(true);
        window.setTimeout(() => setNotificationOn(false), 5000);
    };

    return (
        <>
            <Notification isOpen={isNotificationOn} message="Resume download started" />
            <a
                href="/pdfs/resume.pdf"
                download="AdiNata's resume.pdf"
                onClick={showNotification}
                className={ctaClass}
            >
                View Resume
            </a>
        </>
    );
}
