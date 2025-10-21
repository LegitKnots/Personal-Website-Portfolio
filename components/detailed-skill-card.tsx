import React from 'react';
import { Card } from '@/components/ui/card';

interface DetailedSkillCardProps {
  title: string;
  description: string;
}

export function DetailedSkillCard({ title, description }: DetailedSkillCardProps) {
  return (
    <Card className="group relative overflow-hidden p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
      <div className="relative">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}

