import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
            Payment Processing Partner · Los Angeles
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            We architect payments for the places others won&apos;t go.
          </div>
        </div>
        <div style={{ color: "#6b7280", fontSize: 18 }}>proficient.tech</div>
      </div>
    ),
    { ...size }
  );
}
