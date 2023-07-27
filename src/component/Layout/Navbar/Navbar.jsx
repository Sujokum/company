"use client"
import React , {useState , useEffect} from 'react'
import { Disclosure} from '@headlessui/react'
import ExportedImage from "next-image-export-optimizer";
// import Image from 'next/image'
import pakistanFlag from '../../../../public/images/pakistanFlag.png'
import logo from '../../../../public/images/logo.png'
import {FaBars } from 'react-icons/fa'
import Link from 'next/link'
import {FaBarsStaggered} from 'react-icons/fa6'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About Us', href: '#', current: false },
  { name: 'Our Services', href: '#', current: false },
  { name: 'Our Team', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Navbar = () => {
  
  const [active , setActive] = useState(false)
  
  const isActive = ()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false)

}

useEffect(()=>{
  window.addEventListener('scroll' , isActive );

  return ()=>{
      window.removeEventListener('scroll' , isActive)
  }
},[])
  return (
    <>
    <div className=' hidden md:flex  md:px-[20px] xl:px-[63px] py-[15px] items-center    justify-between' >
        <div className='flex gap-3 font-poppins text-gray text-sm items-center ' >
            <ExportedImage src={pakistanFlag} width={100} height={100} alt='pakistaFlag' className='w-full'   />
            <h4>+92&nbsp;333&nbsp;1234&nbsp;567</h4>
        </div>
        <div className='flex items-center font-poppins gap-3' >
            <button className='px-[28px] py-[8px] bg-white shadow-md text-gray text-sm rounded-3xl' >News & Events</button>
            <Link href={'/schedule-a-call'} className='px-[28px] py-[8px] bg-orange shadow-md text-white text-sm rounded-3xl' >Schedule Call</Link>
        </div>

    </div>
    <div className={`min-h-full sticky top-[10px] ${active ? "bg-white" : "bg-white/50"}  shadow-md w-full z-50  md:px-[20px] xl:px-[63px] `}>
        <Disclosure as="nav" className="w-full ">
          {({ open }) => (
            <>
              
                <div className="flex h-16 items-center  justify-between">
                  <div className="flex justify-between  items-center">
                    <div className="flex-shrink-0">
                      <ExportedImage 
                      width={500}
                      height={500}
                        className="w-[200px] max-md:ms-3 "
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                    
                  </div>
                  <div className="hidden md:block  py-[15px]   md:mx-auto">
                      <div className="ml-10 flex    items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? ' active:text-orange font-nasalization  hover:text-gray'
                                : 'text-gray   hover:text-orange',
                              'rounded-md px-3 text-gray  font-nasalization hover:text-orange py-2 max-md:text-sm md:text-sm xl:text-md font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  <div className="hidden md:block">
                  <button className=' md:px-[10px] md:py-[5px]  xl:px-[28px]  xl:py-[8px] bg-white shadow-md text-gray md:text-xs xl:text-sm rounded-3xl' >Get a Quote</button>

                            
                  </div>
                  <div className="-mr-2 sticky top-0 max-md:px-[20px]    bg-white flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                     <FaBarsStaggered className="text-xl text-orange" />

                      ) : (
                        <FaBars className="text-xl text-blue" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              

              <Disclosure.Panel className="  md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <button>
                        get a quote
                    </button>
                  </div>
               
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

       
       
      </div>
    </>
  )
}

export default Navbar