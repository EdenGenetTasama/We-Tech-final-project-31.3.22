import "./rightbar.css";
import { users } from "../../../dummyData";
import Online from "../../online/Online";


export default function Rightbar() {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="topicContainer">
          <img className="topicImg" src="/assets/persons/gift.png" alt="" />
          <span className="topicText">
            <b>Our Courses</b>
          </span>
        </div>
        <img src="/assets/persons/tech-career.png" className="adImg" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {users.map(
            u => <Online key={u.id} user={u}/>
          )}
        </ul>
      </div>
    </div>
  );
}
