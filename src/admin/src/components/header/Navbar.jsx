import React, { useEffect, useState } from "react";

import { Link as Link1, useLocation, useNavigate } from "react-router-dom";

import headerLogo from "../../assetss/footer-logo.svg";
import searchIcon from "../../assetss/search-icon.svg";
import Profil from "../../assetss/profil.svg";
import Logout from "../../assetss/logout.svg";
import Phone from "../../assetss/phone.svg";
import Mail from "../../assetss/mail.svg";

export default function Navbar() {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <nav>
      <div className="bg-[#222831] text-white flex justify-end items-center px-8">
        <div className="flex items-center p-2">
          <span className="inline-block px-2">
            <img src={Phone} alt="" width="20px" />
          </span>
          +628569070707
        </div>
        <div className="flex items-center p-2">
          <span className="inline-block px-2">
            <img src={Mail} alt="" width="20px" />
          </span>
          foodbank_yogyakarta.id
        </div>
      </div>
      <div className="flex flex-row justify-between items-center px-8 py-4 bg-[#1B2426] text-white">
        <div>
          <img src={headerLogo} alt="" width="200px" />
        </div>
        <div className="flex items-center space-x-6 text-base font-semibold">
          <Link1
            to="/home"
            className={url === "/home" ? "bg-[#FEB200] p-2 rounded-sm" : ""}
          >
            Home
          </Link1>
          <Link1
            to="/volunteer"
            className={
              url === "/volunteer" ? "bg-[#FEB200] p-2 rounded-sm" : ""
            }
          >
            Relawan
          </Link1>
          <Link1
            to="/donor"
            className={url === "/donor" ? "bg-[#FEB200] p-2 rounded-sm" : ""}
          >
            Donasi
          </Link1>
          <button>
            <img src={searchIcon} alt="" />
          </button>
        </div>
        <div className="flex">
          <button className="pr-2">
            <img src={Profil} alt="" className="rounded-full" />
          </button>
          <div className="pr-8">
            <p>Welcome,</p> arrra
          </div>
          <button>
            <img src={Logout} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}
