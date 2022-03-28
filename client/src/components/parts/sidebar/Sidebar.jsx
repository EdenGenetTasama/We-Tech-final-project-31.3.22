import "./sidebar.css";
import { RssFeed, Event, VideoCall, Person } from "@material-ui/icons";
// import { user } from "../../../Context/AuthContext";
import Friends from "../../friends/Friends.jsx";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";

export default function Sidebar() {
  const { user, setUser } = useContext(AuthContext);
  console.log(user)

  return (
    <div className="sidebar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeed className="sideBarIcon" />
            <span>Feed</span>
          </li>
          <li className="sideBarListItem">
            <Event className="sideBarIcon" />
            <span>Event</span>
          </li>
          <li className="sideBarListItem">
            <VideoCall className="sideBarIcon" />
            <span>Video</span>
          </li>
          <li className="sideBarListItem">
            <Person className="sideBarIcon" />
            <span>People</span>
          </li>
        </ul>
        <button className="sideBarBtn">Show More</button>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendList">
          {user.followings? user.followings.map((userItem) => 
                <Friends key={userItem} user={userItem} />
              ):"not found"
           }
        </ul>
      </div>
    </div>
  );
}
