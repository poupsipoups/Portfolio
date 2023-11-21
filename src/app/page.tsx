"use client";
import HeroSection from './components/HeroSection';
import  Navbar  from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import {AnimatePresence} from "framer-motion";





export default function Home() {





  return (
    <body>
    
      <div id='up'></div>
      <div id='down'></div>
      <div id='down2'></div>
      <div id='left'></div>
      <div id='left2'></div>
      <div id='right'></div>
    
      
      
      <main className="flex min-h-screen flex-col">
         <Navbar></Navbar>
      
         <div className="container mx-auto py-4 mt-48">
          <AnimatePresence initial={false} mode='wait'>
            <HeroSection ></HeroSection>
            <AboutSection ></AboutSection>
            <ProjectsSection ></ProjectsSection>      
            <EmailSection></EmailSection>
          </AnimatePresence>
            
          </div>
               {/* <div className='gradient-background'></div> */}
      </main>
    </body>
  )
}
