"use client";

import React, { useState } from "react";

import CustomButton from "./custom-button";
import CustomInput from "./custom-inputs";
import CustomModal from "./custom-modal";
import CustomTextArea from "./custom-text-area";
import { Modal } from "flowbite-react";

function CustomEmailExternal({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState<{
    to: string | undefined;
    name: string | undefined;
    subject: string;
    emailContent: string;
  }>({
    to: undefined,
    name: undefined,
    subject: "Invitation to join EurekAI",
    emailContent: `Hi John Doe,\n\n would love to connect and explore potential research collaborations with you.\nPlease accept this invitation and join EurekAI (https://www.eurekai.tech) to collaborate with researchers like .\n\n Send from EurekAI`,
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setFormData((s) => ({ ...s, [e.target.id]: e.target.value }));
  };

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.to || !formData.name) return;
    //await sendInviteExternalApi(formData);
    setFormData((s) => ({ ...s, to: undefined, name: undefined }));
    onClose();
  };
  return (
    <CustomModal show={show} onClose={onClose}>
      <Modal.Header>Collaboration Request</Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit}>
          <div className="space-y-1 mb-3">
            <span className="font-inter font-semibold text-sm text-black">
              To
            </span>
            <CustomInput
              color={"eurekai-primary"}
              id="to"
              type="email"
              aria-label="email-id"
              value={formData.to}
              placeholder="john.doe@gmail.com"
              onChange={onChange}
              required
            />
          </div>
          <div className="space-y-1 mb-3">
            <span className="font-inter font-semibold text-sm text-black">
              Name
            </span>
            <CustomInput
              color={"eurekai-primary"}
              id="name"
              type="text"
              aria-label="name"
              value={formData.name}
              placeholder="John Doe"
              onChange={onChange}
              required
            />
          </div>
          <div className="space-y-1 mb-3">
            <span className="font-inter font-semibold text-sm text-black">
              Subject
            </span>
            <CustomInput
              color={"eurekai-primary"}
              id="subject"
              type="text"
              aria-label="email-subject"
              value={formData.subject}
              disabled
            />
          </div>

          <div className="space-y-1 mb-3">
            <CustomTextArea
              color={"eurekai-primary"}
              id="emailContent"
              aria-label="email-content"
              value={
                formData.name
                  ? `Hi ${formData.name},\n\nI'd love to connect and explore potential research collaborations with you.\nPlease accept this invitation and join EurekAI (https://www.eurekai.tech) to collaborate with me.\n\n Send from EurekAI`
                  : formData.emailContent
              }
              onChange={onChange}
              rows={7}
              disabled
            />
          </div>
          <div className="mt-6">
            <CustomButton type="submit" color={"eurekai-primary"} size={"sm"}>
              Send
            </CustomButton>
          </div>
        </form>
      </Modal.Body>
    </CustomModal>
  );
}

export default CustomEmailExternal;
