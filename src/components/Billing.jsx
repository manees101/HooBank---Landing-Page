import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="h-[100%] w-[100%] relative z-[5]"
        />
        <div className="absolute -left-1/2 top-0 h-[50%] w-[50%] white__gradient z-[3] rounded-full" />
        <div className="absolute -left-1/2 bottom-0 h-[50%] w-[50%] pink__gradient z-[0] rounded-full" />
      </div>
      <div className={layout.sectionInfo}>
        <h4 className={styles.heading2}>
          Easily control your <br className="hidden sm:block" /> billing &
          invoicing.
        </h4>
        <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex mt-12 gap-4 flex-wrap">
          <button type="button" className="w-[128px] h-[42px] transition-all hover:scale-95 duration-500 ease-in-out">
            <img src={apple} alt="apple" className="h-[100%] w-[100%] object-contain " />
          </button>
          <button type="button" className="w-[128px] h-[42px] transition-all hover:scale-95 duration-500 ease-in-out">
            <img src={google} alt="google" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Billing;
