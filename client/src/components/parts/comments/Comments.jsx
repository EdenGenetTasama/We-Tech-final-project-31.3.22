import { useState, useEffect, useContext } from "react";
import "./comments.css";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthContext";

export default function Comments({ post }) {
  const [comment, setComment] = useState();
  // const [isComment, setIsComment] = useState(true);

  const { user: currentUser } = useContext(AuthContext);

  // useEffect(() => {

  // }, [isComment]);

  const postAComment = async () => {
    await axios.post("http://localhost:8800/posts/" + post._id + "/comment", {
      comment: comment,
      userId: currentUser._id,
 
    });
    // isComment?setIsComment(false):setIsComment(true);
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
