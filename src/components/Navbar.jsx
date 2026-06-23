import React from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
const Navbar = () => {
  return (
  <Container>
    <div className="flex items-center">
      <div className="w-1/4">
      <div className="flex items-center gap-x-5">
        <img className='w-15 h-15' src={Logo} alt="" />
        <h3>PetCare</h3>
      </div>
      </div>
      <div className="w-2/4">
      <ul className='flex items-center gap-x-12 justify-center font-main'>
        <li>Home</li>
        <li>Service</li>
        <li>Shop</li>
        <li>About US</li>
        <li>Contact</li>
      </ul>
      </div>
      <div className="w-1/4 flex justify-end">
      <button className='bg-[#008F72] py-3 px-10 '>Book</button>
      </div>
    </div>
  </Container>
  )
}

export default Navbar