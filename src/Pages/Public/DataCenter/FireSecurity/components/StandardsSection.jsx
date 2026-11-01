import React from "react";
import Icon from "../../../../../Component/Icon";

export default function StandardsSection() {
  return (
    <section className="dx " id="dcs-fire-security-std">
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
            <em>Life safety</em>
            <b>Applicable NFPA standards</b>
            <p>Stated only after specialist and jurisdictional review.</p>
          </div>
          <div style={{ "--i": "1" }}>
            <em>Statutory</em>
            <b>Local fire and building codes</b>
            <p>Authority approval governs every design.</p>
          </div>
          <div style={{ "--i": "2" }}>
            <em>Technical standard</em>
            <b>ISO/IEC 22237 series</b>
            <p>Physical security guidance for data centre facilities.</p>
          </div>
        </div>
        <div className="dcs-note">
          <Icon name="doc" />
          <div>
            <b>Safety and compliance</b>
            <p>
              Fire, life-safety and physical security designs must be validated by qualified specialists and the
              relevant authorities. This page describes services and method, not a substitute for project-specific
              design or statutory approvals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
