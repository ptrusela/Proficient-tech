import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { getAllPosts, getPostBySlug, formatDate, relatedPostsMap } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Proficient`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: [post.category],
      url: `https://proficient.tech/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedSlugs = relatedPostsMap[post.slug] ?? [];
  const relatedPosts = relatedSlugs
    .map((s) => allPosts.find((p) => p.slug === s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getPostBySlug>>[];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Proficient",
      url: "https://proficient.tech",
    },
    publisher: {
      "@type": "Organization",
      name: "Proficient",
      url: "https://proficient.tech",
      logo: {
        "@type": "ImageObject",
        url: "https://proficient.tech/assets/pt-mark.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://proficient.tech/blog/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://proficient.tech" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://proficient.tech/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://proficient.tech/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <RevealObserver />
      <NavBar />

      <article className="block post" id="top">
        <div className="wrap post-wrap">
          <Link href="/blog" className="post-back mono reveal">
            ← All articles
          </Link>
          <div className="post-head reveal">
            <span className="eyebrow dim">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="blog-meta mono">
              <span>{formatDate(post.date)}</span>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="post-body reveal">
            {post.body.map((block, i) => {
              if (block.type === "h3") {
                return <h3 key={i}>{block.text}</h3>;
              }
              if (block.type === "list") {
                return (
                  <ul key={i}>
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{block.text}</p>;
            })}
          </div>
          {relatedPosts.length > 0 && (
            <div className="post-related reveal">
              <span className="post-related-label mono">Related reading</span>
              <div className="post-related-grid">
                {relatedPosts.map((rp) => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`} className="post-related-card">
                    <span className="eyebrow dim">{rp.category}</span>
                    <h4>{rp.title}</h4>
                    <span className="mono post-related-meta">{formatDate(rp.date)}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div className="post-share reveal">
            <span className="mono">Share</span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://proficient.tech/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-link"
            >
              LinkedIn →
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://proficient.tech/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-link"
            >
              X →
            </a>
          </div>
          <div className="post-cta reveal">
            <p className="lead">Have a merchant we should look at?</p>
            <a className="btn btn-primary" href="/#contact">
              Start the conversation <span className="arr">→</span>
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
