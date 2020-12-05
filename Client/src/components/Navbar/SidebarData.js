import React from "react";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as FcIcons from "react-icons/fc";

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
    icon: <RiIcons.RiGalleryLine />,
    cName: "nav-text"
  },
  {
    title: "My page",
    path: "/user",
    icon: <BsIcons.BsPersonSquare />,
    cName: "nav-text"
  },
  {
    title: "About",
    path: "/about",
    icon: <FcIcons.FcAbout />,
    cName: "nav-text"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <RiIcons.RiContactsBookFill />,
    cName: "nav-text"
  }
];
