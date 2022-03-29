import CollapseFooter from "../../parts/collapseFooter/CollapseFooter";
import Topbar from "../../parts/topbar/Topbar";
import "./javascript.css";

export default function JavaScript() {
  return (
    <div className="html">
      <Topbar />
      <h1 className="htmlTitle">JavaScript</h1>
      <section className="content">
        <article>
          <p>
            JavaScript (JS) is a lightweight, interpreted, or just-in-time
            compiled programming language with first-class functions. While it
            is most well-known as the scripting language for Web pages, many
            non-browser environments also use it, such as Node.js, Apache
            CouchDB and Adobe Acrobat. JavaScript is a prototype-based,
            multi-paradigm, single-threaded, dynamic language, supporting
            object-oriented, imperative, and declarative (e.g. functional
            programming) styles. Read more about JavaScript.
          </p>
          <p>
            This section is dedicated to the JavaScript language itself, and not
            the parts that are specific to Web pages or other host environments.
            For information about API specifics to Web pages, please see Web
            APIs and DOM.
          </p>
          <p>
            The standards for JavaScript are the ECMAScript Language
            Specification (ECMA-262) and the ECMAScript Internationalization API
            specification (ECMA-402). The JavaScript documentation throughout
            MDN is based on the latest draft versions of ECMA-262 and ECMA-402.
            And in cases where some proposals for new ECMAScript features have
            already been implemented in browsers, documentation and examples in
            MDN articles may use some of those new features.
          </p>
          <p>
            Do not confuse JavaScript with the Java programming language. Both
            "Java" and "JavaScript" are trademarks or registered trademarks of
            Oracle in the U.S. and other countries. However, the two programming
            languages have very different syntax, semantics, and use.
          </p>
        </article>
      </section>
      <hr className="hr" />
      <section className="secondContent">
        <div className="containImg">
          <img
            className="htmlImg"
            src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png"
            alt=""
          />
          <img
            className="htmlImg"
            src="https://www.w3docs.com/uploads/media/default/0001/05/4482fe09d95a0be765154b9cefff5e07f7fc32ff.png"
            alt=""
          />
          <img
            className="htmlImg"
            src="https://images.ctfassets.net/yr4qj72ki4ky/legacyBlogPost77Thumbnail/cd4783ad7b35efc4367166a570a9952e/bigstock-Real-Java-Script-Code-Developi-217215433.jpg?q=72"
            alt=""
          />
          <img
            className="htmlImg"
            src="http://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2018/09/What-is-JavaScript-1.png"
            alt=""
          />
          <img
            className="htmlImg"
            src="https://moralis.io/wp-content/uploads/2021/07/Moralis-Blogpost-JavaScript-Explained-07272021-V12.png"
            alt=""
          />
          <img
            className="htmlImg"
            src="https://ares.decipherzone.com/blog-manager/uploads/banner_webp_0bd9ca17-25f2-4d29-97da-cd082ea26e92.webp"
            alt=""
          />
        </div>
        <span className="htmlVideo">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/W6NZfCO5SIk"
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
