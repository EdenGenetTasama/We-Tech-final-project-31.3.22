import React from "react";
import Topbar from "../../parts/topbar/Topbar";
import CollapseFooter from "../../parts/collapseFooter/CollapseFooter";
import "./search.css"; 
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function SearchFriends() {
  const userName = useParams().userName;
  const [userFind, setUserFind] = useState([]);

  useEffect(() => {
    const fetchUserByName = async () => {
      const res = await axios.get(
        `http://localhost:8800/users/?username=${userName}`
      );
      setUserFind(res.data);
    };
    fetchUserByName();
  }, []);
console.log(userFind.from);
  return (
    <>
      <Topbar />
      <div className="searchContainer">
        <h1 className="HeaderPeople">People</h1>
        <div className="userInfo">
          <div><img src={userFind.profilePicture} alt=""  className="profilePicture"/></div>
          <div>{userFind.userName} {userFind.userLastName}</div>
          <div>From : {userFind.from? userFind.from : "UnKnow" }  <br/>Live's in : {userFind.city? userFind.city: "UnKnow"} </div>
          <div>Friends : {userFind.followings? `${userFind.followings.length} Followings` :"0 followings"}</div>
        </div>
      </div>
    </>
  );
}
