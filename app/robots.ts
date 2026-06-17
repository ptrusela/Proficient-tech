import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/redo", "/redo/"],
      },
    ],
    sitemap: "https://proficient.tech/sitemap.xml",
  };
}
