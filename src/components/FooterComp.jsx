import React from 'react'
import { Footer } from 'flowbite-react'

export default function FooterComp() {
  return (
    <div className='px-3 md:px-9 py-5'>
      <Footer 
        container={true} 
      >
        <Footer.Copyright
          href="#"
          by="Sirmalafo™"
          year={2022}
        />
        <Footer.LinkGroup className='flex gap-3'>
          <Footer.Link href="#">
            About
          </Footer.Link>
          <Footer.Link href="#">
            Privacy Policy
          </Footer.Link>
          <Footer.Link href="#">
            Licensing
          </Footer.Link>
          <Footer.Link href="#">
            Contact
          </Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  )
}


// className='grid md:flex gap-3 bg-transparent bg-opacity-20 backdrop-blur-lg rounded drop-shadow-md w-full'
