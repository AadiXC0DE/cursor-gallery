import { ImageResponse } from "next/og";
import { CURSORS } from "@/registry/cursors";
import { staticCursorSvg } from "@/lib/static-svg";
import { logoMark, ogFonts, svgDataUri } from "@/lib/og";

export const alt =
  "Cursor Gallery: animated cursors for React, installed with the shadcn CLI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The cursors shown along the bottom of the card.
const STRIP = [
  "hot-air-balloon",
  "penguin",
  "disco-ball",
  "jellyfish",
  "astronaut",
  "boba",
  "kaleidoscope",
];

export default async function Image() {
  const [fonts, logo] = await Promise.all([ogFonts(), logoMark()]);
  const art = STRIP.map((id) => svgDataUri(staticCursorSvg(id)!));

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0a",
        backgroundImage: "radial-gradient(#1f1f1f 1.5px, transparent 1.5px)",
        backgroundSize: "30px 30px",
        color: "#fafafa",
        fontFamily: "Geist",
        padding: "52px 60px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <img src={logo} width={44} height={44} alt="" />
          <div
            style={{
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Cursor Gallery
          </div>
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: 4,
            color: "#737373",
            textTransform: "uppercase",
          }}
        >
          {`${CURSORS.length} cursors / shadcn registry / MIT`}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 92,
            fontWeight: 900,
            lineHeight: 0.92,
            whiteSpace: "nowrap",
            letterSpacing: -5,
            textTransform: "uppercase",
            // Geist has no italic, so lean it the way the hero does.
            transform: "skewX(-9deg)",
            marginLeft: 12,
          }}
        >
          <div>Cursors that</div>
          <div style={{ color: "#737373" }}>command attention</div>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            fontWeight: 500,
            color: "#a3a3a3",
          }}
        >
          Animated cursors for React. Hover to try, install with one command.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          margin: "0 -60px",
          borderTop: "1px solid #262626",
        }}
      >
        {art.map((src, index) => (
          <div
            key={STRIP[index]}
            style={{
              flex: 1,
              height: 164,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderLeft: index ? "1px solid #262626" : "none",
            }}
          >
            <img src={src} width={112} height={112} alt="" />
          </div>
        ))}
      </div>
    </div>,
    { ...size, fonts }
  );
}
