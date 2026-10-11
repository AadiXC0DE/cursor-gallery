"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Copies `text`, or the rendered text of the element with id `target`, so
 * long source files don't have to be sent to the browser twice.
 */
export function CopyButton({
  text,
  target,
  label = "Copy",
  className,
}: {
  text?: string;
  target?: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        const value =
          text ??
          (target ? document.getElementById(target)?.innerText : undefined);
        if (!value) return;
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          // Clipboard can be blocked; the text is still selectable.
        }
      }}
      className={cn(
        "inline-flex items-center gap-2 h-10 px-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors",
        className
      )}
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-400" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
      <span>{copied ? "Copied" : label}</span>
    </button>
  );
}
