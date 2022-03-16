import "./posts.css";
import { MoreVert,Favorite,ThumbUp } from "@material-ui/icons";
import { useState } from "react";
import {format} from 'timeago.js'



export default function Posts({post}) {
  const [like,setLike] = useState(post.like);
  const [isLiked,setIsLiked] =useState(false) ;
  const likeHandler = ()=>{
    setLike(isLiked?like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImage"
              src={post.photo}
              alt=""
            />
            <span className="postUserName">{post.userName}</span>
            <span className="postUserDate">{format(post.createdAt)}</span>
          </div>

          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImage" src={post.postImages} alt="" />
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
