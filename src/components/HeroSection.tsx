import { motion } from "framer-motion";
import { ArrowDown, Download, Eye, Send, Github, Linkedin, Mail, Code, Database, Globe, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import profileImage from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";
const TypewriterText = ({
  texts,
  className
}: {
  texts: string[];
  className?: string;
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const text = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(text.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);
  return <span className={className}>
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>;
};
const FloatingIcon = ({
  icon: Icon,
  delay,
  x,
  y
}: {
  icon: React.ElementType;
  delay: number;
  x: string;
  y: string;
}) => <motion.div initial={{
  opacity: 0,
  scale: 0
}} animate={{
  opacity: 0.6,
  scale: 1,
  y: [0, -15, 0]
}} transition={{
  opacity: {
    delay,
    duration: 0.5
  },
  scale: {
    delay,
    duration: 0.5
  },
  y: {
    delay: delay + 0.5,
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
}} className="absolute hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-card/50 backdrop-blur-sm border border-border/30 text-primary/70" style={{
  left: x,
  top: y
}}>
    <Icon size={24} />
  </motion.div>;
const HeroSection = () => {
  const roles = ["Full-Stack Web Developer", "Software Testing Enthusiast", "CS Undergraduate", "Problem Solver"];
  const socialLinks = [{
    icon: Github,
    href: "https://github.com/RAJA410-BYTE",
    label: "GitHub"
  }, {
    icon: Linkedin,
    href: "https://linkedin.com/in/rajaprasad-cse",
    label: "LinkedIn"
  }, {
    icon: Mail,
    href: "mailto:rajaprasad456712@gmail.com",
    label: "Email"
  }];
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }}>
        <div className="absolute inset-0 bg-gradient-dark opacity-90" />
        <div className="absolute inset-0 bg-gradient-glow" />
      </div>

      {/* Spline 3D Animation Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <iframe 
          src="https://my.spline.design/orb-ULtxETeQLDiV5Kl9Su5DD3Qb/"
          frameBorder="0"
          className="w-full h-full scale-125 lg:scale-150"
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100vw',
            minHeight: '100vh',
          }}
          loading="lazy"
          title="3D Orb Animation"
        />
      </motion.div>

      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div animate={{
        background: ["radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%)", "radial-gradient(circle at 80% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%)", "radial-gradient(circle at 50% 80%, hsl(var(--primary) / 0.3) 0%, transparent 50%)", "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%)"]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }} className="absolute inset-0" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      </div>

      {/* Floating tech icons */}
      <FloatingIcon icon={Code} delay={0.5} x="10%" y="20%" />
      <FloatingIcon icon={Database} delay={0.7} x="85%" y="25%" />
      <FloatingIcon icon={Globe} delay={0.9} x="15%" y="70%" />
      <FloatingIcon icon={Terminal} delay={1.1} x="80%" y="65%" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-primary/40" initial={{
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
      opacity: 0
    }} animate={{
      y: [null, Math.random() * -200],
      opacity: [0, 0.8, 0]
    }} transition={{
      duration: 4 + Math.random() * 4,
      repeat: Infinity,
      delay: Math.random() * 2
    }} />)}

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-center lg:text-left order-2 lg:order-1">
            {/* Status badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2">
              Hi, I'm
            </motion.h1>
            
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              <span className="text-gradient">Raja Prasad</span>
            </motion.h1>

            {/* Typewriter tagline */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="h-8 mb-6">
              <TypewriterText texts={roles} className="text-lg md:text-xl text-primary font-mono" />
            </motion.div>

            {/* Description */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.7
          }} className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">Driven full-stack developer specializing in responsive web applications, API testing, and QA-focused development. I enjoy solving real-world problems by building software that is clean, tested, and dependable.</motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="lg" asChild className="group">
                <a href="#projects">
                  <Eye size={18} className="group-hover:rotate-12 transition-transform" />
                  View Projects
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild className="group">
                <a href="#contact">
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  Contact Me
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild className="group">
                <a href="#" download>
                  <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.9
          }} className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((link, index) => <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110" whileHover={{
              y: -3
            }} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.9 + index * 0.1
            }} aria-label={link.label}>
                  <link.icon size={20} />
                </motion.a>)}
            </motion.div>
          </motion.div>

          {/* Profile Image with Robot Animation */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Spline Robot 3D Animation - Behind Profile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="absolute -inset-20 lg:-inset-32 z-0 pointer-events-none"
              >
                <iframe 
                  src="https://my.spline.design/r4xbot-lKKLWuw4z8uYoqSFMembkBGU/"
                  frameBorder="0"
                  className="w-full h-full"
                  style={{ 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) scale(1.5)',
                    minWidth: '400px',
                    minHeight: '400px',
                    filter: 'blur(0.5px)',
                  }}
                  loading="lazy"
                  title="3D Robot Animation"
                />
                {/* Soft glow overlay for blending */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/80 pointer-events-none" />
              </motion.div>

              {/* Animated rings */}
              <motion.div animate={{
              rotate: 360
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute inset-0 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full z-10" style={{
              background: "conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.3), transparent)"
            }} />
              <motion.div animate={{
              rotate: -360
            }} transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full opacity-50 z-10" style={{
              background: "conic-gradient(from 180deg, transparent, hsl(var(--accent) / 0.3), transparent)"
            }} />
              
              {/* Glow effect */}
              <div className="absolute inset-4 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse z-10" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden p-2 z-20">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/30 shadow-glow">
                  <img src={profileImage} alt="Raja Prasad" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Floating elements */}
              <motion.div animate={{
              y: [-10, 10, -10]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="absolute -top-2 -right-2 px-4 py-2 glass rounded-xl shadow-card z-30">
                <span className="text-sm font-mono font-semibold text-primary">CGPA 8.0</span>
              </motion.div>

              <motion.div animate={{
              y: [10, -10, 10]
            }} transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="absolute -bottom-2 -left-2 px-4 py-2 glass rounded-xl shadow-card z-30">
                <span className="text-sm font-mono font-semibold text-accent">Full Stack Dev</span>
              </motion.div>

              <motion.div animate={{
              x: [-5, 5, -5]
            }} transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="absolute top-1/2 -right-6 px-3 py-2 glass rounded-xl shadow-card hidden md:block z-30">
                <span className="text-xs font-mono text-muted-foreground">2024-2027</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.5
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.a href="#about" animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            <span className="text-xs uppercase tracking-widest">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
              <motion.div animate={{
              y: [0, 8, 0],
              opacity: [1, 0.3, 1]
            }} transition={{
              duration: 1.5,
              repeat: Infinity
            }} className="w-1.5 h-1.5 rounded-full bg-current" />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;