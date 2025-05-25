/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import img1 from '../../public/images/FB_IMG_1748168596292.jpg'

const HeroSection = () => {
  return (

    <div className="flex flex-col-reverse sm:flex-row   pt-[50px] md:pt-[100px] min-h-[80vh] ">
      {/* box1 */}
      <div className="box1    flex-[1] ">
        <div className="h1 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 flex  gap-2 ">
           <span className=' ' >Hi</span>
           <div className='flex gap-2 flex-col' >
           <span>I'm</span><span>Onwumelu Chijioke</span>
           </div>
        </div>
        <div className="p flex justify-center sm:justify-start ">
         <p className="text-lg text-gray-600 mb-6 text-center sm:text-start ">
      I'm a passionate and skilled full-stack web developer. I specialize in
       building modern, responsive websites and dynamic web applications using
       technologies like React, Node.js, and more. I love bringing ideas to life
       with clean and maintainable code.
     </p>
        </div>
         <div className=" z-[1] flex gap-4 mt-[20px] justify-center sm:justify-start ">
       <a
         href='/Onwumelu_Chijioke_CV.pdf'
         download
         className=" z-10 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
       >
         Download CV
       </a>
       <a
         href="#contact"
         className=" z-10 px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
       >
         Hire Me
       </a>
     </div>
        <div className="social-media">
          
        </div>
      </div>
      {/* box2 */}
      <div className="box2  flex-[1] flex justify-center ">
        <div className=" box2  flex justify-center items-center">
     <div className=" p-[10px]  rounded-full w-[300px] h-[300px] overflow-hidden shadow-lg flex justify-center items-center
     ">
      
     <Image
      src={img1}
      alt="Onwumelu Chijioke"
       className=" z-[-1]  w-full h-full object-cover rounded-full "
        width={500} 
    height={500}
     />
     </div>
   </div>
      </div>
    </div>
//    <div className="grid md:grid-cols-2 gap-8 items-center px-4 py-12 max-w-6xl mx-auto min-h-[80vh] ">
//     {/* box1 */}
//   <div className="flex flex-col justify-center box1  ">
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