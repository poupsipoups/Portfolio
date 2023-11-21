"use client";
import React from 'react';
import projectData from '@/app/api/projects';
import parse from 'html-react-parser';
import NavbarProject from '@/app/components/NavbarProject';
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
  
    
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <NavbarProject></NavbarProject>

      <div className='md:grid md:grid-cols-12 h-screen overflow-y-hidden w-full px-20 py-8 xl:gap-8 sm:py-16 xl:px-16 mt-24 fixed top-0 left-0'>

      <div className='md:sticky md:top-0 md:h-screen md:overflow-y-auto md:pb-8 col-span-5'>

        <h1 className='text-4xl font-bold mb-4'>{project?.title}</h1>
        <p>{project?.about}</p>
        <div>{project?.description && parse(project.description)}</div>

        <div className='w-full flex justify-center items-center mt-5'>
          <button className='w-full py-2 border-2 text-[#00167A] border-[#00167A] hover:text-white hover:bg-[#00167A] transition-all duration-600 ease-in-out  flex flex-row justify-center items-center '>
            Voir le projet sur git      
            <ChevronRightIcon className='h-4 w-4 ml-2'/>
            </button>
        </div>
        <div className='mt-5 w-full flex justify-center'>
          <Link href={'/#projects'} className='text-[#00167A] flex flex-row justify-center items-center hover:text-[#AFE54B] transition-all ease-in-out duration-500'>
            <ChevronLeftIcon className='h-4 w-4 mr-2'/> Retour aux projets
          </Link>
        </div>

      </div>
      <div className='col-span-7'></div>

      </div>
    
   
      <div className='md:grid md:grid-cols-12 px-20 py-8 xl:gap-8 sm:py-16 xl:px-16 mt-12'>

    

          <div className='col-span-5'></div>


          <div className='flex flex-col items-center mb-5 overflow-y-auto scrollbar-hide col-span-7'>

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
  

      </div>
  
    </main>

  )
    
}

export default Page;