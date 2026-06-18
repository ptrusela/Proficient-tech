import type { MetadataRoute } from "next";

const LLM_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...LLM_CRAWLERS.map((ua) => ({
        userAgent: ua,
        allow: "/",
        disallow: ["/redo", "/redo/"],
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/redo", "/redo/"],
      },
    ],
    sitemap: "https://proficient.tech/sitemap.xml",
  };
}
