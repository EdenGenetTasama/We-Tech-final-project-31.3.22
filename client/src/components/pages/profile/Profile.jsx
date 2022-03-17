import Topbar from "../../parts/topbar/Topbar";
import Sidebar from "../../parts/sidebar/Sidebar";
import Feed from "../../parts/feed/Feed";
import Rightbar from "../../parts/rightbar/Rightbar";
import { useParams } from "react-router-dom";
import {users,posts} from "../../../dummyData";
import "./profile.css";

export default function Profile() {

  const {userName} = useParams();
  const currentUser = users.filter((user)=> user.userName == userName);
  const currentUserPost = posts.filter((user)=> currentUser[0].id ===user.userId);

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
                src={currentUser[0].profileCoverPicture?currentUser[0].profileCoverPicture:"https://pharem-project.eu/wp-content/themes/consultix/images/no-image-found-360x250.png" }
                alt=""
              />
              <img
                className="profileUserImg"
                src={currentUser[0].profilePicture}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{currentUser[0].userName}</h4>
              <span className="profileIDescription">{currentUserPost[0].desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
