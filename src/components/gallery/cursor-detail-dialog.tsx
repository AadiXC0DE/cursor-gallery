"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CursorDefinition } from "@/registry/cursors"
import { useCursor } from "@/components/cursor/cursor-context"
import { CodeBlock } from "@/components/code/code-block"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Check, Copy, Monitor, Code2, Zap } from "lucide-react"

interface CursorDetailDialogProps {
  cursor: CursorDefinition | null
  isOpen: boolean
  onClose: () => void
}

export function CursorDetailDialog({ cursor, isOpen, onClose }: CursorDetailDialogProps) {
  const { setCursor, resetCursor } = useCursor()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      resetCursor()
    }
  }, [isOpen, resetCursor])

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!cursor) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-6xl w-[95vw] h-[95vh] md:h-[85vh] p-0 overflow-hidden border-none bg-background shadow-2xl flex flex-col md:flex-row">
        
        {/* Left: Interactive Preview */}
        <div 
          className="group relative flex-[1] md:flex-[1.2] bg-muted/20 flex items-center justify-center overflow-hidden cursor-none min-h-[250px] md:min-h-0 border-b md:border-b-0 md:border-r border-border/50"
          onMouseEnter={() => setCursor(cursor.id)}
          onMouseLeave={() => resetCursor()}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,currentColor_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.08] dark:opacity-[0.03]" />
          
          <div className="relative z-10 text-center pointer-events-none select-none px-6">
            <div className="w-12 h-12 rounded-full bg-background/80 shadow-sm flex items-center justify-center mb-4 mx-auto border border-border group-hover:border-primary/50 transition-colors">
              <Monitor className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-xl font-black tracking-tighter uppercase italic text-foreground mb-2">Live Playzone</p>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest opacity-60">Move mouse here to test "{cursor.name}"</p>
          </div>

          <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-border group-hover:border-primary/30 transition-colors" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-border group-hover:border-primary/30 transition-colors" />
        </div>

        {/* Right: Details & Implementation */}
        <div className="flex-[1.5] flex flex-col min-w-0 bg-background overflow-hidden relative">
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="p-6 md:p-10 space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <DialogTitle className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-foreground">
                    {cursor.name}
                  </DialogTitle>
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
                      {cursor.tags[0]}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm md:text-base font-medium leading-relaxed max-w-2xl">
                  {cursor.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cursor.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-[10px] font-bold uppercase tracking-wider border border-border/50">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <Tabs defaultValue="react" className="w-full">
                <TabsList className="w-fit mb-6 bg-muted p-1 rounded-lg border border-border/50">
                  <TabsTrigger value="react" className="gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    <Code2 className="w-3.5 h-3.5" />
                    React
                  </TabsTrigger>
                  <TabsTrigger value="vanilla" className="gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    <Zap className="w-3.5 h-3.5" />
                    Vanilla
                  </TabsTrigger>
                </TabsList>

                <div className="relative">
                  <TabsContent value="react" className="mt-0 outline-none">
                    <div className="relative group/code">
                      <div className="absolute top-4 right-4 z-20">
                        <Button 
                          variant="secondary" 
                          size="sm" 
                          className="h-8 px-3 text-[10px] font-bold uppercase tracking-widest shadow-md active:scale-95 transition-all bg-background/80 backdrop-blur hover:bg-background"
                          onClick={() => handleCopy(cursor.code.react)}
                        >
                          {copied ? <Check className="w-3 h-3 mr-1.5" /> : <Copy className="w-3 h-3 mr-1.5" />}
                          {copied ? "Copied" : "Copy Source"}
                        </Button>
                      </div>
                      <div className="rounded-xl overflow-hidden border border-border/50 bg-[#0d0d0d] shadow-inner">
                        <CodeBlock code={cursor.code.react} language="tsx" className="max-h-[400px]" />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="vanilla" className="mt-0 outline-none">
                    <div className="relative group/code">
                      <div className="absolute top-4 right-4 z-20">
                        <Button 
                          variant="secondary" 
                          size="sm" 
                          className="h-8 px-3 text-[10px] font-bold uppercase tracking-widest shadow-md active:scale-95 transition-all bg-background/80 backdrop-blur hover:bg-background"
                          onClick={() => handleCopy(cursor.code.vanilla)}
                        >
                          {copied ? <Check className="w-3 h-3 mr-1.5" /> : <Copy className="w-3 h-3 mr-1.5" />}
                          {copied ? "Copied" : "Copy Source"}
                        </Button>
                      </div>
                      <div className="rounded-xl overflow-hidden border border-border/50 bg-[#0d0d0d] shadow-inner">
                        <CodeBlock code={cursor.code.vanilla} language="javascript" className="max-h-[400px]" />
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
          
          <div className="p-6 border-t bg-muted/30 mt-auto">
             <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Framework: Framer Motion</span>
                </div>
                <Button 
                  variant="link" 
                  className="text-[10px] font-bold uppercase tracking-[0.15em] p-0 h-auto hover:text-primary text-muted-foreground"
                  onClick={() => handleCopy("npm install framer-motion")}
                >
                  Copy Clean Install
                </Button>
             </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
