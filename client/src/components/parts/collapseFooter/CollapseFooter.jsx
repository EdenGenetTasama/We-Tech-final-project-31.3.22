import { GitHub, LinkedIn } from "@material-ui/icons";
import "./collapseFooter.css";



export default function CollapseFooter() {

  return (
    <div className="collapse">
      <div className="footer">
        <div id="button"></div>
        <div id="container">
          <div id="cont">
            <div className="footer_center">
              <h4>all rights deserve to our Full-Stack developers</h4>
              {/* <hr></hr> */}
              <div className="icons">
                <h4>Eden Genet Tasama</h4>
            <a href="https://github.com/EdenGenetTasama"><GitHub style={{height:"40px",width:"40px"}}></GitHub></a>
            <a href="https://www.linkedin.com/in/eden-genet-tasama-8a2a18220/"><LinkedIn style={{height:"40px",width:"40px"}}></LinkedIn></a>
            <hr></hr>
            <h4>Amir Mangistu</h4>
            <a href="https://github.com/Amir-Mangisto"><GitHub style={{height:"40px",width:"40px"}}></GitHub></a>
            <a href="https://www.linkedin.com/in/amir-mangisto-03a19a226/"><LinkedIn style={{height:"40px",width:"40px"}}></LinkedIn></a>
            <hr></hr>
            <h4>Haim Ayenow</h4>
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
