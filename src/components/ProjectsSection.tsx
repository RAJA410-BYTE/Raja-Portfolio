import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import solarFixerImg from "@/assets/solarfixer-thumbnail.jpg";
import fightingGameImg from "@/assets/fighting-game-thumbnail.jpg";
import cloudPointImg from "@/assets/cloudpoint-thumbnail.jpg";
import ddFeedImg from "@/assets/ddfeed-thumbnail.jpg";

const projects = [
  {
    title: "SolarFixer",
    subtitle: "Drone Thermal Analysis Platform",
    description: "Web platform for uploading drone footage and thermal images of solar panels. Helps detect faulty or underperforming panels using thermal data for renewable energy maintenance.",
    image: solarFixerImg,
    tags: ["Web Development", "File Uploads", "Data Visualization"],
    github: "#",
    demo: "#",
  },
  {
    title: "Web Fighting Game",
    subtitle: "Street Fighter Inspired",
    description: "JavaScript-based multiplayer fighting game with player controls, attack mechanics, and collision detection. Inspired by classic arcade fighters.",
    image: fightingGameImg,
    tags: ["JavaScript", "Game Dev", "Canvas API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Cloud Point",
    subtitle: "Weather Application",
    description: "API-based weather application with real-time data, location-specific updates, and map-based weather visualization.",
    image: cloudPointImg,
    tags: ["REST APIs", "Real-time Data", "Maps"],
    github: "#",
    demo: "#",
  },
  {
    title: "DD Feed",
    subtitle: "Responsive Feed Website",
    description: "Responsive feed-style website with dynamic content rendering and cross-browser support. Focus on performance and accessibility.",
    image: ddFeedImg,
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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-card border border-border/50 shadow-card transition-all duration-500 hover:shadow-elevated hover:-translate-y-2">
                {/* Image Container - Large & Cinematic */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Hover overlay with glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-primary/10 blur-2xl" />
                  </div>

                  {/* Action buttons - appear on hover */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <Button 
                      variant="glass" 
                      size="icon" 
                      className="h-10 w-10 backdrop-blur-md bg-background/70 border-border/50 hover:bg-background/90" 
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={18} />
                      </a>
                    </Button>
                    <Button 
                      variant="glass" 
                      size="icon" 
                      className="h-10 w-10 backdrop-blur-md bg-background/70 border-border/50 hover:bg-background/90" 
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Content - Clean below image */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
