import React from "react";
import Icon from "../../../../../Component/Icon";

export default function FrameworksSection() {
  return (
    <section className="dx ice" id="ins-fs-fw">
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
            <b>RBI IT governance directions</b>
            <span>IT governance, risk, controls and assurance practices for regulated entities.</span>
          </div>
          <div style={{ "--i": "1" }}>
            <Icon name="doc" />
            <b>SEBI CSCRF</b>
            <span>Cybersecurity and cyber resilience framework for SEBI-regulated entities.</span>
          </div>
          <div style={{ "--i": "2" }}>
            <Icon name="doc" />
            <b>IRDAI cyber security guidelines</b>
            <span>Information and cyber security guidance for insurers.</span>
          </div>
          <div style={{ "--i": "3" }}>
            <Icon name="doc" />
            <b>PCI DSS v4.0</b>
            <span>Payment card data security standard.</span>
          </div>
          <div style={{ "--i": "4" }}>
            <Icon name="doc" />
            <b>CERT-In directions</b>
            <span>Incident reporting and log retention requirements.</span>
          </div>
          <div style={{ "--i": "5" }}>
            <Icon name="doc" />
            <b>DPDP Act 2023</b>
            <span>India’s digital personal data protection law.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
