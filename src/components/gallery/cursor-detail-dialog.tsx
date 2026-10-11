"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CursorDefinition } from "@/registry/cursors";
import { useCursorActions } from "@/components/cursor/cursor-context";
import { CursorPreview } from "@/components/gallery/cursor-preview";
import { CodeBlock } from "@/components/code/code-block";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

const REGISTRY = "https://cursor-gallery.vercel.app/registry";

interface CursorDetailDialogProps {
  cursor: CursorDefinition | null;
  isOpen: boolean;
  onClose: () => void;
}

type Source = { react: string; vanilla: string | null };

const componentName = (id: string) =>
  id
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("") + "Cursor";

function CopyButton({
  text,
  label = "Copy",
  compact = false,
  className,
}: {
  text: string;
  label?: string;
  /** Icon only on small screens */
  compact?: boolean;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          // Clipboard can be blocked; the text is still selectable.
        }
      }}
      className={cn(
        "inline-flex items-center gap-2 h-9 px-3 text-[10px] font-black uppercase tracking-[0.2em] border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors",
        className
      )}
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-500" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
      <span className={compact ? "hidden sm:inline" : undefined}>
        {copied ? "Copied" : label}
      </span>
    </button>
  );
}

/** The install command, with line-break hints at the slashes. */
function InstallCommand({ id }: { id: string }) {
  return (
    <>
      npx shadcn@latest add{" "}
      <span className="whitespace-nowrap">
        https://cursor-gallery.vercel.app/
      </span>
      <wbr />
      registry/
      <wbr />
      {id}
    </>
  );
}

function CodePanel({
  code,
  language,
  loading,
}: {
  code?: string;
  language: string;
  loading: boolean;
}) {
  return (
    <div className="bg-[#0a0a0a] border border-white/10 h-[52vh] md:h-[440px] overflow-hidden">
      {loading || !code ? (
        <div className="p-6 space-y-4">
          <Skeleton className="h-3.5 w-[60%] bg-white/5" />
          <Skeleton className="h-3.5 w-[80%] bg-white/5" />
          <Skeleton className="h-3.5 w-[40%] bg-white/5" />
          <Skeleton className="h-3.5 w-[70%] bg-white/5" />
        </div>
      ) : (
        <CodeBlock
          code={code}
          language={language}
          className="[&>div]:!text-[12px]"
        />
      )}
    </div>
  );
}

export function CursorDetailDialog({
  cursor,
  isOpen,
  onClose,
}: CursorDetailDialogProps) {
  const { lockCursor, unlockCursor } = useCursorActions();
  const [source, setSource] = useState<Source | null>(null);
  const [isLoadingCode, setIsLoadingCode] = useState(false);
  const [activeTab, setActiveTab] = useState("react");
  const [previewHover, setPreviewHover] = useState(false);

  // Keep the chosen cursor on screen while the dialog is open
  useEffect(() => {
    if (isOpen && cursor) {
      lockCursor(cursor.id);
    } else {
      unlockCursor();
    }
    return () => unlockCursor();
  }, [isOpen, cursor, lockCursor, unlockCursor]);

  useEffect(() => {
    if (!cursor || !isOpen) return;

    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoadingCode(true);

    fetch(`/api/cursor-code?id=${cursor.id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: Source) => {
        if (!cancelled) {
          setSource(data);
          setIsLoadingCode(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error("Failed to load cursor code:", err);
          setSource(null);
          setIsLoadingCode(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [cursor, isOpen]);

  if (!cursor) return null;

  const hasVanilla = !!source?.vanilla && !isLoadingCode;
  const tab = activeTab === "vanilla" && !hasVanilla ? "react" : activeTab;
  const install = `npx shadcn@latest add ${REGISTRY}/${cursor.id}`;
  const name = componentName(cursor.id);
  const usage = `import { CustomCursor } from "@/components/cursor/custom-cursor";
import ${name} from "@/components/cursor/${cursor.id}";

// In your root layout, inside <body>
<CustomCursor cursor={${name}} />`;
  const activeCode =
    tab === "react"
      ? source?.react
      : tab === "vanilla"
        ? (source?.vanilla ?? undefined)
        : undefined;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-5xl w-[95vw] max-h-[92vh] p-0 gap-0 overflow-hidden rounded-none border border-border bg-background shadow-2xl flex flex-col">
        <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar grid md:grid-cols-[300px_1fr]">
          {/* Left: the cursor itself, and how to get it */}
          <aside className="border-b md:border-b-0 md:border-r border-border flex flex-col">
            <div className="p-6 md:p-8 pb-0 md:pb-0">
              <DialogTitle className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-foreground leading-none pr-8">
                {cursor.name}
              </DialogTitle>
              <DialogDescription className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {cursor.description}
              </DialogDescription>
              <p className="mt-3 font-mono text-[11px] text-muted-foreground/70">
                {cursor.tags.map((tag) => `#${tag}`).join("  ")}
              </p>
            </div>

            <div
              data-cursor-preview
              className="relative h-44 md:h-52 mx-6 md:mx-8 mt-6 border border-border cursor-none"
            >
              <CursorPreview
                id={cursor.id}
                live
                hovering={previewHover}
                scale={2.6}
                className="absolute inset-0"
              />
            </div>
            <button
              type="button"
              onMouseEnter={() => setPreviewHover(true)}
              onMouseLeave={() => setPreviewHover(false)}
              onFocus={() => setPreviewHover(true)}
              onBlur={() => setPreviewHover(false)}
              className="mx-6 md:mx-8 h-11 border border-t-0 border-border text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
            >
              Hover here to test
            </button>

            <div className="p-6 md:p-8 mt-auto flex flex-col gap-3">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                Install
              </p>
              <div className="bg-[#0a0a0a] border border-white/10 p-3 font-mono text-[11px] leading-relaxed text-white/80 break-words">
                <span className="text-white/30 select-none">$ </span>
                <InstallCommand id={cursor.id} />
              </div>
              <CopyButton
                text={install}
                label="Copy command"
                className="self-start"
              />
            </div>
          </aside>

          {/* Right: source */}
          <div className="p-6 md:p-8 min-w-0">
            <Tabs value={tab} onValueChange={setActiveTab} className="w-full">
              <div className="flex items-center justify-between gap-4 mb-4">
                <TabsList className="h-9 p-0 bg-transparent rounded-none gap-1">
                  {[
                    { value: "react", label: "React" },
                    ...(hasVanilla
                      ? [{ value: "vanilla", label: "Vanilla JS" }]
                      : []),
                    { value: "setup", label: "Setup" },
                  ].map((item) => (
                    <TabsTrigger
                      key={item.value}
                      value={item.value}
                      className="h-9 px-2.5 sm:px-4 rounded-none border border-transparent text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground data-[state=active]:border-foreground data-[state=active]:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    >
                      {item.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {activeCode && <CopyButton text={activeCode} compact />}
              </div>

              <TabsContent value="react" className="mt-0">
                <CodePanel
                  code={source?.react}
                  language="tsx"
                  loading={isLoadingCode}
                />
                {!isLoadingCode && source && !source.vanilla && (
                  <p className="mt-3 text-xs text-muted-foreground">
                    React only for now. The illustrated cursors also come as a
                    plain HTML snippet.
                  </p>
                )}
              </TabsContent>

              <TabsContent value="vanilla" className="mt-0">
                <CodePanel
                  code={source?.vanilla ?? undefined}
                  language="html"
                  loading={isLoadingCode}
                />
                <p className="mt-3 text-xs text-muted-foreground">
                  No React, no dependencies. Paste it anywhere in the page body.
                </p>
              </TabsContent>

              <TabsContent value="setup" className="mt-0">
                <ol className="flex flex-col gap-8">
                  <li className="flex flex-col gap-3">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        01
                      </span>
                      <h4 className="font-black text-lg uppercase italic tracking-tighter">
                        Install
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Adds{" "}
                      <code className="font-mono text-foreground">
                        components/cursor/{cursor.id}.tsx
                      </code>
                      , the shared{" "}
                      <code className="font-mono text-foreground">
                        custom-cursor.tsx
                      </code>{" "}
                      host, and framer-motion if you don&apos;t have it.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:items-stretch">
                      <div className="flex-1 bg-[#0a0a0a] border border-white/10 px-4 py-3 font-mono text-[12px] text-white/80 break-words">
                        <span className="text-white/30 select-none">$ </span>
                        <InstallCommand id={cursor.id} />
                      </div>
                      <CopyButton text={install} className="h-auto py-2.5" />
                    </div>
                  </li>
                  <li className="flex flex-col gap-3">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        02
                      </span>
                      <h4 className="font-black text-lg uppercase italic tracking-tighter">
                        Mount it once
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Put it in your root layout. It follows the pointer, hides
                      the system cursor while it&apos;s mounted, switches to its
                      hover state over links and buttons, and does nothing on
                      touch screens.
                    </p>
                    <div className="relative bg-[#0a0a0a] border border-white/10">
                      <CopyButton
                        text={usage}
                        className="absolute top-2 right-2 z-10 bg-[#0a0a0a] border-white/10 text-white/50 hover:text-white hover:border-white/40"
                      />
                      <CodeBlock
                        code={usage}
                        language="tsx"
                        className="[&>div]:!text-[12px] [&>div]:!pr-28"
                      />
                    </div>
                  </li>
                  {hasVanilla && (
                    <li className="flex flex-col gap-2">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-muted-foreground">
                          03
                        </span>
                        <h4 className="font-black text-lg uppercase italic tracking-tighter">
                          Not on React?
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        The Vanilla JS tab has the same cursor as one snippet
                        with no dependencies. Paste it into any page.
                      </p>
                    </li>
                  )}
                </ol>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
