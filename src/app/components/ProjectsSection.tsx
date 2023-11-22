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
        className='text-black md:mt-56 mt-24 bg-white h-[fit] md:px-20 px-10 py-8'>
        <div className='flex justify-center'>
            <h2 className='md:text-4xl text-3xl font-extrabold mb-4 md:mt-24 mx-auto font-jost'>My Projects</h2>
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