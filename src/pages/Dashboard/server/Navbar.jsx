import React from 'react'
import { useParams } from 'react-router'
import pinIcon from "../../../assets/pin_icon.svg"
import notificationIcon from "../../../assets/notification_icon.svg"
import groupIcon from "../../../assets/group_icon.svg"
import questionMark from "../../../assets/question_mark_icon.svg"
import inboxIcon from "../../../assets/inbox_icon.svg"


function Navbar() {
    const { serverName } = useParams();
    return (
        <div className='flex justify-between px-4 py-1.5'>

            <h1 className='text-2xl text-slate-300 '># <span className='text-slate-100'>{serverName}</span> </h1>
            
            <div className='flex gap-x-6'>
                <div className='flex gap-x-4 flex-none'>
                    <img src={notificationIcon} alt="" width="33"/>
                    <img src={pinIcon} alt="" width="33" className='rotate-45'/>
                    <img src={groupIcon} alt="" width="33"/>
                </div>
                <div className='bg-[#202225] rounded-sm  ring-1 ring-transparent focus-within:ring-primary'>
                     <input type="text" name="search" id="search" className='bg-transparent grow px-3 py-1 text-slate-200 h-full  outline-none' placeholder='Search'/>
                </div>
                <img src={inboxIcon} alt="" width="33px" />
                <img src={questionMark} alt="" width="33px" />
            </div>

        </div>
    )
}

export default Navbar