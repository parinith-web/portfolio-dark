import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Layers3, Briefcase, ExternalLink, Github, Sparkles } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { getProjectBySlug } from '@/data/projects';
import { Button } from '@/components/ui/button';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEOHead title={project.title} description={project.description} image={project.coverImage} type="article" />

      <div className="min-h-screen">
        <motion.div className="relative h-[60vh] w-full overflow-hidden bg-muted" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <img src={project.coverImage} alt={project.title} className="h-full w-full object-cover" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
        </motion.div>

        <section className="max-w-5xl mx-auto px-6 py-12 md:py-16 lg:px-8">
          <motion.div className="space-y-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="space-y-4">
              <h1 className="text-4xl font-light tracking-wide md:text-5xl lg:text-6xl">{project.title}</h1>
              <div className="flex flex-wrap gap-6 text-sm font-light text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{project.category}</span>
                </div>
                {project.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4" />
                    <span>{project.location}</span>
                  </div>
                )}
              </div>
            </div>

            <Separator />

            <p className="text-lg font-light leading-relaxed text-foreground md:text-xl">{project.description}</p>

            <div className="flex flex-wrap gap-3">
              {project.links?.live && (
                <Button asChild>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <ExternalLink className="size-4" /> Live Project
                  </a>
                </Button>
              )}
              {project.links?.repo && (
                <Button variant="outline" asChild>
                  <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <Github className="size-4" /> GitHub
                  </a>
                </Button>
              )}
            </div>

            <div className="grid gap-6 pt-4 md:grid-cols-2">
              {project.camera && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground">
                    <Layers3 className="size-4" />
                    <span>Stack</span>
                  </div>
                  <p className="font-light text-foreground">{project.camera}</p>
                </div>
              )}
              {project.client && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground">
                    <Briefcase className="size-4" />
                    <span>Context</span>
                  </div>
                  <p className="font-light text-foreground">{project.client}</p>
                </div>
              )}
            </div>

            {project.techStack && project.techStack.length > 0 && (
              <div className="space-y-4 rounded-sm border border-border bg-card/40 p-6">
                <h2 className="text-2xl font-light tracking-wide">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-4 rounded-sm border border-border bg-card/40 p-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-5 text-muted-foreground" />
                  <h2 className="text-2xl font-light tracking-wide">Highlights</h2>
                </div>
                <ul className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </section>
      </div>
    </>
  );
}
