import React, { useState } from 'react';
import { Plane, MapPin, Landmark } from 'lucide-react';
import { cn } from '@/lib/utils';

type TabType = 'flight' | 'route' | 'airport';

interface TabItem {
  id: TabType;
  label: string;
  icon: React.ElementType;
}

const TABS_DATA: TabItem[] = [
  { id: 'flight', label: 'BY FLIGHT', icon: Plane },
  { id: 'route', label: 'BY ROUTE', icon: MapPin },
  { id: 'airport', label: 'BY AIRPORT', icon: Landmark },
];

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('flight');

  return (
    <div className="flex justify-around items-center w-full mb-6 pt-2">
      {TABS_DATA.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'relative flex flex-col items-center gap-2 p-4 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm',
              isActive && 'text-primary'
            )}
          >
            <Icon className="h-6 w-6" strokeWidth={1.5} />
            <span className="text-xs font-semibold tracking-wider">{tab.label}</span>
            {isActive && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-destructive rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
