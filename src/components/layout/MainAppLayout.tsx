import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-4 sm:p-6 font-sans">
      <Header />
      <div className={cn('w-full max-w-lg', className)}>
        {children}
      </div>
    </main>
  );
};

export default MainAppLayout;
