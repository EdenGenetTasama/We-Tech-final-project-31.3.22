import "./posts.css";
import { MoreVert, Favorite, ThumbUp, Delete, Edit } from "@material-ui/icons";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthContext";
import Comments from "../comments/Comments";
import PopUp from "../popup/PopUp";
import PopUpEditPost from "../PopUpEditPost/PopUpEditPost"


export default function Posts({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const basicApi = process.env.NODE_ENV === "production" ? "https://wetechsocial.herokuapp.com" : "http://localhost:8800";
  const { user: currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);


  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const FetchUser = async () => {
      const respond = await axios.get(
        `${basicApi}/users/?userId=${post.userId}`
      );
      setUser(respond.data);
    };
    FetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put(`${basicApi}/posts/` + post._id + "/like", {
        userId: currentUser._id,
      });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const deletePost = async () => {
    try{
      await axios.delete(`${basicApi}/posts/${post._id}`,{ data: { id: currentUser._id }, headers: { "Authorization": "***" } });
      window.confirm("Are you sure you want to delete this post?")
        window.location.reload();
  
      }
      catch(err){alert("You cant delete if its not your post")}
    
  };


  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const togglePopupEdit = () => {
    setIsOpenEdit(!isOpenEdit);
    console.log(isOpenEdit)
  };
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {isOpen && <PopUp handleClose={togglePopup} post={post} />}
            <Link to={`/profile/${user.userName}`}>
              <img
                className="postProfileImage"
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : basicApi + "/images/persons/noAvatar.webp"
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
          {isOpenEdit && <PopUpEditPost handleClose={togglePopupEdit} postToEdit={post} />}
            <Edit onClick={togglePopupEdit} />
            <br />
            <br />
            <Delete onClick={deletePost} />
            {/* <MoreVert /> */}
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImage" src={basicApi+ "/" + post.img} alt="" />
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
            <span className="postCommentText" onClick={togglePopup}>
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
