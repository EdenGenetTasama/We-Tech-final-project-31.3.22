import "./feed.css";
import Share from "../share/Share";
import Posts from "../posts/Posts";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import axios from "axios";

export default function Feed({ username }) {
  const [post, setPost] = useState([]);
  const { user } = useContext(AuthContext);
  const basicApi = process.env.NODE_ENV === "production" ? "https://wetechsocial.herokuapp.com" : "http://localhost:8800";


  useEffect(() => {
    const FetchPost = async () => {
     
      if (user) {
        const res = username
          ? await axios.get(`${basicApi}/posts/profile/` + username)
          : await axios.get(`${basicApi}/posts/timeline/` + user._id)
        setPost(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      }
    };
    FetchPost();
  }, [username, user._id]);


  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {post.length >= 1
          ? post.map((p) => <Posts key={p._id} post={p} />)
          : null}
      </div>
    </div>
  );
}
