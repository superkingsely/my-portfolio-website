/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (

    <div className="flex flex-col-reverse sm:flex-row  border pt-[50px] md:pt-[100px] ">
      {/* box1 */}
      <div className="box1   border flex-[1] ">
        <div className="h1">
           <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, <br /> I'm   Onwumelu Chijioke
           </h1>
        </div>
        <div className="p">
         <p className="text-lg text-gray-600 mb-6">
      I'm a passionate and skilled full-stack web developer. I specialize in
       building modern, responsive websites and dynamic web applications using
       technologies like React, Node.js, and more. I love bringing ideas to life
       with clean and maintainable code.
     </p>
        </div>
         <div className="flex gap-4 mt-[30px] ">
       <a
         href="/Onwumelu-Chijioke-CV.pdf"
         download
         className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
       >
         Download CV
       </a>
       <a
         href="#contact"
         className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
       >
         Hire Me
       </a>
     </div>
        <div className="social-media">
          
        </div>
      </div>
      {/* box2 */}
      <div className="box2 border flex-[1] ">
        <div className=" box2 border flex justify-center items-center">
     <div className="rounded-full w-64 h-64 shadow-lg flex justify-center items-center
     ">
      
     <Image
       src="/profile.jpg"
     alt="Onwumelu Chijioke"
       className="  object-cover  "
     />
     </div>
   </div>
      </div>
    </div>
//    <div className="grid md:grid-cols-2 gap-8 items-center px-4 py-12 max-w-6xl mx-auto min-h-[80vh] ">
//     {/* box1 */}
//   <div className="flex flex-col justify-center box1 border ">
//     <h1 className="text-4xl md:text-5xl font-bold mb-4">
//       Hi, I'm Onwumelu Chijioke
//     </h1>
//     <p className="text-lg text-gray-600 mb-6">
//       I'm a passionate and skilled full-stack web developer. I specialize in
//       building modern, responsive websites and dynamic web applications using
//       technologies like React, Node.js, and more. I love bringing ideas to life
//       with clean and maintainable code.
//     </p>
//     <div className="flex gap-4 mt-[30px] ">
//       <a
//         href="/Onwumelu-Chijioke-CV.pdf"
//         download
//         className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//       >
//         Download CV
//       </a>
//       <a
//         href="#contact"
//         className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
//       >
//         Hire Me
//       </a>
//     </div>
//   </div>
//   {/* box2 */}
//   <div className=" box2 border flex justify-center items-center">
//     <div className="rounded-full w-64 h-64 shadow-lg flex justify-center items-center
//     ">
//     <img
//       src="/profile.jpg"
//       alt="Onwumelu Chijioke"
//       className="  object-cover  "
//     />
//     </div>
//   </div>
// </div>

  )
}

export default HeroSection