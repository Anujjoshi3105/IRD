import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  let Links = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "ABOUT",
      link: "/about",
    },
    {
      name: "DOWNLOADS",
      link: "/download",
    },
    {
      name: "NOTICES",
      link: "/notice",
    },
    {
      name: "CONTACT US",
      link: "/contact",
    },
  ];

  return (
    <div className="top-0 left-0 w-full">
      <div className="shadow-md bg-red-900 h-30 items-center flex px-12">
        <div className="p-4 flex items-center gap-6">
          <img src="logo.png" className="h-20" alt="" />
          <h1 className="text-white font-bold text-3xl">
            INDUSTRIAL RESEARCH DEVELOPMENT
          </h1>
        </div>
        <div className="flex md:flex-row flex-col gap-4 absolute right-14">
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-8 border-b-4 border-blue-700 hover:border-blue-600 rounded-full">
            <a href="/login" className="text-white">
              LOGIN
            </a>
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-6 border-b-4 border-gray-700 hover:border-gray-500 rounded-full">
            <a href="/register" className="text-black">
              REGISTER
            </a>
          </button>
        </div>
      </div>
      <div className="h-16 bg-blue-900 flex">
        <div className="flex px-20 items-center">
          <ul className="flex md:flex-row flex-col md:items-center gap-6">
            {Links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.link}
                  activeClassName="bg-black text-white"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black bg-white font-bold py-2 px-4 rounded-full"
                      : "text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded-full"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
