import React from "react";

function CustomInterestBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-2 py-1 bg-white border border-gray-300 font-inter font-medium text-sm text-[#2A2A2A] rounded">
      {children}
    </div>
  );
}

export default CustomInterestBadge;
