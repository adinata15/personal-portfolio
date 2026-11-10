'use client';

import { useEffect, useRef } from 'react';

export function MouseEffect() {
    const glowRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<number | null>(null);
    const posRef = useRef({ x: -9999, y: -9999 });

    useEffect(() => {
        const glow = glowRef.current;
        if (!glow) return;

        const media = window.matchMedia('(prefers-reduced-motion: reduce)');
        const finePointer = window.matchMedia('(pointer: fine)');

        if (media.matches || !finePointer.matches) {
            glow.style.display = 'none';
            return;
        }

        const flush = () => {
            glow.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
            frameRef.current = null;
        };

        const handleMouseMove = (event: MouseEvent) => {
            posRef.current = { x: event.clientX, y: event.clientY };
            if (frameRef.current == null) {
                frameRef.current = window.requestAnimationFrame(flush);
            }
        };

        const handleMotionChange = () => {
            glow.style.display = media.matches ? 'none' : 'block';
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        media.addEventListener('change', handleMotionChange);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            media.removeEventListener('change', handleMotionChange);
            if (frameRef.current != null) window.cancelAnimationFrame(frameRef.current);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            className="pointer-events-none fixed left-0 top-0 z-0 size-96 rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.18)_5%,transparent_60%)] will-change-transform"
            aria-hidden="true"
        />
    );
}
