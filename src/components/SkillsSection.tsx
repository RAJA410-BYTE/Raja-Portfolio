import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "primary",
    skills: ["C", "C++", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    color: "accent",
    skills: ["HTML5", "CSS3", "Node.js", "REST APIs", "React"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "primary",
    skills: ["Git", "GitHub", "Postman", "VS Code", "MySQL"],
  },
  {
    title: "Concepts",
    icon: Brain,
    color: "accent",
    skills: ["Data Structures", "Algorithms", "OOP", "Software Testing", "Agile"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest">My toolkit</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group p-6 md:p-8 rounded-2xl bg-gradient-card border border-border/50 card-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${
                  category.color === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-accent/10 text-accent'
                }`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                      category.color === 'primary'
                        ? 'bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40'
                        : 'bg-accent/5 border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40'
                    }`}
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
};

export default SkillsSection;
