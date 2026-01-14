"use client";

import * as React from "react";
import { codeToHtml } from "shiki";
import { cn } from "@/lib/utils";

import { Skeleton } from "@/components/ui/skeleton";

interface CodeBlockProps {
  code: string;
  language: string;
  className?: string;
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const [html, setHtml] = React.useState<string>("");
  const [isHighlighting, setIsHighlighting] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    async function highlight() {
      setIsHighlighting(true);
      try {
        const out = await codeToHtml(code, {
          lang: language,
          themes: {
            light: "github-light",
            dark: "github-dark",
          },
        });
        if (!cancelled) {
          setHtml(out);
          setIsHighlighting(false);
        }
      } catch (e) {
        console.error("Shiki highlight error", e);
        if (!cancelled) {
          setHtml(`<pre><code>${code}</code></pre>`);
          setIsHighlighting(false);
        }
      }
    }
    highlight();
    return () => {
      cancelled = true;
    };
  }, [code, language]);

  return (
    <div className={cn("relative group h-full", className)}>
      {isHighlighting ? (
        <div className="p-6 space-y-4 h-full bg-[#0d0d0d]">
          <Skeleton className="h-4 w-[60%] bg-white/5" />
          <Skeleton className="h-4 w-[80%] bg-white/5" />
          <Skeleton className="h-4 w-[40%] bg-white/5" />
          <Skeleton className="h-4 w-[70%] bg-white/5" />
        </div>
      ) : (
        <div
          className="p-6 text-xs md:text-sm overflow-auto [&>pre]:!bg-transparent [&>pre]:!m-0 no-scrollbar h-full"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </div>
  );
}
