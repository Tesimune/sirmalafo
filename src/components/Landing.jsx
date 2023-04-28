import React from 'react'

export default function Landing() {
  return (
    <div className='flex flex-col gap-7 p-3 py-24 px-9 md:px-24'>
      <div className='flex justify-start'>
        <img src='./images/1.jpg' alt='profile' className='h-[200px] w-[200px] rounded-full'/>
      </div>
      <div className="flex flex-col justify-end gap-5 mb-4 text-gray-900 text-2xl font-poppins font-extrabold md:text-3xl lg:text-3xl">
        <p className=''>Hello, I'm</p>
        <span className='text-gray-900 uppercase'>
          AFOLABI Kayode Yusuf
        </span>
      </div>
    </div>
  )
}
