import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jaydee Tarpeh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <p
          style={{
            fontSize: 28,
            color: "#6b7280",
            margin: "0 0 20px 0",
          }}
        >
          jayd.ee
        </p>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
            margin: "0 0 24px 0",
            lineHeight: 1.1,
          }}
        >
          Jaydee Tarpeh
        </h1>
        <p
          style={{
            fontSize: 28,
            color: "#9ca3af",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Builder · Toronto · Born in Liberia
        </p>
      </div>
    ),
    { ...size }
  );
}
