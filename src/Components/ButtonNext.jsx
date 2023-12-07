import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonNext = ({ TextButton }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="button-next" onClick={() => navigate("/informasi")}>
        <div className="button-next-inner"></div>
        <span className="span-button-next">{TextButton}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="15"
          viewBox="0 0 25 15"
          fill="none"
          className="panah-kanan"
        >
          <path
            d="M15.4366 13.7183L24.1862 8.02778C24.8704 7.58391 24.8704 6.86235 24.1862 6.41849L15.4366 0.727917C14.7523 0.282914 13.6446 0.282914 12.9622 0.727917C12.2797 1.17292 12.2779 1.89335 12.9622 2.33721L18.7247 6.08502H1.94988C0.983919 6.08502 0.199951 6.59489 0.199951 7.22313C0.199951 7.85137 0.983919 8.36124 1.94988 8.36124H18.7247L12.9622 12.1091C12.6209 12.331 12.4494 12.6223 12.4494 12.9137C12.4494 13.2051 12.6209 13.4964 12.9622 13.7183C13.6464 14.1633 14.7541 14.1633 15.4366 13.7183Z"
            fill="#1B2426"
          />
        </svg>
      </div>
    </>
  );
};

export default ButtonNext;
