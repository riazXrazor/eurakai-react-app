import { Badge, CustomFlowbiteTheme } from "flowbite-react";

import { cn } from "../../lib/utils";

export default function BadgeWithLabels({
  className,
  value,
  label,
  hasShadow = false,
}: {
  className?: string;
  value: number | string;
  label?: string;
  hasShadow?: boolean;
}) {
  return (
    <div className="inline-flex items-center justify-start gap-2">
      <Badge
        color="gray"
        className={cn(
          hasShadow
            ? "font-inter font-normal text-[#374151] rounded-full"
            : "font-inter font-normal text-[#374151] drop-shadow-sm rounded-full",
          className
        )}
      >
        {value}
      </Badge>
      <span className="font-inter font-normal text-sm text-[#0F0F2C]">
        {label}
      </span>
    </div>
  );
}
