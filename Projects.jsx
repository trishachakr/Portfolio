import React from 'react'
import ProjectsCard from './ProjectsCard'


const projectsData = [
    {
        id:1,
        title: "Short Film",
        description: "Short Film Creation with a friend during high school",
        image: "/images/Projects/shortfilm.jpg",
    },
    {
        id:2,
        title: "Advertisement",
        description: "Advertisement video made for my high school",
        image: "/images/Projects/ad.jpg",
    },
    {
        id:3,
        title: "Arduino",
        description: "Simple Arduino exploration with password door mechanism",
        image: "/images/Projects/arduino.jpg",
    },
    {
        id:4,
        title: "3D Model Abstract",
        description: "3D model project of abstract structures with physical and digital model",
        image: "/images/Projects/model1.jpg",
    },
    {
        id:5,
        title: "3D Model Castle",
        description: "Castle architectural model",
        image: "/images/Projects/model2.jpg",
    },
    {
        id:6,
        title: "Special Effects",
        description: "Special Effects explorations with editing software",
        image: "/images/Projects/specialeffects.jpg",
    },
    {
        id:7,
        title: "Abstract Collection",
        description: "Collection of abstract pieces in various mediums",
        image: "/images/Projects/abstract1.jpg",
    },
    ]


const Projects = () => {
  return (
    <>
    <h2 className="text-center text-4xl font-bold text-[#f3c2f2] mt-4 mb-8 md:mb-12 ">My Projects</h2>
    
    <div className="grid md:grid-cols-3 gap-8 md:gap-12"
    
    >{projectsData.map((project) => 
    <ProjectsCard 
    key={project.id} 
    title={project.title} 
    description={project.description} 
    imgUrl={project.image} /> )} 
    </div>
 </>
 )
}

export default Projects