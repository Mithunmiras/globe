import React from "react";
import Icon from "../../../../../Component/Icon";

export default function CoverageSection() {
  return (
    <section className="dx " id="cs-coverage">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Customer requirements</span>
          <h2 className="dx-h">
            Customer requirement coverage <span>at a glance</span>
          </h2>
          <p className="dx-lede">Proposed control areas and evidence artifacts for validation during discovery.</p>
        </div>
        <div className="cx-cov" data-reveal="">
          <div className="b" style={{ "--i": "0" }}>
            <span>
              <Icon name="doc" />
              <b>Governance</b>
            </span>
            <p>Information security policy, control ownership, risk register</p>
          </div>
          <div className="g" style={{ "--i": "1" }}>
            <span>
              <Icon name="key" />
              <b>{"Identity & access"}</b>
            </span>
            <p>IAM / PAM, approvals, access reviews, remote access and acceptable use</p>
          </div>
          <div className="o" style={{ "--i": "2" }}>
            <span>
              <Icon name="code" />
              <b>{"Software & repositories"}</b>
            </span>
            <p>SSDLC, secure coding, source control, repository governance, secrets management</p>
          </div>
          <div className="t" style={{ "--i": "3" }}>
            <span>
              <Icon name="db" />
              <b>{"Data & privacy"}</b>
            </span>
            <p>Classification, handling, encryption, key management, retention and destruction</p>
          </div>
          <div className="p" style={{ "--i": "4" }}>
            <span>
              <Icon name="gear" />
              <b>{"Operations & resilience"}</b>
            </span>
            <p>Logging, monitoring, alerting, incident response, BCP / DR / service continuity</p>
          </div>
          <div className="b" style={{ "--i": "5" }}>
            <span>
              <Icon name="users" />
              <b>{"People & suppliers"}</b>
            </span>
            <p>Screening, personnel roster, confidentiality / AUP agreements, subcontractor / fourth-party controls</p>
          </div>
          <div className="r" style={{ "--i": "6" }}>
            <span>
              <Icon name="book" />
              <b>Training evidence</b>
            </span>
            <p>Completion records, assessment results, certificate IDs, renewal status</p>
          </div>
        </div>
      </div>
    </section>
  );
}
