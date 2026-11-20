/// <reference types="vitest/globals" />
import { siteLines } from '@/lib/site-lines';

const specialties =
    'Software engineer specializing in full-stack web, distributed backends, and secure cloud platforms.';

describe('siteLines', () => {
    it('shares one specialties sentence across the hero and social previews', () => {
        expect(siteLines.specialties).toBe(specialties);
    });

    it('frames the specialties sentence for the root and home descriptions', () => {
        expect(siteLines.rootDescription).toBe(
            'Portfolio of Adi Nata — software engineer specializing in full-stack web, distributed backends, and secure cloud platforms.',
        );
        expect(siteLines.homeDescription).toBe(
            'Adi Nata — software engineer specializing in full-stack web, distributed backends, and secure cloud platforms. Explore projects, experience, and resume.',
        );
    });

    it('extends the specialties sentence with sectors and interests in about', () => {
        expect(siteLines.about).toBe(
            'Software engineer specializing in full-stack web, distributed backends, and secure cloud platforms across manufacturing, research, and government. Outside of work, I hike, read, and draw inspiration from nature for how I build.',
        );
    });

    it('keeps the Experience and Projects subject clauses', () => {
        expect(siteLines.experienceDescription).toBe(
            'Professional experience, education, and certifications of Adi Nata — research engineering, manufacturing software, and secure cloud platforms.',
        );
        expect(siteLines.projectsDescription).toBe(
            'Selected software projects by Adi Nata — laser tag IoT systems, e-commerce, and this portfolio.',
        );
    });

    it('names the person and portfolio once', () => {
        expect(siteLines.name).toBe('Adi Nata');
        expect(siteLines.portfolioTitle).toBe("Adi Nata's Portfolio");
    });

    it('keeps the hero kicker and footer tagline unchanged', () => {
        expect(siteLines.heroKicker).toBe('Passionate about technology, nature, and cool stories.');
        expect(siteLines.footerTagline).toBe('Software Engineer · Nature Enthusiast · Bookworm');
    });
});
