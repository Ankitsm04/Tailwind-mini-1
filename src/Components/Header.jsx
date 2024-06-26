import React from 'react'
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='flex justify-between '>
    <div className='flex items-center justify-center gap-2'>
      <img src="./assets/Logo.svg" alt="" />
      <button className='bg-gradient-to-l from-orange-400 to-red-400 text-s text-white px-2 py-1 rounded-2xl'>Hoster Is hiring</button>
    </div>
      <ui className="hidden font-lato list-none lg:flex justify-between items-center gap-5 justify-center">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domain</a></li>
        <li><a href="#">Why Hoster</a></li>
      </ui>
      <div className='hidden lg:flex justify-center items-center font-lato gap-5'>
        <a className='text-black' href="#">Sign In</a>
        <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
      </div>
    <div className='pt-1 lg:hidden'>
      <FaBars/>
    </div>
    </div>
  )
}

export default Header
