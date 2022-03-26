import "./posts.css";
import { MoreVert, Favorite, ThumbUp } from "@material-ui/icons";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthContext";
import Comments from "../comments/Comments.jsx";

export default function Posts({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  // post = , אובייקט של היוזר, אובייקט של הפוסטים של היוזר, ומערך של אובייקטים של העוקבעים
  useEffect(() => {
    const FetchUser = async () => {
      const respond = await axios.get(
        `http://localhost:8800/users/?userId=${post.userId}`
      );
      setUser(respond.data);
      // console.log(post)
    };
    FetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("http://localhost:8800/posts/" + post._id + "/like", {
        userId: currentUser._id,
      });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const the_button = document.querySelector(".js-btn");
  const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close")

  function handleClick(event) {
    modal.style.display = "block";
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none"
    })
  }


  const openComments = () => {
    document.addEventListener("DOMContentLoaded",() => {
      the_button.addEventListener("click", handleClick)
      console.log("lala");
    })
  };

  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.userName}`}>
              <img
                className="postProfileImage"
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : PF + "/persons/noAvatar.webp"
                }
                alt=""
              />
            </Link>
            <span className="postUserName">
              {user.userName + " " + user.userLastName}
            </span>
            <span className="postUserDate">{format(post.createdAt)}</span>
          </div>

          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImage" src={PF + "/" + post.img} alt="" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <span className="LikeIcon">
              <Favorite htmlColor="red" onClick={likeHandler} />
            </span>
            <span className="LikeIcon">
              {" "}
              <ThumbUp htmlColor="blue" onClick={likeHandler} />{" "}
            </span>
            <div className="postLikeCounter">{like} people like it</div>
          </div>

          <div className="postBottomRight">
            <span className="postCommentText" onClick={openComments}>
              {post.comments ? post.comments.length : "0"} comments
            </span>
          </div>
        </div>
        <div>
          <Comments post={post} />
        </div>
      </div>
    </div>
  );
}
