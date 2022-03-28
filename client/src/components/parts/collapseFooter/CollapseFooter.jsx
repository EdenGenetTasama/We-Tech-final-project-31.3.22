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
            <a href="https://github.com/EdenGenetTasama"><GitHub style={{height:"40px",width:"40px"}}></GitHub></a>
            <a href="https://www.linkedin.com/in/eden-genet-tasama-8a2a18220/"><LinkedIn style={{height:"40px",width:"40px"}}></LinkedIn></a>
            <hr></hr>
            <h6>Amir Mangistu</h6>
            <a href="https://github.com/Amir-Mangisto"><GitHub style={{height:"40px",width:"40px"}}></GitHub></a>
            <a href="https://www.linkedin.com/in/amir-mangisto-03a19a226/"><LinkedIn style={{height:"40px",width:"40px"}}></LinkedIn></a>
            <hr></hr>
            <h6>Haim Ayenow</h6>
            <a href="https://github.com/Haim-Ayenow"><GitHub style={{height:"40px",width:"40px"}}></GitHub></a>
            <a href="https://www.linkedin.com/in/haim-ayenow-0065a4226/"><LinkedIn style={{height:"40px",width:"40px"}}></LinkedIn></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
