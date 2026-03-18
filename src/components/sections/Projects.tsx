import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/projects";

export function Projects() {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Featured Work</h2>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/20"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-foreground/80">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-muted-foreground">{project.category}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech) => (
                  <span key={tech} className="rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.links?.live && (
                  <Button size="sm" asChild>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <ExternalLink className="h-4 w-4" /> Live
                    </a>
                  </Button>
                )}
                {project.links?.repo && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
