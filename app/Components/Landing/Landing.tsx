import React from 'react';
import Image from 'next/image';
import img from '../../../public/asset/Images/LandigBack.jpg'


const Landing = () => {
  return (
    <div className='w-full dark:bg-cyan-950 '   >
        <Image 
       style={{
        width: '100%',
      }}
      objectFit="contain"

        quality={80}
        sizes="(max-width: 1308px) 180vw, 33vw" alt='' objectFit=''   src={img}   />
    </div>
  ) 
}

export default Landing