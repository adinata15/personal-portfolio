export type Page = {
    name: string;
    path: string;
};

export const pages: Page[] = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experiences' },
    { name: 'Projects', path: '/projects' },
];
