import Topbar from "../../parts/topbar/Topbar";
import Sidebar from '../../parts/sidebar/Sidebar';
import Feed from '../../parts/feed/Feed';
import Rightbar from '../../parts/rightbar/Rightbar';
import './home.css';
import Feed from "../../parts/feed/Feed";

export default function Home() {
  return (
    <>
        <Topbar/>
        <div className='homeContainer'>
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </div>
    </>
  )
}
