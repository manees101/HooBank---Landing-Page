import React from "react";
import { quotes } from "../assets";
import styles from "../style";
const FeedbackCard = ({ content,img,name,title }) => {
  return (
    <div className="feature-card h-[395px] w-full sm:w-[400px] rounded-[10px] p-10 sm:ml-5 ml-0 flex flex-col justify-around">
      <div className="w-[42px] h-[27px]">
        <img
          src={quotes}
          alt="quote"
          className="h-[100%] w-[100%] object-contain"
        />
      </div>
      <div className="sm:mt-10 mt-6">
        <p className={`${styles.paragraph} text-white`}>
          {content}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-[48px] h-[48px]">
          <img
            src={img}
            alt={name}
            className="h-[100%] w-[100%] object-contain"
          />
        </div>
        <div className="flex flex-col">
         <h4 className={` font-normal font-poppins text-[15px] sm:text-[20px] text-white`}>
          {name}
         </h4>
         <p className={`text-dimWhite`}>
            {title}
         </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
