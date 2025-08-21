'use client';
import { useEffect } from 'react';

export default function ResumePage() {
    useEffect(() => {
        // Define a function to resize the embedded PDF
        const resizeEmbed = () => {
            // Retrieve the embedded PDF element by its ID
            const embed = document.getElementById('pdfResume');
            if (embed) {
                // Get the height of the window
                const windowHeight = window.innerHeight;
                // Set the height of the embedded PDF to match the window height
                embed.style.height = `${windowHeight}px`;
            }
        };

        resizeEmbed();
        window.addEventListener('resize', resizeEmbed);
        return () => window.removeEventListener('resize', resizeEmbed);
    }, []);

    return (
        <div className="w-screen h-screen overflow-hidden">
            <object
                id="pdfResume"
                data="/pdfs/resume.pdf"
                type="application/pdf"
                className="w-full h-full border-none"
            />
        </div>
    );
}
