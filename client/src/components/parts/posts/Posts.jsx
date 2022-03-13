import "./posts.css";
import {MoreVert} from "@material-ui/icons"
export default function Posts() {
  return (
    <div className="postContainer">
      <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
            <img className="postProfileImage" src="/assets/persons/3.jpg" alt="" />
                <span className="postUserName">Roma</span>
                <span className="postUserDate">5 min ago</span>
            </div>

            <div className="postTopRight">
                <MoreVert/>
            </div>
          </div>


          <div className="postCenter">
              <span className="postText">Hey! it's my first post☺</span>
              <img src="/assets/posts/1.webp" alt="" />
          </div>
          <div className="postBottom"></div>

      </div>
    </div>
  );
}
