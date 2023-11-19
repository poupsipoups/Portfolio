"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section className='px-12'>
       <div className="grid grid-cols-1 sm:grid-cols-12">
         <div className="col-span-7 place-self-center text-center sm:text-left grid lg:place-items-start">
            <h1 className='text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
              <span className='text-transparent bg-clip-text bg-[#aaf540]'>Hi, I&apos;m {""}</span>
              <br />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Pauline',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'a student',
                  1000,
                  'Web developer',
                  1000,
                  'Mobile developer',
                  1000,
                  'looking for an internship',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className='text-white text-base sm:textl-lg lg:text-xl mb-6'>
              Welcome to my Portfolio ! You will learn some things about me and see some of my projects. Enjoy your trip :)
            </p>
            <div>
              <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white text-[#f970a9] hover:bg-[#f970a9] hover:text-white'>Hire me</button>
              <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-100 border-4 border-[#f970a9] mt-3'>Check my CV</button>
            </div>
         </div>
         <div className='col-span-5 place-self-center mt-4'>
            <div className="rounded-full border-4 border-[#f970a9] w-[300px] h-[300px] relative">
              <Image src="/images/me_macbook.png"
              alt="me image"
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}>
              </Image>
            </div>
         </div>
       </div>
    </section>
  )
}

export default HeroSection;