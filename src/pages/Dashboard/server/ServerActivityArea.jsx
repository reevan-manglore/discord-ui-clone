import React from 'react'
import Lottie from "lottie-react";
import Navbar from './Navbar'
import OnlineFriendsTile from './OnlineFriendsTile'
import lottieAnimation from "../../../assets/lottie/start-chatting.json"
import messagePlusIcon from "../../../assets/plus_icon.svg"
import emojiIcon from "../../../assets/emoji_icon.svg"
import gifIcon from "../../../assets/gif_icon.svg"
import giftBoxIcon from "../../../assets/gift_box_icon.svg"




function ServerActivityArea() {
  return (
    <div className='bg-[#36393f] h-full flex flex-col'>
        <div className='flex-none'>
         <Navbar/>
        </div>
        <div className=' grow flex '>
          <div className='grow bg-[#36393f] px-3 py-6 flex flex-col justify-end'>
            <div className='w-44'>
                <Lottie animationData={lottieAnimation} loop={true} />
            </div>
                <button className='rounded text-white bg-primary w-64 py-1.5  hover:bg-primary/75'>Wave To</button>

                <div className='bg-[#41444b] rounded py-2 px-4 mt-6 flex  gap-x-3 ring-2 ring-transparent focus-within:ring-primary'>
                    <img src={messagePlusIcon} alt="" width="36px" className='flex-none'/>
                    <input type="search" name="messageBox" id="messageBox" className='border-none outline-none grow bg-transparent px-4 py-1.5 text-slate-100' placeholder='Message #undefined' />
                    <img src={emojiIcon} alt="" width="32px" className='flex-none'/>
                    <img src={gifIcon} alt="" width="36px" className='flex-none'/>
                    <img src={giftBoxIcon} alt="" width="32px" className='flex-none'/>

                </div>
          </div>

          <div className='flex-none  basis-52 bg-[#2f3136] px-3 py-1 h-full'>
            <h4 className='text-lg text-slate-300 text-left mb-3'>ONLINE-3</h4>
            <div className='min-h-0 max-h-[84vh] w-full  overflow-y-auto scrollbar-custom '>
                <OnlineFriendsTile friendName="Milad" isAdmin = {true}/>
                <OnlineFriendsTile friendName="Batman" />
                {
                  Array.from({length:10}).map((_,idx)=><OnlineFriendsTile friendName="[x]joker[x]" key={idx}/>)
                }
              </div>
          </div>

        </div>
    </div>
  )
}

export default ServerActivityArea