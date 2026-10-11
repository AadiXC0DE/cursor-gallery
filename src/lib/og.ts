import fs from "fs/promises";
import path from "path";

// Shared bits for the generated share images. The fonts live in the repo
// (Geist, SIL Open Font License) so builds never depend on the network.
const FONTS = [
  { name: "Geist", file: "geist-500.ttf", weight: 500 },
  { name: "Geist", file: "geist-900.ttf", weight: 900 },
  { name: "Geist Mono", file: "geist-mono-500.ttf", weight: 500 },
] as const;

const read = async (...segments: string[]) => {
  const buffer = await fs.readFile(path.join(process.cwd(), ...segments));
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength
  ) as ArrayBuffer;
};

let fonts:
  | Promise<{ name: string; data: ArrayBuffer; weight: 500 | 900 }[]>
  | undefined;

export function ogFonts() {
  fonts ??= Promise.all(
    FONTS.map(async ({ name, file, weight }) => ({
      name,
      weight,
      data: await read("src", "assets", "fonts", file),
    }))
  );
  return fonts;
}

export const svgDataUri = (svg: string) =>
  `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

/** The site's favicon mark, for use inside share images. */
export async function logoMark() {
  const svg = await fs.readFile(
    path.join(process.cwd(), "src", "app", "icon.svg"),
    "utf-8"
  );
  return svgDataUri(svg);
}
