import { CustomFlowbiteTheme, TextInput, TextInputProps } from "flowbite-react";

export default function CustomInput(props: TextInputProps) {
  const customTheme: CustomFlowbiteTheme["textInput"] = {
    field: {
      input: {
        sizes: {
          "eurekai-default": "py-4 px-3 gap-2 text-sm",
          "eurekai-lg": "py-4 pl-4 pr-2 gap-2 rounded-lg",
          "eurekai-2xl": "px-4 py-3 gap-2 text-4xl",
        },
        colors: {
          "eurekai-primary":
            "bg-white hover:border-[#0449D1] focus:border-[#0449D1] focus:ring-[#0449D1] border-gray-200 text-[#0F0F2C]",
          "eurekai-inner-search":
            "bg-white border-2 border-[#0449D1] focus:border-[#0449D1] focus:ring-[#0449D1] text-[#0F0F2C]",
        },
      },
    },
  };
  return <TextInput theme={customTheme} {...props} />;
}
