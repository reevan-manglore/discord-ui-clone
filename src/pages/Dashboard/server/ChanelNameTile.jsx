import React from 'react'

function ChanelNameTile({chanelName,isColorMuted = false}) {
  return (
    <div className='flex my-2 px-1   hover:bg-[#565b65] rounded  cursor-pointer' tabIndex="0">
        <h4 className={`text-lg ${isColorMuted? 'text-slate-400':'text-slate-50'} `}>#</h4>
        <h4 className={`text-lg ${isColorMuted? 'text-slate-400':'text-slate-50'} ml-2`}>{chanelName}</h4>
    </div>
  )
}

export default ChanelNameTile