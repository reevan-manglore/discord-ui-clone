import React from 'react'
import feature1Img from "../../assets/hanging_out_easy_landing.svg"
import feature2Img from "../../assets/invite_only_landing.svg"
import feature3Img from "../../assets/just_chiling_landing.svg"
import downloadIcon from "../../assets/download.svg";



function FeaturesSection() {
  return (
    <section>
        <article className='h-screen px-6   flex flex-col justify-center  md:flex-row  md:justify-around items-center '>
            <img src={feature1Img} alt="discord feature 1" className = "md:w-3/6"/>
            <div className='w-3/4 md:w-2/5'>
              <h2 className='text-3xl md:text-5xl font-bold text-center md:text-left'>Create An Invite-Only Place Where You Belong</h2>
              <p className='text-lg md:text-xl mt-3 text-justify'>
                Discord servers are organized into topic-
                based channels where you can
                collaborate, sharer and just talk about
                your day without clogging up a group
                chat.
              </p>
            </div>
        </article>

        <article className='h-screen px-6  flex flex-col justify-center  md:flex-row-reverse  md:justify-around items-center  bg-slate-100 '>
            <img src={feature2Img} alt="discord feature 1" className = "md:w-3/6"/>
            <div className='w-3/4 md:w-2/5'>
              <h2 className='text-3xl md:text-5xl font-bold text-center md:text-left'>Where hanging out is easy</h2>
              <p className='text-lg md:text-xl mt-3 text-justify'>
                Grab a seat in a voice channel when you're
                free. Friends in your server can see you're
                around and instantly pop in to talk without
                having to call.
              </p>
            </div>
        </article>


        <article className='h-screen px-6 flex flex-col justify-center  md:flex-row  md:justify-around items-center'>
            <img src={feature3Img} alt="discord feature 1" className = "md:w-3/6"/>
            <div className='w-3/4 md:w-2/5'>
              <h2 className='text-3xl md:text-5xl font-bold text-center md:text-left'>From few to a fandom</h2>
              <p className='text-lg md:text-xl mt-3 text-justify'>
                Get any community running with moderation
                tools and custom member access. Give
                members special powers, set up private
                channels, and more.
              </p>
            </div>
        </article>

        <article className=' p-8 bg-slate-100 flex flex-col justify-between  items-center'>
            <div className='flex flex-col justify-center  items-center'>
                  <h2 className=' text-3xl md:text-5xl font-bold text-center'>RELIABLE TECH FOR STAYING CLOSE</h2>
                  <p className="text-lg md:text-xl mt-4 text-justify md:text-center">
                    Low-latency voice and video feels like you're in the same room. 
                    Wave hello over video, watch friends stream their games, or
                    gather up and have a drawing session with screen share.
                  </p>
              </div>
            <img src={feature3Img} alt=""  />
            <div className='flex flex-col justify-center  items-center'>
              <h2 className='text-3xl text-center md:text-left md:text-5xl font-bold'>Ready to start your journey?</h2>
              <button className='px-8 py-3 text-white bg-primary text-xl rounded-full mt-6 flex justify-center items-center gap-3'>
                <img src={downloadIcon} alt="download icon" width={"18px"}/>
                Download For Mac
              </button>
            </div>
        </article>
    </section>
  )
}

export default FeaturesSection