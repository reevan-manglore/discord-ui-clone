import { NavLink } from "react-router-dom";
import friends from "../../../assets/person.svg";


function Navbar() {
  return (
    <nav className='py-2 px-6 bg-[#292b2f] shadow-sm  shadow-black/50'>
        <ul className='flex justify-start items-center gap-x-6'>
            <li>
                <a href = "#" className='flex'>
                    <img src={friends} alt="friends icon" />
                    <p className="text-base font-bold text-white ml-2">Friends</p>
                </a>
            </li>


            <li className="flex justify-center items-center font-semibold">
                <a href="#" className="text-white text-base">Online</a>
            </li>


            <li className="flex justify-center items-center text-slate-400">
                <a href="#" className="text-white text-base text-inherit">All</a>
            </li>


            <li className="flex justify-center items-center text-slate-400">
                <a href="#" className="text-white text-base text-inherit">Pending</a>
            </li>


            <li className="flex justify-center items-center text-slate-400">
                <a href="#" className="text-white text-base text-inherit">Blocked</a>
            </li>


            <li className="flex justify-center items-center">
                <NavLink to="addfriend" 
                    className={
                        ({isActive})=>
                        isActive?"px-2 py-0.5 rounded text-[#3ba55d] text-base"
                        :
                        "px-2 py-0.5 rounded bg-[#3ba55d] hover:bg-[#3ba55d]/60 text-base text-white"
                    } 
                >
                    Add Friend
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar