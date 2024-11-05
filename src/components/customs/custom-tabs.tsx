import { CustomFlowbiteTheme, Tabs, TabsProps } from "flowbite-react";
import { CustomThemeConfig } from "tailwindcss/types/config";

export default function CustomTabs(props: TabsProps) {
  const customTheme: CustomFlowbiteTheme["tabs"] = {
    tablist: {
      variant: {
        underline:
          "mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
        fullWidth:
          "grid w-full grid-flow-col rounded-none text-sm font-medium shadow",
      },
      tabitem: {
        base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        variant: {
          underline: {
            active: {
              on: "active rounded-t-lg border-b-2 border-[#0449D1] text-[#0449D1]",
              off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600",
            },
          },
          fullWidth: {
            active: {
              on: "active rounded-none border-b-2 border-[#0449D1] text-[#0449D1] p-4",
              off: "rounded-none border-b-2 border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700",
            },
          },
        },
      },
    },
  };
  return (
    <Tabs theme={customTheme} {...props}>
      {props.children}
    </Tabs>
  );
}
