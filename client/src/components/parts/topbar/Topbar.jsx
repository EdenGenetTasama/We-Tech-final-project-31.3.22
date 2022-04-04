import "./topbar.css";
import { Person, Search, Chat, Notifications } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
// import Button from "@material-ui/core/Button";
import {useState, useEffect} from 'react';

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const [searchFriends , setSearchFriends] = useState({});

  const basicApi = process.env.NODE_ENV === "production" ? "https://wetechsocial.herokuapp.com" : "http://localhost:8800";
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();


  const logOutBut = () => {
    if (localStorage.user ) {
      localStorage.removeItem("user");
      localStorage.removeItem("isDark");
      window.location.reload();
      navigate("/Login");
      dispatch({});
    }
  };

  const searchFriendsBut = () => {
    navigate(`/searchFriends/${searchFriends}`);
  }

  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logoName">WeTech</span>
        </Link>
      </div>
      <div className="topBarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, post"
            className="searchInput"
            onChange={(e) => setSearchFriends(e.target.value)}
          />
          
          <button className="searchButton" onClick={searchFriendsBut} >Search</button>
        
        </div>
      </div>

      <div className="topBarRight">
        <button className="logoutBtn"  onClick={logOutBut}>
        logout
        </button>

{user? <Link to={`/profile/${user.userName}`} className="linkImg">
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : basicApi + "/persons/noAvatar.webp"
            }
            alt="profileImage"
            className="topbarImage"
          />
        </Link> : null}
        
      </div>
    </div>
  );
}
