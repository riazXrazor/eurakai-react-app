import { Button, ButtonProps, CustomFlowbiteTheme } from "flowbite-react";

import React from "react";
import { cn } from "../../lib/utils";

export default function CustomButton(props: ButtonProps) {
  const customTheme: CustomFlowbiteTheme["button"] = {
    label: cn(
      "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold font-inter text-cyan-800",
      props.className
    ),
    color: {
      "eurekai-primary":
        "bg-[#0449D1] border border-[#0449D1] hover:bg-[#022C7D] hover:border-[#022C7D] focus:bg-[#021D53] focus:ring-[#5757EC40] focus:border-[#021D53] focus:ring-4 text-white",
      "eurekai-secondary":
        "bg-[#FFC916] border border-[#FFC916] hover:bg-[#DEB113] hover:border-[#DEB113] focus:bg-[#645007] focus:border-[#645007] focus:ring-[#DEB11347] focus:ring-4 text-black focus:text-white",
      "eurekai-outline":
        "bg-transparent border border-[#0449D1] text-[#0449D1] hover:bg-[#F3F3FF] focus:bg-[#021D53] focus:border-[#021D53] focus:ring-[#5757EC40] focus:ring-4 focus:text-white ",
      "eurekai-ghost": "bg-transparent text-[#0449D1] hover:bg-[#F3F3FF]",
    },
    inner: {
      base: cn(
        "flex items-stretch transition-all duration-200",
        props.className
      ),
    },
    size: {
      "eurekai-square": "p-4 text-base",
      "eurekai-square-sm": "px-2 py-1 text-base",
    },
  };

  return (
    <Button theme={customTheme} {...props}>
      {props.children}
    </Button>
  );
}
