import { codeToHtml } from "shiki";
import { cn } from "@/lib/utils";

const escape = (code: string) =>
  code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * Highlights code at build time so it ships in the HTML, readable by search
 * engines and anything else that doesn't run JavaScript.
 */
export async function ServerCode({
  code,
  language,
  id,
  className,
  highlight = true,
}: {
  code: string;
  language: string;
  id?: string;
  className?: string;
  /** Long generated snippets read fine without colors and weigh far less. */
  highlight?: boolean;
}) {
  let html = `<pre class="text-white/80"><code>${escape(code)}</code></pre>`;
  if (highlight) {
    try {
      // Code panels are always dark, in both site themes.
      html = await codeToHtml(code, { lang: language, theme: "github-dark" });
    } catch {
      // Fall back to the plain version above.
    }
  }
  return (
    <div
      id={id}
      className={cn(
        "p-5 md:p-6 text-[12px] md:text-[13px] leading-relaxed overflow-auto [&>pre]:!bg-transparent [&>pre]:!m-0",
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
