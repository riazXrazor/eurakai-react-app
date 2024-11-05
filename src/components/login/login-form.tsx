import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";

import CustomButton from "../customs/custom-button";
import CustomInput from "../customs/custom-inputs";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdInfoOutline } from "react-icons/md";

export default function LoginForm({
  handleChange,
  handleSubmit,
  err,
  loading,
}: {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler;
  err: string;
  loading: boolean;
}) {
  return (
    <form
      className="flex flex-col w-1/3 bg-white items-center gap-4 p-6 rounded-3xl border border-gray-200 drop-shadow-[0_2px_4px_-1px_rgba(0, 0, 0, 0.06), 0_4px_6px_-1px_rgba(0, 0, 0, 0.1)]"
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
            Sign in
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
          <Label className="font-inter font-semibold" aria-label="Email">
            Email
          </Label>
        </div>
        <CustomInput
          id="email"
          type="email"
          placeholder="Your registered Email address"
          className="drop-shadow-sm w-full h-11"
          color="eurekai-primary"
          aria-label="Enter your registered email"
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-col items-start w-full">
        <div className="mb-2 block">
          <Label className="font-inter font-semibold" aria-label="Password">
            Password
          </Label>
        </div>
        <CustomInput
          id="password"
          type="password"
          placeholder="Your Password"
          className="drop-shadow-sm w-full h-11"
          color="eurekai-primary"
          aria-label="Enter your password"
          onChange={handleChange}
          required
        />
        <div
          className="flex mt-1 justify-end w-full"
          aria-label="Did you forget your password?"
        >
          <a
            className="font-inter font-normal underline text-sm text-[#0449D1]"
            href="#"
            aria-label="Press forgot password to reset your password"
          >
            Forgot Password?
          </a>
        </div>
      </div>
      <CustomButton
        color="eurekai-primary"
        size="lg"
        aria-label="Sign in"
        type="submit"
        fullSized
        disabled={loading}
      >
        {loading ? `Submitting...` : `Sign in`}
      </CustomButton>

      <div
        className="w-full flex justify-center font-inter font-normal text-sm"
        aria-label="Don't have an account with us"
      >
        <span>
          Don&apos;t have an account?{" "}
          <a
            href="/signup"
            className="text-[#0449D1]"
            aria-label="Press sign-up to create an account with us"
          >
            Sign up
          </a>
        </span>
      </div>
      {/* <div style={{ width: "50%" }}>
        <h1 className="mline">OR</h1>
      </div>
      <div
        className="w-full flex justify-center flex-col items-center font-inter font-normal text-sm"
        aria-label="Don't have an account with us"
      >
        <GoogleLogin
          size="large"
          shape="rectangular"
          onSuccess={handleGoogleLogin}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        
      </div> */}
    </form>
  );
}
