import React from "react";
import Icon from "../../../../../Component/Icon";

export default function FrameworksSection() {
  return (
    <section className="dx ice" id="ins-si-fw">
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
            <b>PCI DSS v4.0</b>
            <span>Payment card data security for hospitality and retail.</span>
          </div>
          <div style={{ "--i": "1" }}>
            <Icon name="doc" />
            <b>DPDP Act 2023</b>
            <span>India’s digital personal data protection law.</span>
          </div>
          <div style={{ "--i": "2" }}>
            <Icon name="doc" />
            <b>ISO/IEC 27001</b>
            <span>Information security management systems.</span>
          </div>
          <div style={{ "--i": "3" }}>
            <Icon name="doc" />
            <b>ISO 28000</b>
            <span>Security management for the supply chain.</span>
          </div>
          <div style={{ "--i": "4" }}>
            <Icon name="doc" />
            <b>IGBC / LEED</b>
            <span>Green building rating systems.</span>
          </div>
          <div style={{ "--i": "5" }}>
            <Icon name="doc" />
            <b>GST e-way bill</b>
            <span>Integration of logistics systems with e-way bill rules.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
