import React from 'react'
import { Link } from 'react-router-dom';


import discordLogo from '../../assets/discord_main_logo.svg';

function Navbar() {
  return (
    <nav className='bg-primary py-4 px-4  flex md:justify-around items-center'>
       <img src={discordLogo} alt="Discord Logo"  />
       <ul className='flex flex-none gap-x-8 justify-center items-center'>
        <li className="text-white text-lg font-semibold">Download</li>
        <li className="text-white text-lg font-semibold">Nitro</li>
        <li className="text-white text-lg font-semibold">Saftey</li>
        <li className="text-white text-lg font-semibold">Support</li>
        <li className="text-white text-lg font-semibold">Blog</li>
        <li className="text-white text-lg font-semibold">Carrers</li>
       </ul>
      <Link to="/login" className=' px-4 py-1 rounded-full  bg-white'>Login</Link>
    </nav>
  )
}

export default Navbar;