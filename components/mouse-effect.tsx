'use client';

export function MouseEffect({ ...mousePos }: { x: number; y: number }) {
    return (
        // dark:bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_50%)]
        // bg-[radial-gradient(circle,rgba(40,100,180,0.1)_10%,rgba(40,140,210,0.3)_90%)]
        <div
            className="fixed size-96 rounded-full bg-[radial-gradient(circle,rgba(40,195,90,0.1)_5%,rgba(40,255,90,0)_60%)] dark:bg-[radial-gradient(circle,rgba(40,140,210,0.1)5%,rgba(40,100,180,0)_60%)] -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none"
            style={{
                left: mousePos.x,
                top: mousePos.y,
            }}
        />
    );
}
