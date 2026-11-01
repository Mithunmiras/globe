import React from "react";

export default function StandardsSection() {
  return (
    <section className="dx " id="dcs-expansion-std">
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
            <em>Technical standard</em>
            <b>ISO/IEC 22237 series</b>
            <p>Facility and infrastructure guidance.</p>
          </div>
          <div style={{ "--i": "1" }}>
            <em>Reference standard</em>
            <b>ANSI/TIA-942</b>
            <p>Applied to expansion design where relevant.</p>
          </div>
          <div style={{ "--i": "2" }}>
            <em>Engineering guidance</em>
            <b>NIST SP 800-88</b>
            <p>Media sanitisation guidance referenced for decommissioning.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
