
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
      <TabsList className={fullWidth ? "w-full" : ""}>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="flex items-center">
            {tab.icon && <span className="mr-1.5">{tab.icon}</span>}
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
