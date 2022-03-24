import "./rightbar.css";
import { users } from "../../../dummyData";
import Online from "../../online/Online";
import { useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import {Add, Remove} from "@material-ui/icons"


export default function Rightbar({ user }) {
  const [friends, setFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser,dispatch}=useContext(AuthContext);
  const [followed,setFollowed]= useState(currentUser.followings.includes(user?.id));

  useEffect(()=>{
    setFollowed(currentUser.followings.includes(user?.id))
  },[currentUser,user?.id])


  useEffect(() => {
    const getFriends = async () => {
      try {
        if(user&&user._id ){
          const friendList = await axios.get("http://localhost:8800/users/friends/" + user._id);
          setFriends(friendList.data);
        }
      } 
      catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user]);
console.log(followed);
  const handleClick =async ()=>{
    try {
      if (followed) {
        await axios.put("http://localhost:8800/users/"+user._id+"/unfollow",{
          userId:currentUser._id,
        });
         dispatch({type:"UNFOLLOW",payload:user._id})
      }
      else{
        await axios.put("http://localhost:8800/users/"+user._id+"/follow",{
          userId:currentUser._id
        });
         dispatch({type:"FOLLOW",payload:user._id})
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed)
  }



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
      {user.userName !== currentUser.userName && (
        <button className="rightBarFollowingButton" onClick={handleClick}>
          {followed ? "unFollow":"follow"}
          {followed ? <Remove/> :<Add/>}

        </button>
      )}
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
            <Link key={friend._id} to={"/profile/"+ friend.userName} style={{ textDecoration: "none" }}>
              <div className="rigthbarFollowing">
                <img
                  src={friend.profilePicture ? friend.profilePicture : PF+"/persons/noAvatar.webp"}
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
