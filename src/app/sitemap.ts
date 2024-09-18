import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
          cs: `${process.env.NEXT_PUBLIC_BASE_URL}/cs`,
          pl: `${process.env.NEXT_PUBLIC_BASE_URL}/pl`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/contact`,
          cs: `${process.env.NEXT_PUBLIC_BASE_URL}/cs/contact`,
          pl: `${process.env.NEXT_PUBLIC_BASE_URL}/pl/contact`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/gallery`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/gallery`,
          cs: `${process.env.NEXT_PUBLIC_BASE_URL}/cs/gallery`,
          pl: `${process.env.NEXT_PUBLIC_BASE_URL}/pl/gallery`,
        },
      },
    },
  ];
}
