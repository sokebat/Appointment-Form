import React, { useState } from "react";
import { format, parseISO } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/index";

export function DatePickerDemo() {
  const [date, setDate] = useState(() => new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-auto justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <div className=" flex items-center text-xl gap-2">
            {date ? format(parseISO(date.toISOString()), "PPP") : ""}
            <CalendarIcon className="  " />
          </div>
        </Button>
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
  );
}
