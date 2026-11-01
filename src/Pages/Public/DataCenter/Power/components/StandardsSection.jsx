import React from "react";
import Icon from "../../../../../Component/Icon";

export default function StandardsSection() {
  return (
    <section className="dx " id="dcs-power-std">
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
            <p>Electrical infrastructure ratings; edition confirmed per project.</p>
          </div>
          <div style={{ "--i": "2" }}>
            <em>Statutory</em>
            <b>Applicable electrical codes</b>
            <p>Local electrical codes and authority requirements govern every design.</p>
          </div>
        </div>
        <div className="dcs-note">
          <Icon name="doc" />
          <div>
            <b>Engineering review</b>
            <p>Electrical studies and designs are prepared and approved by qualified engineers for each site.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
