import addFriendIllustration from "../../../assets/add_friend_icon.svg";

function AddFriend() {
  return (
    <div className='px-4 py-2 flex flex-col  h-full'>
      <div className="flex-none">
        <h4 className='text-white font-semibold text-2xl text-left'>ADD FRIEND</h4>
        <p className='text-white text-base text-left mt-3'>You can add a friend with their Discord Tag. It's CASE sEnSitlvE!</p>
        <div className='mt-3 flex  rounded  py-1.5 px-2 bg-[#161925] ring-2 ring-transparent focus-within:ring-primary'>
          <input type="text" name="userName" id="userName" placeholder='Enter a Username#0000' className='border-none outline-none flex-grow text-slate-300  text-xl bg-[#161925] placeholder:text-slate-600 ' />
          <button type="submit" className='text-white flex-none text-base py-1 px-3 ml-2 rounded bg-primary hover:bg-primary/60'>Send Friend Request</button>
        </div>
      </div>
      <div className="flex-grow grid place-items-center place-content-center">
            <img src={addFriendIllustration} alt="Add Friend Illustration" width="330px" />
            <p className="text-slate-500 text-base mt-3">Wumpus is waiting on friends. You don't have to though!</p>
      </div>

    </div>
  )
}

export default AddFriend