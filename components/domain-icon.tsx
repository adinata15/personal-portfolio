import type { SVGProps } from 'react';
import type { Domain } from '@/data/home';

export const interestNames = ['technology', 'nature', 'stories'] as const;

type InterestName = (typeof interestNames)[number];

const svgAttrs: SVGProps<SVGSVGElement> = {
    className: 'h-8 w-8 text-accent',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
};

const domainIcons: Record<Domain['icon'], { circle?: boolean; paths: string[] }> = {
    web: {
        circle: true,
        paths: ['M3 12h18', 'M12 3a15 15 0 0 1 0 18', 'M12 3a15 15 0 0 0 0 18'],
    },
    backend: {
        paths: [
            'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z',
            'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z',
        ],
    },
    cloud: {
        paths: ['M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6.1 9.1 4.5 4.5 0 0 0 7 18Z'],
    },
};

const interestIconData: Record<InterestName, { rect?: SVGProps<SVGRectElement>; paths: string[] }> =
    {
        technology: {
            rect: { x: '3', y: '4', width: '18', height: '14', rx: '2' },
            paths: ['M8 21h8', 'M12 18v3'],
        },
        nature: {
            paths: [
                'M12 21V11',
                'M12 11c-3-1-6-4-6-8 5 0 6 4 6 8Z',
                'M12 11c3-1 6-4 6-8-5 0-6 4-6 8Z',
            ],
        },
        stories: {
            paths: ['M4 5a2 2 0 0 1 2-2h11v16H6a2 2 0 0 0-2 2V5Z', 'M17 3v16a2 2 0 0 1-2 2'],
        },
    };

export function DomainIcon({ icon }: { icon: Domain['icon'] }) {
    const { circle, paths } = domainIcons[icon];

    return (
        <svg {...svgAttrs}>
            {circle && <circle cx="12" cy="12" r="9" />}
            {paths.map((d) => (
                <path key={d} d={d} />
            ))}
        </svg>
    );
}

export function InterestIcon({ name }: { name: InterestName }) {
    const { rect, paths } = interestIconData[name];

    return (
        <svg {...svgAttrs}>
            {rect && <rect {...rect} />}
            {paths.map((d) => (
                <path key={d} d={d} />
            ))}
        </svg>
    );
}
