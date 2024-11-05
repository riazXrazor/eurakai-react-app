import { IconContext, IconType } from "react-icons";

import CustomButton from "./custom-button";
import IconsWithLabels from "./icon-with-label";
import React from "react";
import announcementLogo from "../../assets/images/announcement-icon.png";

export default function CustomSideBar({
  userName,
  options,
}: {
  userName: string;
  options: Array<{
    title: string;
    icon: IconType;
    onClick: () => void;
  }>;
}) {
  return (
    <nav className="sticky z-10 flex flex-col justify-between items-start w-60 overflow-x-hidden p-4 bg-[#04045F]">
      <div className="flex flex-col justify-start items-start gap-3 w-full">
        <span className="font-inter font-bold text-lg text-gray-200 p-2">
          {userName}
        </span>
        <ul className="w-full">
          {options.map((opt) => (
            <li
              className="p-2 gap font-inter font-bold text-xs text-white hover:bg-[#FFC916] hover:text-[#0F0F2C] rounded cursor-pointer"
              key={opt.title}
              onClick={opt.onClick}
            >
              <IconsWithLabels ariaLabel={opt.title}>
                <opt.icon size={24} />
                {opt.title}
              </IconsWithLabels>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="flex flex-col justify-between items-start gap-4 p-4 rounded-lg bg-[#FFC916] w-full"
        aria-label="Announcements"
      >
        <div className="inline-flex gap-2 items-center">
          <img
            src={announcementLogo}
            alt="announcement"
            width={56}
            height={56}
          />
          <span className="font-inter font-bold text-xs text-[#0F0F2C]">
            Announcements
          </span>
        </div>
        <div>
          <span className="block font-inter font-bold text-xs text-[#0F0F2C]">
            Join us for more
          </span>
          <span className="block font-inter font-normal text-xs text-[#0F0F2C]">
            Lorem ipsum dolor sit
          </span>
        </div>
        <div className="mt-6">
          <CustomButton color="eurekai-primary" size="xs" aria-label="Grab it">
            Grab it
          </CustomButton>
        </div>
      </div>
    </nav>
  );
}
