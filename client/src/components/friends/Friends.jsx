import './friends.css'
import {user} from '../../dummyData'
export default function Friends({user}) {
  return (
    <li className='sidebarFriend'>
    <img className='sidebarFriendImg' src={user.profilePicture} alt="" />
    <span className='sidebarFriendName'>{user.userName}</span>
    </li>
  )
}
