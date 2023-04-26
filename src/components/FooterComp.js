import React from 'react'
import { Footer } from 'flowbite-react'

export default function FooterComp() {
  return (
    <div className='px-9'>
      <Footer container={true}>
        <Footer.Copyright
          href="#"
          by="Sirmalafo™"
          year={2022}
        />
        <Footer.LinkGroup>
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
