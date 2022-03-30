import { useState, useEffect, useContext } from "react";
import "./comments.css";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthContext";

export default function Comments({ post }) {
  const [comment, setComment] = useState();
  const { user: currentUser } = useContext(AuthContext);
  const basicApi = process.env.NODE_ENV === "production" ? "https://wetechsocial.herokuapp.com" : "http://localhost:8800";


  const postAComment = async () => {
    await axios.post(`${basicApi}/posts/` + post._id + "/comment", {
      comment: comment,
      userId: currentUser._id,
      created:new Date()
 
    });
    window.location.reload();
  };

  return (
    <div className="commentsContainer">
      <input
        type="text"
        className="inputComment"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      ></input>
      <button type="button" className="buttonComment" onClick={postAComment}>
        Send
      </button>
    </div>
  );
}
