import { Dropdown, DropdownHeader } from "flowbite-react";
import React, { useContext, useState } from "react";

import { Avatar } from "flowbite-react";
import { CiEdit } from "react-icons/ci";
import CustomButton from "./custom-button";
import CustomDropdown from "./custom-dropdown";
import CustomInput from "./custom-inputs";
import CustomUserSuggestions from "./custom-user-suggestion";
import { FaVideo } from "react-icons/fa";
import { IconType } from "react-icons";
import IconWithBadge from "./icon-with-badge";
import { IoSearchCircle } from "react-icons/io5";
import { LuInbox } from "react-icons/lu";
import { MdHelpOutline } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import eurekaiLogo from "../../assets/images/eurekAILogo.png";

const IoSearchCircleCustom = () => <IoSearchCircle size={40} color="#0449d0" />;

function CustomNavBar({
  options,
  searchType = "paper-search",
  isInner = false,
  hasSearch = false,
  emailExternal = () => {},
}: {
  options?: Array<{
    title: string;
    icon: IconType;
    onClick: () => void;
  }>;
  searchType?: "paper-search" | "people";
  isInner?: boolean;
  hasSearch?: boolean;
  emailExternal?: () => void;
}) {
  const [cursor, setCursor] = useState<number>(-1);
  const [showUserSuggestion, setShowUserSuggestions] = useState<boolean>(false);

  return (
    <nav className="sticky z-30 flex flex-row justify-between items-center px-4 h-20 w-full bg-white border-b border-b-gray-200">
      <div className="inline-flex justify-start items-center gap-2">
        {isInner && (
          <CustomDropdown
            className="focus:outline-none"
            label=""
            renderTrigger={() => (
              <button className="text-[#0449D1] focus:bg-[#021D53] focus:text-white focus:outline-none rounded-lg p-4">
                <RxHamburgerMenu size={24} />
              </button>
            )}
            aria-label="Menu"
          >
            {options?.map((elem) => (
              <div key={elem.title}>
                <Dropdown.Item onClick={elem.onClick}>
                  <div className="inline-flex items-center gap-2">
                    <elem.icon size={16} />
                    {elem.title}
                  </div>
                </Dropdown.Item>
                {["Projects", "Blog"].includes(elem.title) && (
                  <Dropdown.Divider />
                )}
              </div>
            ))}
          </CustomDropdown>
        )}
        <a href="/dashboard" aria-label="Go to dashboard">
          <img src={eurekaiLogo} alt="eurekai-logo" />
        </a>
      </div>
      {hasSearch && (
        <div className="flex flex-row justify-center items-center gap-4 w-full mx-10">
          {searchType === "paper-search" ? (
            <CustomInput
              id="search"
              type="text"
              placeholder="Search for papers, questions..."
              rightIcon={IoSearchCircleCustom}
              className="w-full"
              color="eurekai-inner-search"
            />
          ) : (
            <CustomUserSuggestions />
          )}
          {/* <CustomInput
            id="search"
            type="text"
            placeholder={
              searchType === "paper-search"
                ? " Search for papers, questions..."
                : "Search Collaborators"
            }
            rightIcon={IoSearchCircleCustom}
            className="w-full"
            color="eurekai-inner-search"
            value={searchtext}
            onChange={(e) => setSearchtext(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (searchType === "paper-search") {
                  route.push("/paper-search");
                  dispatch(setPaperSearchText(searchtext));
                  dispatch(setPapers([]));
                } else {
                  dispatch(setUserSearchText(searchtext));
                }
              }
            }}
          /> */}
        </div>
      )}

      <div className="flex flex-row justify-evenly items-center gap-4">
        {hasSearch && searchType === "people" ? (
          <CustomButton
            color="eurekai-ghost"
            className="text-nowrap gap-2 items-center font-bold"
            onClick={emailExternal}
          >
            <CiEdit size={24} />
            Can&apos;t find ?
          </CustomButton>
        ) : null}
        <a href="#" aria-label="help me">
          <MdHelpOutline size={24} color="#0449D1" />
        </a>
        <div className="relative">
          <CustomButton
            color="eurekai-ghost"
            pill
            aria-label="notifications"
            // onClick={() => setNotificationToggle((s) => !s)}
            // onClick={() => route.push("/notifications")}
          >
            {/* <IconWithBadge
              badgeValue={
                notifications.filter(
                  (notification) => notification.status === "unread"
                ).length
              }
            > */}
            <IconWithBadge badgeValue={0}>
              <LuInbox size={24} color="#0449D1" />
            </IconWithBadge>
          </CustomButton>
          {/* {notificationToggle && <NotificationDropdown />} */}
        </div>
        {/* <CustomDropdown
          arrowIcon={false}
          inline
          label={
            <IconWithBadge badgeValue={notifications.length}>
              <LuInbox size={24} color="#0449D1" />
            </IconWithBadge>
          }
          className="w-[371px]"
        >
          {notifications.length ? (
            notifications.map((notification) => (
              <div
                className="flex justify-center items-center p-4"
                key={notification._id}
              >
                <NotificationInviteCard
                  key={notification._id}
                  data={notification}
                />
              </div>
            ))
          ) : (
            <div className="p-4">No pending notification</div>
          )}
          <Dropdown.Divider />
          <div className="p-4 font-inter font-normal text-xs text-blue-700 cursor-pointer">
            <span>Mark all as read</span>
          </div>
        </CustomDropdown> */}
      </div>
    </nav>
  );
}

export default CustomNavBar;
