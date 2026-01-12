"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CursorDefinition } from "@/registry/cursors"
import { useCursorActions } from "@/components/cursor/cursor-context"
import { CodeBlock } from "@/components/code/code-block"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Check, Copy, Code2, Zap, FileCode, Layers, MousePointer2, Terminal } from "lucide-react"

interface CursorDetailDialogProps {
  cursor: CursorDefinition | null
  isOpen: boolean
  onClose: () => void
}

export function CursorDetailDialog({ cursor, isOpen, onClose }: CursorDetailDialogProps) {
  const { lockCursor, unlockCursor } = useCursorActions()
  const [copied, setCopied] = useState(false)
  const [actualCode, setActualCode] = useState<{ react: string; vanilla: string } | null>(null)
  const [isLoadingCode, setIsLoadingCode] = useState(false)
  const [activeTab, setActiveTab] = useState("react")

  // Persist the selected cursor style while the dialog is open
  useEffect(() => {
    if (isOpen && cursor) {
      lockCursor(cursor.id)
    } else {
      unlockCursor()
    }
    return () => unlockCursor()
  }, [isOpen, cursor, lockCursor, unlockCursor])

  useEffect(() => {
    if (cursor && isOpen) {
      setIsLoadingCode(true)
      fetch(`/api/cursor-code?id=${cursor.id}`)
        .then(res => res.json())
        .then(data => {
          setActualCode(data)
          setIsLoadingCode(false)
        })
        .catch(err => {
          console.error('Failed to load cursor code:', err)
          setIsLoadingCode(false)
          setActualCode({ react: cursor.code.react, vanilla: cursor.code.vanilla })
        })
    }
  }, [cursor, isOpen])

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!cursor) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl w-[95vw] md:w-[65vw] max-h-[90vh] p-0 overflow-hidden border border-border/50 bg-background shadow-2xl flex flex-col">
        
        <div className="flex-1 flex flex-col min-h-0 bg-background relative overflow-hidden">
          {/* Header */}
          <div className="p-6 md:p-8 border-b bg-muted/10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <DialogTitle className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-foreground">
                    {cursor.name}
                  </DialogTitle>
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
                      {cursor.tags[0]}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-xl">
                  {cursor.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cursor.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-[10px] font-bold uppercase tracking-wider border border-border/50">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto no-scrollbar p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <TabsList className="bg-muted p-1 rounded-lg border border-border/50 h-10 w-full md:w-auto">
                  <TabsTrigger value="react" className="gap-2 px-4 h-full text-xs font-bold uppercase tracking-wider data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    <Code2 className="w-3.5 h-3.5" />
                    React
                  </TabsTrigger>
                  <TabsTrigger value="vanilla" className="gap-2 px-4 h-full text-xs font-bold uppercase tracking-wider data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    <Zap className="w-3.5 h-3.5" />
                    Vanilla
                  </TabsTrigger>
                  <TabsTrigger value="steps" className="gap-2 px-4 h-full text-xs font-bold uppercase tracking-wider data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    <Layers className="w-3.5 h-3.5" />
                    Setup Steps
                  </TabsTrigger>
                </TabsList>

                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="h-9 px-4 text-[10px] font-bold uppercase tracking-widest shadow-sm active:scale-95 transition-all bg-background border border-border/50 hover:border-primary/50"
                  onClick={() => {
                    if (activeTab === 'steps') {
                        handleCopy(`/* Add to your global CSS */\n.custom-cursor, .custom-cursor * {\n  cursor: none !important;\n}`)
                    } else {
                        const codeToCopy = activeTab === 'react' ? actualCode?.react : actualCode?.vanilla
                        handleCopy(codeToCopy || '// Loading...')
                    }
                  }}
                  disabled={isLoadingCode}
                >
                  {copied ? <Check className="w-3 h-3 mr-1.5" /> : <Copy className="w-3 h-3 mr-1.5" />}
                  {copied ? "Copied" : "Copy Content"}
                </Button>
              </div>
              <div className="relative">
                <TabsContent value="react" className="mt-0 outline-none">
                  <div className="rounded-xl overflow-hidden border border-border/50 bg-[#0d0d0d] shadow-xl">
                    {isLoadingCode ? (
                      <div className="flex items-center justify-center h-[250px] text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                          <span className="text-sm font-bold uppercase tracking-widest">Loading Source...</span>
                        </div>
                      </div>
                    ) : (
                      <CodeBlock code={actualCode?.react || cursor.code.react} language="tsx" className="max-h-[250px]" />
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="vanilla" className="mt-0 outline-none">
                  <div className="rounded-xl overflow-hidden border border-border/50 bg-[#0d0d0d] shadow-xl">
                    {isLoadingCode ? (
                      <div className="flex items-center justify-center h-[250px] text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                          <span className="text-sm font-bold uppercase tracking-widest">Loading Source...</span>
                        </div>
                      </div>
                    ) : (
                      <CodeBlock code={actualCode?.vanilla || cursor.code.vanilla} language="javascript" className="max-h-[250px]" />
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="steps" className="mt-0 outline-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <FileCode className="w-4 h-4 text-primary" />
                                <h4 className="text-xs font-black uppercase tracking-widest">Step 1: Create Component</h4>
                            </div>
                            <p className="text-[11px] text-muted-foreground leading-relaxed">
                                Create a new file (e.g., <code className="text-primary">custom-cursor.tsx</code>) and paste the React code.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Layers className="w-4 h-4 text-primary" />
                                <h4 className="text-xs font-black uppercase tracking-widest">Step 2: Add to Layout</h4>
                            </div>
                            <p className="text-[11px] text-muted-foreground leading-relaxed">
                                Import and place the cursor at the root of your application (e.g., <code className="text-primary">layout.tsx</code> or <code className="text-primary">App.tsx</code>).
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <MousePointer2 className="w-4 h-4 text-primary" />
                                <h4 className="text-xs font-black uppercase tracking-widest">Step 3: Hide System Cursor</h4>
                            </div>
                            <p className="text-[11px] text-muted-foreground leading-relaxed">
                                Add the utility class <code className="text-primary">.custom-cursor</code> to your root HTML/Body.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 space-y-3">
                             <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-primary" />
                                <h4 className="text-[11px] font-black uppercase tracking-widest text-primary">Crucial Fix</h4>
                            </div>
                            <p className="text-[10px] text-muted-foreground font-medium italic">
                                Prevent the system "finger/pointer" from appearing on buttons/links by adding this to your <b>globals.css</b>:
                            </p>
                            <div className="bg-[#0d0d0d] p-3 rounded-lg border border-border/50">
                                <pre className="text-[10px] text-emerald-400 font-mono">
{`.custom-cursor,
.custom-cursor * {
  cursor: none !important;
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
          
          {/* Dependencies Section */}
          <div className="px-6 md:px-8 py-6 border-t bg-muted/30">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="shrink-0">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Required Dependencies</span>
                </div>
                <p className="text-[10px] text-muted-foreground italic">Click to copy install command</p>
              </div>
              
                {/* Shadcn CLI */}
                <div className="flex-1 min-w-[280px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Shadcn CLI Install</span>
                  </div>
                  <button
                    onClick={() => handleCopy(`npx shadcn@latest add https://cursor-gallery.vercel.app/registry/${cursor.id}.json`)}
                    className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#0d0d0d] border border-white/10 hover:border-primary/50 transition-all text-left w-full shadow-xl"
                  >
                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-primary">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-black text-white/90 uppercase tracking-wider">Quick Install</p>
                      <p className="text-[10px] text-primary font-mono truncate">npx shadcn add {cursor.id}</p>
                    </div>
                    <Copy className="w-3.5 h-3.5 text-white/30 group-hover:text-primary transition-colors shrink-0" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 flex-1">
                  {/* Motion */}
                  <button
                    onClick={() => handleCopy("npm install framer-motion")}
                    className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-background border border-border/50 hover:border-primary/50 transition-all text-left flex-1 min-w-[180px]"
                  >
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-[12px] font-black">M</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <p className="text-[11px] font-black text-foreground uppercase tracking-wider">Motion</p>
                        <a 
                          href="https://motion.dev" 
                          target="_blank" 
                          onClick={(e) => e.stopPropagation()} 
                          className="text-[9px] text-primary hover:underline font-bold"
                        >
                          (motion.dev)
                        </a>
                      </div>
                      <p className="text-[10px] text-muted-foreground font-mono truncate">npm i framer-motion</p>
                    </div>
                    <Copy className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </button>
                  
                  {/* Tailwind CSS */}
                  <button
                    onClick={() => handleCopy("npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p")}
                    className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-background border border-border/50 hover:border-primary/50 transition-all text-left flex-1 min-w-[180px]"
                  >
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white text-[12px] font-black">T</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-black text-foreground uppercase tracking-wider">Tailwind CSS</p>
                      <p className="text-[10px] text-muted-foreground font-mono truncate">npm i -D tailwindcss</p>
                    </div>
                    <Copy className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </button>
                </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
