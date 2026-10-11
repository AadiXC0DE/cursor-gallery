import type { MetadataRoute } from "next";

const BASE_URL = "https://cursor-gallery.vercel.app";

// Search engines and AI agents are both welcome. The registry (/r, /registry)
// and the llms.txt guides are meant to be read by tools, so they stay open.
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: AI_AGENTS, allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
