import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import axios from "axios";

export default function Share() {
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);
  const basicApi = process.env.NODE_ENV === "production" ? "https://wetechsocial.herokuapp.com" : "http://localhost:8800";
  const desc = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };   

    if (file) {
      const data = new FormData();
      const fileName =file.name;
      data.append("file", file);
      data.append("name", fileName);
      newPost.img = fileName;
      try {
        await axios.post(`${basicApi}/server/upload`, data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post(`${basicApi}/posts`, newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share-container">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImage"
            src={
              user.profilePicture
                ? user.profilePicture
                : basicApi+ "/images/persons/noAvatar.webp"
            }
            alt=""
          />
          <input
            type="text"
            className="shareInput"
            placeholder={`What's in your mind ${user.userName}?`}
            ref={desc}
          />
        </div>
        <hr className="shareHR"/>
        <form className="shareButton" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>

            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>

            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button type="submit" className="btnShare">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
