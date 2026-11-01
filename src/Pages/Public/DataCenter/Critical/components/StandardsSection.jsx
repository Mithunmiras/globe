import React from "react";

export default function StandardsSection() {
  return (
    <section className="dx " id="dcs-critical-std">
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
            <em>Reference framework</em>
            <b>Uptime Institute Tier topology</b>
            <p>Frames redundancy and concurrent maintainability objectives.</p>
          </div>
          <div style={{ "--i": "1" }}>
            <em>Reference standard</em>
            <b>ANSI/TIA-942</b>
            <p>Infrastructure ratings; edition confirmed per project.</p>
          </div>
          <div style={{ "--i": "2" }}>
            <em>Life safety</em>
            <b>Applicable NFPA standards and local codes</b>
            <p>Stated only after specialist and jurisdictional review.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
