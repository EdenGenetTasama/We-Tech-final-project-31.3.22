import React from "react";
import "./collapseFooter.css";
export default function CollapseFooter() {
  var coll = document.getElementsByClassName("collapsible");
  var i;
  return (
    <div className="collapse">
      <div class="footer">
        <div id="button"></div>
        <div id="container">
          <div id="cont">
            <div class="footer_center">
              <h3>Classy footer text</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
