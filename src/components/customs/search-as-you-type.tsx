"use client";

import { IoSearchCircle, IoSearchCircleOutline } from "react-icons/io5";
import React, { useEffect, useRef } from "react";

import { Avatar } from "flowbite-react";
import CustomInput from "./custom-inputs";

const IoSearchCircleCustom = () => <IoSearchCircle size={40} color="#0449d0" />;
function SearchAsYouType({
  value,
  onChange,
  onKeyDown,
  onSuggestionClick,
  suggestions,
  cursor,
  placeholder = "Search Collaborators",
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSuggestionClick: (data: string) => void;
  cursor: number;
  suggestions?: Array<any>;
  placeholder?: string | "Search collaborators";
}) {
  return (
    <div className="relative w-full mx-10">
      <CustomInput
        id="search"
        placeholder={placeholder}
        rightIcon={IoSearchCircleCustom}
        className="w-full"
        color="eurekai-inner-search"
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        autoFocus
      />
      {suggestions && suggestions.length > 0 && (
        <div className="absolute top-full end-3 gap-2 overflow-y-auto space-y-1 bg-white border border-gray-200 divide-y-2 divide-gray-100 rounded-lg shadow-lg w-full max-h-[500px]">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                key={suggestion._id}
                className={
                  cursor === index
                    ? "p-2 hover:bg-[#F3F3FF] bg-[#F3F3FF] font-inter font-medium text-base text-[#0F0F2C] w-full hover:cursor-pointer"
                    : "p-2 hover:bg-[#F3F3FF] font-inter font-medium text-base text-[#0F0F2C] w-full hover:cursor-pointer"
                }
                onClick={() => onSuggestionClick(suggestion.username)}
              >
                <div className="inline-flex justify-between items-center w-full">
                  <span>{suggestion.name}</span>
                  <Avatar
                    img={suggestion.profilePic}
                    alt={suggestion.name}
                    rounded
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-row items-center justify-end w-full">
            <a
              className="font-inter font-normal text-sm underline text-blue-600 hover:cursor-pointer"
              href="#"
            >
              See more
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchAsYouType;
