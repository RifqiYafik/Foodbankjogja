// import React from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonDonasi = (props) => {
  const { TextButton, onClick, link } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    onClick && onClick();
    navigate(link);
  };

  return (
    <div>
      <button
        type="button"
        className="btn-donasi"
        onClick={handleClick}
        link={link}
      >
        {TextButton}
      </button>
    </div>
  );
};

export default ButtonDonasi;
