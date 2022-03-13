import "./topbar.css";
import { Person, Search, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="logoName">logo</span>
      </div>
      <div className="topBarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input
            placeholder="Search for friends, post"
            className="searchInput"
          />
        </div>
      </div>

      <div className="topBarRight">
        <div className="topbarLinks">
          <span className="topbarLink">homePage</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="tobarIconItem">
            <Person className="Icon"/>
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="tobarIconItem">
            <Chat className="Icon"/>
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="tobarIconItem">
            <Notifications className="Icon"/>
            <span className="topbarIconBadge">3</span>
            {/* <img
              src="https://www.meshek8.co.il/wp-content/uploads/2021/02/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_1.jpg"
              alt="profileImage"
              className="topbarImage"
            /> */}

          </div>
        </div>

        <img
          src="/assets/persons/1.jpg"
          alt="profileImage"
          className="topbarImage"
        />
      </div>
    </div>
  );
}
