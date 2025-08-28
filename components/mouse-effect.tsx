'use client';
import { useState, useEffect } from 'react';

export function MouseEffect() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div
            className="fixed size-96 rounded-full bg-[radial-gradient(circle,rgba(40,195,90,0.1)_5%,rgba(40,255,90,0)_60%)] dark:bg-[radial-gradient(circle,rgba(40,140,210,0.1)5%,rgba(40,100,180,0)_60%)] -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none"
            style={{
                left: mousePos.x,
                top: mousePos.y,
            }}
        />
    );
}
