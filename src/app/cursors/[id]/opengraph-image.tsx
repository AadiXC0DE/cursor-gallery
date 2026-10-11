import { ImageResponse } from "next/og";
import { CURSORS } from "@/registry/cursors";
import { staticCursorSvg } from "@/lib/static-svg";
import { logoMark, ogFonts, svgDataUri } from "@/lib/og";

export const alt = "A cursor from Cursor Gallery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Long names step down so they fit the left column in two lines at most.
const nameSize = (name: string) =>
  name.length > 13 ? 64 : name.length > 8 ? 84 : 112;

export function generateStaticParams() {
  return CURSORS.map((cursor) => ({ id: cursor.id }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cursor = CURSORS.find((item) => item.id === id);
  const index = cursor ? CURSORS.indexOf(cursor) : 0;
  const svg = staticCursorSvg(id);
  const art = svg ? svgDataUri(svg) : null;
  const [fonts, logo] = await Promise.all([ogFonts(), logoMark()]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#0a0a0a",
        color: "#fafafa",
        padding: 64,
        fontFamily: "Geist",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingRight: 48,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src={logo} width={40} height={40} alt="" />
          <div
            style={{
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Cursor Gallery
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 5,
              color: "#737373",
              textTransform: "uppercase",
            }}
          >
            {`Cursor ${String(index + 1).padStart(3, "0")} of ${CURSORS.length}`}
          </div>
          <div
            style={{
              fontSize: nameSize(cursor?.name ?? ""),
              fontWeight: 900,
              letterSpacing: -4,
              // Geist has no italic, so lean it the way the site's CSS does.
              transform: "skewX(-9deg)",
              lineHeight: 0.95,
              textTransform: "uppercase",
            }}
          >
            {cursor?.name ?? "Cursor"}
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              lineHeight: 1.35,
              color: "#a3a3a3",
              maxWidth: 620,
            }}
          >
            {cursor?.description ?? ""}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #262626",
            background: "#000",
            padding: "16px 20px",
            // Keeps the registry URL on one line, even for the longest ids.
            fontSize: id.length > 12 ? 18 : 20,
            fontWeight: 500,
            fontFamily: "Geist Mono",
            lineHeight: 1.4,
            color: "#d4d4d4",
          }}
        >
          <div style={{ color: "#737373" }}>npx shadcn@latest add</div>
          <div>{`cursor-gallery.vercel.app/registry/${id}`}</div>
        </div>
      </div>
      <div
        style={{
          width: 420,
          height: 502,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #262626",
          backgroundImage: "radial-gradient(#2a2a2a 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      >
        {art ? (
          <img src={art} width={380} height={380} alt="" />
        ) : (
          <div
            style={{
              fontSize: 150,
              fontWeight: 900,
              transform: "skewX(-9deg)",
              letterSpacing: -6,
              color: "#404040",
            }}
          >
            {String(index + 1).padStart(3, "0")}
          </div>
        )}
      </div>
    </div>,
    { ...size, fonts }
  );
}
