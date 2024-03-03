import React from "react";
import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";
import styles from "../style";
const Footer = () => {
  return (
    <section className={`${styles.paddingY} ${styles.paddingX}`}>
      <div className="flex  flex-row flex-wrap md:justify-around lg:gap-0 gap-10">
         <div>
          <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain"/>
          <p className="text-dimWhite mt-10 max-w-[312px] mb-20">
          A new way to make the payments easy, reliable and secure.
          </p>
         </div>
         {
          footerLinks.map((footer,index)=>(
            <div key={index} className="flex flex-col gap-4 md:my-0 my-4 min-w-[150px]">
             <h4 className="text-white font-poppins font-semibold leading-[27px]">{footer.title}</h4>
             <div className="flex flex-col gap-3">
               {
                footer.links.map((item,index)=>(
                  <a href={item.link} className="text-dimWhite hover:text-secondary" key={index}>{item.name}</a>
                ))
               }
             </div>
            </div>
          ))
         }
      </div>
      
      <div className="flex flex-col md:flex-row md:justify-between items-center md:gap-0 gap-4 w-[90%] pt-10 mx-auto border-t-[1px] border-t-[#3F3E45]">
        
          <p className="text-dimWhite font-poppins font-normal text-center text-[18px] leading-[27px] ">
            Copyright
            <span className="mx-2">©</span>
            2021 HooBank. All Rights Reserved.
          </p>
        <div className="flex gap-4 ">
         {
          socialMedia.map((item)=>(
            <a href={item.link} key={item.id} target="_blank">
               <img src={item.icon} alt={item.id} />
            </a>
          ))
         }
        </div>
      </div>
    </section>
  );
};

export default Footer;
