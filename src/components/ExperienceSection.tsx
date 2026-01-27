import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const responsibilities = [
    "Tested and validated full-stack web applications",
    "Performed functional, UI, and regression testing",
    "Designed and executed comprehensive test cases",
    "Tested REST APIs using Postman",
    "Verified database operations using SQL",
    "Documented defects following QA best practices",
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-glow opacity-30" />

      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest">Work history</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative pl-8 md:pl-12">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[5px] rounded-full bg-primary shadow-glow" />

            <div className="p-6 md:p-8 rounded-2xl bg-gradient-card border border-border/50 card-hover">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Briefcase size={20} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">Full Stack Web Development Trainee</h3>
                  </div>
                  <p className="text-muted-foreground">Building & Testing Web Applications</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  <Calendar size={16} />
                  <span>Aug 2024 – 2025</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "Node.js", "REST APIs", "Postman", "SQL", "Git"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-primary/5 border border-primary/20 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
