import "./feed.css";
import Share from "../share/Share";
import Posts from "../posts/Posts";
export default function Feed() {
  return (
    <div className="feed">
        <div className="feedWrapper">
          <Share/>
          <Posts/>
        </div>
    </div>
  )
}
