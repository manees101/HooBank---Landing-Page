import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 xl:px-0 sm:px-16`}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span>
            Discount For
            <span className="text-white"> 1 Month </span>
            Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-[52px] ss:text[72px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="hidden ss:flex mr-0 md:mr-4">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold text-[52px] ss:text[72px] text-white ss:leading-[100px] leading-[75px] w-full">
          {" "}
          Payment Method.
        </h1>
        <div className="w-full sm:w-[483px] h-[93px] my-4 font-semibold">
          <p className=" text-dimWhite">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs.
            <br />
            We examine annual percentage rates, annual fees.
          </p>
        </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="robot"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute bottom-40 w-[80%] h-[80%] rounded-full z-[1] white__gradient" />
        <div className="absolute z-[0] h-[50%] w-[50%] bottom-20 right-20 blue__gradient" />
      </div>
      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted/>
      </div>
    </section>
  );
};

export default Hero;
