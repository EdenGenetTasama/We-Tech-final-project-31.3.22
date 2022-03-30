import axios from "axios";
import { useEffect, useState } from "react";
import "./friends.css";
import { Link } from "react-router-dom";

export default function Friends({ user }) {
  const [friends, setFriends] = useState([]);
  const basicApi = process.env.NODE_ENV === "production" ? "https://wetechsocial.herokuapp.com" : "http://localhost:8800";

  useEffect(() => {
    const getFollowers = async () => {
      const go = await axios.get(`${basicApi}/users/${user}`);
      setFriends(go.data);
    };
    getFollowers();
  }, []);

  
  return (
    <div>
      <li className="sidebarFriend">
        <Link to={`/profile/${friends.userName}`}>
          <img
            className="sidebarFriendImg"
            src={
              friends.profilePicture
                ? friends.profilePicture
                : basicApi + "/images/persons/noAvatar.webp"
            }
            alt=""
          />
        </Link>
        <span className="sidebarFriendName">
          {friends.userName + " " + friends.userLastName}
        </span>
      </li>
    </div>
  );
}
