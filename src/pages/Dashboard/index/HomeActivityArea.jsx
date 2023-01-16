
import Navbar from "./Navbar"
import NoFriendsFound from "./NoFriendsFound"
import AddFriend from "./AddFriend"
import { Outlet } from "react-router"

function HomeActivityArea() {
  return (
   <section className="bg-[#292b2f] h-full flex flex-col ">
    <Navbar/>
    <div className="grid grid-cols-8 flex-grow ">
      <div className="col-span-5 h-full py-4 px-3">
         <Outlet/>
      </div>
      <div className="col-span-3  h-full border-l-gray-600 border-l-2 py-4 px-3">
        <h3 className="text-xl font-bold text-left text-slate-100 ">Active Now</h3>
        <div className="mt-4 text-slate-300">
            <h4 className="text-lg font-bold">Its quite for now...</h4>
            <p className="text-base mt-2">
              When a friend starts an activity—like playing a game or hanging out on voice—we'll show it here!
            </p>
        </div>
      </div>
    </div>
   </section>
  )
}

export default HomeActivityArea