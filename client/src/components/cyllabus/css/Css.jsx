import CollapseFooter from "../../parts/collapseFooter/CollapseFooter";
import Topbar from "../../parts/topbar/Topbar";
import "./Css.css";

export default function Css() {
  return (
    <div className="html">
      <Topbar />
      <div className="wrapper">
        <h1 className="htmlTitle">CSS</h1>
        <article>
          <span className="firstTitle">
            HTML Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Distinctio corporis enim nobis ad, doloribus doloremque! Consectetur
            dignissimos quam iste saepe recusandae et qui dolores, repudiandae
            voluptas minima commodi dicta sit. Fugit corporis laborum omnis,
            consectetur veniam maxime porro! Aliquam, eligendi. Non molestias
            laborum repellendus dignissimos corrupti temporibus repellat
            molestiae fugit labore reiciendis id, laboriosam in necessitatibus
            excepturi placeat facilis sed. Omnis optio labore neque soluta ipsa
            similique atque eum rerum repellendus odit, doloribus ut illo fugiat
            dolore eveniet voluptatem quas placeat earum officiis error eligendi
            voluptas doloremque tempore ratione! Ad? Odio amet quo at voluptas
            enim, maxime nihil non voluptate dignissimos ut consequuntur! Sunt
            cupiditate iusto vel voluptates in? Aliquid repudiandae enim
            sapiente quos ad cupiditate dolores labore quaerat quibusdam.
            Debitis dolore voluptates ratione blanditiis? Labore magni quidem
            impedit sunt ab, cum harum, expedita blanditiis quos eaque animi
            error fugiat exercitationem aspernatur, adipisci quibusdam ducimus
            facilis consectetur. Dolorum, quam velit.
          </span>
          <br />
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/23/00/css3-1841590__340.png"
            alt=""
            className="img"
          />
        </article>
        <hr />
        <article>
          <p className="firstTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            quisquam nisi assumenda impedit veniam tempora reiciendis id sed ad
            sint repellendus velit illum eligendi optio delectus ex, voluptatem
            adipisci facere? Itaque rem in iure tenetur. Iusto nisi quaerat
            dolorem recusandae nam, quo doloribus illo alias maiores magni id
            odio inventore quibusdam eos fuga voluptas soluta. Possimus unde
            quae suscipit? Nam?
          </p>
          <img
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747__340.png"
            alt=""
            className="img"
          />
        </article>
      </div>
      <CollapseFooter />
    </div>
  );
}