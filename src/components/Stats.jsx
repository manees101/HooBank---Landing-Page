import React from 'react'
import styles from '../style'
import { stats } from '../constants'
const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}>
       {
        stats.map((stat,index)=>(
          <div className='flex items-center m-4' key={stat.id}>
         {index===0 ? "":<hr className='py-1 px-[1px] bg-dimWhite mx-8 hidden lg:block'/>} 
           <div className={`flex justify-start items-center flex-1`} >
            <h1 className='font-poppins text-white font-semibold xs:leading-[56px] leading-[40px] text-[20px] xs:text-[30px]'>
              {stat.value}
            </h1>
            <p className={`text-gradient leading-[20px] font-poppins xs:leading-[26px] font-normal text-[16px] xs:text-[20px] uppercase ml-3`}>
              {stat.title}
            </p>
          </div>
          </div>
         
        ))
       }
    </section>
  )
}

export default Stats