import { CURSOR_ARTWORK, type ArtworkNode } from "@/lib/cursor-artwork";

// SVG attributes that keep their camel case.
const CAMEL = [
  "viewBox",
  "gradientUnits",
  "gradientTransform",
  "clipPathUnits",
];
const attribute = (name: string) =>
  CAMEL.includes(name)
    ? name
    : name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
const escape = (value: string | number) =>
  String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");

/** The pose a node rests in: a loop's frozen frame, or a hover node at rest. */
function restingPose(node: ArtworkNode) {
  if (node.loop) {
    return (
      node.loop.static ??
      Object.fromEntries(
        Object.entries(node.loop.values).map(([key, frames]) => [
          key,
          frames[0],
        ])
      )
    );
  }
  if (node.hover) {
    return Object.fromEntries(
      Object.keys(node.hover).map((key) => [
        key,
        key.startsWith("scale") ? 1 : 0,
      ])
    );
  }
  return null;
}

/**
 * The same composition CSS uses with transform-origin: move to the origin,
 * translate, scale, rotate, move back.
 */
function transform(pose: Record<string, number>, origin = "17px 17px") {
  const [ox, oy] = origin.split(" ").map((part) => parseFloat(part));
  const sx = (pose.scale ?? 1) * (pose.scaleX ?? 1);
  const sy = (pose.scale ?? 1) * (pose.scaleY ?? 1);
  return `translate(${ox} ${oy}) translate(${pose.x ?? 0} ${pose.y ?? 0}) scale(${sx} ${sy}) rotate(${pose.rotate ?? 0}) translate(${-ox} ${-oy})`;
}

function render(node: ArtworkNode): string {
  const attrs: Record<string, string | number> = { ...node.attrs };
  const pose = restingPose(node);
  if (pose) {
    attrs.transform = transform(pose, node.origin);
    if (pose.opacity !== undefined) attrs.opacity = pose.opacity;
    if (pose.strokeDashoffset !== undefined)
      attrs.strokeDashoffset = pose.strokeDashoffset;
  }
  const serialized = Object.entries(attrs)
    .map(([name, value]) => `${attribute(name)}="${escape(value)}"`)
    .join(" ");
  const children = (node.children ?? []).map(render).join("");
  return `<${node.tag} ${serialized}>${children}</${node.tag}>`;
}

/**
 * A still SVG of an illustrated cursor, for social cards. Returns null for
 * cursors that are drawn with DOM elements rather than artwork data.
 */
export function staticCursorSvg(id: string) {
  const artwork = CURSOR_ARTWORK[id];
  if (!artwork) return null;
  // A little room around the 34px box for glows and floating details.
  return `<svg xmlns="http://www.w3.org/2000/svg" width="420" height="420" viewBox="-4 -4 42 42" fill="none">${artwork.nodes.map(render).join("")}</svg>`;
}
