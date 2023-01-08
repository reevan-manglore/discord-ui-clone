import React from 'react'
import noOnlineFriends from "../../assets/no_online_friends.svg"


function NoFriendsFound() {
  return (
    <div className="col-span-5 h-full flex flex-col justify-center items-center">
          <img src={noOnlineFriends} alt="no online friends illustration" width="300px" />
          <p className="mt-6 text-slate-400 text-xl">No one's around to play with Wumpus.</p>
      </div>
  )
}

export default NoFriendsFound