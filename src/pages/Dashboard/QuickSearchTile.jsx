import React from 'react'

function QuickSearchTile({icon,label,isSelected,onPressed}) {
  return (
   <button 
  
   className={`px-3 py-0.5 my-1 rounded-sm flex justify-start items-center bg-bg-[#36393f]  w-full ${isSelected? "bg-[#4f545c]":""} ${isSelected? "font-medium":""}`}
   onClick = {onPressed}
   >
        <img src={icon} alt= {`${label} icon`}  width="20px" />
        <p className='text-base ml-4 text-slate-400'>{label}</p>
   </button>
  )
}

export default QuickSearchTile