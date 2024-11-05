"use client";

import { Dropdown, DropdownHeader } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";

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

// const IoSearchCircleCustom = () => <IoSearchCircle size={40} color="#0449d0" />;

function UserViewNavBar({
  options,
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
  const onLogout = async () => {
    try {
      // route.refresh();
    } catch (err) {
      console.log(err);
    }
  };

  const [searchtext, setSearchtext] = useState("");
  const [suggestions, setSuggestions] = useState<Array<any> | undefined>();
  const [cursor, setCursor] = useState<number>(-1);
  const [suggestedProfile, setSuggestedProfile] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchtext) {
      setSuggestions(undefined);
      setShowSuggestions(false);
      setCursor(-1);
    }
    if (e.key === "Enter" && suggestedProfile) {
      //route.push(`/profile/${suggestedProfile}`);
    }
    if (e.key === "ArrowUp" && suggestions) {
      setCursor((s) => (s !== 0 ? s - 1 : s));
    }
    if (e.key === "ArrowDown" && suggestions) {
      setCursor((s) => (s < suggestions.length - 1 ? s + 1 : s));
    }
  };
  useEffect(() => {
    const getUsers = async () => {
      if (!searchtext.length || !showSuggestions) {
        setCursor(-1);
        setSuggestions(undefined);
        return;
      }
      //const resp = await getSearchAsYouTypeUserApi(searchtext);
      //setSuggestions(resp.data.data.map((datum: any) => datum._source));
      setCursor(-1);
      // console.log(resp);
    };
    getUsers();
  }, [searchtext, showSuggestions]);

  useEffect(() => {
    if (suggestions && cursor > -1) {
      setSuggestedProfile(suggestions[cursor].username);
    }
  }, [suggestions, cursor]);

  const handleSuggestionOnClick = (data: string) => {
    //route.push(`/profile/${data}`);
  };

  return (
    <nav className="sticky z-20 flex flex-row justify-between items-center px-4 h-20 w-full bg-white border-b border-b-gray-200">
      <div className="inline-flex justify-start items-center gap-2">
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

        <a href="/dashboard" aria-label="Go to dashboard">
          <img src={eurekaiLogo} alt="eurekai-logo" />
        </a>
      </div>
      <CustomUserSuggestions />
      {/* <SearchAsYouType
        value={searchtext}
        cursor={cursor}
        onChange={(e) => {
          setSearchtext(e.target.value);
          setShowSuggestions(true);
        }}
        onKeyDown={handleKeyDown}
        suggestions={suggestions}
        onSuggestionClick={handleSuggestionOnClick}
      /> */}
      {/* <div className="flex flex-row justify-center items-center gap-4 w-full mx-10">

        <CustomInput
          id="search"
          type="text"
          placeholder="Search Collaborators"
          rightIcon={IoSearchCircleCustom}
          className="w-full"
          color="eurekai-inner-search"
          value={searchtext}
          onChange={(e) => setSearchtext(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(setUserSearchText(searchtext));
            }
          }}
        />
      </div> */}

      <div className="flex flex-row justify-evenly items-center gap-4">
        <CustomButton
          color="eurekai-ghost"
          className="text-nowrap gap-2 items-center font-bold"
          onClick={emailExternal}
        >
          <CiEdit size={24} />
          Can&apos;t find ?
        </CustomButton>
        <a href="#" aria-label="help me">
          <MdHelpOutline size={24} color="#0449D1" />
        </a>
        <div className="relative">
          <CustomButton
            color="eurekai-ghost"
            pill
            aria-label="notifications"
            // onClick={() => route.push("/notifications")}
          >
            <IconWithBadge badgeValue={0}>
              <LuInbox size={24} color="#0449D1" />
            </IconWithBadge>
          </CustomButton>
        </div>
      </div>
    </nav>
  );
}

export default UserViewNavBar;
