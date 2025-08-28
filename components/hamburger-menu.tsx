'use client';

import { Dispatch, SetStateAction } from 'react';

export function HamburgerMenu({ setExpanded }: { setExpanded: Dispatch<SetStateAction<boolean>> }) {
    return (
        <div className="w-full">
            <section
                onClick={() => setExpanded((prev: boolean) => !prev)}
                className="w-9 h-9 flex-col justify-center content-center rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 space-y-1"
            >
                <span className="block justify-self-center h-0.5 w-5 bg-gray-600"></span>
                <span className="block justify-self-center h-0.5 w-5 bg-gray-600"></span>
                <span className="block justify-self-center h-0.5 w-5 bg-gray-600"></span>
            </section>
        </div>
    );
}
