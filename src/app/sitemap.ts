import type {MetadataRoute} from 'next'


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.jefferstech.com.br/',
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 1,
        }
    ]
}