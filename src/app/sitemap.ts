import type { MetadataRoute } from "next";
import { CURSORS } from "@/registry/cursors";

const BASE_URL = "https://cursor-gallery.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: BASE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${BASE_URL}/cursors`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...CURSORS.map((cursor) => ({
      url: `${BASE_URL}/cursors/${cursor.id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${BASE_URL}/sponsor`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
