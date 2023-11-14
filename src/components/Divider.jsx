import React from "react";

const Divider = ({ children }) => {
  return (
    <div className='flex justify-center items-center flex-col gap-4 pt-6'>
      {children}
    </div>
  );
};

export default Divider;
