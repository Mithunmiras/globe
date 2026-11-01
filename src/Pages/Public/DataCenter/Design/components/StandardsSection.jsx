import React from "react";
import Icon from "../../../../../Component/Icon";

export default function StandardsSection() {
  return (
    <section className="dx " id="dcs-design-std">
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
            <b>ANSI/BICSI 002</b>
            <p>Data center design and implementation best practices.</p>
          </div>
          <div style={{ "--i": "1" }}>
            <em>Reference standard</em>
            <b>ANSI/TIA-942</b>
            <p>Infrastructure standard for data centers; edition confirmed per project.</p>
          </div>
          <div style={{ "--i": "2" }}>
            <em>Technical standard</em>
            <b>ISO/IEC 22237 series</b>
            <p>Facilities and infrastructure guidance.</p>
          </div>
          <div style={{ "--i": "3" }}>
            <em>Professional credential</em>
            <b>BICSI DCDC</b>
            <p>Individual credential; listed only for team members who hold it.</p>
          </div>
        </div>
        <div className="dcs-note">
          <Icon name="doc" />
          <div>
            <b>Design responsibility</b>
            <p>
              Actual data centre design is developed and approved by qualified professionals using site-specific
              requirements, applicable codes and manufacturer guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
