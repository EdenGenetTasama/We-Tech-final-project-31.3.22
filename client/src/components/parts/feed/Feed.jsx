import "./feed.css";
import Share from "../share/Share";
import Posts from "../posts/Posts";
import { useContext, useEffect, useState } from "react";
import {AuthContext} from "../../../Context/AuthContext"
import axios from "axios";
import jwt_decoded from "jwt-decode";


export default function Feed({ username }) {
  const [post, setPost] = useState([]);
  const { user } = useContext(AuthContext);
  let decoded = jwt_decoded(user.token)
  // console.log(decoded._doc);

  useEffect(() => {
    const FetchPost = async () => {
      const respond = username
        ? await axios.get(`http://localhost:8800/posts/profile/${username}`)
        : await axios.get(
            "http://localhost:8800/posts/timeline/" + decoded._doc._id
          );
          setPost([...respond.data.postsByIdUser]);
        };
        FetchPost();
      }, [username,decoded._doc._id]);
      
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {
          post.length >= 1 ?
        post.map((p) => (
          <Posts key={p._id} post={p} />
        )):null
      }
      </div>
    </div>
  );
}
