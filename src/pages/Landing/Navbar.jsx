import {useState} from 'react'
import { Link } from 'react-router-dom';


import discordLogo from '../../assets/discord_main_logo.svg';
import hamburgerIcon from '../../assets/hamburger_icon.svg';
import closeIcon from '../../assets/close_icon.svg';


function Navbar() {
  const [isOpen,setIsOpen]  = useState(false);
  return (
    <nav className='bg-primary py-4 px-4  flex justify-between lg:justify-around items-center relative'>
      <img src={discordLogo} alt="Discord Logo" />
      <ul className={`fixed lg:static top-0 right-0 h-screen  lg:h-fit transition-transform origin-right ${isOpen?"max-lg:scale-x-100":"max-lg:scale-x-0"}  max-lg:p-6 rounded-tl rounded-bl bg-white lg:bg-transparent  lg:flex flex-none max-lg:space-y-8 gap-x-8 justify-center items-center`}>
       
        <li className='mb-6 flex justify-end lg:hidden'> <button onClick={()=>setIsOpen(prev=>!prev)} > <img src = {closeIcon}  className='w-10' /> </button></li>
        <li> <a href="#" className='lg:text-white text-lg font-semibold hover:underline'> Download </a></li>
        <li> <a href="#" className='lg:text-white text-lg font-semibold hover:underline'> Nitro  </a></li>
        <li> <a href="#" className='lg:text-white text-lg font-semibold hover:underline'>Saftey </a></li>
        <li> <a href="#" className='lg:text-white text-lg font-semibold hover:underline'> Support </a> </li>
        <li> <a href="#" className='lg:text-white text-lg font-semibold hover:underline'>  Blog </a></li>
        <li> <a href="#" className='lg:text-white text-lg font-semibold hover:underline'> Carrers</a></li>
      </ul>
      <div className='flex space-x-1 [&>*]:flex-none justify-center items-center' >
          <Link to="/login" className='  px-4 py-1  rounded-full   bg-white hover:shadow-2xl shadow-slate-700'>Login</Link>
          <button className='lg:hidden' onClick={()=>setIsOpen(prev=>!prev)}> <img src = {hamburgerIcon} className = "w-10  ml-4" /> </button> 
      </div>
    </nav>
  )
}

export default Navbar;