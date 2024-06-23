import React, { useState } from 'react'
import cutepic from "../assets/images/cutepic.png"

const Header = () => {
    const bibi = {
        background: "linear-gradient(#131824,#e46f6f)"
       
    }
    
   
    return (

        <div style={bibi} className=" text-center md:flex ">
            <div className=" md:w-[55%] text-white flex flex-col justify-center items-center md:-mr-20">
                <h1 className="text-2xl  text-[#e46f6f]">Bibi's Hair Haven</h1>
                <h1 className=" text-[95px] xl:text-[150px] font-serif font-normal tracking-wide xl:-mt-4 ">Hair Day</h1>
                <p className="text-base tracking-widest xl:tracking-[1em] xl:-mt-10">BE BOLD WITH YOUR HAIR</p>
                <button className='xl:w-1/4 bg-white py-2 px-6 text-black block mt-7 my-16'>SHOP COLLECTION</button>
                <p className='tracking-[0.10rem] xl:tracking-[0.50rem]'>VISIT OUR WEBSITE: WWW.BIBISHAIRHAVEN.COM</p>
            </div>
            <div className="overflow-hidden  w-[45%] flex">
            <div style={{ backgroundImage: `url(${cutepic})` }} className=" bg-center bg-no-repeat  xl:max-w-[88%] h-[110%] pt-5 ">
                <div className="hidden  md:block xl:pl-40 pl-[34rem]">
                <img  src={cutepic} alt="" className=" hidden xl:block "/>
                
                </div>
            </div>
            </div>
        </div>
    );
    
}

export default Header