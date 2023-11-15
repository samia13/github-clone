import React from "react";

const StatText = ({ className, title, children }) => {
  return (
    <div className={className}>
      <p className='text-xl font-semibold text-zinc-500 '>
        <span className='text-xl mr-1 text-white'>{title}</span>
        {children}
      </p>
    </div>
  );
};

export default StatText;
