import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { CURSOR_ARTWORK } from "@/lib/cursor-artwork";
import { generateVanillaCursor } from "@/lib/generate-vanilla-cursor";
import { CURSORS } from "./index";

describe("written-spec collection", () => {
  const ids = Object.keys(CURSOR_ARTWORK);

  it("exposes all 25 cursors in the featured gallery", () => {
    expect(ids).toHaveLength(25);
    const featuredIds = CURSORS.filter((cursor) => cursor.featured)
      .slice(0, 100)
      .map((cursor) => cursor.id);
    for (const id of ids) {
      expect(featuredIds, id).toContain(id);
    }
  });

  it("registers the object names and source ids after the two renames", () => {
    expect(
      CURSORS.find((cursor) => cursor.id === "drafting-compass")?.name
    ).toBe("Drafting Compass");
    expect(CURSORS.find((cursor) => cursor.id === "newtons-cradle")?.name).toBe(
      "Newton's Cradle"
    );
    expect(ids).not.toContain("blueprint");
    expect(ids).not.toContain("cradle");
    expect(
      CURSORS.some((cursor) => ["blueprint", "cradle"].includes(cursor.id))
    ).toBe(false);
  });

  it("keeps the small silhouettes within twelve bold visible shapes", () => {
    for (const id of ids) {
      const Component = CURSORS.find((cursor) => cursor.id === id)!.component;
      const markup = renderToStaticMarkup(
        createElement(Component, { x: 17, y: 17, isStatic: true })
      );
      const visible = markup.replace(/<defs>.*?<\/defs>/g, "");
      const shapes =
        visible.match(/<(path|circle|ellipse|rect|line|polygon|polyline)\b/g) ||
        [];
      expect(shapes.length, id).toBeGreaterThan(0);
      expect(shapes.length, id).toBeLessThanOrEqual(12);
      expect(visible, id).not.toContain("<text");
      for (const [, width] of visible.matchAll(/stroke-width="([\d.]+)"/g)) {
        expect(Number(width), `${id} stroke`).toBeGreaterThanOrEqual(1.75);
      }
    }
  });

  it("renders every static silhouette at 34px and ignores hover while frozen", () => {
    for (const id of ids) {
      const Component = CURSORS.find((cursor) => cursor.id === id)!.component;
      const render = (isHovering: boolean) =>
        renderToStaticMarkup(
          createElement(Component, {
            x: 17,
            y: 17,
            isStatic: true,
            isHovering,
          })
        );
      const idle = render(false);
      expect(idle, id).toContain('viewBox="0 0 34 34"');
      expect(idle, id).toContain('width="34" height="34"');
      expect(idle, id).toContain('aria-hidden="true"');
      expect(render(true), `${id} static hover`).toBe(idle);
    }
  });

  it("exports complete vanilla snippets for the entire collection", () => {
    for (const id of ids) {
      const snippet = generateVanillaCursor(id)!;
      expect(snippet, id).toContain(`<div data-gallery-cursor="${id}">`);
      expect(snippet, id).toContain('viewBox="0 0 34 34"');
      expect(snippet, id).toContain("<script>");
      expect(snippet, id).toContain("prefers-reduced-motion: reduce");
      expect(snippet, id).not.toContain("COMING SOON");
      expect(snippet, id).not.toContain("framer-motion");
    }
    expect(generateVanillaCursor("unknown-cursor")).toBeUndefined();
  });
});
