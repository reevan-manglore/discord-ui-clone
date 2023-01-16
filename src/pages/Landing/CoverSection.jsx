import React from 'react'

import downloadIcon from "../../assets/download.svg";

function CoverSection() {
  return (
    <section className='h-[91vh]  bg-primary flex items-center flex-col landing-cover-page-bg'>
       <h1 className='mt-14 text-3xl sm:text-5xl text-center md:text-7xl text-white font-extrabold'>IMAGINE A PLACE ...</h1>
       <p className='text-lg md:text-2xl text-white w-5/6 md:w-3/4 text-justify md:text-center mt-9'>
       ...where you can belong to a school club, a gaming group, or a worldwide art community.
          Where just you and a handful of friends can spend time together. A place that makes it
          easy to talk every day and hang out more often.
       </p>
       <div className='flex flex-col md:flex-row  justify-center items-center mt-9  gap-y-4 md:gap-x-4'>
            <button className='w-full md:w-fit px-4 md:px-20 py-2 rounded-full bg-white text-black flex justify-center items-center gap-3'>
                <img src={downloadIcon} alt="download icon" width={"18px"}/>
                <span className='sm:text-2xl md:text-lg'> Download For Mac</span>
            </button>
            <button className='w-full md:w-fit px-4 sm:text-2xl md:text-lg md:px-20 py-2 rounded-full text-white bg-discord-grey'>
                Open Discord In Your Browser
            </button>
       </div>
    </section>
  )
}

export default CoverSection