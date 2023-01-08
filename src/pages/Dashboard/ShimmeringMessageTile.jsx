
function ShimmeringMessageTile() {
  return (
    <div className='flex items-center animate-pulse my-4'>
        <div className='w-8 h-8 rounded-full bg-[#4f545c] mr-3 flex-none'></div>
        <div className='flex-grow h-6  bg-[#4f545c] rounded-full'></div>
    </div>
  )
}

export default ShimmeringMessageTile