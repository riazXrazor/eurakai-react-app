import { CustomFlowbiteTheme, Drawer, DrawerProps } from "flowbite-react";
import React from "react";

function CustomDrawer(props: DrawerProps) {
  const customDrawerTheme: CustomFlowbiteTheme["drawer"] = {
    root: {
      position: {
        right: {
          on: "right-0 top-0 h-screen w-full transform-none",
          off: "right-0 top-0 h-screen w-full translate-x-full",
        },
      },
    },
  };
  return (
    <Drawer theme={customDrawerTheme} {...props}>
      {props.children}
    </Drawer>
  );
}

export default CustomDrawer;
