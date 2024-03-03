import React from 'react'
import styles,{layout} from '../style'
import Button from './Button'
import { card } from '../assets'
const CardDeal = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
        Find a better card deal <br className="hidden sm:block" /> in few easy steps.
         
        </h2>
        <p className={`text-dimWhite max-w-[480px] mt-4`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={`${layout.sectionImg}`}>
       <img src={card} alt="card" className='object-contain z-[5]'/>
       <div className='absolute -right-1/2 top-0 h-[50%] w-[50%] rounded-full z-[3] white__gradient'/>
       <div className='absolute -right-1/2 bottom-0 h-[50%] w-[50%] rounded-full z-[3] pink__gradient'/>
      </div>
    </section>
  )
}

export default CardDeal