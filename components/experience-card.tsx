import React from 'react';
import { Card } from '@/components/ui/card';

interface Position {
  title: string;
  dates: string;
  descriptions: string[];
  skills: string[];
}

interface ExperienceCardProps {
  company: string;
  location: string;
  dates: string;
  // For single position experiences
  title?: string;
  descriptions?: string[];
  skills?: string[];
  // For multi-position experiences
  positions?: Position[];
}

// Bullet point component with proper styling
function PositionItem({ title, dates, descriptions, skills }: Position) {
  return (
    <div className="relative flex gap-4">
      <div className="relative flex-shrink-0 w-4 flex flex-col items-center">
        <div className="relative w-2 h-2 rounded-full bg-primary z-10 mt-[0.475rem] flex-shrink-0"></div>
        <div className="w-px flex-1 bg-muted-foreground/30"></div>
      </div>
      <div className="flex-1 min-w-0 pb-0">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3 mb-3">
          <div>
            <h4 className="text-lg font-semibold text-foreground leading-tight">
              {title}
            </h4>
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap sm:text-right shrink-0">
            {dates}
          </span>
        </div>
        <ul className="space-y-2 text-muted-foreground mb-4">
          {descriptions.map((desc, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary flex-shrink-0 mt-[0rem]">•</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Unified Experience Card - handles both single and multi-position experiences
export function ExperienceCard({
  company,
  location,
  dates,
  title,
  descriptions,
  skills,
  positions,
}: ExperienceCardProps) {
  const isMultiPosition = positions && positions.length > 0;

  return (
    <Card className="group relative overflow-hidden p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
      <div className="relative">
        {/* Company Header */}
        <div className={`flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3 ${isMultiPosition ? 'mb-6' : 'mb-4'}`}>
          <div>
            <h3 className="text-xl font-semibold text-foreground leading-tight">
              {isMultiPosition ? company : title}
            </h3>
            <p className="text-primary font-medium">
              {isMultiPosition ? location : `${company} - ${location}`}
            </p>
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap sm:text-right shrink-0">
            {dates}
          </span>
        </div>

        {/* Multi-position: Show positions with bullets and lines */}
        {isMultiPosition && (
          <div className="space-y-6">
            {positions.map((position, index) => (
              <PositionItem
                key={index}
                title={position.title}
                dates={position.dates}
                descriptions={position.descriptions}
                skills={position.skills}
              />
            ))}
          </div>
        )}

        {/* Single position: Show descriptions and skills directly */}
        {!isMultiPosition && descriptions && skills && (
          <>
            <ul className="space-y-2 text-muted-foreground">
              {descriptions.map((desc, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary flex-shrink-0 mt-[0rem]">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </Card>
  );
}

// Export legacy names for backwards compatibility (optional, can be removed later)
export const SimpleExperienceCard = ExperienceCard;
export const MultiPositionExperienceCard = ExperienceCard;
