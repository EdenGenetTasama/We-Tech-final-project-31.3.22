import React from "react";
import Topbar from "../../parts/topbar/Topbar";
import "./search.css"; 
import { useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";




export default function SearchFriends() {
  const userName = useParams().userName;
  const [userFind, setUserFind] = useState([]);
  const basicApi = process.env.NODE_ENV === "production" ? "https://wetechsocial.herokuapp.com" : "http://localhost:8800";
  
  useEffect(() => {
    const fetchUserByName = async () => {
      const res = await axios.get(
        `${basicApi}/users/getByUserName?username=${userName}`
      );
      setUserFind(res.data);
    };
    fetchUserByName();
  }, []);



  return (
    <>
      <Topbar />
  
      <div className="searchContainer">
      <h1 className="HeaderPeople">People</h1>
      {userFind.map((user) => 
      
      <div className="userInfo" key={user._id}>
            <div><Link to={"/profile/"+user.userName}><img src={user.profilePicture?user.profilePicture:basicApi + "/images//persons/noAvatar.webp"} alt=""  className="profilePicture"/></Link></div>
            <div>{user.userName} {user.userLastName}</div>
            <div>From : {user.from? user.from : "UnKnow" }  <br/>Live's in : {user.city? user.city: "UnKnow"} </div>
            <div>Friends : {user.followings? `${user.followings.length} Followings` :"0 followings"}</div>
         </div>
      )}
      </div> 
    </>
  );
}
