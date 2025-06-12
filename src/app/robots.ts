import  {MetadataRoute} from 'next'


export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/'
        },
        sitemap: 'https://www.jefferstech.com.br/sitemap.xml',
    }
}