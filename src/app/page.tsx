import Image from 'next/image';
import HeroSection from './components/HeroSection';
import  Navbar  from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      
       <Navbar></Navbar>
             <div className="container mx-auto py-4 mt-48">
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <ProjectsSection></ProjectsSection>
        <EmailSection></EmailSection>
             </div>
             <div className='gradient-background'></div>
    </main>
  )
}
