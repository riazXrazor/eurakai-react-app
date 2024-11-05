import { CustomFlowbiteTheme, Dropdown, DropdownProps } from "flowbite-react";
import React from "react";

export default function CustomDropdown(props: DropdownProps) {
  const customDropdownTheme: CustomFlowbiteTheme["dropdown"] = {
    floating: {
      base: "rounded-lg shadow-md",
      style: {
        light: "bg-white border border-gray-200 text-[#0F0F2C] font-inter",
      },
      item: {
        base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm font-inter font-normal text-[#0F0F2C] hover:bg-[#F3F3FF] focus:bg-[#F3F3FF] disabled:cursor-not-allowed disabled:hover:bg-none disabled:text-gray-200",
      },
    },
  };
  return (
    <Dropdown theme={customDropdownTheme} {...props}>
      {props.children}
    </Dropdown>
  );
}
