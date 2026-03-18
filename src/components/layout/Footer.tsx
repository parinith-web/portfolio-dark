import { Github, Globe, Linkedin } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm font-light tracking-wide text-muted-foreground">
            Copyright {currentYear} {photographerInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={photographerInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href={photographerInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href={photographerInfo.socialLinks.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Portfolio"
            >
              <Globe className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
