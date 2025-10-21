import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface SoftwareProjectProps {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string | null;
  icon: LucideIcon;
}

interface HardwareProjectProps {
  title: string;
  description: string;
  tags: string[];
  specs: string;
  icon: LucideIcon;
}

// Software Project Card Component
export function SoftwareProjectCard({
  title,
  description,
  tags,
  github,
  demo,
  icon: Icon,
}: SoftwareProjectProps) {
  return (
    <Card className="group relative overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
      <div className="relative">
        <div className="mb-4">
          <Icon className="text-primary mb-3" size={32} />
          <h3 className="text-xl font-semibold mb-3 text-balance">{title}</h3>
        </div>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed min-h-[4rem]">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Button size="sm" variant="outline" asChild className={demo ? "flex-1" : "w-full"}>
            <Link href={github} target="_blank">
              <Github size={16} className="mr-2" />
              Code
            </Link>
          </Button>
          {demo && (
            <Button size="sm" asChild className="flex-1 bg-primary hover:bg-primary/90">
              <Link href={demo} target="_blank">
                <ExternalLink size={16} className="mr-2" />
                Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

// Hardware Project Card Component
export function HardwareProjectCard({
  title,
  description,
  tags,
  specs,
  icon: Icon,
}: HardwareProjectProps) {
  return (
    <Card className="group relative overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
      <div className="relative">
        <div className="mb-4">
          <Icon className="text-primary mb-3" size={32} />
          <h3 className="text-xl font-semibold mb-3 text-balance">{title}</h3>
        </div>
        <p className="text-muted-foreground text-sm mb-3 leading-relaxed min-h-[4rem]">{description}</p>
        <div className="mb-4">
          <div className="text-xs text-muted-foreground bg-secondary/50 p-3 rounded space-y-1">
            {specs.split('|').map((spec, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="font-mono">{spec.trim()}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}

