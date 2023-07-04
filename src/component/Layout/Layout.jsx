import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './footer/Footer'
const Layout = ({children}) => {
  return (
    <div className='w-full min-h-screen flex flex-col' >
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout