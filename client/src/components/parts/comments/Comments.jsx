import {useState , useEffect} from "react";
import "./comments.css";
import axios from "axios";



export default function Comments({post}) {
    const [comment , setComment] = useState();

    useEffect(()=>{

    },[])

    const postAComment = async()=>{
        await axios.post("http://localhost:8800/posts/"+post._id+"/comment", {comment: comment});
      window.location.reload();
        
    }



  return <div  className="commentsContainer">
      <input type="text"  className="inputComment" onChange={(e)=>{setComment(e.target.value)}}></input>
      <button type="button" className="buttonComment" onClick={postAComment} >Send</button>
  </div>;
}
