import "./sidebar.css";
import { RssFeed, Event, VideoCall, Person } from "@material-ui/icons";
// import { user } from "../../../Context/AuthContext";
import Friends from "../../friends/Friends.jsx";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";

export default function Sidebar() {
  const { user} = useContext(AuthContext);
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
        <hr className="sideBarHr" />
        <h6>My Followings</h6>
        <ul className="sideBarFriendList">
          {user.followers? user.followers.map((userItem) => 
                <Friends key={userItem} user={userItem} />
              ):"not found"
           }
        </ul>
      </div>
    </div>
  );
}
