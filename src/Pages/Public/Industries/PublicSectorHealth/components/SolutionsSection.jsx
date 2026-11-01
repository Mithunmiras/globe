import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function SolutionsSection() {
  return (
    <section className="dx " id="ins-ph-sol">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Solutions</span>
          <h2 className="dx-h">
            How our services <span>come together</span>
          </h2>
          <p className="dx-lede">Eight service lines, combined for how this sector runs.</p>
        </div>
        <div className="ind-sol" data-reveal="">
          <Link to="/data-center" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="dc" />
            </span>
            <b>{"Data Center & Infrastructure"}</b>
            <p>Secure on-premise, government-community and hybrid hosting with DR.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cybersecurity" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="shield" />
            </span>
            <b>{"Cybersecurity & Resilience"}</b>
            <p>Zero Trust access, SOC, audit logging and data protection.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/applications" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="apps" />
            </span>
            <b>Enterprise Applications</b>
            <p>Citizen, patient and campus applications integrated end to end.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cloud" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="cloud" />
            </span>
            <b>{"Cloud & Modernisation"}</b>
            <p>Sovereign-aware cloud adoption with clear data residency.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/digital-workplace" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="laptop" />
            </span>
            <b>{"Digital Workplace & Automation"}</b>
            <p>Secure collaboration and device management for staff and students.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/managed-services" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="headset" />
            </span>
            <b>Managed IT Services</b>
            <p>Round-the-clock operations for services that cannot stop.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
        </div>
        <h4 className="dcs-h4">What good looks like</h4>
        <div className="ind-out" data-reveal="">
          <div style={{ "--i": "0" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>Critical citizen and clinical services stay available</p>
          </div>
          <div style={{ "--i": "1" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>Sensitive data protected and access fully traceable</p>
          </div>
          <div style={{ "--i": "2" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>Validation and audit documentation produced as you go</p>
          </div>
          <div style={{ "--i": "3" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>Operations covered 24x7 without growing headcount</p>
          </div>
        </div>
      </div>
    </section>
  );
}
