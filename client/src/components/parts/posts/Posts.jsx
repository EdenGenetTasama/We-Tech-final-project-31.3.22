import "./posts.css";
import { MoreVert,Favorite,ThumbUp } from "@material-ui/icons";
export default function Posts() {
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImage"
              src="/assets/persons/3.jpg"
              alt=""
            />
            <span className="postUserName">Roma</span>
            <span className="postUserDate">5 min ago</span>
          </div>

          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">Hey! it's my first post☺</span>
          <img className="postImage" src="/assets/posts/1.webp" alt="" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
          <span className="LikeIcon"><Favorite/></span>
          <span className="LikeIcon"> <ThumbUp/> </span>
            <div className="postLikeCounter">33 people like it</div> 

           </div>
          <div className="postBottomRight">
              <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
