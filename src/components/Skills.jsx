import React from 'react'

function Skills() {
  return (
    <div id='skills' className='bg-gray-300 flex flex-col gap-7 p-3 md:p-24 px-9'>
      <div className='flex justify-center py-5'>
        <span className='border-2 border-gray-700 text-gray-700 py-2 px-5'>Skills Summary</span>
      </div>
      <div className='grid gap-5 px-2 md:px-24 italic'>
        <div className='grid md:grid-cols-2 gap-5'>
          <span className='bg-gray-100 w-full p-3 font-thin shadow-lg'>Strong interpersonal management skills</span>
          <span className='bg-gray-100 w-full p-3 font-thin shadow-lg'>Self-motivated and results-oriented</span>
          <span className='bg-gray-100 w-full p-3 font-thin shadow-lg'>Accountable and responsible approach towards</span>
          <span className='bg-gray-100 w-full p-3 font-thin shadow-lg'>Self motivated and independent initiative work</span>
          <span className='bg-gray-100 w-full p-3 font-thin shadow-lg'>Excellent problem solving skills</span>
          <span className='bg-gray-100 w-full p-3 font-thin shadow-lg'>Capable of working in teams and independently.</span>
        </div>
        <span className='bg-gray-100 w-full p-3 font-thin shadow-lg'>Able to analyze, prioritize and process large volumes of work within established deadlines.</span>
      </div>
    </div>
  )
}

export default Skills