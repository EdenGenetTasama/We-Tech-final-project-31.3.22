import "./feed.css";
import Share from "../share/Share";
import Posts from "../posts/Posts";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed({ usernameFromUrl }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const FetchPost = async () => {
      const respond = usernameFromUrl
        ? await axios.get(
            `http://localhost:8800/posts/profile/${usernameFromUrl}`
          )
        : await axios.get(
            "http://localhost:8800/posts/timeline/622a03595557527308d9f74d"
          );
          setPost(...respond.data);  
        };
        FetchPost();
        
  }, [usernameFromUrl]);


  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {post.map((p) => (
          <Posts key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}