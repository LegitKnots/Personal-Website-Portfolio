import React from 'react';

interface SkillCardProps {
  title: string;
  items: string[];
}

export function SkillCard({ title, items }: SkillCardProps) {
  return (
    <div className="group relative overflow-hidden p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
      <div className="relative">
        <h3 className="text-lg font-semibold text-primary mb-4">{title}</h3>
        <ul className="space-y-2 text-muted-foreground">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

