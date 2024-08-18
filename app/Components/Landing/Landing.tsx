import React from 'react';
import Image from 'next/image';
import oImage from '../../../public/asset/Images/OP.jpg';


const Landing = () => {
  return (
    <div className='flex flex-row  dark:bg-cyan-950 '   >
   <div className=' sm:w-6/12 w-full  flex flex-col gap-9 border-l-neutral-600 '   >
   <div className='w-full text-center gap-28'  >
   <div className='my-10'  >
   <p className='text-8xl from-neutral-600 block my-9 text-center font-bold '   > 
     Hi,i'm 
    </p>
   </div>
    <div>
    <p className='text-5xl w-full my-9 p-6  '   >
     Omid
    </p>
    </div>
  <div className='p-8 text-center mx-auto '  >
    <p className='w-4/6 px-8 my-10 text-2xl  mx-auto leading-7  '  >
   i'm a full-Stack Developer 
   with 5 years of experience using react js and next js. 
   Reach out if you'd like to learn more!
    </p>
  </div>
   </div>
   </div> 
   <div className='sm:w-6/12 w-full flex justify-center items-center '   >
   <div>
   <Image   alt='omid' className='rounded-full shadow-lg filter grayscale'  src={oImage}   />
   </div>
   </div> 
    </div>
  ) 
}

export default Landing