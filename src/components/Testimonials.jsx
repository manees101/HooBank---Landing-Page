import React from 'react'
import styles from '../style'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'
const Testimonials = () => {
  return (
    <section id='client' className={`${styles.flexCenter } flex-col ${styles.paddingY} sm:mt-20 my-10 relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className={`w-[100%] flex justify-around flex-col md:flex-row items-center relative z-[1]`}>
       <h4 className={`${styles.heading2} text-white max-w-[470px]`}>
       What people are<br className='hidden md:block'/> saying about us
       </h4>
       <p className={`${styles.paragraph} text-dimWhite max-w-[450px] mt-4 md:mt-0`}>
       Everything you need to accept card payments and grow your business anywhere on the planet.
       </p>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap sm:mt-12 mt-10 relative z-[1]'>
        {
          feedback.map((item,index)=>(
            <FeedbackCard {...item} key={index}/>
          ))
        }
      </div>
    </section>
  )
}

export default Testimonials