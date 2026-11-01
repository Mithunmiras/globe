import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function SolutionsSection() {
  return (
    <section className="dx " id="ins-fs-sol">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Solutions</span>
          <h2 className="dx-h">
            How our services <span>come together</span>
          </h2>
          <p className="dx-lede">Eight service lines, combined for how this sector runs.</p>
        </div>
        <div className="ind-sol" data-reveal="">
          <Link to="/cybersecurity" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="shield" />
            </span>
            <b>{"Cybersecurity & Resilience"}</b>
            <p>SOC, identity, data protection and incident response aligned to sector expectations.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="dc" />
            </span>
            <b>{"Data Center & Infrastructure"}</b>
            <p>Tier-aligned primary and DR sites, colocation and low-latency networks.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cloud" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="cloud" />
            </span>
            <b>{"Cloud & Modernisation"}</b>
            <p>Hybrid cloud with landing zones, guardrails and cost control.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/applications" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="apps" />
            </span>
            <b>Enterprise Applications</b>
            <p>Core, channel, CRM and lending application integration and modernisation.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-analytics" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="chart" />
            </span>
            <b>{"Data, Analytics & AI"}</b>
            <p>Risk, fraud and customer analytics with governed data.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/managed-services" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="headset" />
            </span>
            <b>Managed IT Services</b>
            <p>24x7 NOC/SOC operations with SLA reporting for audits.</p>
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
            <p>Fewer, shorter outages on customer-facing services</p>
          </div>
          <div style={{ "--i": "1" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>Audit evidence available on demand, not assembled at year-end</p>
          </div>
          <div style={{ "--i": "2" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>Faster, safer release of new digital products</p>
          </div>
          <div style={{ "--i": "3" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>Clear ownership for every control and risk</p>
          </div>
        </div>
      </div>
    </section>
  );
}
