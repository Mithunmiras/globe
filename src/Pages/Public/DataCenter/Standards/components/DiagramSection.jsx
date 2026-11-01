import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DiagramSection() {
  return (
    <section className="dx " id="dcs-standards-diagram">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Architecture</span>
          <h2 className="dx-h">
            Assurance <span>roadmap</span>
          </h2>
        </div>
        <figure className="dcs-fig">
          <div className="ix-zt n5" data-reveal="">
            <div className="ix-zs" style={{ "--i": "0" }}>
              <Icon name="doc" />
              <b>Inventory</b>
              <span>Certificates, credentials, evidence</span>
            </div>
            <div className="ix-zs" style={{ "--i": "1" }}>
              <Icon name="target" />
              <b>Requirements</b>
              <span>Tender and client needs</span>
            </div>
            <div className="ix-zs" style={{ "--i": "2" }}>
              <Icon name="gear" />
              <b>Processes</b>
              <span>Review, quality, commissioning</span>
            </div>
            <div className="ix-zs" style={{ "--i": "3" }}>
              <Icon name="eye" />
              <b>Pathways</b>
              <span>Uptime and TIA-942 evaluated</span>
            </div>
            <div className="ix-zs end" style={{ "--i": "4" }}>
              <Icon name="check" />
              <b>Publish</b>
              <span>Verified claims only</span>
            </div>
            <i className="ix-zdot" aria-hidden="true" />
          </div>
          <figcaption>Illustrative roadmap for building verified credentials.</figcaption>
        </figure>
        <h4 className="dcs-h4">Design considerations</h4>
        <div className="ix-tiles c3" data-reveal="">
          <div className="ix-tile" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="doc" />
            </span>
            <b>Issuing body</b>
            <span>Recorded for every claim</span>
          </div>
          <div className="ix-tile" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="layers" />
            </span>
            <b>Scope</b>
            <span>Exactly what is certified</span>
          </div>
          <div className="ix-tile" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="chart" />
            </span>
            <b>Validity</b>
            <span>Status and expiry tracked</span>
          </div>
          <div className="ix-tile" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="shield" />
            </span>
            <b>Logo rules</b>
            <span>Used only with permission</span>
          </div>
          <div className="ix-tile" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="eye" />
            </span>
            <b>Periodic review</b>
            <span>Claims re-checked when status changes</span>
          </div>
          <div className="ix-tile" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="gov" />
            </span>
            <b>No implied awards</b>
            <span>Third-party schemes stay third-party</span>
          </div>
        </div>
      </div>
    </section>
  );
}
