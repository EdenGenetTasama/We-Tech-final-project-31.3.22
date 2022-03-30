import './popUpEditPost.css'
import { AuthContext } from "../../../Context/AuthContext";
import { useState, useContext } from "react";
import axios from "axios";



export default function PopUpEditPost({ handleClose, postToEdit }) {
  const { user: currentUser } = useContext(AuthContext);
  const [inputEdit, setInputEdit] = useState({});

const updatePostButton=()=>{
  try{
    axios.put(`http://localhost:8800/posts/${postToEdit._id}` , { userId: currentUser._id , desc: inputEdit })
    alert("Changes Saved successfully");
    window.location.reload();

  }
  catch(err){
    alert("Something went wrong")
  }
}
  
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <input type="text" placeholder="New Text" onChange={(e)=>setInputEdit(e.target.value)} className="inputEditComment"/>
        <button onClick={updatePostButton} type="button" className="buttonEdit" >Edit</button>
      </div>
    </div>
  );
}
