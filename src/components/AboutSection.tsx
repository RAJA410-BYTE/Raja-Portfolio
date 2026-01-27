import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    { label: "B.Tech CSE", value: "CGPA 8.0", sublabel: "Expected 2027" },
    { label: "Class XII (CBSE)", value: "78.9%", sublabel: "Senior Secondary" },
    { label: "Class X (CBSE)", value: "86.4%", sublabel: "Secondary" },
  ];

  const traits = [
    { icon: Target, label: "Goal-Oriented", description: "Focused on building practical solutions" },
    { icon: Lightbulb, label: "Curious Learner", description: "Always exploring new technologies" },
    { icon: Award, label: "Consistent", description: "Delivering quality work on time" },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-glow opacity-50" />
      
      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest">Get to know me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">The Assam Royal Global University</h3>
                <p className="text-muted-foreground text-sm">B.Tech Computer Science Engineering</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a Computer Science undergraduate with a strong foundation in full-stack web development 
              and a growing expertise in software testing. My journey in tech is driven by curiosity and 
              a hands-on approach to learning.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              I believe in building solutions that matter—whether it's creating responsive web applications, 
              testing APIs, or contributing to real-world projects. My goal is to combine development skills 
              with quality assurance practices to deliver robust software solutions.
            </p>

            {/* Traits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-card border border-border/50 text-center card-hover"
                >
                  <trait.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <h4 className="font-medium text-sm mb-1">{trait.label}</h4>
                  <p className="text-xs text-muted-foreground">{trait.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="text-accent" size={24} />
              Academic Background
            </h3>

            {education.map((edu, index) => (
              <motion.div
                key={edu.label}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                className="group p-6 rounded-2xl bg-gradient-card border border-border/50 card-hover"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {edu.label}
                    </h4>
                    <p className="text-sm text-muted-foreground">{edu.sublabel}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gradient">{edu.value}</span>
                  </div>
                </div>
                <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${parseFloat(edu.value) >= 8 ? 80 : parseFloat(edu.value)}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.15 }}
                    className="h-full bg-gradient-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
