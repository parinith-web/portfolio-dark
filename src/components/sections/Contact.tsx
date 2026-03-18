import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { photographerInfo } from "@/data/photographer";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-accent/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let&apos;s Connect</h2>
          <p className="mb-10 max-w-lg mx-auto text-muted-foreground">
            Interested in internships, collaborations, or building something ambitious together? Reach out any time.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="outline" asChild>
              <a href={`mailto:${photographerInfo.email}`} className="gap-2">
                <Mail className="h-4 w-4" /> Email
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={photographerInfo.socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="gap-2">
                <Trophy className="h-4 w-4" /> LeetCode
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={photographerInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={photographerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="gap-2">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
