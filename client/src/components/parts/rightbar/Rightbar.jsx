import "./rightbar.css";
import { users } from "../../../dummyData";
import Online from "../../online/Online";

export default function Rightbar({ user }) {
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

  const ProfileRigthBar = ()=>{
    return <>
    <h4 className="rightBarTitleFirstPart">User information</h4>
    <div className="rigthBarInfo">
      <div className="rigthbarInfoItem">
        <span className="rigthbarInfoKey">City: </span>
        <span className="rigthbarInfoValue"> {user.city}</span>
      </div>

      <div className="rigthbarInfoItem">
        <span className="rigthbarInfoKey">From: </span>
        <span className="rigthbarInfoValue"> {user.from}</span>
      </div>

      <div className="rigthbarInfoItem">
        <span className="rigthbarInfoKey">Relationship: </span>
        <span className="rigthbarInfoValue"> {user.relationship}</span>
      </div>

      <h4 className="rightBarTitleFirstPart">User Friend's</h4>
      <div className="rigthbarFollowings">
        <div className="rigthbarFollowing">
          <img src="/assets/persons/2.jpg" alt="" className="rigthbarFollowingIma" />
          <span className="rigthbarFollowingName">John Carter</span>
        </div>

        <div className="rigthbarFollowing">
          <img src="/assets/persons/3.jpg" alt="" className="rigthbarFollowingIma" />
          <span className="rigthbarFollowingName">John Carter</span>
        </div>

        <div className="rigthbarFollowing">
          <img src="/assets/persons/3.jpg" alt="" className="rigthbarFollowingIma" />
          <span className="rigthbarFollowingName">John Carter</span>
        </div>

        <div className="rigthbarFollowing">
          <img src="/assets/persons/3.jpg" alt="" className="rigthbarFollowingIma" />
          <span className="rigthbarFollowingName">John Carter</span>
        </div>

        <div className="rigthbarFollowing">
          <img src="/assets/persons/3.jpg" alt="" className="rigthbarFollowingIma" />
          <span className="rigthbarFollowingName">John Carter</span>
        </div>

        <div className="rigthbarFollowing">
          <img src="/assets/persons/1.jpg" alt="" className="rigthbarFollowingIma" />
          <span className="rigthbarFollowingName">John Carter</span>
        </div>
      </div>
    </div>


    </>
  }
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {user? <ProfileRigthBar/>:<HomeRigthBar/>}
      </div>
    </div>
  );
}
