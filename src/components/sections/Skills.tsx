import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Python", "Go", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "Frameworks / Libraries",
    skills: ["NumPy", "Pandas", "PyTorch", "Scikit-learn", "FastAPI", "Flask", "TensorFlow", "OpenCV", "MediaPipe", "LangChain", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Expertise",
    skills: ["Data Structures & Algorithms", "Web Development", "Machine Learning", "Computer Vision", "DBMS", "AWS", "RAG", "Scalable Backend Systems"],
  },
  {
    title: "Tools",
    skills: ["Git", "Linux", "Docker", "VS Code", "Jupyter Notebook", "Figma", "Vercel"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-accent/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Tech Stack</h2>
        </motion.div>

        <div className="grid gap-10">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="mb-4 text-sm font-medium text-muted-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.05 + skillIdx * 0.03 }}
                    className="cursor-default rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
