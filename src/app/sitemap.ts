import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return [
    // English URLs
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/gallery`,
      lastModified: new Date(),
    },

    // Czech (cs) URLs
    {
      url: `${baseUrl}/cs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cs/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cs/gallery`,
      lastModified: new Date(),
    },

    // Polish (pl) URLs
    {
      url: `${baseUrl}/pl`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pl/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pl/gallery`,
      lastModified: new Date(),
    },
  ];
}
