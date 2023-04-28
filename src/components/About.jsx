import React from 'react'

function About() {
  return (
    <div id='about' className='bg-white flex flex-col gap-7 p-3 md:p-24 px-9'>
        <div className='flex justify-center py-5'>
          <span className='border-2 border-black py-2 px-5'>About</span>
        </div>
        <div>
          {/* <span>About Kini</span> */}
        </div>
        <div className='flex flex-col gap-4 italic'>
          <p>
              <span className='font-semibold'>Specialization: </span>
              Business Support Intelligent, Project & Product Development, Business Intelligent and
              Strategy expert,Business Development & Research, ICT
              and Technical Support, Agent Management Network and
              recruitment, Business to Business(B2B),Business to
              Customer(B2C) ,Online payment and services,Digital
              Payment,Financial Technology
          </p>          
          <p><span className='font-semibold'>Languages: - </span>English, Hausa and Yoruba</p>
        </div>
    </div>
  )
}

export default About