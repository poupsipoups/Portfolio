"use client";
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectData = [
    {
        id: 1,
        title: "Shogureign",
        description: "React • React Native • Javascript • HTML • CSS Git • GitHub • Agile Methodolog. Serious game for learning kanji. January 2023. Team of 4 people.Role: Game design and game architecture development in pairs.This project was carried out during a tutored project by Jérôme Hernandez. The specifications given were quite broad: create a mobile app game, Tinder-like (similar to the game Reigns), and integrating a system for learning Kanji characters. This project was completed with three other individuals, with whom we developed the game from A to Z (game story, game design, learning system, and development). The game is compatible with Android and iOS and was built using the React Native framework. The learning system is organized in two ways: The player learns kanji characters by encountering them in the game's story. The player has recurring lessons. These lessons have an evolving level based on the player's performance in exams (every 10 lessons).Furthermore, the player can review the encountered vocabulary, both in the learning phase and the acquired phase, in the dictionary.",
        image: "/images/projects_view/shogureign.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "/",
        prewiewUrl : "/"
    },
    {
        id: 2,
        title: "Infinitimac",
        description : "3D Animation in Blender.November-December 2022.Solo project.This project involved creating a 4-second (100 frames) 3D animation using Blender software. Constraints were imposed: we had a base file that included an already animated camera that should not be modified and a circular object. The main element of our scene had to be a circular or spherical object of the same size as the one already present in the base file. Our instructor then compiled the work of all students to produce the video you see on the right.",
        image: "/images/projects_view/forestnight2.png",
        tag: ["All", "3D", "Creation"],
        gitUrl: "/",
        prewiewUrl : "/"
    },
    {
        id: 3,
        title: "Ratio",
        description :"C++ Library for Rational Numbers. November-December 2022. Team of 2 people. Role: Creation of the library and mathematical reasoning. This project brings together skills acquired in C++ object-oriented programming and mathematics for computer science. We created a library containing a class for rational numbers (irreducible fractions) and overloaded mathematical operators to make these rational numbers easily usable by a user. We also implemented unit tests to verify that the functions in our library are correct.",
        image: "/images/projects_view/ratio.png",
        tag: ["All", "Software", "Maths"],
        gitUrl: "/",
        prewiewUrl : "/"
    },
    {
        id: 4,
        title: "@eatude",
        description: 'UX Design for a Student Assistance Application. November-December 2022. Team of 4 people. Role: Each stage of creation was done as a team. The central theme of this project was "How to encourage collaboration among students to help them eat better?" To better understand the needs, we conducted interviews with several individuals to create an affinity map. From this, we derived an experience map by defining a target (Persona) and user emotions. After a workshop to gather interesting ideas, we created initial sketches through User Flow and Wireframe before final design on Figma.',
        image: "/images/projects_view/ateatude.png",
        tag: ["All", "Web", "Design"],
        gitUrl: "/",
        prewiewUrl : "/"
    }
];

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
                title={project.title} 
                description={project.description} 
                imgUrl={project.image} 
                gitUrl={project.gitUrl} 
                previewUrl={project.prewiewUrl}/>))}
        </div>
    </section>
  )
}

export default ProjectsSection;