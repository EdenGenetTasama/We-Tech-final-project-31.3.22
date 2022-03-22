import "./rightbar.css";
import { users } from "../../../dummyData";
import Online from "../../online/Online";
import { useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } 
      catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user]);

  const HomeRigthBar = () => {
    return (
      <>
        <div className="topicContainer">
          <img className="topicImg" src="/assets/persons/gift.png" alt="" />
          <span className="topicText">
            <b>Our Courses</b>
          </span>
        </div>
        <img src="/assets/persons/tech-career.png" className="adImg" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRigthBar = () => {
    return (
      <>
        <h4 className="rightBarTitleFirstPart">User information</h4>
        <div className="rigthBarInfo">
          <div className="rigthbarInfoItem">
            <div className="rigthbarInfoItem">
              <span className="rigthbarInfoKey">Country: </span>
              <span className="rigthbarInfoValue"> {user.from}</span>
            </div>

            <span className="rigthbarInfoKey">City: </span>
            <span className="rigthbarInfoValue"> {user.city}</span>
          </div>

          <div className="rigthbarInfoItem">
            <span className="rigthbarInfoKey">Relationship: </span>
            <span className="rigthbarInfoValue">
              {" "}
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "It's private ☺"}
            </span>
          </div>

          <h4 className="rightBarTitleFirstPart">User Friend's</h4>
          <div className="rigthbarFollowings">
            {friends.map((friend) => (
            <Link to={"/profile/" + friend.userName} style={{ textDecoration: "none" }}>
              <div className="rigthbarFollowing">
                <img
                  src={friend.profilePicture ? PF+ friend.profilePicture : PF+"persons/noAvatar.webp"}
                  alt=""
                  className="rigthbarFollowingIma"
                  />
                <span className="rigthbarFollowingName">{friend.userName}</span>
              </div>
            </Link>
            ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {user ? <ProfileRigthBar /> : <HomeRigthBar />}
      </div>
    </div>
  );
}
