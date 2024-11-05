import React from "react";

function CustomBadge({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  const getProps = (color: string) => {
    switch (color) {
      case "red":
        return "rounded-full border px-2 py-1 gap-[1px] bg-[#EF4444] text-white font-inter font-medium text-xs";
      case "blue":
        return "rounded-full border px-2 py-1 gap-[1px] bg-[#2563EB] text-white font-inter font-medium text-xs";
      case "yellow":
        return "rounded-full border px-2 py-1 gap-[1px] bg-[#EAB308] text-black font-inter font-medium text-xs";
      case "green":
        return "rounded-full border px-2 py-1 gap-[1px] bg-[#188038] text-white font-inter font-medium text-xs";
    }
  };
  return <div className={getProps(color)}>{children}</div>;
}

export default CustomBadge;
