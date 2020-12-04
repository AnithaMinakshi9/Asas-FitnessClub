import React from "react";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Gallery",
    path: "/gallery",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "My page",
    path: "/dashboard",
    icon: <BsIcons.BsPersonSquare />,
    cName: "nav-text"
  },
  {
    title: "About",
    path: "/about",
    icon: <RiIcons.RiGalleryLine />,
    cName: "nav-text"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  }
];
