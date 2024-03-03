import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient text-[20px] sm:text-[15px] font-poppins  outline-none font-semibold ${styles} rounded-lg hover:rounded-full hover:scale-95 transition-transform duration-500 ease-in-out`}
    >
      Get Started
    </button>
  );
};

export default Button;
