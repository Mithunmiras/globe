import React from "react";

export default function StandardsSection() {
  return (
    <section className="dx " id="dcs-build-std">
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
            <em>Facility certification</em>
            <b>Uptime Institute Tier Certification</b>
            <p>Constructed-facility certification pursued only where specified; scope stated exactly.</p>
          </div>
          <div style={{ "--i": "1" }}>
            <em>Reference standard</em>
            <b>ANSI/TIA-942</b>
            <p>Certification route and issuing organisation verified per project.</p>
          </div>
          <div style={{ "--i": "2" }}>
            <em>Management system reference</em>
            <b>ISO 9001</b>
            <p>Quality management; displayed only where a valid certificate is held.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
