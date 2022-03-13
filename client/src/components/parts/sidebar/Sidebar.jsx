import './sidebar.css'
import { RssFeed,Event,VideoCall,Person } from '@material-ui/icons'
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sideBarWrapper'>
    <ul className='sideBarList'>
    <li className='sideBarListItem'>
      <RssFeed className='sideBarIcon'/>
      <span>Feed</span>
    </li>
    <li className='sideBarListItem'>
      <Event className='sideBarIcon'/>
      <span>Event</span>
    </li>
    <li className='sideBarListItem'>
      <VideoCall className='sideBarIcon'/>
      <span>Video</span>
    </li>
    <li className='sideBarListItem'>
      <Person className='sideBarIcon'/>
      <span>People</span>
    </li>  
    </ul>
    <button className='sideBarBtn'>Show More</button>
    <hr className='sideBarHr'/>
    <ul className='sideBarFriendList'>
      <li className='sidebarFriend'>
      <img className='sidebarFriendImg' src="/assets/persons/1.jpg" alt="" />
      <span className='sidebarFriendName'>Lama Kama</span>
      </li>
      <li className='sidebarFriend'>
      <img className='sidebarFriendImg' src="/assets/persons/1.jpg" alt="" />
      <span className='sidebarFriendName'>Lama Kama</span>
      </li>
      <li className='sidebarFriend'>
      <img className='sidebarFriendImg' src="/assets/persons/1.jpg" alt="" />
      <span className='sidebarFriendName'>Lama Kama</span>
      </li>
      <li className='sidebarFriend'>
      <img className='sidebarFriendImg' src="/assets/persons/1.jpg" alt="" />
      <span className='sidebarFriendName'>Lama Kama</span>
      </li>
      <li className='sidebarFriend'>
      <img className='sidebarFriendImg' src="/assets/persons/1.jpg" alt="" />
      <span className='sidebarFriendName'>Lama Kama</span>
      </li>
      <li className='sidebarFriend'>
      <img className='sidebarFriendImg' src="/assets/persons/1.jpg" alt="" />
      <span className='sidebarFriendName'>Lama Kama</span>
      </li>
      <li className='sidebarFriend'>
      <img className='sidebarFriendImg' src="/assets/persons/1.jpg" alt="" />
      <span className='sidebarFriendName'>Lama Kama</span>
      </li>
      <li className='sidebarFriend'>
      <img className='sidebarFriendImg' src="/assets/persons/1.jpg" alt="" />
      <span className='sidebarFriendName'>Lama Kama</span>
      </li>
      <li className='sidebarFriend'>
      <img className='sidebarFriendImg' src="/assets/persons/1.jpg" alt="" />
      <span className='sidebarFriendName'>Lama Kama</span>
      </li>
      <li className='sidebarFriend'>
      <img className='sidebarFriendImg' src="/assets/persons/1.jpg" alt="" />
      <span className='sidebarFriendName'>Lama Kama</span>
      </li>
      <li className='sidebarFriend'>
      <img className='sidebarFriendImg' src="/assets/persons/1.jpg" alt="" />
      <span className='sidebarFriendName'>Lama Kama</span>
      </li>
      <li className='sidebarFriend'>
      <img className='sidebarFriendImg' src="/assets/persons/1.jpg" alt="" />
      <span className='sidebarFriendName'>Lama Kama</span>
      </li>
    </ul>

      </div>
      </div>
  )
}
