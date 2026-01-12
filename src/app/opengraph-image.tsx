import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Cursor Gallery";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Background Grid */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "radial-gradient(#333 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.2,
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(120, 119, 198, 0.3), transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "white",
            marginRight: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: "20px solid black",
              transform: "rotate(-45deg)",
              marginTop: -5,
              marginLeft: 5,
            }}
          />
        </div>
        <h1 style={{ fontSize: 80, fontWeight: 800, margin: 0 }}>
          Cursor Gallery
        </h1>
      </div>

      <p style={{ fontSize: 30, color: "#888", margin: 0 }}>
        Animated cursors for your next project
      </p>
    </div>,
    {
      ...size,
    }
  );
}
