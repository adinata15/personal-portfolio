'use client';

import { Dispatch, SetStateAction } from 'react';

export function HamburgerMenu({
    expanded,
    setExpanded,
    controlsId,
}: {
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
    controlsId: string;
}) {
    return (
        <button
            type="button"
            aria-expanded={expanded}
            aria-controls={controlsId}
            aria-label={expanded ? 'Close menu' : 'Open menu'}
            onClick={() => setExpanded((prev) => !prev)}
            className="flex w-9 h-9 flex-col items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 space-y-1"
        >
            <span className="block h-0.5 w-5 bg-gray-600" aria-hidden="true" />
            <span className="block h-0.5 w-5 bg-gray-600" aria-hidden="true" />
            <span className="block h-0.5 w-5 bg-gray-600" aria-hidden="true" />
        </button>
    );
}
