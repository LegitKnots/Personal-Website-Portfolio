import React from 'react';
import { Card } from '@/components/ui/card';

interface EducationCardProps {
  degree: string;
  institution: string;
  dates: string;
  description: string;
}

export function EducationCard({ degree, institution, dates, description }: EducationCardProps) {
  return (
    <Card className="group relative overflow-hidden p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
      <div className="relative">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3 mb-3">
          <div>
            <h3 className="text-xl font-semibold text-foreground leading-tight">
              {degree}
            </h3>
            <p className="text-primary font-medium">{institution}</p>
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap sm:text-right shrink-0">
            {dates}
          </span>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}

