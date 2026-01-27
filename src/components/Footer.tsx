import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Raja Prasad. Made with</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/RAJA410-BYTE"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/rajaprasad-cse"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:rajaprasad456712@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
