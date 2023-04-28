import React from 'react'

function Contacts() {
  return (
    <div id='contact' className='flex flex-col gap-7 p-3 md:p-24 px-9'>
      <div className='bg-gray-100 py-9 px-3 rounded-md'>
        <div className='flex justify-center py-5'>
            <span className='border-2 border-black py-2 px-5'>Contacts</span>
        </div>
        <div>
          <div></div>
          <div className='p-2 md:px-24'>
            <form>
              <div className='grid gap-5'>
                <input className='py-2 px-5 outline-none border-l-4 rounded-md' />
                <input className='py-2 px-5 outline-none border-l-4 rounded-md' />
                <textarea className='py-2 px-5 focus:outline-0 border-l-4 rounded-md' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts