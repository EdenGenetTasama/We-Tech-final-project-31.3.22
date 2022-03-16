import "./feed.css";
import Share from "../share/Share";
import Posts from "../posts/Posts";
import {posts} from "../../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
        <div className="feedWrapper">
          <Share/>
          {posts.map(p=>(
          <Posts key={p.id} post={p}/>
          ))}

        </div>
    </div>
  )
}
  