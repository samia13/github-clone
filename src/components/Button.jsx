import React from "react";
import ChevronIcon from "./ChevronIcon";

const Button = ({ label }) => {
  return (
    <button className='icon-wrapper flex items-center gap-2 text-xl font-semibold my-5'>
      <span>{label}</span> <ChevronIcon />
    </button>
  );
};

export default Button;
