import React from "react";

export const Button = ({ styles }) => {
  return (
    <button
      type="button "
      className={`py-4 px-6 bg-blue-gradient font-poppins rounded-[10px] font-medium text-[18px] text-primary outline-none ${styles} 
      hover:scale-105 transition `}
    >
      Get Started
    </button>
  );
};
