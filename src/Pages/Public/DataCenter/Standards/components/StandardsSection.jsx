import React from "react";
import Icon from "../../../../../Component/Icon";

export default function StandardsSection() {
  return (
    <section className="dx " id="dcs-standards-std">
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
            <em>Scheme owner</em>
            <b>Uptime Institute</b>
            <p>Tier Certification: uptimeinstitute.com</p>
          </div>
          <div style={{ "--i": "1" }}>
            <em>Scheme owner</em>
            <b>TIA</b>
            <p>TIA-942 certification: tiaonline.org</p>
          </div>
          <div style={{ "--i": "2" }}>
            <em>Credential body</em>
            <b>BICSI</b>
            <p>DCDC credential: bicsi.org</p>
          </div>
          <div style={{ "--i": "3" }}>
            <em>Scheme owner</em>
            <b>USGBC</b>
            <p>LEED: usgbc.org</p>
          </div>
          <div style={{ "--i": "4" }}>
            <em>Standards body</em>
            <b>ISO</b>
            <p>Management system standards: iso.org</p>
          </div>
          <div style={{ "--i": "5" }}>
            <em>Standards bodies</em>
            <b>ASHRAE · NFPA</b>
            <p>ashrae.org · nfpa.org</p>
          </div>
        </div>
        <div className="dcs-note">
          <Icon name="doc" />
          <div>
            <b>Publication safeguard</b>
            <p>
              Engineering, safety, environmental, statutory, sustainability and certification claims are reviewed by
              qualified specialists and the relevant authorities or scheme owners before publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
