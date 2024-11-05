"use client";

import React, { useEffect, useState } from "react";

import SearchAsYouType from "./search-as-you-type";

function CustomUserSuggestions() {
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  const [suggestedProfile, setSuggestedProfile] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {};

  const handleSuggestionOnClick = (data: string) => {
    //route.push(`/profile/${data}`);
  };

  return (
    // <SearchAsYouType
    //   value={searchText}
    //   cursor={cursor}
    //   onKeyDown={handleKeyDown}
    //   suggestions={suggestions}
    //   onSuggestionClick={handleSuggestionOnClick}
    //   onChange={(e) => {
    //     setSearchText(e.target.value);
    //     setShowSuggestions(true);
    //   }}
    // />
    null
  );
}

export default CustomUserSuggestions;
