import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const FormFields: React.FC = () => {
  const [airline, setAirline] = useState('');
  const [flightNumber, setFlightNumber] = useState('');

  return (
    <div className="w-full space-y-5 px-4">
      <div className="flex items-center gap-4">
        <Label htmlFor="airline" className="w-20 text-right text-primary font-semibold">
          Airline
        </Label>
        <Input
          id="airline"
          type="text"
          value={airline}
          onChange={(e) => setAirline(e.target.value)}
          placeholder="Enter Name or Code"
          className="flex-1 bg-secondary border-0 h-12 px-4 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>
      <div className="flex items-center gap-4">
        <Label htmlFor="flightNumber" className="w-20 text-right text-primary font-semibold">
          Flight #
        </Label>
        <Input
          id="flightNumber"
          type="text"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
          placeholder="Enter Flight number"
          className="flex-1 bg-secondary border-0 h-12 px-4 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>
    </div>
  );
};

export default FormFields;
