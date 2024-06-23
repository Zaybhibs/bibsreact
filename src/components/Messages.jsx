import React from 'react'
import logo from '../assets/images/logo.png'

const Messages = () => {
   const logos={
    width:'100px'
   }
  return (
    <div className='md:w-[33.3%] md:space-x-6 '>
        <div className='flex' >
            <div>
                <img style={logos}src={logo} className=' pr-1' alt="" />
            </div>
            <div>
                <h2 className='font-bold text-xl pb-2'>Layo</h2>
                <p className='font-serif'>I really love my wig , so lush Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente doloribus autem possimus natus adipisci quia omnis eos expedita commodi nulla Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, numquam..</p>
            </div>
        </div>
    </div>
  )
}

export default Messages