import { socials } from '@/data/home';
import { focusRing } from '@/lib/styles';
import { cn } from '@/lib/utils';

const iconClass = 'h-8 w-8';

type SocialTitle = (typeof socials)[number]['title'];

type IconPath = {
    d: string;
    opacity?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: string;
    strokeLinecap?: 'round';
    strokeLinejoin?: 'round';
};

const iconData: Record<SocialTitle, { viewBox: string; className?: string; paths: IconPath[] }> = {
    GitHub: {
        viewBox: '0 0 30 30',
        paths: [
            {
                d: 'M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z',
            },
        ],
    },
    LinkedIn: {
        viewBox: '0 0 24 24',
        paths: [
            {
                d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z',
            },
        ],
    },
    ORCID: {
        viewBox: '0 0 24 24',
        paths: [
            {
                d: 'M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z',
            },
        ],
    },
    Email: {
        viewBox: '0 0 24 24',
        className: 'stroke-current fill-none',
        paths: [
            {
                d: 'M3.09097 6.4173C3 6.76072 3 7.21507 3 7.99997V16C3 16.9319 3 17.3978 3.15224 17.7653C3.35523 18.2554 3.74458 18.6447 4.23463 18.8477C4.60218 19 5.06812 19 6 19H18C18.9319 19 19.3978 19 19.7654 18.8477C20.2554 18.6447 20.6448 18.2554 20.8478 17.7653C21 17.3978 21 16.9319 21 16V7.99997C21 7.21506 21 6.76072 20.909 6.4173C20.852 6.5418 20.7683 6.65652 20.6585 6.75255L13.9755 12.6002C12.8444 13.5899 11.1556 13.5899 10.0245 12.6002L3.3415 6.75255C3.23175 6.65652 3.14804 6.5418 3.09097 6.4173Z',
                opacity: '0.1',
                fill: 'currentColor',
                stroke: 'none',
            },
            {
                d: 'M3 8C3 7.06812 3 6.60218 3.15224 6.23463C3.35523 5.74458 3.74458 5.35523 4.23463 5.15224C4.60218 5 5.06812 5 6 5V5H18V5C18.9319 5 19.3978 5 19.7654 5.15224C20.2554 5.35523 20.6448 5.74458 20.8478 6.23463C21 6.60218 21 7.06812 21 8V16C21 16.9319 21 17.3978 20.8478 17.7654C20.6448 18.2554 20.2554 18.6448 19.7654 18.8478C19.3978 19 18.9319 19 18 19V19H6V19C5.06812 19 4.60218 19 4.23463 18.8478C3.74458 18.6448 3.35523 18.2554 3.15224 17.7654C3 17.3978 3 16.9319 3 16V8Z',
                strokeWidth: '2',
                strokeLinejoin: 'round',
            },
            {
                d: 'M4 6L10.683 11.8476C11.437 12.5074 12.563 12.5074 13.317 11.8476L20 6',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
            },
        ],
    },
};

function SocialIcon({ title }: { title: SocialTitle }) {
    const data = iconData[title];

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={data.viewBox}
            className={cn(iconClass, data.className)}
            aria-hidden="true"
        >
            {data.paths.map((path, index) => (
                <path key={index} {...path} />
            ))}
        </svg>
    );
}

export function SocialLinks() {
    return (
        <nav
            aria-label="Social links"
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center md:place-items-start"
        >
            {socials.map((social) => (
                <a
                    key={social.title}
                    href={social.link}
                    className={cn(
                        'inline-flex h-11 w-11 items-center justify-center fill-foreground text-foreground hover:fill-accent hover:text-accent transition-colors duration-200 rounded-md cursor-pointer',
                        focusRing,
                    )}
                    aria-label={
                        social.external ? `${social.title} (opens in a new tab)` : 'Email Adi Nata'
                    }
                    {...(social.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                >
                    <SocialIcon title={social.title} />
                </a>
            ))}
        </nav>
    );
}
