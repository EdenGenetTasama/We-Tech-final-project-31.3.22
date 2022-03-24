import axios from 'axios'
import { useEffect, useState } from 'react'
import './friends.css'
import {Link} from "react-router-dom";
export default function Friends({user}) {
  const [friends,setFriends]=useState([]);
  const PF = process.env.REACT_APP_PUBLIC_URL;
  console.log(user);
  useEffect(()=>{
    const getFollowers = async ()=>{
     const go = await axios.get(`http://localhost:8800/users/${user}`);
     setFriends(go.data)
    }
    getFollowers();
  },[])
  console.log(friends);
  return (
    <li className='sidebarFriend'>
    <Link to={`/profile/${friends.userName}`}><img className='sidebarFriendImg' src={friends.profilePicture} alt="" /></Link> 
    <span className='sidebarFriendName'>{friends.userName+" "+friends.userLastName}</span>
    </li>
  )
}
