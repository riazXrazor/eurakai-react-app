import { CustomFlowbiteTheme, Modal, ModalProps } from "flowbite-react";
import React from "react";

export default function CustomModal(props: ModalProps) {
  const customTheme: CustomFlowbiteTheme["modal"] = {
    content: {
      inner:
        "relative flex max-h-[90dvh] flex-col rounded-2xl bg-white shadow dark:bg-gray-700",
    },
    body: {
      base: "flex-1 overflow-auto p-4 gap-10 w-full",
    },
    header: {
      base: "flex items-start justify-between rounded-t border-b dark:border-gray-600 px-4 py-2 gap-2",
      title: "text-lg font-inter font-bold",
    },
  };
  return (
    <Modal theme={customTheme} {...props}>
      {props.children}
    </Modal>
  );
}
