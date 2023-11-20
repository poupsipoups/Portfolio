"use client";
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import projectData from '../api/projects';

const ProjectsSection = () => {
    const [tag, setTag] = useState('All');

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    }; 

    const filteredProjects = projectData.filter((project)=>
        project.tag.includes(tag)
    );
    
  return (
    <section className='text-black mt-56 bg-white h-[fit] px-20 py-8'>
        <h2 className='text-4xl font-bold mb-4'>My Projects</h2>
        <div className='flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/>
            <ProjectTag onClick={handleTagChange} name="Software" isSelected={tag === "Software"}/>
            <ProjectTag onClick={handleTagChange} name="Creation" isSelected={tag === "Creation"}/>
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project)=> (
            <ProjectCard 
                key={project.id}
                id={project.id} 
                title={project.title} 
                description={project.about} 
                imgUrl={project.image} 
                gitUrl={project.gitUrl} 
                />))}
        </div>
    </section>
  )
}

export default ProjectsSection;