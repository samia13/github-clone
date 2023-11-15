import React from "react";

const Divider = ({ type = "col", children }) => {
  return (
    <div
      className={`flex justify-center relative items-center gap-4 flex-${type}`}
    >
      {children}
    </div>
  );
};

export default Divider;
