import {
  AvatarGroupProps,
  AvatarProps,
  CustomFlowbiteTheme,
} from "flowbite-react";
import React from "react";

export default function CustomAvatar(props: AvatarProps) {
  const customTheme: CustomFlowbiteTheme["avatar"] = {
    root: {
      stacked: "ring-0 shadow-none",
    },
  };
  return <CustomAvatar theme={customTheme} {...props} />;
}
