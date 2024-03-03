import React from 'react'
import { arrowUp } from '../assets'
import styles from '../style'
const GetStarted = () => {
  return (
    <div className={`rounded-full w-[140px] h-[140px] p-[2px] bg-blue-gradient ${styles.flexCenter} cursor-pointer hover:scale-95 transition-all duration-500 ease-in-out`}>
     <div className={`bg-black w-[100%] h-[100%] flex-col ${styles.flexCenter} rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className=' font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Get</span>
          <img src={arrowUp} alt="arrow" className='inline-block ml-1 h-[23px] w-[23px] object-contain' /><br />
          <span className='text-gradient'>Started</span>
        </p>
      </div>
     </div>
    </div>
  )
}

export default GetStarted