import React from "react";

const StatText = ({ className, title, children }) => {
  return (
    <div className={className}>
      <p className='text-xl text-gray-500'>
        <span className='text-xl mr-1 text-white'>{title}</span>
        {children}
      </p>
    </div>
  );
};

export default StatText;
