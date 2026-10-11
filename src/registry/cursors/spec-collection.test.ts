import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { CURSOR_ARTWORK } from "@/lib/cursor-artwork";
import { generateVanillaCursor } from "@/lib/generate-vanilla-cursor";
import { CURSORS, FEATURED_CURSORS, FEATURED_IDS } from "./index";

describe("illustrated collection", () => {
  const ids = Object.keys(CURSOR_ARTWORK);

  it("registers every illustrated cursor", () => {
    expect(ids).toHaveLength(50);
    for (const id of ids) {
      expect(
        CURSORS.some((cursor) => cursor.id === id),
        id
      ).toBe(true);
    }
  });

  it("keeps the featured selection ordered, flagged and unique", () => {
    expect(new Set(FEATURED_IDS).size).toBe(FEATURED_IDS.length);
    expect(FEATURED_CURSORS.map((cursor) => cursor.id)).toEqual(FEATURED_IDS);
    expect(
      CURSORS.filter((cursor) => cursor.featured)
        .map((cursor) => cursor.id)
        .sort()
    ).toEqual([...FEATURED_IDS].sort());
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

  const SHAPES = /<(path|circle|ellipse|rect|line|polygon|polyline)\b/g;
  const renderFrozen = (id: string) =>
    renderToStaticMarkup(
      createElement(CURSORS.find((cursor) => cursor.id === id)!.component, {
        x: 17,
        y: 17,
        isStatic: true,
      })
    );

  it("draws shaded illustrations rather than flat outlines", () => {
    for (const id of ids) {
      const markup = renderFrozen(id);
      expect(markup, id).toMatch(/<(linearGradient|radialGradient)\b/);
      expect(markup, id).toMatch(/(fill|stroke)="url\(#/);
      expect(markup, id).not.toContain("<text");
    }
  });

  it("exports the same shapes in the vanilla snippet as the React component", () => {
    for (const id of ids) {
      const react = renderFrozen(id).match(SHAPES)?.length;
      const vanilla = generateVanillaCursor(id)!.match(SHAPES)?.length;
      expect(react, id).toBeGreaterThan(0);
      expect(vanilla, id).toBe(react);
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
