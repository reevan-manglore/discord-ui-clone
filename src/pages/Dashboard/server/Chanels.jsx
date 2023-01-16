import { useParams } from "react-router"
import ChanelNameTile from "./ChanelNameTile";

import closeIcon from "../../../assets/close_icon.svg"
import discordLogo from "../../../assets/discord_mini_icon.svg"



function Chanels() {
  const {serverName} = useParams();
  return (
    <div className="px-3 py-2.5 relative ">
        <div className="flex justify-between items-center ">
            <h4 className="text-xl font-semibold text-white">{serverName}</h4>
            <button  className="">
                <img src={closeIcon} width = "24px" />
            </button>
        </div>
        <div className="my-2">
          <ChanelNameTile chanelName="rules" isColorMuted ={true}/>
        </div>
        <h5 className="text-lg text-slate-400 text-left  capitalize">Text Chanels</h5>
        <div className="min-h-1 max-h-[79vh] overflow-y-auto scrollbar-custom scroll-p-16">
          <ChanelNameTile chanelName="algorithms" />
          <ChanelNameTile chanelName="announcements"/>
          <ChanelNameTile chanelName="blogging"/>
          <ChanelNameTile chanelName="collaborators" isColorMuted ={true}/>
          <ChanelNameTile chanelName="course-ideas" isColorMuted = {true}/>
          {
          Array.from({length:15})
              .map(
                (_,index)=><ChanelNameTile chanelName="machine-learning" key={index} />
              )
          }
        </div>
        <div className="absolute -bottom-2 left-0 w-full bg-[#292b2f] py-2 px-1.5 flex flex-none  items-center ">
            <div 
            className="bg-[#ed4245]  w-10 h-10 p-2 relative flex justify-center items-center  rounded-full before:w-2 before:h-2 before:rounded-full before:bg-green-400 before:absolute before:bottom-1 before:right-0 ">
              <img src={discordLogo} alt=""  />
            </div>
            <div className="ml-1">
              <h6 className="font-semibold text-slate-100">milad</h6>
              <p className="text-slate-400 text-sm">#8454</p>
            </div>
        
        </div>
       
    </div>
  )
}

export default Chanels