import "./sidebar.css";
import { RssFeed, Event, VideoCall, Person } from "@material-ui/icons";
import { users } from "../../../dummyData";
import Friends from "../../friends/Friends";

export default function Sidebar() {
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
          {users.map((u) => (
            <Friends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
