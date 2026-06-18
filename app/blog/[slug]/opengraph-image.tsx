import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const title = post?.title ?? "Proficient Blog";
  const category = post?.category ?? "Insights";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        <div style={{ color: "#fff", fontSize: 28, fontWeight: 700, letterSpacing: "0.15em" }}>
          PROFICIENT
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#6b7280",
              fontSize: 18,
              marginBottom: 24,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {category}
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 52,
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
        </div>
        <div style={{ color: "#6b7280", fontSize: 18 }}>proficient.tech/blog</div>
      </div>
    ),
    { ...size }
  );
}
