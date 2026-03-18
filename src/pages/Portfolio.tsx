import { projects } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <>
      <SEOHead
        title="Portfolio"
        description="Browse selected projects across machine learning, backend engineering, full-stack product work, and applied research."
      />

      <div className="min-h-screen">
        <section className="relative border-b border-border px-6 py-24 md:py-32 lg:px-8">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="mb-4 text-5xl font-light tracking-wide md:text-6xl lg:text-7xl">Projects</h1>
              <p className="mx-auto max-w-2xl text-lg font-light tracking-wide text-muted-foreground md:text-xl">
                A curated collection of systems, ML workflows, and product-focused engineering work
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-2 py-12 md:px-4 md:py-16">
          <PortfolioGrid projects={projects} />
        </section>

        <div className="h-24" />
      </div>
    </>
  );
}
