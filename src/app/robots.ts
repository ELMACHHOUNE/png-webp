import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://imgconvert.gotodev.ma/sitemap.xml",
    host: "https://imgconvert.gotodev.ma",
  };
}
