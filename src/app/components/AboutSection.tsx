"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image';
import TabButton from './TabButton';
import {motion} from "framer-motion";
import TagComponent from './TagComponent';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className='flex flex-wrap justify-around'>
        <TagComponent name='HTML'/>
        <TagComponent name='CSS'/>
        <TagComponent name='Javascript'/>
        <TagComponent name='React'/>
        <TagComponent name='ReactNative'/>
        <TagComponent name='VueJS'/>
        <TagComponent name='Flutter'/>
        <TagComponent name='AngularJS'/>
        <TagComponent name='PHP'/>
        <TagComponent name='MySQL'/>
        <TagComponent name='C++'/>
        <TagComponent name='OpenGL'/>
        <TagComponent name='Figma'/>
        <TagComponent name='Adobe Package'/>
        <TagComponent name='Blender'/>
      </div>
      
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bremen University</li>
        <li>IMAC (Image Multimedias Audiovisual and Communication) in ESIEE Paris</li>
        <li>INSA Rennes</li>
      </ul>
    ),
  },
  {
    title: "Professional experiences",
    id: "professional",
    content: (
      <ul className="list-disc pl-2">
        <li>Veoneer Safety System (fullstack internship)</li>
        <li>Shogureign (supervised project)</li>
      </ul>
    ),
  },
  {
    title: "Other experiences",
    id: "other xp",
    content: (
      <ul className="list-disc pl-2">
        <li>BDI as communication manager (student association)</li>
        <li>Foy INSA Rennes as communication manager (studend bar and concert hall) </li>
        <li>BEBOP INSA Rennes as communication manager (concert organization)</li>
        <li>Rock&apos;n Solex festival in DECO&apos;s team</li>
      </ul>
    ),
  },
];

const AboutSection = () => {

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <motion.section
      key="about" 
      id='about' 
      className='text-black mt-56 bg-white h-[100vh] scroll-smooth' 
      style={{zIndex:10}}>
        <div className='md:grid md:grid-cols-2  px-20 py-8 xl:gap-8 sm:py-16 xl:px-16 mt-24'>

          <Image src='/images/about-me.jpg' alt="photo of me" width={400} height={400} className='rounded-xl place-self-center'></Image>

            
            <div className='mt-12 flex flex-col items-center'>
              <div>
                <h2 className='text-4xl font-extrabold mb-4 font-Jost'>About me</h2>
                <p className='text-base lg:text-lg text-[#1b1b1e] max-w-md'>I&apos;m a last year student in the engineering school ESIEE Paris. My major is Image, Multimedias, Audioviual and Communication (IMAC). I&apos;ve learned a lot in computer sciences but also in art and design. Then I have a very polyvalent profile ! I want to work in web development or mobile development in full-stack or front-end. I hope you enjoy what you read !</p>
              </div>
              
              <div className='flex flex-row justify-between mt-8'>
              <TabButton
                selectTab={async () => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills 
              </TabButton>
            <TabButton
              selectTab={async () => handleTabChange("education")}
              active={tab === "education"}
            >Education </TabButton>
            <TabButton
              selectTab={async () => handleTabChange("professional")}
              active={tab === "professional"}
            >Professional experiences </TabButton>
            <TabButton
              selectTab={async () => handleTabChange("other xp")}
              active={tab === "other xp"}
            >Other experiences </TabButton>

            </div>
            <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
   
            </div>
            
        </div>
        
    </motion.section>
  )
}

export default AboutSection;