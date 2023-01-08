import discordIcon from "../../assets/discord_mini_icon.svg";
import newLine from "../../assets/new_line.png";
import plusSign from "../../assets/plus.svg";
import downloadIcon  from "../../assets/download.svg";
import compassIcon  from "../../assets/compass.svg";





function SideNav() {
  return (
    <nav className="px-3" >
     <ul className="flex flex-col gap-y-2">
        <li>
            <button className= "p-3 rounded-2xl bg-primary">
                <img src={discordIcon} alt="discord logo" width="24px" />
            </button>
        </li>
        <li>
            <button className= "p-3 rounded-xl bg-[#1c344b]">
                <img src={newLine} alt="new line icon" className="aspect-square" width="24px" />
            </button>
        </li>
        <li>
            <button className= "p-3 rounded-full bg-discord-grey">
                <img src={plusSign} alt="plus sign icon" width="24px" />
            </button>
        </li>
       
        <li>
            <button className= "p-3 rounded-full bg-discord-grey">
                <img src={compassIcon} alt="download icon" width="24px" />
            </button>
        </li>
        <li>
            <button className= "p-3 rounded-full bg-discord-grey">
                <img src={downloadIcon} alt="download icon" width="24px" />
            </button>
        </li>
     </ul>
    </nav>
  )
}

export default SideNav