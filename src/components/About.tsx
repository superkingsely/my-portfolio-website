import Image from 'next/image'
import React from 'react'
import img1 from '../../public/images/sketch2.jpg'
const About = () => {
  return (
    // <div className="">
    //     <div className="h1">
    //         <span>ABout me</span>
    //     </div>
    //     <div className="boxes">
    //         <div className="img"></div>
    //         <div className="details"></div>
    //     </div>
    // </div>
<div className=" mx-auto p-6   " id='about' >
  <div className="h1 mb-4 mt-[50px] flex justify-center ">
    <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
  </div>
  <div className="boxes flex flex-col md:flex-row gap-6">
    {/* box1 */}
    <div className="img flex-shrink-0 w-full md:w-1/3">
      {/* Replace the src with your actual image */}
      <div className=" relative img h-[300px] w-[300px] rounded-lg shadow-lg  hidden  sm:flex sm:justify-center items-center  ">

      <Image
        src={img1}
        alt="Onwumelu Chijioke"
        fill
        className="w-full object-cover   "
      />
      </div>
    </div>
    {/* box2 */}
    <div className="details flex-1 flex justify-center flex-col  ">
      <p className="text-lg sm:text-start  text-center sm:  text-gray-600 leading-relaxed">
        Hello! I’m <span className="font-semibold text-gray-800">Onwumelu Chijioke</span>,
        a passionate <span className="font-semibold text-gray-800">Full-Stack Developer</span> with
        a knack for creating robust web applications that deliver value.
        In addition to my coding work, I’m dedicated to education—leading computer programming
        classes and providing tutoring for external exams like WAEC and JAMB.
      </p>
      <p className="mt-4 text-center sm:text-start  text-lg text-gray-600 leading-relaxed">
        My mission is to empower individuals and businesses through digital
        solutions, while also nurturing future minds with solid academic
        preparation. Whether it’s building intuitive user interfaces, crafting
        seamless APIs, or guiding students to ace their exams, I’m driven by
        the pursuit of excellence.
      </p>
      <div className="mt-4 flex gap-4 justify-center sm:justify-start  ">
        <a
          href="/Onwumelu_Chijioke_CV.pdf"
          download
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Download CV
        </a>
        <a
          href="/contact"
          className=" border-blue-600 border text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Hire Me
        </a>
      </div>
    </div>
  </div>
</div>

  )
}

export default About