import React from "react";

export default function StandardsSection() {
  return (
    <section className="dx " id="dcs-cooling-std">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">{"Standards & guidance"}</span>
          <h2 className="dx-h">
            Technologies, standards <span>and pathways</span>
          </h2>
          <p className="dx-lede">
            Referenced as applicable guidance. Certification status is stated only where verified for a specific scope.
          </p>
        </div>
        <div className="dcs-std" data-reveal="">
          <div style={{ "--i": "0" }}>
            <em>Engineering guidance</em>
            <b>ASHRAE thermal guidelines</b>
            <p>Referenced for allowable IT inlet conditions; manufacturer limits take priority.</p>
          </div>
          <div style={{ "--i": "1" }}>
            <em>Engineering guidance</em>
            <b>ASHRAE Standard 90.4</b>
            <p>Energy standard for data centers, applied where relevant.</p>
          </div>
          <div style={{ "--i": "2" }}>
            <em>Technical standard</em>
            <b>ISO/IEC 22237 series</b>
            <p>Environmental control guidance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
