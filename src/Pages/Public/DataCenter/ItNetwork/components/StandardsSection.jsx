import React from "react";

export default function StandardsSection() {
  return (
    <section className="dx " id="dcs-it-network-std">
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
            <em>Reference standard</em>
            <b>ANSI/TIA-942</b>
            <p>Telecommunications infrastructure and cabling guidance; edition confirmed per project.</p>
          </div>
          <div style={{ "--i": "1" }}>
            <em>Technical standard</em>
            <b>ANSI/BICSI 002</b>
            <p>Design and implementation best practices.</p>
          </div>
          <div style={{ "--i": "2" }}>
            <em>Technical standard</em>
            <b>ISO/IEC 22237 series</b>
            <p>Telecommunications cabling infrastructure guidance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
