"use client";

import { Label, Modal, Progress } from "flowbite-react";
import { MdInfo, MdOutlineInfo } from "react-icons/md";
import React, { useState } from "react";

import CustomButton from "./custom-button";
import CustomInput from "./custom-inputs";
import CustomModal from "./custom-modal";
import InterestInput from "./interest-input";
import TagsInput from "./tags-input";
import WrapperDiv from "../shared/wrapper-div";
import academicIcon from "@/assets/images/academics.svg";
import professionalIcon from "@/assets/images/professional.svg";

function MultiStepModal({
  userId,
  isFirstTime,
}: {
  userId: string;
  isFirstTime: boolean;
}) {
  const [step, setStep] = useState(1);
  const [tags, setTags] = useState<Array<string>>([]);
  const [err, setErr] = useState<string>("");
  const [formData, setFormData] = useState<any>({
    userId: userId,
    role: "",
    fieldOfExpertise: "",
    interest: [],
  });
  const [completion, setCompletion] = useState(50);

  const handleConfirm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    if (!tags.length) {
      e.preventDefault();
      setErr("Research Interest cannot be empty");
      return;
    }
    // setFormData((s) => ({ ...s, interest: tags }));
    //await userCompletion({ ...formData, interest: tags });
    setErr("");
  };

  const getRender = () => {
    switch (step) {
      case 1:
        return (
          <WrapperDiv>
            <div className="pt-6 space-y-2">
              <h2 className="font-lora font-semibold text-4xl text-black">
                Welcome to EurekAI! Define your role
              </h2>
              <p className="font-inter font-normal text-lg text-gray-500">
                Your research experience is customized according to your role
                selection. While you can opt to configure this later, we
                strongly advise completing this step now to ensure your
                experience is personalized from the start.
              </p>
            </div>
            <div className="pt-6 space-y-4 w-full">
              <div
                className={`flex flex-row justify-start items-center w-full border rounded-lg py-4 px-6 gap-3 border-gray-200 shadow-sm cursor-pointer hover:bg-gray-300 ${
                  formData.role === "academics"
                    ? "ring-4 ring-black outline-none"
                    : ""
                }`}
              >
                <img src={academicIcon} alt="academics" />
                <span className="font-inter font-bold text-lg text-[#0F0F2C]">
                  Academics
                </span>
              </div>
              <div
                className={`flex flex-row justify-start items-center w-full border rounded-lg py-4 px-6 gap-3 border-gray-200 shadow-sm cursor-pointer hover:bg-gray-300 ${
                  formData.role === "professional"
                    ? "ring-4 ring-black outline-none"
                    : ""
                }`}
              >
                <img src={professionalIcon} alt="professionals" />
                <span className="font-inter font-bold text-lg text-[#0F0F2C]">
                  Professional
                </span>
              </div>
              <div className="flex justify-end">
                <CustomButton
                  color="eurekai-primary"
                  onClick={() => {
                    if (formData.role === "") return;
                    setStep((s) => s + 1);
                    setCompletion((s) => s + 50);
                  }}
                >
                  Next
                </CustomButton>
              </div>
            </div>
          </WrapperDiv>
        );

      case 2:
        return (
          <WrapperDiv>
            <h2 className="font-lora font-semibold text-4xl text-black">
              Tell us more about yourself
            </h2>
            {err && (
              <span className="inline-flex items-center gap-2 mt-4 font-inter font-normal text-sm text-red-700">
                <MdOutlineInfo />
                {err}
              </span>
            )}
            <form onSubmit={handleConfirm}>
              {/* <div className="pt-6">
                <div className="mb-2 block space-x-1">
                  <Label
                    htmlFor="aff"
                    value={
                      formData.role === "academics"
                        ? "University attending/attented"
                        : "Where are you currently working?"
                    }
                    className="text-gray-500"
                  />
                  <span className="text-red-500">*</span>
                </div>
                <CustomInput
                  type="text"
                  id="aff"
                  placeholder={
                    formData.role === "academics"
                      ? "University name"
                      : "Company name"
                  }
                  aria-label={
                    formData.role === "academics" ? "University" : "Company"
                  }
                  onChange={(e) =>
                    setFormData((s) => {
                      return { ...s, affiliation: e.target.value };
                    })
                  }
                  required
                ></CustomInput>
              </div> */}
              <div className="pt-6">
                <div className="mb-2 block space-x-1">
                  <Label
                    htmlFor="foS"
                    value={
                      formData.role === "academics"
                        ? "Field of Study"
                        : "Area of Expertise"
                    }
                    className="text-gray-500"
                  />
                  <span className="text-red-500">*</span>
                </div>
                <CustomInput
                  type="text"
                  id="foS"
                  placeholder={
                    formData.role === "academics"
                      ? "Major field of study"
                      : "e.g. Machine Learning, Statistical Modelling"
                  }
                  aria-label={
                    formData.role === "academics" ? "University" : "Industry"
                  }
                  required
                />
              </div>

              <div className="pt-6">
                <div className="mb-2 block space-x-1">
                  <Label
                    htmlFor="ri"
                    value="Research Interest"
                    className="text-gray-500"
                  />
                  <span className="text-red-500">*</span>
                </div>
                {/* <TagsInput tags={tags} onTagUpdate={(tags) => setTags(tags)} /> */}
                <InterestInput
                  tags={tags}
                  onTagUpdate={(tags) => setTags(tags)}
                />
              </div>

              <div className="flex flex-row justify-end items-center gap-2 pt-6">
                <button
                  className="inline-flex py-1.5 px-5 gap-2 rounded-lg border bg-white border-gray-200 font-inter font-bold text-base text-black h-9 shadow-sm"
                  onClick={() => {
                    setStep((s) => s - 1);
                    setCompletion((s) => s - 50);
                  }}
                >
                  Go Back
                </button>
                <button
                  className="inline-flex py-1.5 px-5 gap-2 rounded-lg border bg-blue-700 border-blue-500 font-inter font-bold text-base text-white h-9 shadow-sm"
                  // onClick={handleConfirm}
                  type="submit"
                >
                  Confirm
                </button>
              </div>
            </form>
          </WrapperDiv>
        );
      default:
        throw new Error("Invalid step has been provided");
    }
  };

  return (
    <CustomModal show={isFirstTime}>
      <div>
        <div className="inline-block w-full bg-gray-200 overflow-hidden h-2.5 rounded-lg">
          <div
            className="bg-yellow-400 h-2.5"
            style={{ width: `${completion}%` }}
          ></div>
        </div>
      </div>

      {getRender()}
    </CustomModal>
  );
}

export default MultiStepModal;
