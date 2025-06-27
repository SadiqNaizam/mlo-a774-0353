import React from 'react';

// Shadcn UI Imports
import { Card, CardContent } from '@/components/ui/card';
import { Tabs as ShadcnTabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Layout Import
import MainAppLayout from '../components/layout/MainAppLayout';

// Organism Imports
import DatePicker from '../components/FlightStatus/DatePicker';
import FormFields from '../components/FlightStatus/FormFields';
import Tabs from '../components/FlightStatus/Tabs';
import TrackButton from '../components/FlightStatus/TrackButton';

/**
 * The main page for the Flight & Airport Status Dashboard.
 * It features a tabbed interface to switch between tracking by flight and by airport,
 * faithfully recreating the provided design.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <ShadcnTabs defaultValue="flight-status" className="w-full">
        {/* Top-level navigation to match the design's tab style */}
        <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 h-auto -mb-px">
          <TabsTrigger
            value="flight-status"
            className="h-auto rounded-t-xl rounded-b-none border-0 p-4 text-lg font-semibold text-foreground/80 ring-offset-background transition-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-none"
          >
            Flight Status
          </TabsTrigger>
          <TabsTrigger
            value="airport-status"
            className="h-auto rounded-t-xl rounded-b-none border-0 p-4 text-lg font-semibold text-foreground/80 ring-offset-background transition-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-none"
          >
            Airport Status
          </TabsTrigger>
        </TabsList>

        {/* Content for the "Flight Status" Tab */}
        <TabsContent value="flight-status" className="m-0">
          <Card className="w-full rounded-t-none rounded-b-2xl overflow-hidden shadow-lg border-none">
            <CardContent className="p-0">
              {/* This is the inner tab group: BY FLIGHT, BY ROUTE, BY AIRPORT */}
              <Tabs />
              <DatePicker />
              <FormFields />
              <TrackButton />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Placeholder content for the "Airport Status" Tab */}
        <TabsContent value="airport-status" className="m-0">
          <Card className="w-full rounded-t-none rounded-b-2xl overflow-hidden shadow-lg border-none">
            <CardContent className="p-12 text-center">
              <p className="text-card-foreground font-medium">
                Airport Status functionality is not yet implemented.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </ShadcnTabs>
    </MainAppLayout>
  );
};

export default IndexPage;
