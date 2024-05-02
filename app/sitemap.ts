import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.netmount.cn/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.netmount.cn/download/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ]
}