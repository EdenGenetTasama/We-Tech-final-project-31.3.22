import React from "react";
import Topbar from "../../parts/topbar/Topbar";
import CollapseFooter from "../../parts/collapseFooter/CollapseFooter";
import "./search.css"; 
import { useEffect, useState,useContext} from "react";
import { useParams } from "react-router";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthContext";




export default function SearchFriends() {
  const userName = useParams().userName;
  const [userFind, setUserFind] = useState([]);
  
  const {user:currentUser}=useContext(AuthContext);
  
  
  
  useEffect(() => {
    const fetchUserByName = async () => {
      const res = await axios.get(
        `http://localhost:8800/users/getByUserName?username=${userName}`
      );
      setUserFind(res.data);
    };
    fetchUserByName();
  }, []);

  const followClick=(user)=>{
    axios.put(`http://localhost:8800/users/${currentUser._id}/follow`,{
      userId:user._id,
    })

    console.log(user)
  }
  return (
    <>
      <Topbar />
  
      <div className="searchContainer">
      <h1 className="HeaderPeople">People</h1>
    
      {userFind.map((user) => 
      
          <div className="userInfo" key={user._id}>
            <div><img src={user.profilePicture} alt=""  className="profilePicture"/></div>
            <div>{user.userName} {user.userLastName}</div>
            <div>From : {user.from? user.from : "UnKnow" }  <br/>Live's in : {user.city? user.city: "UnKnow"} </div>
            <div>Friends : {user.followings? `${user.followings.length} Followings` :"0 followings"}</div>
            <button type="button" onClick={()=>followClick(user)}>Follow</button>
         </div>
      )}
      </div> 
    </>
  );
}
