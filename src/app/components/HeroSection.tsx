"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import {motion} from "framer-motion";



const HeroSection = () => {
  return (
    <motion.section
      key="hero" 
      className='px-12' 
      initial={{opacity:0}} 
      animate={{opacity: 1}} 
      transition={{duration:0.75, ease: "easeOut"}}
      exit={{opacity:0}}
    >

       <div className="grid grid-cols-1 sm:grid-cols-12 z-2">
         <div className="col-span-7 place-self-center text-center sm:text-left grid lg:place-items-start" style={{zIndex: 5}}>
            <h1 className='text-black mb-4 text-6xl sm:text-5xl lg:text-8xl font-bold font-jost'>
              <span className='text-transparent bg-clip-text bg-[#AFE54B] hover:text-white animation duration-500 ease-in-out'>Hi, I&apos;m <span className='text-black hover:text-[#f970a9] animation duration-100 ease-in-out'>Pauline</span> :)</span>
              <br />
            </h1>
            <p className='text-white text-base sm:textl-lg lg:text-xl mb-6 font-zilla'>
              Welcome to my Portfolio ! You will learn some things about me and see some of my projects. Enjoy your trip !
            </p>
            <div>
              {/* <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white text-[#f970a9] hover:bg-[#f970a9] hover:text-white'>Hire me</button> */}
              <Link href={'/files/CV_2024_English.pdf'} target='_blank' className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-100 border-4 border-[#f970a9] mt-3'>Check my CV</Link>
            </div>
         </div>
         <div className='col-span-5 place-self-center mt-4'>
            <div className="rounded-full  w-[300px] h-[300px] relative overflow-hidden">
              <div className='rounded-full w-[300px] h-[300px] absolute  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-slate-100 opacity-30 blur-sm'></div>
              <Image src="/images/me_macbook.png"
              alt="me image"
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}>
              </Image>
            </div>
         </div>
       </div>
       <div className='grid grid-cols-1 mt-10 '>
        <button className='place-self-center bg-transparent text-white hover:border-2 hover:border-[#AFE54B] hover:text-[#AFE54B] rounded-full'>
          <Link href={'#about'} className='flex flex-col align-center justify-center font-jost px-6 py-2'>
            <span>Let&apos;s start</span>
            <ChevronDoubleDownIcon className='h-6 w-6 mx-auto'/>
          </Link>
          
          </button>
       </div>
    </motion.section>
  )
}

export default HeroSection;