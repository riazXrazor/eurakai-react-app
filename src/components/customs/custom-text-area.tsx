import { CustomFlowbiteTheme, Textarea, TextareaProps } from "flowbite-react";
import React from "react";

export default function CustomTextArea(props: TextareaProps) {
  const customTheme: CustomFlowbiteTheme["textarea"] = {
    base: "block w-full rounded-lg border text-sm disabled:cursor-not-allowed disabled:opacity-50 font-inter p-2",
    colors: {
      "eurekai-primary":
        "bg-white hover:border-[#0449D1] focus:border-[#0449D1] focus:ring-[#0449D1] border-gray-200 text-[#0F0F2C]",
    },
  };
  return <Textarea theme={customTheme} {...props} />;
}
