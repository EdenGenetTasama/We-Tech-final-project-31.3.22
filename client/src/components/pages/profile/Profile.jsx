import Topbar from "../../parts/topbar/Topbar";
import Sidebar from "../../parts/sidebar/Sidebar";
import Feed from "../../parts/feed/Feed";
import Rightbar from "../../parts/rightbar/Rightbar";
import CollapseFooter from "../../parts/collapseFooter/CollapseFooter"
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

import "./profile.css";

export default function Profile() {

  const [user, setUser] = useState({});
  const [post, setPost] = useState({});

  const PF = `http://localhost:8800` ;
  const userName = useParams().userName;


  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(PF+`/users/?username=${userName}`);
      setUser(res.data);
      setPost(res.data);
    };
    fetchUser();
  }, [userName]);
  
  console.log(post);
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

                    ?  user.coverPicture
                    : "https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg"

                }
                alt="Cover pic is not available"
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ?  user.profilePicture
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt="Profile pic is not available"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.userName+" "+user.userLastName}</h4>
              <span className="profileIDescription">{user.dec?user.dec:" "}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={userName} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
      <CollapseFooter/>
    </>
  );
}