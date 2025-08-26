'use client';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 px-8">
            <div className="max-w-6xl mx-auto text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="w-8 h-8 min-w-8 bg-orange-300 rounded-full flex items-center justify-center overflow-hidden">
                        <Image
                            src="/images/personal.jpeg"
                            alt="Personal Portrait"
                            width={185}
                            height={185}
                        />
                    </div>
                    <span className="text-lg font-semibold">
                        Created with Next and Tailwind by Adi Nata
                    </span>
                </div>
                <p className="text-gray-400 dark:text-gray-500">
                    Software Engineer • Nature Enthusiast • Bookworm
                </p>
            </div>
        </footer>
    );
}
