"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>ReactNative</li>
        <li>Flutter</li>
        <li>VueJS</li>
        <li>AngularJS</li>
        <li>PHP</li>
        <li>MySQL</li>
        <li>C++</li>
        <li>OpenGL</li>
        <li>Figma</li>
        <li>Adobe package</li>
        <li>Blender</li>
      </ul>
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
        <li>Rock'n Solex festival in DECO's team</li>
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
    <section className='text-black mt-56 bg-white h-[fit]'>
        <div className='md:grid md:grid-cols-2 items-center px-20 py-8 xl:gap-8 sm:py-16 xl:px-16'>

          <Image src='/images/about-me.jpg' alt="photo of me" width={500} height={500} className='rounded-xl'></Image>

            
            <div>
              <h2 className='text-4xl font-bold mb-4'>About me</h2>
              <p className='text-base lg:text-lg text-[#1b1b1e]'>I'm a last year student in the engineering school ESIEE Paris. My major is Image, Multimedias, Audioviual and Communication (IMAC). I've learned a lot in computer sciences but also in art and design. Then I have a very polyvalent profile ! I want to work in web development or mobile development in full-stack or front-end. I hope you enjoy what you read !</p>
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
        
    </section>
  )
}

export default AboutSection;