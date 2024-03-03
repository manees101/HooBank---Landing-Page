import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { features } from "../constants";
const FeatureCard=({feature,styles})=>{
  return(
    <div className={`flex flex-row ${styles} items-center feature-card p-6 rounded-[10px]`}>
      <div className="w-[64px] h-[64px] rounded-full bg-dimBlue flex justify-center items-center">
        <img src={feature.icon} alt="" className="h-[50%] w-[50%] object-contain"/>
      </div>
      <div className="text-dimWhite h-[100%] flex-1 flex flex-col gap-1 font-poppins ml-3">
        <h2 className="font-semibold text-[20px] text-white leading-[23px]">{feature.title}</h2>
        <p className="font-md text-[14px]">{feature.content}</p>
      </div>
    </div>
  )
}
const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business,
          <br className="hidden sm:block" /> we’ll handle the money.
        </h2>
        <p className={`text-dimWhite max-w-[480px] mt-4`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
       {
        features.map((feature,index)=>(
          <FeatureCard feature={feature} key={index} styles={index===0 ? "mt-0":"mt-5"}/>
        ))
       }
      </div>
    </section>
  );
};

export default Business;
