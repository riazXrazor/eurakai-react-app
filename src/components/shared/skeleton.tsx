import {
  Avatar,
  Dropdown,
  DropdownHeader,
  Footer,
  Navbar,
  Sidebar,
} from "flowbite-react";
import { FaClockRotateLeft, FaStar } from "react-icons/fa6";
import React, { useContext } from "react";

import { AiOutlineGroup } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import CustomNavBar from "../customs/custom-navbar";
import CustomSideBar from "../customs/custom-sidebar";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineForum } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import UserViewNavBar from "../customs/userview-navbar";
import eurekaiLogo from "../../assets/images/eurekAILogo.png";

function Skeleton({
  collaborators,
  searchType = "paper-search",
  variant = "default",
  emailExternal = () => {},
  viewUser = false,
  children,
}: {
  collaborators?: Array<{ title: string; icon: any; onClick: () => void }>;
  searchType?: "paper-search" | "people";
  emailExternal?: () => void;
  variant?: "default" | "dashboard" | "inner" | "with-search" | "userview";
  viewUser?: boolean;
  children: React.ReactNode;
}) {
  const sidebarItems = [
    {
      title: "Projects",
      icon: AiOutlineGroup,
      onClick: () => {},
    },
    {
      title: "Activity",
      icon: FaClockRotateLeft,
      onClick: () => {
        alert("We are currently working on this.");
      },
    },
    {
      title: "Notes",
      icon: CgNotes,
      onClick: () => {
        alert("We are currently working on this.");
      },
    },
    {
      title: "Forum",
      icon: MdOutlineForum,
      onClick: () => {
        alert("We are currently working on this.");
      },
    },
    {
      title: "Team",
      icon: RiTeamLine,
      onClick: () => {
        alert("We are currently working on this.");
      },
    },
    {
      title: "Favs",
      icon: FaStar,
      onClick: () => {
        alert("We are currently working on this.");
      },
    },
    {
      title: "Blog",
      icon: PiNotePencil,
      onClick: () => {
        alert("We are currently working on this.");
      },
    },
  ];

  const innerSidebarItems = [
    {
      title: "Projects",
      icon: AiOutlineGroup,
      onClick: () => {},
    },
    {
      title: "Activity",
      icon: FaClockRotateLeft,
      onClick: () => {
        alert("We are currently working on this.");
      },
    },
    {
      title: "General Notes",
      icon: CgNotes,
      onClick: () => {
        alert("We are currently working on this.");
      },
    },
    {
      title: "Collaborator settings",
      icon: TbSettings,
      onClick: () => {
        alert("We are currently working on this.");
      },
    },
    {
      title: "Team",
      icon: RiTeamLine,
      onClick: () => {
        alert("We are currently working on this.");
      },
    },
    {
      title: "Favs",
      icon: FaStar,
      onClick: () => {
        alert("We are currently working on this.");
      },
    },
    {
      title: "Rename",
      icon: CiEdit,
      onClick: () => {
        alert("We are currently working on this.");
      },
    },
    {
      title: "Blog",
      icon: PiNotePencil,
      onClick: () => {
        alert("We are currently working on this.");
      },
    },
    {
      title: "Announcement",
      icon: GrAnnounce,
      onClick: () => {
        alert("We are currently working on this.");
      },
    },
  ];

  const getSkeleton = () => {
    switch (variant) {
      case "dashboard":
        return (
          <>
            <CustomNavBar />
            <div className="flex flex-row min-h-[calc(100svh_-_80px)] overflow-y-auto overflow-x-hidden">
              <CustomSideBar userName={""} options={sidebarItems} />
              {/* {children} */}
              <main className="bg-[#F9FAFB] w-full">{children}</main>
            </div>
          </>
        );
      case "inner":
        return (
          <>
            <CustomNavBar options={innerSidebarItems} isInner />
            {children}
          </>
        );
      case "with-search":
        return (
          <>
            <CustomNavBar
              options={innerSidebarItems}
              searchType={searchType}
              emailExternal={emailExternal}
              isInner
              hasSearch
            />

            {children}
          </>
        );
      case "userview":
        return (
          <>
            <UserViewNavBar
              options={innerSidebarItems}
              searchType={searchType}
              emailExternal={emailExternal}
              isInner
              hasSearch
            />

            <div className="flex flex-row min-h-[calc(100svh_-_80px)] overflow-y-auto overflow-x-hidden">
              {children}
            </div>
          </>
        );
      default:
        return (
          <>
            {!viewUser ? (
              <>
                <Navbar
                  fluid
                  rounded
                  className="h-20 w-full flex justify-center"
                >
                  <Navbar.Brand as={"a"} href="/">
                    <img
                      src={eurekaiLogo}
                      alt="eurekai-logo"
                      aria-label="EurekAI"
                    />
                  </Navbar.Brand>
                </Navbar>
                <main
                  className={
                    "flex items-center min-h-[calc(100vh_-_80px)] w-full bg-[#ebf1fc]"
                  }
                >
                  {children}
                </main>
              </>
            ) : (
              <>
                <nav className="flex justify-center items-center border-b-2 border-b-gray-200 h-20 w-full">
                  <a href="/">
                    <img
                      src={eurekaiLogo}
                      alt="eurekai-logo"
                      aria-label="EurekAI"
                    />
                  </a>
                </nav>
                <div className="flex flex-row min-h-[calc(100svh_-_80px)] overflow-y-auto overflow-x-hidden">
                  {children}
                </div>
              </>
            )}
          </>
        );
    }
  };

  return getSkeleton();
}

export default Skeleton;
