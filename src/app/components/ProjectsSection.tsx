"use client";
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import projectData from '../api/projects';
import {motion} from "framer-motion";

const ProjectsSection = () => {
    const [tag, setTag] = useState('All');

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    }; 

    const filteredProjects = projectData.filter((project)=>
        project.tag.includes(tag)
    );
    
  return (
    <motion.section 
        key="projects"
        id='projects' 
        className='text-black mt-56 bg-white h-[fit] px-20 py-8'
        initial={{opacity:0}} 
      animate={{opacity: 1}} 
      transition={{duration:0.75, ease: "easeOut"}}
      exit={{opacity:0}}>
        <div className='flex justify-center'>
            <h2 className='text-4xl font-extrabold mb-4 mt-24 mx-auto font-jost'>My Projects</h2>
        </div>
        <div className='flex flex-row justify-center items-center gap-2 py-6 font-jost'>
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/>
            <ProjectTag onClick={handleTagChange} name="Software" isSelected={tag === "Software"}/>
            <ProjectTag onClick={handleTagChange} name="Creation" isSelected={tag === "Creation"}/>
        </div>
        <div className='grid md:grid-cols-2 gap-8 md:gap-12 md:mx-48 mt-14'>
            {filteredProjects.map((project)=> (
            <ProjectCard 
                key={project.id}
                id={project.id} 
                title={project.title} 
                titleUrl={project.titleUrl}
                description={project.about} 
                imgUrl={project.image} 
                gitUrl={project.gitUrl} 
                />))}
        </div>
    </motion.section>
  )
}

export default ProjectsSection;