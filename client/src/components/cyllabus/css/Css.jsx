import CollapseFooter from "../../parts/collapseFooter/CollapseFooter";
import Topbar from "../../parts/topbar/Topbar";
import "./Css.css";

export default function Css() {
  return (
    <div className="html">
      <Topbar/>
      <h1 className="htmlTitle">CSS</h1>
      <section className="content">
        <article>
          <p>
            Cascading Style Sheets (CSS) is a stylesheet language used to
            describe the presentation of a document written in HTML or XML
            (including XML dialects such as SVG, MathML or XHTML). CSS describes
            how elements should be rendered on screen, on paper, in speech, or
            on other media.
          </p>
          <p>
            CSS is among the core languages of the open web and is standardized
            across Web browsers according to W3C specifications. Previously,
            development of various parts of CSS specification
          </p>
          <p>
            was done synchronously, which allowed versioning of the latest
            recommendations. You might have heard about CSS1, CSS2.1, CSS3.
            However, CSS4 has never become an official version.
          </p>
          <p>
            From CSS3, the scope of the specification increased significantly
            and the progress on different CSS modules started to differ so much,
            that it became more effective to develop and release recommendations
            separately per module. Instead of versioning the CSS specification,
            W3C now periodically takes a snapshot of the latest stable state of
            the CSS specification
          </p>
        </article>
      </section>
      <hr className="hr" />
      <section className="secondContent">
        <div className="containImg">
          <img
            className="htmlImg"
            src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/01/html5-css3.jpg?resize=498%2C249&ssl=1"
            alt=""
          />
          <img
            className="htmlImg"
            src="https://play-lh.googleusercontent.com/ajbmMCoaThQcD4_z-1-6H79M0ItJ1Vz2jW_5yRB_eb1d_Fdzmdci0SPHFfujQj23n-Q"
            alt=""
          />
          <img
            className="htmlImg"
            src="https://cdn3.vectorstock.com/i/1000x1000/64/72/coding-language-css-system-icon-vector-33976472.jpg"
            alt=""
          />
          <img
            className="htmlImg"
            src="https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/media/css-elements-add-background-color-to-me-styles-p.msft.png"
            alt=""
          />
          <img
            className="htmlImg"
            src="https://www.thoughtco.com/thmb/sZXKnPFCUHcBftnvQA76rG1flHM=/3499x2334/filters:no_upscale():max_bytes(150000):strip_icc()/laptop-with-css-word-on-screen--learn-css--web-development-877009350-5b7b7c26c9e77c00507ccf75-b94287046011490c8538a8cd4cb3e1d1.jpg"
            alt=""
          />
          <img
            className="htmlImg"
            src="https://miro.medium.com/max/600/1*OFsc0SD55jhi8cjo7aCA4w.jpeg"
            alt=""
          />
        </div>
        <span className="htmlVideo">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1Rs2ND1ryYc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </span>
        <br />
        <br />
      </section>
      <CollapseFooter />
    </div>
  );
}
