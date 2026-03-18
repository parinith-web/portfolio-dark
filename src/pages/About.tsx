import { motion } from 'framer-motion';
import { Github, Globe, Linkedin } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${photographerInfo.name}, ${photographerInfo.tagline}. ${photographerInfo.biography.split('\n\n')[0]}`}
        image={photographerInfo.portraitImage}
      />

      <div className="min-h-screen">
        <section className="border-b border-border px-6 py-24 md:py-32 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0.8, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h1 className="mb-4 text-5xl font-light tracking-wide md:text-6xl lg:text-7xl">About</h1>
              <p className="text-lg font-light tracking-wide text-muted-foreground md:text-xl">
                Engineer, builder, and design-minded problem solver
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-16">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
                  <img src={photographerInfo.portraitImage} alt={photographerInfo.name} className="absolute inset-0 h-full w-full object-cover" />
                </div>

                <div className="flex items-center gap-4">
                  <a href={photographerInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="rounded-sm border border-border p-3 transition-colors hover:bg-accent" aria-label="GitHub">
                    <Github className="size-5" />
                  </a>
                  <a href={photographerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-sm border border-border p-3 transition-colors hover:bg-accent" aria-label="LinkedIn">
                    <Linkedin className="size-5" />
                  </a>
                  <a href={photographerInfo.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="rounded-sm border border-border p-3 transition-colors hover:bg-accent" aria-label="Portfolio">
                    <Globe className="size-5" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-4xl font-light tracking-wide md:text-5xl">{photographerInfo.name}</h2>
                  <p className="text-xl font-light tracking-wide text-muted-foreground">{photographerInfo.tagline}</p>
                </div>

                <Separator />

                <div className="space-y-4">
                  {photographerInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="space-y-4 rounded-sm border border-border bg-card/40 p-6">
                  <p className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Education: </span>
                    <span className="text-foreground">{photographerInfo.education}</span>
                  </p>
                  <p className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Email: </span>
                    <a href={`mailto:${photographerInfo.email}`} className="text-foreground transition-colors hover:text-muted-foreground">
                      {photographerInfo.email}
                    </a>
                  </p>
                  <p className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Location: </span>
                    <span className="text-foreground">{photographerInfo.location}</span>
                  </p>
                  <p className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Availability: </span>
                    <span className="text-foreground">{photographerInfo.availability}</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
