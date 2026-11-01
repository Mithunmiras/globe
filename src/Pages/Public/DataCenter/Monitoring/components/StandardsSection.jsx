import React from "react";

export default function StandardsSection() {
  return (
    <section className="dx " id="dcs-monitoring-std">
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
            <em>Management system reference</em>
            <b>ISO/IEC 27001</b>
            <p>Information security controls; certification displayed only where held for the stated scope.</p>
          </div>
          <div style={{ "--i": "1" }}>
            <em>Management system reference</em>
            <b>ISO 22301</b>
            <p>Business continuity guidance.</p>
          </div>
          <div style={{ "--i": "2" }}>
            <em>Technical standard</em>
            <b>ISO/IEC 22237 series</b>
            <p>Management and operational information guidance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
