import React from 'react'
// -->
const Contact = () => {
  return (
   <div  className='min-h-[70vh] pt-[50px] mt-[30px]  ' id='contact' >
       <div className="contact-row flex flex-col sm:flex-row  gap-[20px] ">
          <div className="contact-col-1 ps-[50px] sm:ps-[0px] ">
            <div className="flex flex-col gap-5 ">
              <span className='font-[600] text-[50px]  ' >Contact me</span>
              <span className='font-[600] text-[40px]  '  >08029696733</span>
            </div>
          </div>
          <div className="contact-col-2  flex-1">
            <form className='px-[50px] ' action="">
              <div className="form-group">
                <input placeholder='Name:' className='w-full rounded-lg p-[5px] mt-[20px] bg-slate-400 ' type="text" />
              </div>
              <div className="form-group">
                <input placeholder='Email:' className='w-full rounded-lg p-[5px] mt-[20px] bg-slate-400 ' type="email" />
              </div>
              <div className="form-group mt-[20px]">
                <textarea placeholder='message?' className='bg-slate-400 h-[80px] w-full rounded-lg '  name="" id=""></textarea>
              </div>
              <div className="form-group mt-[20px]">
                <button className='w-full p-[5px] bg-blue-500 text-white rounded-lg ' >Send</button>
              </div>
            </form>
          </div>
       </div>
    </div>
  )
}

export default Contact