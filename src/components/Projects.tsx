

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import imgproj0 from '../../public/images/hc-portfolio.png'
import imgproj1 from '../../public/images/hcj portf.png'
import imgproj2 from '../../public/images/todo-list-completed.png'



export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [projects,setProjects]=useState([
  {
    title: "Html and css portfolio",
    description: "A classic attracting hero settion to catch the eyes of users",
    image: imgproj0 ,
    live: "https://hc-portf.netlify.app",
  },
  {
    title: "js Portfolio Website",
    description: "A great html css & js project ",
    image: imgproj1,
    live: "https://hcj-portf.netlify.app",
  },
  {
    title: "To-Do_list App",
    description: "A great html css & js project ",
    image: imgproj2,
    live: "https://superking-todolist-app.netlify.app",
  },
])

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className=" mt-[30px] w-full min-h-[80vh] flex flex-col py-12 relative overflow-hidden bg-gray-100"
    >
      {/* Title */}
      <div className="text-center mb-6 mt-[-20px]  ">
        <h2 className="text-3xl font-bold">My Awesome</h2>
        <h3 className="text-2xl font-semibold">Projects</h3>
      </div>

      {/* Slider */}

      {/* <div className="relative w-full flex-1 flex justify-center items-center  border-[5px] h-full ">
        {projects.map((project, index) => (
          <div
            key={index}
            className={` border border-red-500  w-full h-full flex justify-center items-center transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className=".img-p  relative w-full  h-[350px] rounded overflow-hidden shadow-lg">

              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="img1"
              />

              <div className=" overlay absolute top-0 left-0 w-full    h-full bg-black bg-opacity-30 flex flex-col justify-center items-center text-white p-4 cursor-pointer ">
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="text-center max-w-[600px]">{project.description}</p>
                <Link
                  href={project.live}
                  target="_blank"
                  className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Live Demo
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div> */}

      <div className="relative border min-h-[50vh] w-[80%] mx-auto ">
        {
          projects.map((project,index)=>{

            return(
              <div key={index} >
                <div className="img">
                   <Image
                src={projects[current].image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className={`img1 transition-all duration-1000 ease-linear `}
              />
                </div>


                  <div className=" overlay absolute top-0 left-0 w-full    h-full bg-black bg-opacity-30 flex flex-col justify-center items-center text-white p-4 cursor-pointer ">
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="text-center max-w-[600px]">{project.description}</p>
                <Link
                  href={project.live}
                  target="_blank"
                  className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Live Demo
                </Link>
              </div>

              </div>
            )
          })
        }
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className=" z-[10] absolute top-1/2 left-4 transform -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-gray-200 transition cursor-pointer w-[50px] h-[50px] font-[900] text-2xl "
      >
        &larr;
      </button>
      <button
        onClick={nextSlide}
        className=" z-[10] absolute top-1/2 right-4 transform -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-gray-200 transition cursor-pointer w-[50px] h-[50px] font-[900] text-2xl "
      >
        &rarr;
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2 z-10 ">
        {projects.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-6 flex justify-center z-10 ">
        <Link
          href="/projects"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          See More
        </Link>
      </div>
    </section>
  );
}

