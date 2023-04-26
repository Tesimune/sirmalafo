import React from 'react'
import { Navbar } from 'flowbite-react'
import { Dropdown } from 'flowbite-react'
import { RxDropdownMenu } from 'react-icons/rx'

export default function Header() {
  return (
    <div className='bg-transparent bg-opacity-20 backdrop-blur-lg rounded drop-shadow-md w-full py-5 px-2 md:px-9'>
        <Navbar
            fluid={true}
            rounded={true}
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
                        About
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Projects
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Contact
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Download CV
                    </Dropdown.Item>
                </Dropdown>
            </div>
        </Navbar>
    </div>
  )
}
