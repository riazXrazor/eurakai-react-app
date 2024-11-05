import React from "react";
import CustomModal from "./custom-modal";
import { Modal } from "flowbite-react";
import { MdOutlineInfo } from "react-icons/md";
import CustomInput from "./custom-inputs";
import CustomTextArea from "./custom-text-area";
import { FaList, FaWandMagicSparkles } from "react-icons/fa6";
import TagsInput from "./tags-input";
import CustomButton from "./custom-button";

function EditProjectModal({
  show,
  err,
  formData,
  tags,
  onChange,
  onSubmit,
  onClose,
  onTagUpdate,
}: {
  show: boolean;
  err: string;
  formData: any;
  tags: Array<string>;

  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClose: () => void;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  onTagUpdate: (obj: Array<string>) => void;
}) {
  return (
    <CustomModal show={show} onClose={onClose}>
      <Modal.Header aria-label="edit-project">Edit Project</Modal.Header>
      <Modal.Body>
        {err && (
          <div className="inline-flex font-inter font-normal text-xs text-red-700 gap-2">
            <MdOutlineInfo size={16} />
            <span>{err}</span>
          </div>
        )}
        <form onSubmit={onSubmit}>
          <div className="space-y-1">
            <CustomInput
              color="eurekai-primary"
              id="title"
              type="text"
              sizing="eurekai-2xl"
              aria-label="project-title"
              value={formData.title}
              onChange={onChange}
              required
            />
            <div className="inline-flex justify-start items-center gap-1">
              <MdOutlineInfo size={15} />
              <span className="font-inter font-normal text-xs text-[#0F0F2C]">
                A proper Project Title helps you to track your research later.
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <CustomTextArea
              id="desc"
              color="eurekai-primary"
              className="mt-6"
              aria-label="project description"
              value={formData.desc}
              onChange={onChange}
              required
            />
            <div className="inline-flex justify-start items-center gap-1">
              <MdOutlineInfo size={15} />
              <span className="font-inter font-normal text-xs text-[#0F0F2C]">
                A description is optional but adding some description to it will
                help you tracking this project in future.
              </span>
            </div>
          </div>
          <div className="flex flex-row space-x-2 items-center mt-6 mb-9 w-full">
            <div className="inline-flex items-center gap-2 font-inter text-sm text-[#0F0F2C]">
              <FaList size={16} />
              <span>Tags</span>
            </div>
            <TagsInput tags={tags} onTagUpdate={onTagUpdate} />
          </div>
          <CustomButton
            color="eurekai-primary"
            size="lg"
            className="gap-2"
            type="submit"
          >
            <FaWandMagicSparkles size={24} />
            <span className="font-inter font-bold">Update</span>
          </CustomButton>
        </form>
      </Modal.Body>
    </CustomModal>
  );
}

export default EditProjectModal;
