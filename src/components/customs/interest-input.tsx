import React, { useEffect, useState } from "react";

import { IoIosClose } from "react-icons/io";

function InterestInput({
  tags,
  setTags,
  onTagUpdate,
}: {
  tags: Array<string>;
  setTags?: React.Dispatch<React.SetStateAction<Array<string>>>;
  onTagUpdate?: (tags: Array<string>) => void;
}) {
  const [itags, setITags] = useState<Array<string>>(tags);
  const [tag, setTag] = useState<string>("");
  const [suggestedTag, setSuggestedTag] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Array<string> | undefined>();
  const [cursor, setCursor] = useState<number>(-1);

  useEffect(() => {
    if (!onTagUpdate) return;
    onTagUpdate(itags);
  }, [itags, onTagUpdate]);

  useEffect(() => {
    const getInterestSuggestions = async () => {
      if (tag.length < 1) {
        setSuggestions(undefined);
        setCursor(-1);
        return;
      }
      //const resp = await getInterestSuggestionsApi(tag);
      // console.log(resp.data.data);
      setCursor(-1);
      //setSuggestions(resp.data.data.map((data: any) => data._source.title));
    };
    getInterestSuggestions();
  }, [tag]);

  useEffect(() => {
    if (suggestions && cursor >= 0) {
      setSuggestedTag(suggestions[cursor]);
    }
  }, [suggestions, cursor]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.indexOf(",") > -1) {
      var _tags = e.target.value.split(",");
      _tags = _tags.map((tag) => tag.trim()).filter((tag) => tag !== "");
      if (!_tags.length) return;
      setITags((s) => [...s, ..._tags]);
      setTag(_tags[_tags.length - 1]);
    } else {
      setTag(e.target.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const newTag =
      tag.length > suggestedTag.length && cursor === -1
        ? tag.trim()
        : suggestedTag;
    if (
      (e.key === "Enter" || e.key === "," || e.key === "Tab") &&
      newTag.length &&
      !itags.includes(newTag)
    ) {
      e.preventDefault();
      setITags((s) => [...s, newTag]);
      // setFormData((s) => {
      //   return { ...s, interest: [...s.interest, newTag] };
      // });
      setTag("");
      setCursor(-1);
      setSuggestions(undefined);
      setSuggestedTag("");
    } else if (e.key === "Backspace" && !newTag.length && itags.length) {
      e.preventDefault();
      const tagsCopy = [...itags];
      // const tagsCopy = [...formData.interest];
      const lastTag = tagsCopy.pop();
      setITags(tagsCopy);
      // setFormData((s) => ({ ...s, interest: tagsCopy }));
      lastTag && setTag(lastTag);
    } else if (e.key === "ArrowDown" && suggestions) {
      e.preventDefault();
      setCursor((s) => (s < suggestions.length - 1 ? s + 1 : s));
    } else if (e.key === "ArrowUp" && suggestions) {
      e.preventDefault();
      setCursor((s) => (s !== 0 ? s - 1 : s));
    } else if (e.key === "Backspace") {
      setSuggestedTag("");
      setCursor(-1);
    }
  };
  const handleOnClick = (data: string) => {
    if (!itags.includes(data)) {
      setITags((s) => [...s, data]);
    }
    setTag("");
    setSuggestedTag("");
    setCursor(-1);
    setSuggestions(undefined);
  };

  const handleRemove = (idx: number) => {
    // const newTags = formData.interest.filter((tag, index) => index !== idx);
    // setFormData((s) => ({ ...s, interest: newTags }));
    setITags((s) => s.filter((tag, index) => index !== idx));
  };
  console.log(suggestions);
  return (
    <div className="inline-flex w-full flex-wrap gap-2">
      <input
        className="w-full h-11 border px-4 py-3 gap-2 bg-gray-100 border-gray-200 shadow-sm rounded-lg"
        placeholder="Enter interests, comma-separated, then press Enter ↲"
        aria-label="research-interests"
        value={tag || suggestedTag}
        // onChange={handleChange}
        onInput={handleChange}
        onKeyDown={handleKeyDown}
      />
      {suggestions && suggestions.length > 0 && (
        <div className="block right-0 overflow-y-auto space-y-1 bg-white border border-gray-200 divide-y-2 divide-gray-100 rounded-lg shadow-lg w-full max-h-[500px]">
          <ul>
            {suggestions.map((data, index) => (
              <li
                key={data}
                className={
                  cursor === index
                    ? "p-4 hover:bg-[#F3F3FF] bg-[#F3F3FF] font-inter font-medium text-base text-[#0F0F2C]"
                    : "p-4 hover:bg-[#F3F3FF] font-inter font-medium text-base text-[#0F0F2C]"
                }
                onClick={() => handleOnClick(data)}
              >
                {data}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="inline-flex flex-wrap gap-2">
        {itags.map((tag, index) => (
          <div
            key={index}
            className="inline-flex gap-2 border bg-gray-200 border-gray-200 rounded-full px-2 py-1 font-inter font-normal text-sm shadow-sm text-nowrap"
          >
            {tag}
            <button onClick={() => handleRemove(index)}>
              <IoIosClose />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InterestInput;
