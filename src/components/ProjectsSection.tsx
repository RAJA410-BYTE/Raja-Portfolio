import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Gamepad2, Cloud, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import solarFixerImg from "@/assets/solarfixer-thumbnail.jpg";

const projects = [
  {
    title: "SolarFixer",
    subtitle: "Drone Thermal Analysis Platform",
    description: "Web platform for uploading drone footage and thermal images of solar panels. Helps detect faulty or underperforming panels using thermal data for renewable energy maintenance.",
    image: solarFixerImg,
    color: "accent",
    tags: ["Web Development", "File Uploads", "Data Visualization"],
    github: "#",
    demo: "#",
  },
  {
    title: "Web Fighting Game",
    subtitle: "Street Fighter Inspired",
    description: "JavaScript-based multiplayer fighting game with player controls, attack mechanics, and collision detection. Inspired by classic arcade fighters.",
    icon: Gamepad2,
    color: "primary",
    tags: ["JavaScript", "Game Dev", "Canvas API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Cloud Point",
    subtitle: "Weather Application",
    description: "API-based weather application with real-time data, location-specific updates, and map-based weather visualization.",
    icon: Cloud,
    color: "accent",
    tags: ["REST APIs", "Real-time Data", "Maps"],
    github: "#",
    demo: "#",
  },
  {
    title: "DD Feed",
    subtitle: "Responsive Feed Website",
    description: "Responsive feed-style website with dynamic content rendering and cross-browser support. Focus on performance and accessibility.",
    icon: Rss,
    color: "primary",
    tags: ["Responsive Design", "Dynamic Content", "CSS"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-glow opacity-30 -translate-y-1/2" />

      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest">My work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-gradient-card border border-border/50 card-hover overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                project.color === 'primary' ? 'bg-primary' : 'bg-accent'
              }`} />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  {'image' in project && project.image ? (
                    <div className="w-12 h-12 rounded-xl overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`p-3 rounded-xl ${
                      project.color === 'primary' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-accent/10 text-accent'
                    }`}>
                      {'icon' in project && project.icon && <project.icon size={24} />}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-muted/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
