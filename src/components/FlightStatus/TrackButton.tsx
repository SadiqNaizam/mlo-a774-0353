import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TrackButtonProps {
  className?: string;
  onClick?: () => void;
}

const TrackButton: React.FC<TrackButtonProps> = ({ className, onClick }) => {
  const handleClick = React.useCallback(() => {
    console.log("Track button clicked");
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <div className={cn("w-full flex justify-center pt-6 pb-2 px-4", className)}>
      <Button
        variant="destructive"
        className="w-full h-14 text-base font-bold tracking-wider uppercase"
        onClick={handleClick}
      >
        Track
      </Button>
    </div>
  );
};

export default TrackButton;
