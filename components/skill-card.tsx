import React from 'react';
import { Card } from '@/components/ui/card';

interface SkillCardProps {
  title: string;
  // For simple list-based skill cards
  items?: string[];
  // For detailed description-based skill cards
  description?: string;
}

export function SkillCard({ title, items, description }: SkillCardProps) {
  const hasItems = items && items.length > 0;
  
  // Use Card component for consistency (works for both cases)
  return (
    <Card className="group relative overflow-hidden p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
      <div className="relative">
        <h3 className={`text-lg font-semibold ${hasItems ? 'text-primary mb-4' : 'text-foreground mb-2'}`}>
          {title}
        </h3>
        
        {/* List-based skill card */}
        {hasItems && (
          <ul className="space-y-2 text-muted-foreground">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        
        {/* Description-based skill card */}
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </Card>
  );
}

