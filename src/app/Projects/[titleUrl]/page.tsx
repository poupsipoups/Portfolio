"use client";
import React, { useEffect, useState } from 'react';
import projectData from '@/app/api/projects';
import parse from 'html-react-parser';
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import Link from 'next/link';
import {ChevronRightIcon, ChevronLeftIcon} from "@heroicons/react/24/outline";

interface projectProps {
  params:{
    titleUrl: string
  }
    
};

const Page: React.FC<projectProps> = ({params}) => {

  const project = projectData.find(obj => { return (obj.titleUrl == params.titleUrl)});

  const projectImages = project?.images;
  const projectVideos = project?.videos;

  const [hasGitLink, setHasGitLink] = useState(true);

  function checkGitUrl(){
    if(project?.gitUrl == ""){
      setHasGitLink(false);
    }
  }

  useEffect(() =>{
    checkGitUrl();
  });
  
  
    
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar></Navbar>

      <div className='md:grid md:grid-cols-12 md:h-screen h-fit md:overflow-y-hidden w-full md:px-20 px-10 py-8 xl:gap-8 sm:py-16 xl:px-16 mt-24 md:fixed top-0 left-0'>

      <div className='md:sticky md:top-0 md:h-screen md:overflow-y-auto md:pb-8 md:col-span-5'>

        <h1 className='text-4xl font-bold mb-4 font-jost'>{project?.title}</h1>
        <p className='font-zilla'>{project?.about}</p>
        <div className='font-zilla'>{project?.description && parse(project.description)}</div>

        {
          hasGitLink?(
          <div className='w-full flex justify-center items-center mt-5' >
            
              <button className='w-full py-2 border-2 text-[#00167A] border-[#00167A] hover:text-white hover:bg-[#00167A] transition-all duration-600 ease-in-out '>
              <Link href={project?.gitUrl ?? ''} target='_blank' className=' flex flex-row justify-center items-center '>
              Voir le projet sur git      
              <ChevronRightIcon className='h-4 w-4 ml-2'/>
              </Link> 
            </button>
            
          </div>) : (<div></div>)
        }
        
        <div className='mt-5 w-full md:flex justify-center hidden'>
          <Link href={'/#projects'} className='text-[#00167A] flex flex-row justify-center items-center hover:text-[#AFE54B] transition-all ease-in-out duration-500'>
            <ChevronLeftIcon className='h-4 w-4 mr-2'/> Retour aux projets
          </Link>
        </div>

      </div>
      <div className='md:col-span-7'></div>

      </div>
    
   
      <div className='md:grid md:grid-cols-12 md:px-20 px-10 py-8 xl:gap-8 sm:py-16 xl:px-16 mt-12'>

    

          <div className='md:col-span-5'></div>


          <div className='flex flex-col items-center mb-5 md:overflow-y-auto scrollbar-hide md:col-span-7'>

            <div className='mb-5'>
            {
              projectVideos?.map((videoID, index)=>(
                <div key={index} className='mb-5 rounded-xl'>
                <LiteYouTubeEmbed
                  aspectHeight={9}
                  aspectWidth={16}
                  id={videoID}
                  title="project video"
                />
            </div>
              ))   
            }
            {projectImages?.map((imageName, index) => (
            <div key={index} className='mb-5'>
              <Image src={`/images/${imageName}`} alt={`Image ${index + 1}`} width={600} height={500} className='rounded-xl' />
            </div> ))}
          </div> 
        </div>

        <div className='mt-5 w-full flex justify-center md:hidden'>
          <Link href={'/#projects'} className='text-[#00167A] flex flex-row justify-center items-center hover:text-[#AFE54B] transition-all ease-in-out duration-500'>
            <ChevronLeftIcon className='h-4 w-4 mr-2'/> Retour aux projets
          </Link>
        </div>
  

      </div>
  
    </main>

  )
    
}

export default Page;

