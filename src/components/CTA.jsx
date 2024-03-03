import React from "react";
import Button from "./Button";
import styles from "../style";
const CTA = () => {
  return (
    <div className="py-10 px-10 md:px-0 bg-black-gradient-2 box-shadow flex md:flex-row flex-col items-center justify-around my-20  rounded-[10px] bg-slate-800 mx-auto">
      <div className=" sm:mb-0 mb-10">
        <h4 className={`${styles.heading2} text-white font-poppins`}>
          Let’s try our service now!
        </h4>
        <p className=" h-[58px] text-dimWhite my-5 leading-[30px] max-w-[470px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};

export default CTA;
