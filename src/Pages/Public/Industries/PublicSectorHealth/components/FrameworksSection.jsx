import React from "react";
import Icon from "../../../../../Component/Icon";

export default function FrameworksSection() {
  return (
    <section className="dx ice" id="ins-ph-fw">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Compliance landscape</span>
          <h2 className="dx-h">
            Regulations and frameworks <span>we design for</span>
          </h2>
          <p className="dx-lede">
            Referenced as applicable guidance. We align designs and evidence to them; certification is the client’s or
            auditor’s to grant.
          </p>
        </div>
        <div className="dcs-std ind-fw" data-reveal="">
          <div style={{ "--i": "0" }}>
            <Icon name="doc" />
            <b>CERT-In directions</b>
            <span>Incident reporting and log retention requirements.</span>
          </div>
          <div style={{ "--i": "1" }}>
            <Icon name="doc" />
            <b>MeitY cloud empanelment</b>
            <span>Guidance for government cloud adoption.</span>
          </div>
          <div style={{ "--i": "2" }}>
            <Icon name="doc" />
            <b>ABDM standards</b>
            <span>Ayushman Bharat Digital Mission health data standards.</span>
          </div>
          <div style={{ "--i": "3" }}>
            <Icon name="doc" />
            <b>NABH digital health</b>
            <span>Hospital accreditation expectations for information management.</span>
          </div>
          <div style={{ "--i": "4" }}>
            <Icon name="doc" />
            <b>21 CFR Part 11 / EU GMP Annex 11</b>
            <span>Electronic records and computerised systems in regulated life sciences.</span>
          </div>
          <div style={{ "--i": "5" }}>
            <Icon name="doc" />
            <b>GAMP 5</b>
            <span>Risk-based approach to computerised system validation.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
