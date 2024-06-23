import React from 'react'
import imageone from '../assets/images/imageone.png'
import{ FaCartPlus } from 'react-icons/fa'


const Cards = () => {
    const since = {
        background: "linear-gradient(#131824,#e46f6f)",
        
       
    }
  return (
    
        <div style={since} className=' md:w-[33.3%] md:flex'>
            <div className=''>
               <button className='bg-white p-4 text-red-500 text-2xl'><FaCartPlus/></button>
            </div>
            <div className=''>
            <img src={imageone} alt="" className='w-[60%] '/>
            </div>
            </div>
    
    
  );
}

export default Cards