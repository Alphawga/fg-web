"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRange ({
  className,
  onDateChange,
  initialDateRange,
}: React.HTMLAttributes<HTMLDivElement> & {

  onDateChange: (date: DateRange | undefined) => void;
  initialDateRange?: DateRange | undefined;
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !initialDateRange && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {initialDateRange?.from ? (
              initialDateRange.to ? (
                <>
                  {format(initialDateRange.from, "LLL dd, y")} -{" "}
                  {format(initialDateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(initialDateRange.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={initialDateRange?.from}
            selected={initialDateRange}
            onSelect={onDateChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
