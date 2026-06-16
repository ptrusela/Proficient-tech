import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { Starfield } from "@/components/Starfield";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Proficient",
  description:
    "Notes on underwriting, payment infrastructure, and building instead of reselling — from the team at Proficient.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <RevealObserver />
      <NavBar />

      <section className="hero blog-hero" id="top">
        <Starfield id="stars" count={160} opacity={0.7} />
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow">From Proficient</span>
            <h1>
              Notes on payments, <em>built from the inside.</em>
            </h1>
            <p className="lead">
              Underwriting, infrastructure, and the difference between reselling a platform and
              owning one &mdash; written by the team that builds it.
            </p>
          </div>
        </div>
      </section>

      <section className="block blog-list">
        <div className="wrap">
          <div className="blog-grid">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card reveal"
              >
                <span className="eyebrow dim">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta mono">
                  <span>{formatDate(post.date)}</span>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
