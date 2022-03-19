import "./posts.css";
import { MoreVert,Favorite,ThumbUp } from "@material-ui/icons";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import {format} from 'timeago.js';
import axios from "axios";

export default function Posts({post}) {

  const [like,setLike] = useState(post.likes.length);
  const [isLiked,setIsLiked] =useState(false) ;
  const [user,setUser] =useState({}) ;

  const likeHandler = ()=>{
    setLike(isLiked?like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  // post = , אובייקט של היוזר, אובייקט של הפוסטים של היוזר, ומערך של אובייקטים של העוקבעים

  useEffect(()=>{
    const FetchUser =async()=>{
      const respond = await axios.get(`http://localhost:8800/users/${post.userId}`);
      setUser(respond.data);
    }
    FetchUser();
    // console.log(post);
  },[post.userId])
  
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.userName}`}>
            <img
              className="postProfileImage"
              src={post.profilePicture || "/assets/persons/noAvatar.webp"}
              alt=""
            />
            </Link>
            <span className="postUserName">{user.userName+" "+user.userLastName}</span>
            <span className="postUserDate">{format(post.createdAt)}</span>
          </div>

          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImage" src={post.img} alt="" />
        </div>

        <div className="postBottom">

            <div className="postBottomLeft">
              <span className="LikeIcon"><Favorite htmlColor='red' onClick={likeHandler}/></span>
              <span className="LikeIcon"> <ThumbUp htmlColor='blue' onClick={likeHandler}/> </span>
                <div className="postLikeCounter">{like} people like it</div> 
           </div>


          <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
