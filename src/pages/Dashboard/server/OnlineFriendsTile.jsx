import React from 'react'
import discordLogo from "../../../assets/discord_mini_icon.svg"


function OnlineFriendsTile({friendName,isAdmin = false}) {
  return (
    <div className='flex items-center my-3 '>
        <div className={`${isAdmin? "bg-[#ed4245]":"bg-[#f26522]"}  w-8 h-8 p-1.5 relative flex justify-center items-center rounded-full`}>
              <img src={discordLogo} alt=""  />
        </div>
        <p className='ml-2 text-slate-400 text-xl '>{friendName}  <span>{isAdmin?"👑":""} </span></p>
    </div>
  )
}

export default OnlineFriendsTile