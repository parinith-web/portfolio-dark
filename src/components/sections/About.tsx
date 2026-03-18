import { motion } from "framer-motion";
import { MapPin, Code2, Brain } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Parinith Reddy</h2>

          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">New Delhi, India</span>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Software development enthusiast with strong interests in backend engineering, full-stack development, and machine learning. Skilled in Python and C++ with strong foundations in data structures and scalable systems. Experienced in building ML-powered tools and full-stack platforms using modern frameworks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card">
              <Code2 className="w-5 h-5 text-foreground mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-foreground text-sm">Software Engineer</p>
                <p className="text-sm text-muted-foreground">Full Stack &amp; Backend Systems</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card">
              <Brain className="w-5 h-5 text-foreground mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-foreground text-sm">ML Engineer</p>
                <p className="text-sm text-muted-foreground">Machine Learning &amp; AI Tools</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
