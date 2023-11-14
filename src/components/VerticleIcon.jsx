import React from "react";

const VerticleIcon = ({ color, children }) => {
  return (
    <span className='relative'>
      <span
        className={`absolute w-full h-full top-0 left-0 blur-lg ${color}`}
      ></span>
      {children}
    </span>
  );
};

export default VerticleIcon;
