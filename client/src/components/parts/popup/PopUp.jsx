import "./popUp.css";
import { useState, useEffect } from "react";
import axios from "axios";


function PopUp({ handleClose, post }) {
  const [postInfo, setPostInfo] = useState({});

  useEffect(() => {
    post.comments.map((comment) => {
      const user = axios
        .get("http://localhost:8800/users/" + comment.userId)
        .then((res) => setPostInfo(res.data));
      // setPostInfo(user)
    });
  }, []);

  // const comment = postInfo.map((post) => {
  // })

  // console.log(postInfo.profilePicture)
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>

        {post.comments.map((comment) => (
          <div className="popup-box-container">
            <div className="popup-Comments">
              <img
                className="popUpProfileImage"
                src={postInfo.profilePicture}
                alt=""
              />
              <h5 className="popUserName">
                {postInfo.userName} {postInfo.userLastName}
              </h5>
            </div>
            <p className="commentClass">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PopUp;
