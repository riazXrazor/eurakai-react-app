import React from "react";
import CustomDropdown from "./custom-dropdown";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Checkbox, Dropdown, Radio } from "flowbite-react";

function CustomFilters({
  title,
  opts,
  onChange,
  isChecked,
  format = "radio",
}: {
  title: string;
  opts: Array<string>;
  onChange: (pos: number) => void;
  isChecked: Array<boolean>;
  format?: "radio" | "checkboxes";
}) {
  return (
    <CustomDropdown
      arrowIcon={false}
      inline
      label={
        <div className="inline-flex justify-center items-center gap-2 py-1.5 pr-4 pl-5 rounded-lg border border-[#0449D1] bg-[#F3F3FF] font-inter font-bold text-base text-[#0449D1] ">
          {title}
          <MdKeyboardArrowDown size={24} />
        </div>
      }
    >
      {opts.map((opt, index) => (
        <Dropdown.Item
          key={opt}
          onClick={() => onChange(index)}
          className="inline-flex items-center gap-2"
        >
          {format === "checkboxes" ? (
            <Checkbox
              value={opt}
              checked={isChecked[index]}
              onChange={() => onChange(index)}
            />
          ) : (
            <Radio
              value={opt}
              checked={isChecked[index]}
              onChange={() => onChange(index)}
            />
          )}
          <span>{opt}</span>
        </Dropdown.Item>
      ))}
    </CustomDropdown>
  );
}

export default CustomFilters;
