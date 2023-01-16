import { Link, useLocation, matchRoutes } from "react-router-dom";
import discordIcon from "../../assets/discord_mini_icon.svg";
import newLine from "../../assets/new_line.png";
import plusSign from "../../assets/plus.svg";
import downloadIcon from "../../assets/download.svg";
import compassIcon from "../../assets/compass.svg";





function SideNav() {
    const currentLocation = useLocation();
    const matchesRoute = matchRoutes(
        [
            { path: "/dashboard/" },
            { path: "/dashboard/addfriend" }
        ],
        currentLocation
    );
    console.log(`route match returned ${matchesRoute}`);
    return (
        <nav className="px-3 py-4" >
            <ul className="flex flex-col gap-y-6">
                <li>
                    <Link to="/dashboard" className={`block p-3 rounded-2xl ${matchesRoute ? "bg-primary" : "bg-discord-grey"}`}>
                        <img src={discordIcon} alt="discord logo" width="24px" />
                    </Link>
                </li>
                <li>
                    <Link to="server/newLine" className=" block p-3 rounded-xl bg-[#1c344b]">
                        <img src={newLine} alt="new line icon" className="aspect-square" width="24px" />
                    </Link>
                </li>
                <li>
                    <button className="p-3 rounded-full bg-discord-grey">
                        <img src={plusSign} alt="plus sign icon" width="24px" />
                    </button>
                </li>

                <li>
                    <button className="p-3 rounded-full bg-discord-grey">
                        <img src={compassIcon} alt="download icon" width="24px" />
                    </button>
                </li>
                <li>
                    <button className="p-3 rounded-full bg-discord-grey">
                        <img src={downloadIcon} alt="download icon" width="24px" />
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default SideNav