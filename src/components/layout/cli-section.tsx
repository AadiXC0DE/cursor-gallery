"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";

const PACKAGE_MANAGERS = [
  { name: "npm", command: "npx" },
  { name: "pnpm", command: "pnpm dlx" },
  { name: "yarn", command: "yarn dlx" },
  { name: "bun", command: "bunx --bun" },
];

export function CLISection() {
  const [activePm, setActivePm] = useState("npm");
  const [copied, setCopied] = useState(false);

  const currentPm = PACKAGE_MANAGERS.find((pm) => pm.name === activePm) || PACKAGE_MANAGERS[0];
  const fullCommand = `${currentPm.command} shadcn@latest add https://cursor-gallery.vercel.app/registry/cursor-float`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy command: ", err);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
        <div className="relative bg-[#0d0d0d] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5 gap-3">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
              </div>
              <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                Terminal
              </span>
            </div>
            
            <div className="flex p-0.5 bg-white/5 rounded-lg border border-white/10">
              {PACKAGE_MANAGERS.map((pm) => (
                <button
                  key={pm.name}
                  onClick={() => setActivePm(pm.name)}
                  className={cn(
                    "px-3 py-1 text-[10px] font-bold rounded-md transition-all",
                    activePm === pm.name
                      ? "bg-white/10 text-white shadow-sm"
                      : "text-white/40 hover:text-white/60"
                  )}
                >
                  {pm.name}
                </button>
              ))}
            </div>
          </div>
          <div className="p-6 md:p-8 font-mono text-sm md:text-base min-h-[160px] flex items-start group/block relative">
            <button
              onClick={handleCopy}
              className="absolute top-6 right-6 p-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all text-white/40 hover:text-white opacity-0 group-hover/block:opacity-100 shadow-2xl z-10"
              title="Copy to clipboard"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
            <div className="flex items-start gap-4 w-full pr-14">
              <span className="text-primary mt-1 shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="w-4 h-4"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
              <div className="space-y-4 flex-1">
                <p className="text-white/90 leading-relaxed font-bold break-all">
                  {currentPm.command} shadcn@latest add{" "}
                  <span className="text-primary">
                    https://cursor-gallery.vercel.app/registry/cursor-float
                  </span>
                </p>
                <div className="space-y-1">
                  <p className="text-white/40 text-[11px] italic">
                    # Installs premium animated cursor
                  </p>
                  <p className="text-white/40 text-[11px] italic">
                    # Using {activePm} package manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
