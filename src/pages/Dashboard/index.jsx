import SideNav from "./SideNav.jsx"
import SearchBox from "./SearchBox.jsx"
import ActivityArea from "./ActivityArea.jsx"




function index() {
  return (
    <div className="text-center text-6xl flex h-screen   ">
      <div className="flex-none bg-[#202225]">
        <SideNav/>
      </div>
      <div className="flex-none bg-[#36393f]">
        <SearchBox/>
      </div>
      <div className="flex-grow">
        <section className="bg-green-300  w-full h-full">
          <ActivityArea/>
        </section>
      </div>
     
    </div>

  )
}

export default index






// function index() {
//   return (
//     <div className="text-center text-6xl grid grid-cols-12 h-screen   ">
//       <div className="col-span-1 bg-[#202225]">
//         <SideNav/>
//       </div>
//       <div className="col-span-2 bg-[#36393f]">
//         <SearchBox/>
//       </div>
//       <div className="col-span-9">
//         <section className="bg-green-300  w-full h-full"></section>
//       </div>
     
//     </div>

//   )
// }

