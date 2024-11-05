import { Button, Checkbox, Label } from "flowbite-react";

import { MdTune } from "react-icons/md";
import { cn } from "../../lib/utils";
import { useState } from "react";

export const ButtonDropdown = ({
  itemlist,
  label,
  className = "",
}: {
  itemlist: string[];
  label: string;
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <Button
        color="gray"
        className={cn("relative", className)}
        onClick={() => setOpen(!open)}
      >
        <MdTune className="mr-2" size={20} /> {label}
      </Button>
      {open && (
        <div className="button-dropdown">
          <ul>
            {itemlist.map((subject) => (
              <li key={subject} onClick={() => setOpen(false)}>
                <div className="flex items-center gap-2">
                  <Label>{subject}</Label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
