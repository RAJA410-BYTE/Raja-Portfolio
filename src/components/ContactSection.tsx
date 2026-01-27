import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rajaprasad456712@gmail.com",
    href: "mailto:rajaprasad456712@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 91016 84743",
    href: "tel:+919101684743",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "RAJA410-BYTE",
    href: "https://github.com/RAJA410-BYTE",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "rajaprasad-cse",
    href: "https://linkedin.com/in/rajaprasad-cse",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-glow opacity-30" />

      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest">Get in touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === 'GitHub' || info.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={info.label === 'GitHub' || info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 p-4 rounded-xl bg-accent/5 border border-accent/20"
            >
              <div className="flex items-center gap-3">
                <MapPin className="text-accent" size={20} />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Guwahati, Assam, India</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl bg-gradient-card border border-border/50">
              <h3 className="text-xl font-bold mb-6">Send me a message</h3>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or just say hi..."
                    rows={5}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send size={18} />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
