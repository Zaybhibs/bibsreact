import React from 'react'
import logo from "../assets/images/logo.png"

const Navbar = () => {
    const style = {
        width:'3rem',
        borderRadius: "50%"
        
    }
  return (
    <div className='bg-[#131824] p-10'>
    <div className="flex justify-between items-center mx-auto container h-19">
        <img style={style} src={logo} alt="" />
        <ul className="flex space-x-5  text-white text-lg">
            <li><a href="http://">Home</a></li>
            <li><a href="http://">About</a></li>
            <li><a href="http://">Contact</a></li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar