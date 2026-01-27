import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Presentation, Trophy, Award } from "lucide-react";

const achievements = [
  {
    icon: Users,
    title: "Hackathon Organizer",
    description: "Core organizer for university hackathons and tech fests",
    period: "2023 – Present",
  },
  {
    icon: Presentation,
    title: "Web Dev Instructor",
    description: "Conducted Web Development sessions for 150+ students",
    period: "2023 – Present",
  },
  {
    icon: Trophy,
    title: "Event Coordinator",
    description: "Active role in planning and execution of technical events",
    period: "2023 – Present",
  },
  {
    icon: Award,
    title: "Full Stack Certified",
    description: "Completed Full Stack Web Development Certification from Apna College",
    period: "2024",
  },
];

const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-20" />

      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest">Beyond code</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Leadership & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-gradient-card border border-border/50 card-hover text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon size={24} />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {achievement.description}
              </p>
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent">
                {achievement.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
