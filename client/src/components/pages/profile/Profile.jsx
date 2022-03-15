import Topbar from "../../parts/topbar/Topbar";
import Sidebar from "../../parts/sidebar/Sidebar";
import Feed from "../../parts/feed/Feed";
import Rightbar from "../../parts/rightbar/Rightbar";
import "./profile.css";
export default function Profile() {
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
                src="/assets/persons/family-6398107_1920.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="/assets/persons/3.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Ella Mangolian</h4>
              <span className="profileIDescription">Hello There</span>
            </div>
          </div>
          <div className="profileRightBottom">
              <Feed />
          <Rightbar />
          </div>
        
        </div>
      </div>
    </>
  );
}
