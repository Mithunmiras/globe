import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function SolutionsSection() {
  return (
    <section className="dx " id="ins-pm-sol">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Solutions</span>
          <h2 className="dx-h">
            How our services <span>come together</span>
          </h2>
          <p className="dx-lede">Eight service lines, combined for how this sector runs.</p>
        </div>
        <div className="ind-sol" data-reveal="">
          <Link to="/applications" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="apps" />
            </span>
            <b>Enterprise Applications</b>
            <p>ERP, MES, WMS and distributor systems working as one.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="dc" />
            </span>
            <b>{"Data Center & Infrastructure"}</b>
            <p>Plant and edge infrastructure, networks and resilient hosting.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cybersecurity" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="shield" />
            </span>
            <b>{"Cybersecurity & Resilience"}</b>
            <p>OT/IT segmentation, monitoring and incident response for plants.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-analytics" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="chart" />
            </span>
            <b>{"Data, Analytics & AI"}</b>
            <p>Production, quality and demand analytics with AI.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cloud" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="cloud" />
            </span>
            <b>{"Cloud & Modernisation"}</b>
            <p>Cloud platforms that scale for peaks and new channels.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/managed-services" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="headset" />
            </span>
            <b>Managed IT Services</b>
            <p>Managed plant and store IT with clear SLAs.</p>
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
            <p>Higher equipment availability and fewer line stoppages</p>
          </div>
          <div style={{ "--i": "1" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>One view of orders, inventory and production</p>
          </div>
          <div style={{ "--i": "2" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>OT networks protected without disrupting operations</p>
          </div>
          <div style={{ "--i": "3" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>Platforms that absorb festive and sale-season peaks</p>
          </div>
        </div>
      </div>
    </section>
  );
}
