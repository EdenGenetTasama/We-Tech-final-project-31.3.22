import "./posts.css";
import { MoreVert,Favorite,ThumbUp } from "@material-ui/icons";
import { users } from "../../../dummyData";



export default function Posts({post}) {
  const user = users.filter((user)=> user.id===post.userId? console.log(post.userId[0].userName): console.log("boom"));
  console.log(user);
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
            <span className="postUserName"></span>
            <span className="postUserDate">{post.date}</span>
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
              <span className="LikeIcon"><Favorite htmlColor='red'/></span>
              <span className="LikeIcon"> <ThumbUp htmlColor='blue'/> </span>
                <div className="postLikeCounter">{post.like} people like it</div> 
           </div>


          <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
