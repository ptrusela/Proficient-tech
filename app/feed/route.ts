import { getAllPosts } from "@/lib/blog";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>https://proficient.tech/blog/${post.slug}</link>
      <guid isPermaLink="true">https://proficient.tech/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${post.category}</category>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Proficient Blog</title>
    <link>https://proficient.tech/blog</link>
    <description>Notes on payments, built from the inside. Underwriting, infrastructure, and building payment systems for every merchant type.</description>
    <language>en-us</language>
    <atom:link href="https://proficient.tech/feed" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
