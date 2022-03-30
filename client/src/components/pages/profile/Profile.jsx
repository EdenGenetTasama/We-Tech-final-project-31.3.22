import Topbar from "../../parts/topbar/Topbar";
import Sidebar from "../../parts/sidebar/Sidebar";
import Feed from "../../parts/feed/Feed";
import Rightbar from "../../parts/rightbar/Rightbar";
import CollapseFooter from "../../parts/collapseFooter/CollapseFooter";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

import "./profile.css";

export default function Profile() {
  const [user, setUser] = useState({});
  const basicApi = process.env.NODE_ENV === "production" ? "https://wetechsocial.herokuapp.com" : "http://localhost:8800";
  const userName = useParams().userName;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get( `${basicApi}/users/?username=${userName}`);
      setUser(res.data);
    };
    fetchUser();
  }, [userName]);



  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture
                    ? user.coverPicture
                    : PF+"/persons/noCover.png"
                }
                alt="Cover pic is not available"
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : PF+"/persons/noAvatar.webp"
                }
                alt="Profile pic is not available"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">
                {user.userName + " " + user.userLastName}
              </h4>
              <span className="profileIDescription">
                {user.dec ? user.dec : " "}
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={userName} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
      <CollapseFooter />
    </>
  );
}
