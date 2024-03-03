import React from 'react'
import { airbnb,binance,coinbase,dropbox } from '../assets'
const Clients = () => {
  return (
    <section id='clients' className='flex sm:flex-row flex-col gap-10 sm:gap-0 justify-around items-center flex-wrap'>
      <img src={airbnb} alt="airbnb"  className='w-[192px] h-[60px]'/>
      <img src={binance} alt="binance"  className='w-[192px] h-[38px]'/>
      <img src={coinbase} alt="coinbase"  className='w-[192px] h-[41px]'/>
      <img src={dropbox} alt="dropbox" className='w-[192px] h-[37px]' />
    </section>
  )
}

export default Clients