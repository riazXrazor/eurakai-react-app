import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";

function TagsInput({
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

  useEffect(() => {
    if (!onTagUpdate) return;
    onTagUpdate(itags);
  }, [itags, onTagUpdate]);

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
    const newTag = tag.trim();
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
    } else if (e.key === "Backspace" && !newTag.length && itags.length) {
      e.preventDefault();
      const tagsCopy = [...itags];
      // const tagsCopy = [...formData.interest];
      const lastTag = tagsCopy.pop();
      setITags(tagsCopy);
      // setFormData((s) => ({ ...s, interest: tagsCopy }));
      lastTag && setTag(lastTag);
    }
  };

  const handleRemove = (idx: number) => {
    // const newTags = formData.interest.filter((tag, index) => index !== idx);
    // setFormData((s) => ({ ...s, interest: newTags }));
    setITags((s) => s.filter((tag, index) => index !== idx));
  };

  return (
    <div className="inline-flex w-full flex-wrap gap-2">
      <input
        className="w-full h-11 border px-4 py-3 gap-2 bg-gray-100 border-gray-200 shadow-sm rounded-lg"
        placeholder="Enter interests, comma-separated, then press Enter ↲"
        aria-label="research-interests"
        value={tag}
        // onChange={handleChange}
        onInput={handleChange}
        onKeyDown={handleKeyDown}
      />
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

export default TagsInput;
