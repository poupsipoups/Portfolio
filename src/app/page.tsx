"use client";
import HeroSection from './components/HeroSection';
import  Navbar  from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';





export default function Home() {


  return (
    <body>
    
      <div id='up'></div>
      <div id='down'></div>
      <div id='down2'></div>
      <div id='left'></div>
      <div id='left2'></div>
      <div id='right'></div>
    
      
      
      <main className="flex min-h-screen flex-col w-[100%]">
         <Navbar></Navbar>
      
         <div className="container w-full py-4 md:mt-48 mt-32 max-w-full">
            <HeroSection ></HeroSection>
            <AboutSection ></AboutSection>
            <ProjectsSection ></ProjectsSection>      
            <ContactSection></ContactSection>
            
          </div>
               {/* <div className='gradient-background'></div> */}
      </main>
    </body>
  )
}
