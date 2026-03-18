import { motion } from "framer-motion";

const experiences = [
  {
    org: "Institute Software Development Cell - NIT Delhi",
    role: "UI/UX and Backend Contributor",
    period: "2025 - Present",
    link: "https://www.figma.com/design/dkhSkTIPfjCPnkIS5hiUp1/Untitled?node-id=0-1&t=slDrh6Ad4GHL3IZT-1",
    points: [
      "Designed and enhanced UI/UX interfaces for the official institute website serving the NIT Delhi community.",
      "Contributed to backend development and product improvements for institute-facing web experiences.",
      "Created placement brochures, LinkedIn posts, and digital media assets supporting institute outreach."
    ]
  },
  {
    org: "Upvision Technical Club",
    role: "Head Graphic Designer",
    period: "2025 - Present",
    link: "https://www.figma.com/design/NrgW42wzRuIarGR1gBjAfX/Untitled?node-id=0-1&t=fNqZBFHDeEJL44mp-1",
    points: [
      "Led branding and visual design for technical events and club initiatives.",
      "Designed brochures, standees, and promotional graphics used across event communications."
    ]
  },
  {
    org: "Research - NIT Delhi",
    role: "Locality Sensitive Hashing for Image Similarity Search",
    period: "2026 - Present",
    points: [
      "Investigating approximate nearest neighbour search techniques for scalable image retrieval.",
      "Benchmarking random projection-based hashing on CIFAR-10 and MNIST across latency, recall, and memory footprint.",
      "Studying dimensionality reduction via random projections to improve bucket uniformity and reduce collisions."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-accent/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">What I&apos;m Working On</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, idx) => (
            <motion.div
              key={experience.org}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative border-l-2 border-border pl-6"
            >
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-foreground" />
              <h3 className="text-lg font-semibold text-foreground">{experience.org}</h3>
              <p className="mb-1 text-sm text-muted-foreground">{experience.role}</p>
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-muted-foreground/80">{experience.period}</p>
              {experience.link && (
                <a href={experience.link} target="_blank" rel="noopener noreferrer" className="mb-3 inline-block text-sm text-foreground underline underline-offset-4">
                  View work
                </a>
              )}
              <ul className="space-y-1.5">
                {experience.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
