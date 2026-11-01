import React from "react";
import Icon from "../../../../../Component/Icon";

export default function FrameworksSection() {
  return (
    <section className="dx ice" id="ins-pm-fw">
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
            <b>IEC 62443</b>
            <span>Security for industrial automation and control systems.</span>
          </div>
          <div style={{ "--i": "1" }}>
            <Icon name="doc" />
            <b>ISO/IEC 27001</b>
            <span>Information security management systems.</span>
          </div>
          <div style={{ "--i": "2" }}>
            <Icon name="doc" />
            <b>TISAX</b>
            <span>Information security assessment for the automotive supply chain.</span>
          </div>
          <div style={{ "--i": "3" }}>
            <Icon name="doc" />
            <b>ISO 50001</b>
            <span>Energy management systems.</span>
          </div>
          <div style={{ "--i": "4" }}>
            <Icon name="doc" />
            <b>PCI DSS v4.0</b>
            <span>Payment card data security for retail.</span>
          </div>
          <div style={{ "--i": "5" }}>
            <Icon name="doc" />
            <b>GST e-invoicing</b>
            <span>Integration of ERP with India’s e-invoicing system.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
