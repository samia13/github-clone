import React from "react";
import SignUpButton from "./SignUpButton";
import ChevronIcon from "./ChevronIcon";

const CTA = () => {
  return (
    <div className='flex gap-6 flex-col md:flex-row mb-14 w-full'>
      <SignUpButton />
      <button className='btn icon-wrapper flex gap-2 items-center h-12 bg-transparent text-white rounded-md px-7 py-3'>
        <p>Start a free entreprise trial</p>
        <ChevronIcon />
      </button>
    </div>
  );
};

export default CTA;
