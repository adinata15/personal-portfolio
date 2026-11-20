import type { MetadataRoute } from 'next';
import { pages } from '@/data/pages';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    return pages.map((page) => ({
        url: page.path === '/' ? siteUrl : `${siteUrl}${page.path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: page.path === '/' ? 1 : 0.8,
    }));
}
