import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://imgconvert.gotodev.ma/",
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://imgconvert.gotodev.ma/fr",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
