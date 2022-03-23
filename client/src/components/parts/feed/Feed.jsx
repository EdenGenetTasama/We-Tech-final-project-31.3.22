import "./feed.css";
import Share from "../share/Share";
import Posts from "../posts/Posts";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import axios from "axios";
import jwt_decoded from "jwt-decode";

export default function Feed({ userName }) {
  const [post, setPost] = useState([]);
  const { user } = useContext(AuthContext);
  // let decoded = jwt_decoded(user.token)
  useEffect(() => {
    const FetchPost = async () => {
      const res = userName
        ? await axios.get("http://localhost:8800/posts/profile/"+userName)
        : await axios.get("http://localhost:8800/posts/timeline/" + user._id);
      setPost(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    FetchPost();
  }, [userName, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        
        {(!userName || userName===user.userName)&&<Share />}
        {post.length >= 1
          ? post.map((p) => <Posts key={p._id} post={p} />)
          : null}
      </div>
    </div>
  );
}
