import { motion } from "framer-motion";
import { Trophy, Code, FlaskConical } from "lucide-react";

const achievements = [
  { icon: Code, text: "175+ LeetCode problems solved across algorithms, databases, and problem solving." },
  { icon: Trophy, text: "200+ additional problems solved across AtCoder, Codeforces, and CodeChef." },
  { icon: FlaskConical, text: "Research focus on scalable ML, similarity search, and randomized algorithms." },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Milestones</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
            >
              <achievement.icon className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
              <p className="text-sm leading-relaxed text-muted-foreground">{achievement.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
