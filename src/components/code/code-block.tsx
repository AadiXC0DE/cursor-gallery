"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { codeToHtml } from "shiki"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language: string
  className?: string
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const [html, setHtml] = React.useState<string>("")
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    async function highlight() {
      try {
          const out = await codeToHtml(code, {
            lang: language,
            themes: {
              light: "github-light",
              dark: "github-dark",
            },
          })
          setHtml(out)
      } catch (e) {
          console.error("Shiki highlight error", e)
          setHtml(`<pre><code>${code}</code></pre>`) // Fallback
      }
    }
    highlight()
  }, [code, language])

  const onCopy = () => {
    navigator.clipboard.writeText(code)
    setHasCopied(true)
    setTimeout(() => setHasCopied(false), 2000)
  }

  return (
    <div className={cn("relative group", className)}>
      <div 
        className="p-6 text-xs md:text-sm overflow-auto [&>pre]:!bg-transparent [&>pre]:!m-0 no-scrollbar max-h-[inherit]"
        dangerouslySetInnerHTML={{ __html: html }} 
      />
    </div>
  )
}
