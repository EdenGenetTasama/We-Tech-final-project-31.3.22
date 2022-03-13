import './share.css';
import {PermMedia, Label , Room , EmojiEmotions} from "@material-ui/icons";

export default function Share() {
  return (
    <div className="share-container">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className ="shareProfileImage" src="/assets/persons/2.jpg" alt="" />
                <input type="text" className="shareInput" placeholder="What's in your main?"/>
            </div>
            <hr className="shareHR"/>
            <div className="shareButton">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>

                    <div className="shareOption">
                        <Label htmlColor='blue' className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>

                    <div className="shareOption">
                        <Room htmlColor='green' className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>

                    <div className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod' className="shareIcon"/>
                        <span className="shareOptionText">Feeling</span>
                    </div>
                </div>
                <button type="button" className="btnShare">Share</button>
            </div>
        </div>

    </div>
  )
}
