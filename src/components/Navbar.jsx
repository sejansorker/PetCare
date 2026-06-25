import React from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
import { MdOutlinePets } from 'react-icons/md'
const Navbar = () => {
  return (
  <div className="py-5">
    <Container>
    <div className="flex items-center justify-between">
      <div className="w-1/4">
      <div className="flex items-center gap-x-1">
       <i className='text-[50px] text-prymari'> <MdOutlinePets /></i>
        <h3 className='text-[40px] pt-1 text-black font-main font-bold leading-0'>Pe<span className='text-prymari'>t</span>Ca<span className='text-prymari'>re</span></h3>
      </div>
      </div>
      <div className="w-2/4">
      <ul className='flex items-center gap-x-12 justify-center text-[17px] text-black font-medium font-main'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Service</li>
        <li className='cursor-pointer'>Shop</li>
        <li className='cursor-pointer'>About US</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
      </div>
      <div className="w-1/4 flex justify-end">
      <button className='bg-[#008F72] py-3 px-6 rounded-[50px] text-white text-[16px] font-semibold font-main'>Book Appointment</button>
      </div>
    </div>
  </Container>
  </div>
  )
}

export default Navbar