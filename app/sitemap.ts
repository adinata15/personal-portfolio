import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://adinata.dev';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ['', '/experiences', '/projects', '/resume'];

    return routes.map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));
}
