'use client';

import { useEffect, useRef, useState } from 'react';
import { Notification } from '@/components/notification';
import { ctaSecondaryClass } from '@/lib/styles';
import { cn } from '@/lib/utils';

export function ResumeDownloadButton({ className }: { className?: string }) {
    const [isNotificationOn, setNotificationOn] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
        };
    }, []);

    const showNotification = () => {
        if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
        setNotificationOn(true);
        timeoutRef.current = window.setTimeout(() => setNotificationOn(false), 5000);
    };

    return (
        <>
            <Notification isOpen={isNotificationOn} message="Resume download started" />
            <a
                href="/pdfs/resume.pdf"
                download="AdiNata's resume.pdf"
                onClick={showNotification}
                className={cn(ctaSecondaryClass, 'w-48 shrink-0', className)}
            >
                Download PDF
            </a>
        </>
    );
}
