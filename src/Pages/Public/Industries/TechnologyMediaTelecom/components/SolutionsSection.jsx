import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function SolutionsSection() {
  return (
    <section className="dx " id="ins-cmt-sol">
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
            <p>Design-build, high-density and liquid-cooled capacity.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cloud" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="cloud" />
            </span>
            <b>{"Cloud & Modernisation"}</b>
            <p>Cloud-native platforms, Kubernetes and FinOps.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cybersecurity" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="shield" />
            </span>
            <b>{"Cybersecurity & Resilience"}</b>
            <p>DevSecOps, tenant isolation and SOC.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-analytics" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="chart" />
            </span>
            <b>{"Data, Analytics & AI"}</b>
            <p>GPU platforms and data pipelines for AI products.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/digital-workplace" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="laptop" />
            </span>
            <b>{"Digital Workplace & Automation"}</b>
            <p>Workplace services for fast-growing delivery teams.</p>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/managed-services" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="headset" />
            </span>
            <b>Managed IT Services</b>
            <p>NOC/SOC and critical facility operations at scale.</p>
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
            <p>Capacity delivered on schedule for new demand</p>
          </div>
          <div style={{ "--i": "1" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>AI-ready power, cooling and network</p>
          </div>
          <div style={{ "--i": "2" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>Cloud spend visible and under control</p>
          </div>
          <div style={{ "--i": "3" }}>
            <span>
              <Icon name="check" />
            </span>
            <p>Transparent 24x7 operations for customers and tenants</p>
          </div>
        </div>
      </div>
    </section>
  );
}
