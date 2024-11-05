import { Button, Checkbox, Label } from "flowbite-react";
import { useEffect, useState } from "react";

import { MdTune } from "react-icons/md";
import { cn } from "../../lib/utils";

export const ButtonDropdownSelector = ({
  itemlist,
  label,
  className = "",
  onChange,
}: {
  itemlist: string[];
  label: string;
  className?: string;
  onChange?: (selected: string[]) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Array<string>>([]);

  useEffect(() => {
    onChange && onChange(selected);
  }, [selected, onChange]);

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
        <div className="button-dropdown-selectors">
          <ul>
            {itemlist.map((subject) => (
              <li key={subject}>
                <div className="flex items-center gap-2">
                  <Checkbox
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelected([...selected, subject]);
                      } else {
                        setSelected(
                          selected.filter((item) => item !== subject)
                        );
                      }
                    }}
                  />
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
