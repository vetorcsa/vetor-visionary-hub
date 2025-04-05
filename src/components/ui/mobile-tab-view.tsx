
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useIsMobile } from '@/hooks/use-mobile';

interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface MobileTabViewProps {
  tabs: TabItem[];
  defaultValue?: string;
  className?: string;
  fullWidth?: boolean;
}

export function MobileTabView({ 
  tabs, 
  defaultValue, 
  className,
  fullWidth = true
}: MobileTabViewProps) {
  const { isMobile } = useIsMobile();
  const defaultTab = defaultValue || (tabs.length > 0 ? tabs[0].value : '');
  
  return (
    <Tabs defaultValue={defaultTab} className={className}>
      <TabsList 
        className={`${fullWidth ? "w-full" : ""} ${
          isMobile 
            ? "overflow-x-auto scrollbar-none flex-nowrap pb-1 gap-1 px-1 justify-start" 
            : ""
        }`}
      >
        {tabs.map((tab) => (
          <TabsTrigger 
            key={tab.value} 
            value={tab.value} 
            className={`flex items-center ${
              isMobile 
                ? "px-3 py-2 whitespace-nowrap touch-feedback" 
                : ""
            }`}
          >
            {tab.icon && (
              <span className={isMobile ? "mr-1.5" : "mr-2"}>
                {tab.icon}
              </span>
            )}
            <span className={isMobile ? "text-sm" : ""}>
              {tab.label}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      
      {tabs.map((tab) => (
        <TabsContent 
          key={tab.value} 
          value={tab.value} 
          className={isMobile ? "pt-3 px-1" : ""}
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
