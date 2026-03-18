import { MeshGradient } from "@paper-design/shaders-react";
import { ChevronRight, Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { photographerInfo } from "@/data/photographer";

export function Hero() {
  const [showShader, setShowShader] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let frameId = 0;

    const enableShader = () => {
      frameId = window.requestAnimationFrame(() => {
        timeoutId = window.setTimeout(() => {
          setShowShader(true);
        }, 120);
      });
    };

    if (document.readyState === "complete") {
      enableShader();
    } else {
      window.addEventListener("load", enableShader, { once: true });
    }

    return () => {
      window.removeEventListener("load", enableShader);
      if (frameId) window.cancelAnimationFrame(frameId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="absolute inset-0 opacity-95">
        <div className="hero-gradient-core absolute inset-0" />
        <div className="hero-gradient-vignette absolute inset-0" />
        <div className="hero-gradient-blob hero-gradient-blob-left absolute -left-[12%] top-[8%] h-[82vh] w-[46vw] min-w-[20rem] rounded-full blur-3xl" />
        <div className="hero-gradient-blob hero-gradient-blob-right absolute right-[-10%] top-[18%] h-[72vh] w-[44vw] min-w-[18rem] rounded-full blur-3xl" />
        <div className="hero-gradient-blob hero-gradient-blob-bottom absolute bottom-[-28%] left-1/2 h-[42vh] w-[72vw] -translate-x-1/2 rounded-full blur-3xl" />
      </div>

      {showShader && (
        <MeshGradient
          className="absolute inset-0 h-full w-full opacity-80"
          colors={["#f4f4f4", "#4a4a4a", "#111111", "#000000"]}
          speed={0.62}
          distortion={1}
          swirl={0.22}
          scale={1.08}
          rotation={14}
          minPixelRatio={0.75}
          maxPixelCount={1400000}
        />
      )}

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 h-32 w-32 rounded-full bg-gray-800/5 blur-3xl animate-pulse motion-reduce:animate-none" style={{ animationDuration: "3.75s" }} />
        <div className="absolute bottom-1/3 right-1/4 h-24 w-24 rounded-full bg-white/[0.02] blur-2xl animate-pulse motion-reduce:animate-none" style={{ animationDuration: "2.5s", animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm" style={{ animation: "fade-in 0.6s ease-out both" }}>
          <span>{photographerInfo.tagline}</span>
          <ChevronRight className="h-3 w-3" />
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-8xl" style={{ animation: "fade-up 0.8s ease-out 0.2s both" }}>
          Parinith Reddy
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 md:text-xl" style={{ animation: "fade-up 0.8s ease-out 0.4s both" }}>
          {photographerInfo.heroIntroduction}
        </p>

        <div className="mt-10" style={{ animation: "fade-up 0.8s ease-out 0.6s both" }}>
          <Button size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5" style={{ animation: "fade-in 0.6s ease-out 0.8s both" }}>
          <a href={photographerInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white/40 transition-colors hover:text-white/80">
            <Github className="h-5 w-5" />
          </a>
          <a href={photographerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 transition-colors hover:text-white/80">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={`mailto:${photographerInfo.email}`} className="text-white/40 transition-colors hover:text-white/80">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }} className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown className="h-5 w-5 text-white/40" />
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
