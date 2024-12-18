import React, { useState } from "react";
import { Search } from "lucide-react";
import { useSearch } from "../../context/SearchContext";

const Header = () => {
    const { setSearchQuery } = useSearch();

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
  };


  return (
    <div className="navbar p-5 z-20 bg-black">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <svg
            id="logo-72"
            width="52"
            height="44"
            viewBox="0 0 53 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z"
              className="ccustom"
              fill="#f1f1f1"
            ></path>
          </svg>
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <Search className="hidden" />
        <input
            type="text"
            placeholder="Search a movie"
            onChange={handleInputChange}
            className="input transition ease-in-out lg:flex hidden w-full bg-neutral-700 opacity-45 focus:opacity-100 md:w-auto rounded-2xl"
        />
        </div>
        <div className="dropdown dropdown-end">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
