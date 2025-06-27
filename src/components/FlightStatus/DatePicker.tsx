import React, { useState } from 'react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';

const DatePicker: React.FC = () => {
  // Initialize date to June 27 of the current year to match the design
  const initialDate = new Date();
  initialDate.setMonth(5); // June is month 5 (0-indexed)
  initialDate.setDate(27);

  const [date, setDate] = useState<Date | undefined>(initialDate);

  return (
    <div className="w-full flex flex-col items-center text-center my-6">
      <p className="text-primary font-semibold mb-4 text-sm">Departure Date</p>
      <Popover>
        <PopoverTrigger asChild>
          <button className="flex items-center justify-center gap-4 cursor-pointer text-left p-2 rounded-md hover:bg-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <span className="text-7xl font-bold text-primary tracking-tighter">
              {date ? format(date, 'dd') : '27'}
            </span>
            <div className="flex flex-col items-start">
              <span className="text-xl font-semibold text-primary">
                {date ? format(date, 'MMMM') : 'June'}
              </span>
              <span className="text-lg text-muted-foreground">
                {date ? format(date, 'EEEE') : 'Friday'}
              </span>
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Separator className="my-8 w-3/4 bg-border/80" />
    </div>
  );
};

export default DatePicker;
