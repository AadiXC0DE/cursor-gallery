"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Heart, Github, Twitter, Coffee, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SponsorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
      <Header />
      
      <main className="flex-1 pt-32 pb-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" 
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
                <Heart className="w-3 h-3 fill-current" />
                Support Open Source
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                Sponsor Cursor Gallery
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Cursor Gallery is a free, open-source project dedicated to bringing premium, 
                high-performance animated cursors to everyone. Your support helps keep the project 
                alive and allows us to create even more amazing assets.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group p-8 rounded-3xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Coffee className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Buy me a coffee</h3>
                <p className="text-muted-foreground mb-8">
                  Support the creator directly with a small donation. Every coffee fuels more hours of engineering and design.
                </p>
                <Button asChild className="w-full h-12 rounded-xl text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow" variant="default">
                  <Link href="https://www.buymeacoffee.com/AadiChowdhury7" target="_blank">
                    <Coffee className="w-4 h-4 mr-2" />
                    Buy me a coffee
                  </Link>
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group p-8 rounded-3xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Star on GitHub</h3>
                <p className="text-muted-foreground mb-8">
                  Help us grow by starring the repository. It's free and helps more developers discover the project.
                </p>
                <Button asChild className="w-full h-12 rounded-xl text-base font-bold" variant="outline">
                  <Link href="https://github.com/AadiXC0DE/cursor-gallery" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    Star Repository
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 md:p-12 rounded-[2rem] border bg-card/50 backdrop-blur-sm relative overflow-hidden text-center"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Have Feedback?</h2>
                <p className="text-muted-foreground mb-8 text-lg max-w-xl mx-auto">
                  I'm always looking for ways to improve the gallery. If you have any ideas, 
                  found a bug, or just want to say hi, reach out to me on X/Twitter!
                </p>
                <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-base font-bold border-2 hover:bg-primary/5 hover:border-primary/50 transition-all">
                  <Link href="https://x.com/AadiChowdhury7" target="_blank">
                    <Twitter className="w-5 h-5 mr-3" />
                    Leave Feedback on X
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
