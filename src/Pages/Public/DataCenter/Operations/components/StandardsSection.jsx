import React from "react";
import Icon from "../../../../../Component/Icon";

export default function StandardsSection() {
  return (
    <section className="dx " id="dcs-operations-std">
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
            <p>Management and operational guidance.</p>
          </div>
          <div style={{ "--i": "1" }}>
            <em>Facility certification</em>
            <b>Uptime Institute Operational Sustainability</b>
            <p>Pursued only where specified; scope stated exactly.</p>
          </div>
          <div style={{ "--i": "2" }}>
            <em>Management system reference</em>
            <b>ISO 41001</b>
            <p>Facility management; displayed only where a valid certificate is held.</p>
          </div>
        </div>
        <div className="dcs-note">
          <Icon name="doc" />
          <div>
            <b>Service definitions</b>
            <p>
              Staffing, coverage, escalation, response times, exclusions and service levels are specified in each
              contract.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
