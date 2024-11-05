import { Badge, CustomFlowbiteTheme } from "flowbite-react";

import { IoIosClose } from "react-icons/io";
import { cn } from "../../lib/utils";

export default function CustomTagsWithValue({
  className,
  value,
  label,
  labelClassName,
  valueClassName,
}: {
  className?: string;
  value: number | string;
  label?: string;
  labelClassName?: string;
  valueClassName?: string;
}) {
  return (
    <div className="inline-flex items-center justify-start gap-2">
      <Badge
        color="gray"
        size="sm"
        className={cn("rounded-[5px] px-3 py-1 flex", className)}
      >
        <span
          className={cn(
            "font-inter font-semibold text-[12px] text-[#0F0F2C] mr-2",
            labelClassName
          )}
        >
          {label}
        </span>
        <span
          className={cn(
            "bg-[#303065] text-white p-1 rounded-full text-[8px]",
            valueClassName
          )}
        >
          {value}
        </span>
        <span>
          <IoIosClose size={20} className="inline-flex ml-2" />
        </span>
      </Badge>
    </div>
  );
}
