import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectsData from '../data/projects.json'

interface Project {
  updateIsOpen: () => void
}

const Projects = ({ updateIsOpen }: Project) => {
  return (
    <div
      id="project__part"
      className="w-full relative z-[1] min-h-[3750px] md:min-h-[2560px] xl:min-h-[350vh] pb-[200px] bg-[#0f1216] pt-[80px] lg:pt-[80px] "
    >
      {/* Background picture */}
      <div className="absolute z-[-1] top-0 opacity-10 left-0 bottom-0 w-full h-[100%]">
        <img
          className="w-full h-[100%] object-cover"
          src="/home-bg.jpg"
          alt=""
        />
      </div>

      {/* Title */}
      <div className="w-[95%] lg:w-[60%] m-[auto] flex justify-start items-center gap-[10px] mb-[65px]">
        <p className="text-white text-[20px] md:text-[30px] font-bold font-mono">
          Some things I built.
        </p>
        <div className="h-[1px] w-[270px] md:w-[340px] bg-gray-800" />
      </div>
      {/* Project Cards */}
      <div className=" sm:w-[90%] md:w-[98%] lg:w-[90%] m-[auto] grid-cols-1 grid md:grid-cols-2 justify-center items-center gap-y-12">
        {ProjectsData.map((ele, i) => (
          <ProjectCard
            {...ele}
            updateIsOpen={updateIsOpen}
            key={`${ele.links.github}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
