import React from "react";
import Icon from "../../../../../Component/Icon";

export default function FrameworksSection() {
  return (
    <section className="dx ice" id="ins-cmt-fw">
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
            <b>Telecommunications Act 2023</b>
            <span>India’s telecom law and associated security rules.</span>
          </div>
          <div style={{ "--i": "1" }}>
            <Icon name="doc" />
            <b>{"ISO/IEC 27001 & 27701"}</b>
            <span>Information security and privacy management.</span>
          </div>
          <div style={{ "--i": "2" }}>
            <Icon name="doc" />
            <b>SOC 2</b>
            <span>Service organisation controls reporting for SaaS.</span>
          </div>
          <div style={{ "--i": "3" }}>
            <Icon name="doc" />
            <b>TIA-942</b>
            <span>Data center infrastructure standard.</span>
          </div>
          <div style={{ "--i": "4" }}>
            <Icon name="doc" />
            <b>Uptime Institute Tier</b>
            <span>Data center topology and operational guidance.</span>
          </div>
          <div style={{ "--i": "5" }}>
            <Icon name="doc" />
            <b>CERT-In directions</b>
            <span>Incident reporting and log retention requirements.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
