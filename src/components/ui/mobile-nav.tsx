
import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  items: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  }[];
  currentPath?: string;
  className?: string;
}

export function MobileNav({ items, currentPath, className }: MobileNavProps) {
  const { isMobile } = useIsMobile();
  
  if (!isMobile) return null;
  
  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-vetor-green/20 pb-safe-bottom shadow-lg", 
      className
    )}>
      <div className={cn(
        "grid gap-1 p-1",
        items.length <= 4 ? "grid-cols-4" : items.length === 5 ? "grid-cols-5" : "grid-cols-4 overflow-x-auto"
      )}>
        {items.map((item) => (
          <Link 
            key={item.href} 
            to={item.href}
            className="flex flex-col items-center justify-center py-2 touch-feedback"
          >
            <div className={cn(
              "flex flex-col items-center justify-center transition-colors duration-200",
              currentPath === item.href ? "text-vetor-green" : "text-white/70"
            )}>
              {item.icon && (
                <div className={cn(
                  "mb-1 transition-transform duration-200",
                  currentPath === item.href ? "scale-110" : ""
                )}>
                  {item.icon}
                </div>
              )}
              <span className="text-[10px] font-medium">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
