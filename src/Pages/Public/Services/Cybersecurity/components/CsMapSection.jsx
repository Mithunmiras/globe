import React from "react";
import Icon from "../../../../../Component/Icon";

export default function CsMapSection() {
  return (
    <section className="dx " id="cs-map">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">One integrated security portfolio</span>
          <h2 className="dx-h">
            Services phased to match <span>your maturity</span>
          </h2>
          <p className="dx-lede">
            Services can be phased to match current maturity, risk exposure and business priorities.
          </p>
        </div>
        <div className="cx-ring-wrap" data-reveal="">
          <div className="cx-side">
            <div className="cx-node l" style={{ "--i": "0" }}>
              <span className="dx-ic c-blue">
                <Icon name="doc" />
              </span>
              <div>
                <b>{"Govern & assure"}</b>
                <span>Security strategy · risk · policies · compliance</span>
              </div>
            </div>
            <div className="cx-node l" style={{ "--i": "1" }}>
              <span className="dx-ic c-gold">
                <Icon name="key" />
              </span>
              <div>
                <b>{"Identity & access"}</b>
                <span>IAM · MFA · PAM · access reviews</span>
              </div>
            </div>
            <div className="cx-node l" style={{ "--i": "2" }}>
              <span className="dx-ic c-blue">
                <Icon name="cloud" />
              </span>
              <div>
                <b>Secure platforms</b>
                <span>Network · endpoint · cloud · Zero Trust</span>
              </div>
            </div>
            <div className="cx-node l" style={{ "--i": "3" }}>
              <span className="dx-ic c-gold">
                <Icon name="code" />
              </span>
              <div>
                <b>Secure software</b>
                <span>SSDLC · secure coding · repository · secrets</span>
              </div>
            </div>
          </div>
          <div className="cx-ring" aria-hidden="true">
            <i className="r1" />
            <i className="r2" />
            <i className="r3" />
            <span className="cx-core">
              <Icon name="shield" />
              <b>Digital Globe</b>
              <small>Integrated security</small>
            </span>
          </div>
          <div className="cx-side">
            <div className="cx-node r" style={{ "--i": "0" }}>
              <span className="dx-ic c-blue">
                <Icon name="db" />
              </span>
              <div>
                <b>Protect data</b>
                <span>Classification · encryption · DLP · privacy</span>
              </div>
            </div>
            <div className="cx-node r" style={{ "--i": "1" }}>
              <span className="dx-ic c-gold">
                <Icon name="eye" />
              </span>
              <div>
                <b>{"Detect & respond"}</b>
                <span>SOC · SIEM/SOAR · incident response</span>
              </div>
            </div>
            <div className="cx-node r" style={{ "--i": "2" }}>
              <span className="dx-ic c-blue">
                <Icon name="gear" />
              </span>
              <div>
                <b>{"Recover & continue"}</b>
                <span>BCP · DR · cyber recovery · exercises</span>
              </div>
            </div>
            <div className="cx-node r" style={{ "--i": "3" }}>
              <span className="dx-ic c-gold">
                <Icon name="users" />
              </span>
              <div>
                <b>Enable people</b>
                <span>Awareness · role-based training · certification</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cx-sys">
          <Icon name="layers" />
          System integration across people, process, technology, governance and measurable evidence.
        </div>
      </div>
    </section>
  );
}
