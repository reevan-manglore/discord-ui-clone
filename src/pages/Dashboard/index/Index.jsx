import React from 'react'
import FriendSearchBox from "./FriendSearchBox.jsx"
import HomeActivityArea from "./HomeActivityArea.jsx"


function Index() {
    return (
        <div className='flex'>
            <div className="flex-none bg-[#36393f]">
                <FriendSearchBox />
            </div>
            <div className="flex-grow">
                <HomeActivityArea />
            </div>
        </div>
    )
}

export default Index