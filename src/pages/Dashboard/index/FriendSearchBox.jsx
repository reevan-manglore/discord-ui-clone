import { useState } from "react";
import FilterationTile from "./FilterationTile";
import ShimmeringMessageTile from "./ShimmeringMessageTile";
import friends from "../../../assets/person.svg";
import stageDiscovery from "../../../assets/stage_discovery.svg";
import nitro from "../../../assets/nitro_icon.svg";
import plusIcon from "../../../assets/plus_icon.svg";


function FriendSearchBox() {
  const [selectedTab,setSelectedTab] = useState("friends");
  return (
    <section className="px-2  h-full overflow-hidden flex flex-col justify-start justify-items-start  ">
        <input type="text" name="searchBar" id="searchBar" className="rounded-sm my-3.5 text-base bg-[#202225]  w-full  px-4 py-0.5  text-slate-400 placeholder:text-slate-400 outline-none focus:ring-1 focus:ring-primary" placeholder="Find or start conversion"  />
        <FilterationTile icon={friends} label = "Friends" isSelected={selectedTab === "friends"}  onPressed = {()=>setSelectedTab("friends")}/>
        <FilterationTile icon={stageDiscovery} label = "Stage Discovery" isSelected={selectedTab === "stageDiscovery"} onPressed = {()=>setSelectedTab("stageDiscovery")}/>
        <FilterationTile icon={nitro} label = "Nitro" isSelected={selectedTab === "nitro"} onPressed = {()=>setSelectedTab("nitro")}/>
        <div className="flex justify-between items-center mt-4 ">
          <p className="text-base text-slate-400">DIRECT MESSAGES</p>
          <button>
           <img src={plusIcon} alt="plus icon" width={"18px"} className = "text-white " />
          </button>
        </div>
        <div className="overflow-hidden relative before:w-full before:h-full before:absolute before:z-10 before:left-0 before:bg-gradient-to-b  before:from-transparent before:to-[#36393f]">
          {
            Array.from({length:8}).map(
              (_,index)=><ShimmeringMessageTile key={index}/>
            )
          }
        </div>
    </section>
  )
}

export default FriendSearchBox