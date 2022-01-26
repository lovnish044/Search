import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔍All" },
  { url: "/news", text: "📰News" },
  { url: "/images", text: "📷Images" },
  { url: "/videos", text: "📺Videos" },
];
export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }, index) => (
        <NavLink key={index}  className={(navData) => navData.isActive  ? "text-black-700 border-b-2 dark:text-black-300 border-black-700 m-2 pb-2 mb-0" : " m-2 mb-0"
          }
          to={url}>
          {text}
        </NavLink>
      ))}
    </div>
  );
};
