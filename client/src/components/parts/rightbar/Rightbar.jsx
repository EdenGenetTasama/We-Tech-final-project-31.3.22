import "./rightbar.css";
import { users } from "../../../dummyData";
import { useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import {Add, Remove} from "@material-ui/icons";

export default function Rightbar({ user }) {
  const [friends, setFriends] = useState([]);
  const basicApi = process.env.NODE_ENV === "production" ? "https://wetechsocial.herokuapp.com" : "http://localhost:8800";
  
  const {user:currentUser,dispatch}=useContext(AuthContext);
  const [followed,setFollowed]= useState(false);

  
  useEffect(()=>{
    // setFollowed(currentUser.followings.includes(user?.id))
  },[currentUser,user?.id])


  useEffect(() => {
    const getFriends = async () => {
      try {
        if(user&&user._id ){
          const friendList = await axios.get(`${basicApi}/users/friends/` + user._id);
          setFriends(friendList.data);
        }
      } 
      catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user]);

  const handleClick =async ()=>{
    try {
      if (followed) {
        await axios.put(`${basicApi}/users/`+currentUser._id+"/unfollow",{
          userId:user._id,
        });
         dispatch({type:"UNFOLLOW",payload:user._id})
      }
      else{
        await axios.put(`${basicApi}/users/`+currentUser._id+"/follow",{
          userId:user._id,
        });
         dispatch({type:"FOLLOW",payload:user._id})
      }
    } catch (error) {
      console.log(error);
    }
    console.log(followed);
    setFollowed(!followed)
  }



  const HomeRigthBar = () => {
    return (
      <>
        
        <img src="/assets/persons/tech-career.png" className="adImg" />
          <img className="topicImg" src="/assets/persons/gift.png" alt="" />
        <h5 className="rightBarTitle">Syllabus</h5>
        <ul className="rightBarFriendList">

          {
            <ul className="ulSyllabus">
              <li className="linksToSyllabus">
              <Link to={"/cyllabus/html/Html"}  className="links">
                HTML
              </Link>
              </li>
              <li className="linksToSyllabus">
              <Link to={"/cyllabus/css/Css"}  className="links">
                CSS
              </Link>
              </li>
              <li className="linksToSyllabus">
              <Link to={"/cyllabus/javascript/JavaScript"}  className="links">
                JAVASCRIPT
              </Link>
              </li>
            </ul>
          }
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
            <Link key={friend._id} to={"/profile/"+ friend.userName} style={{ textDecoration: "none" }} > 
              <div className="rigthbarFollowing">
                <img
                  src={friend.profilePicture ? friend.profilePicture : basicApi+"/images/persons/noAvatar.webp"}
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
