
import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

// Sample availability data (in a real app, this would come from an API)
const availabilityData = {
  "2025-04-15": "limited",
  "2025-04-16": "available",
  "2025-04-17": "available",
  "2025-04-18": "available",
  "2025-04-19": "limited",
  "2025-04-20": "booked",
  "2025-04-21": "booked",
  "2025-04-22": "available",
  "2025-04-23": "limited",
  "2025-04-24": "available",
  "2025-04-25": "available",
  "2025-04-26": "booked",
  "2025-04-27": "limited",
  "2025-04-28": "available",
  "2025-04-29": "available",
  "2025-04-30": "available",
  "2025-05-01": "limited",
  "2025-05-02": "booked",
};

type AvailabilityStatus = "available" | "limited" | "booked";

const BookingCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const getDateAvailability = (date: Date | undefined): AvailabilityStatus => {
    if (!date) return "booked";
    const dateString = format(date, "yyyy-MM-dd");
    return (availabilityData[dateString as keyof typeof availabilityData] as AvailabilityStatus) || "available";
  };

  const currentAvailability = getDateAvailability(date);

  // Function to create custom day content
  const dayContent = (day: Date) => {
    const availability = getDateAvailability(day);
    let dotColor = "bg-green-500"; // available
    
    if (availability === "limited") {
      dotColor = "bg-yellow-500";
    } else if (availability === "booked") {
      dotColor = "bg-red-500";
    }

    return (
      <div className="relative flex items-center justify-center w-full h-full">
        <div>{format(day, "d")}</div>
        <div className={`absolute bottom-1 w-1 h-1 ${dotColor} rounded-full`}></div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="font-playfair text-2xl font-semibold mb-4 text-center">Check Tour Availability</h3>
      <div className="grid gap-4">
        <div className="flex flex-col items-center gap-2">
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => {
                  setDate(date);
                  setIsOpen(false);
                }}
                initialFocus
                components={{
                  DayContent: ({ date }) => dayContent(date),
                }}
                className={cn("p-3 pointer-events-auto")}
                disabled={(date) => date < new Date()}
              />
              <div className="flex items-center justify-between p-3 border-t text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span>Limited</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span>Booked</span>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="mt-2 p-4 border rounded-md">
          <h4 className="font-medium mb-2">Availability for {date ? format(date, "MMMM d, yyyy") : "selected date"}:</h4>
          {currentAvailability === "available" && (
            <p className="text-green-600 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              Available - Book now to secure your spot!
            </p>
          )}
          {currentAvailability === "limited" && (
            <p className="text-yellow-600 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
              Limited spots remaining - Book soon!
            </p>
          )}
          {currentAvailability === "booked" && (
            <p className="text-red-600 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              Fully booked - Please select another date.
            </p>
          )}
        </div>
        
        <Button 
          className="mt-2 w-full bg-accent hover:bg-accent/90"
          disabled={currentAvailability === "booked"}
        >
          {currentAvailability === "booked" ? "Unavailable" : "Book This Date"}
        </Button>
      </div>
    </div>
  );
};

export default BookingCalendar;
