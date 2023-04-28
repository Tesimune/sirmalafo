import React from 'react'
import { Navbar } from 'flowbite-react'
import { Dropdown } from 'flowbite-react'
import { RxDropdownMenu } from 'react-icons/rx'

export default function Header() {
  return (
    <div>
        <div className='bg-transparent bg-opacity-20 backdrop-blur-lg py-5 px-2 md:px-9 w-full fixed'>
            <Navbar
                fluid={true}
                rounded={true}
                className='bg-gray-100'
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-500">
                        Sirmalafo
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<RxDropdownMenu className='text-gray-500 h-7 w-7' />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm py-3">
                                AFOLABI Kayode Yusuf
                            </span>
                            <a href='mailto:Labi.Yode@gmail.com' className="block truncate text-sm">
                                Labi.Yode@gmail.com
                            </a>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            <a href='#about'>
                                About
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a href='#projects'>
                                Projects
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a href='#contacts'>
                                Contact
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            <a href='./docs/sirmalafo.pdf'  download='AFOLABI Kayode Yusuf'>
                                Download CV
                            </a>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </Navbar>
        </div>
    </div>
  )
}
