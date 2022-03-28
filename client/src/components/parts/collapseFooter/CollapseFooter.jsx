import { GitHub, LinkedIn } from "@material-ui/icons";
import "./collapseFooter.css";



export default function CollapseFooter() {

  return (
    <div className="collapseFooter">

      <div className="footer">
        <div id="button"></div>
        <div id="container">
          <div id="cont">
            <div className="footer_center">
              <h6>all rights deserve to our Full-Stack developers</h6>
              <hr></hr>
              <div className="icons">
                <h6>Eden Genet Tasama</h6>
            <a href="https://github.com/EdenGenetTasama" target={"_blank"}><GitHub style={{height:"40px",width:"40px"}}></GitHub></a>
            <a href="https://www.linkedin.com/in/eden-genet-tasama-8a2a18220/" target={"_blank"}><LinkedIn style={{height:"40px",width:"40px"}}></LinkedIn></a>
            <hr></hr>
            <h6>Amir Mangisto</h6>
            <a href="https://github.com/Amir-Mangisto" target={"_blank"}><GitHub style={{height:"40px",width:"40px"}}></GitHub></a>
            <a href="https://www.linkedin.com/in/amir-mangisto-03a19a226/" target={"_blank"}><LinkedIn style={{height:"40px",width:"40px"}}></LinkedIn></a>
            <hr></hr>
            <h6>Haim Ayenow</h6>
            <a href="https://github.com/Haim-Ayenow" target={"_blank"}><GitHub style={{height:"40px",width:"40px"}}></GitHub></a>
            <a href="https://www.linkedin.com/in/haim-ayenow-0065a4226/" target={"_blank"}><LinkedIn style={{height:"40px",width:"40px"}}></LinkedIn></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
