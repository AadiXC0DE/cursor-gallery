import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import { CURSORS } from "./index";

describe("cursor registry", () => {
  it("has a healthy number of cursors", () => {
    expect(CURSORS.length).toBeGreaterThanOrEqual(80);
  });

  it("every cursor has a unique id", () => {
    const ids = CURSORS.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every cursor has the required metadata", () => {
    for (const cursor of CURSORS) {
      expect(cursor.id, "id").toBeTruthy();
      expect(cursor.id, `id "${cursor.id}" must be kebab-case`).toMatch(
        /^[a-z0-9]+(-[a-z0-9]+)*$/
      );
      expect(cursor.name, `${cursor.id} name`).toBeTruthy();
      expect(cursor.description, `${cursor.id} description`).toBeTruthy();
      expect(
        cursor.tags.length,
        `${cursor.id} should have at least one tag`
      ).toBeGreaterThan(0);
      expect(cursor.component, `${cursor.id} component`).toBeDefined();
      expect(cursor.code.react, `${cursor.id} react code`).toBeDefined();
      expect(cursor.code.vanilla, `${cursor.id} vanilla code`).toBeDefined();
    }
  });

  it("every cursor id maps to a source file (used by the API routes)", () => {
    for (const cursor of CURSORS) {
      const filePath = path.join(__dirname, `${cursor.id}.tsx`);
      expect(
        fs.existsSync(filePath),
        `missing source file for "${cursor.id}" — expected src/registry/cursors/${cursor.id}.tsx`
      ).toBe(true);
    }
  });

  it("featured cursors are a curated subset", () => {
    const featured = CURSORS.filter((c) => c.featured);
    expect(featured.length).toBeGreaterThan(0);
    expect(featured.length).toBeLessThan(CURSORS.length);
  });

  it("the default cursor exists and is first", () => {
    expect(CURSORS[0].id).toBe("default");
  });
});
