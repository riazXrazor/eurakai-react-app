"use client";

import { Button, Checkbox, Label, Modal } from "flowbite-react";
import { MdInfoOutline, MdMailOutline } from "react-icons/md";

import { BiSolidLock } from "react-icons/bi";
import CustomButton from "../customs/custom-button";
import CustomInput from "../customs/custom-inputs";
import CustomModal from "../customs/custom-modal";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import PrivacyPolicy from "./privacy-policy";
import TOS from "./tos";

export default function SignUpForm({
  err,
  openToSModal,
  openPrivacyModal,
  setOpenToSModal,
  setOpenPrivacyModal,
  setHasTOSAgreed,
  setErr,
  handleOnChange,
  handleSubmit,
  loading,
}: {
  err: string;
  openPrivacyModal: boolean;
  openToSModal: boolean;
  setOpenToSModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenPrivacyModal: React.Dispatch<React.SetStateAction<boolean>>;
  setHasTOSAgreed: React.Dispatch<React.SetStateAction<boolean>>;
  setErr: React.Dispatch<React.SetStateAction<string>>;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler;
  loading: boolean;
}) {
  return (
    <form
      className="flex flex-col items-center w-1/4 p-6 gap-4 rounded-3xl bg-white border border-gray-200 shadow-md"
      onSubmit={handleSubmit}
    >
      <div
        className="w-full flex justify-center flex-col items-center font-inter font-normal text-sm"
        aria-label="Don't have an account with us"
      >
        {/* <span>Sign in with google</span> */}
      </div>

      <div
        style={{ width: "50%" }}
        className="font-inter font-semibold text-lg text-gray-400"
      >
        <h1 className="mline">OR</h1>
      </div>
      {/* <div>
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="gap-2 text-center">
            <Button
              className=" border border-gray-200 p-6 drop-shadow-sm hover:bg-[#F3F3FF]"
              color="white"
              aria-label="Google Login"
              onClick={() => alert("Coming soon!")}
            >
              <FcGoogle size={24} />
            </Button>
            <span className="font-inter font-normal text-lg text-[#0F0F2C]">
              Google
            </span>
          </div>
          <div className="gap-2 text-center">
            <Button
              className=" border border-gray-200 p-6 drop-shadow-sm hover:bg-[#F3F3FF]"
              color="white"
              aria-label="LinkedIn login"
              onClick={() => alert("Coming soon!")}
            >
              <FaLinkedin size={24} />
            </Button>
            <span className="font-inter font-normal text-lg text-[#0F0F2C]">
              LinkedIn
            </span>
          </div>
          <h1 className="font-lora text-4xl font-bold text-[#9fa3ab]">
            Sign up
          </h1>
        </div>
      </div> */}

      {/* <div
        className="relative flex flex-row items-center w-full gap-4"
        aria-label="Or you can login with the following"
      >
        <hr className="block h-px w-full bg-gray-500 border-t" />
        <span className="font-inter font-normal text-lg text-gray-500">OR</span>
        <hr className="block h-px w-full bg-gray-500 border-t" />
      </div> */}
      {err && (
        <span className="flex flex-row items-center gap-2 font-inter font-normal text-xs text-red-700">
          <MdInfoOutline size={16} />
          {err}
        </span>
      )}

      <div className="flex flex-col items-start w-full">
        <div className="mb-2 block">
          <Label className="font-inter font-semibold text-sm text-[#6F6F80]">
            Email address
          </Label>
          <Label className="font-inter font-bold text-red-700 text-xs">
            {" "}
            *
          </Label>
        </div>
        <CustomInput
          id="email"
          type="email"
          placeholder="Your email"
          color="eurekai-primary"
          className="drop-shadow-sm w-full h-11"
          icon={MdMailOutline}
          aria-label="email"
          onChange={handleOnChange}
          required
        />
      </div>

      <div className="flex flex-col items-start w-full">
        <div className="mb-2 block">
          <Label className="font-inter font-semibold text-sm text-[#6F6F80]">
            Full name
          </Label>
          <Label className="font-inter font-bold text-red-700 text-xs">
            {" "}
            *
          </Label>
        </div>
        <CustomInput
          id="name"
          type="text"
          placeholder="Enter your full name"
          color="eurekai-primary"
          className="drop-shadow-sm w-full h-11"
          aria-label="name"
          onChange={handleOnChange}
          required
        />
      </div>

      <div className="flex flex-col items-start w-full">
        <div className="mb-2 block">
          <Label className="font-inter font-semibold text-sm text-[#6F6F80]">
            Password
          </Label>
          <Label className="font-inter font-bold text-red-700 text-xs">
            {" "}
            *
          </Label>
        </div>
        <CustomInput
          id="password"
          type="password"
          placeholder="Enter your password"
          color="eurekai-primary"
          className="drop-shadow-sm w-full h-11"
          icon={BiSolidLock}
          aria-label="password"
          onChange={handleOnChange}
          required
        />
      </div>
      <div className="flex flex-col items-start w-full">
        <div className="mb-2 block">
          <Label className="font-inter font-semibold text-sm text-[#6F6F80]">
            Confirm Password
          </Label>
          <Label className="font-inter font-bold text-red-700 text-xs">
            {" "}
            *
          </Label>
        </div>
        <CustomInput
          id="password2"
          type="password"
          placeholder="Enter your password"
          color="eurekai-primary"
          className="drop-shadow-sm w-full h-11"
          icon={BiSolidLock}
          aria-label="confirm-password"
          onChange={handleOnChange}
          required
        />
      </div>

      <div className="flex flex-col items-start w-full">
        <div className="mb-2 block">
          <Label className="font-inter font-semibold text-sm text-[#6F6F80]">
            Affiliation or Institution
          </Label>
          <Label className="font-inter font-bold text-red-700 text-xs">
            {" "}
            *
          </Label>
        </div>
        <CustomInput
          id="affiliation"
          type="text"
          placeholder="Enter your Institute name"
          color="eurekai-primary"
          className="drop-shadow-sm w-full h-11"
          aria-label="affiliation-or-institution"
          onChange={handleOnChange}
          required
          helperText={
            <>
              <span className="font-inter font-normal text-xs text-[#0F0F2C]">
                This information helps us tailor our resources and features to
                meet the specific needs of your academic or research
                environment.
              </span>
            </>
          }
        />
        <div className="flex justify-start items-start gap-2 mt-4">
          <Checkbox
            id="agree"
            className="outline-[#0449D1] focus:ring-[#0449D1] text-[#0449D1]"
            onClick={() => {
              setHasTOSAgreed(true);
              setOpenToSModal(false);
              setErr("");
            }}
          />
          <span className="font-inter font-normal text-xs text-gray-500">
            I agree to your{" "}
            <a
              href="#"
              className="underline"
              onClick={() => setOpenToSModal(true)}
            >
              Terms of Service
            </a>{" "}
            &{" "}
            <a
              href="#"
              className="underline"
              onClick={() => setOpenPrivacyModal(true)}
            >
              Privacy Policy
            </a>{" "}
            <span className="text-red-700 text-xs">*</span>
          </span>
        </div>
      </div>
      <CustomButton
        disabled={loading}
        color="eurekai-primary"
        size="lg"
        type="submit"
        fullSized
      >
        {loading ? `Submitting...` : `Continue`}
      </CustomButton>
      <span className="font-inter font-normal text-xs text-[#0F0F2C]">
        Already have an account?{" "}
        <a href="/" className="text-[#0449D1] underline">
          Sign in
        </a>
      </span>
      {/* <span className="font-inter font-normal text-xs text-gray-500">
        By continuing, you agree to our{" "}
        <Link
          href="#"
          className="underline"
          onClick={() => setOpenToSModal(true)}
        >
          Terms of Service
        </Link>{" "}
        &{" "}
        <Link
          href="#"
          className="underline"
          onClick={() => setOpenPrivacyModal(true)}
        >
          Privacy Policy
        </Link>
      </span> */}

      <CustomModal
        show={openToSModal}
        onClose={() => setOpenToSModal(false)}
        dismissible
      >
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body className="p-8">
          <TOS />
        </Modal.Body>
      </CustomModal>
      <CustomModal
        dismissible
        show={openPrivacyModal}
        onClose={() => setOpenPrivacyModal(false)}
      >
        <Modal.Header>Privacy Policy</Modal.Header>
        <Modal.Body className="p-8">
          <PrivacyPolicy />
        </Modal.Body>
      </CustomModal>
    </form>
  );
}
