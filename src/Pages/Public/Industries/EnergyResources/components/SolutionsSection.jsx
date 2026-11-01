import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function SolutionsSection() {
  return (
    <section className="dx " id="ins-re-sol">
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
            <p>Edge and site infrastructure built for harsh environments.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cybersecurity" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="shield" />
            </span>
            <b>{"Cybersecurity & Resilience"}</b>
            <p>OT security monitoring and SCADA-aware incident response.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-analytics" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="chart" />
            </span>
            <b>{"Data, Analytics & AI"}</b>
            <p>Asset, production and emissions data in one platform.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/applications" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="apps" />
            </span>
            <b>Enterprise Applications</b>
            <p>Field-force, maintenance and farm-to-market applications.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cloud" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="cloud" />
            </span>
            <b>{"Cloud & Modernisation"}</b>
            <p>Cloud platforms for IoT data at scale.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/managed-services" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="headset" />
            </span>
            <b>Managed IT Services</b>
            <p>Remote monitoring and managed operations for distributed sites.</p>
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
            <p>Reliable connectivity at remote and mobile sites</p>
          </div>
          <div style={{ "--i": "1" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>Control systems monitored and protected</p>
          </div>
          <div style={{ "--i": "2" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>Live asset and production data for decisions</p>
          </div>
          <div style={{ "--i": "3" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>Sustainability data ready for reporting</p>
          </div>
        </div>
      </div>
    </section>
  );
}
