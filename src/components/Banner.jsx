import React from 'react'

const Banner = () => {
    const bannerx={
        background: "linear-gradient(#131824,#e46f6f)"
    }
  return (
    <div className=' py-20'>
        <div className='text-center'>
            <h1 className='md:text-lg font-bold'>Check OUR NEW LUXURIOUS</h1>
            <h1 className=' text-[0px] md:text-[100px] font-serif text-[#e46f6f]'>Blonde Hair</h1>
            <p className='tracking-[0.50rem]'>NATURAl HAIR EXTENSION</p>
            <p className='tracking-[0.50rem]'>WITH HAIR PRODUCTS AND TOOLS</p>
            <button style={bannerx} className=' text-white mt-6 py-4 px-6 tracking-[0.20rem]  font-semibold'>SHOP COLLECTION</button>
        </div>
    </div>
  )
}

export default Banner