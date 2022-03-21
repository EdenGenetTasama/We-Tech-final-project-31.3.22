import Topbar from "../../parts/topbar/Topbar";
import Sidebar from "../../parts/sidebar/Sidebar";
import Feed from "../../parts/feed/Feed";
import Rightbar from "../../parts/rightbar/Rightbar";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

import "./profile.css";

export default function Profile() {

  const [user, setUser] = useState({});
  const username = useParams().username;
  const PF = `http://localhost:8800` ;




  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(PF+`/users/622b2255aa086d5555abea6a`);
      setUser(res.data);
      console.log(res.data);
    };
    fetchUser();
  }, []);

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
              <h4 className="profileInfoName">{user.userName}</h4>
              <span className="profileIDescription">{user.userLastName}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}