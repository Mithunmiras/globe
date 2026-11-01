import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function SolutionsSection() {
  return (
    <section className="dx " id="ins-si-sol">
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
            <p>Property, warehouse and site networks built to a standard.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/applications" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="apps" />
            </span>
            <b>Enterprise Applications</b>
            <p>PMS, WMS, ERP and project applications integrated.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-analytics" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="chart" />
            </span>
            <b>{"Data, Analytics & AI"}</b>
            <p>Real-time dashboards for shipments, sites and guests.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cybersecurity" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="shield" />
            </span>
            <b>{"Cybersecurity & Resilience"}</b>
            <p>Payment, client and guest data protection.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/digital-workplace" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="laptop" />
            </span>
            <b>{"Digital Workplace & Automation"}</b>
            <p>Microsoft 365, collaboration and endpoint management.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/managed-services" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="headset" />
            </span>
            <b>Managed IT Services</b>
            <p>Multi-site support from one service desk.</p>
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
            <p>Consistent, reliable connectivity across every site</p>
          </div>
          <div style={{ "--i": "1" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>Guest and client data protected end to end</p>
          </div>
          <div style={{ "--i": "2" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>Live visibility of shipments, projects and properties</p>
          </div>
          <div style={{ "--i": "3" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>Hybrid teams working securely from anywhere</p>
          </div>
        </div>
      </div>
    </section>
  );
}
