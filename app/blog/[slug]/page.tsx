import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";

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

  return (
    <>
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
