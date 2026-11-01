import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function CoMapSection() {
  return (
    <section className="dx " id="co-map">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">{"Consulting & Advisory"}</span>
          <h2 className="dx-h">
            Advice that ends <span>in delivery</span>
          </h2>
          <p className="dx-lede">
            Vendor-neutral assessments, strategy and programme leadership — backed by the same team that designs, builds
            and runs the result.
          </p>
        </div>
        <div className="ix-doms n6" data-reveal="">
          <Link to="/consulting#co-assess" className="ix-dom" style={{ "--i": "0" }}>
            <span className="ix-dom-h">
              <Icon name="eye" />
              <b>Assessments</b>
            </span>
            <ul>
              <li>Infrastructure, DC, cyber</li>
              <li>Cloud, apps, AI, data</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/consulting#co-strategy" className="ix-dom" style={{ "--i": "1" }}>
            <span className="ix-dom-h">
              <Icon name="compass" />
              <b>{"Strategy & architecture"}</b>
            </span>
            <ul>
              <li>Technology roadmaps</li>
              <li>Target architecture</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/consulting#co-grc" className="ix-dom" style={{ "--i": "2" }}>
            <span className="ix-dom-h">
              <Icon name="gov" />
              <b>{"Governance, risk & compliance"}</b>
            </span>
            <ul>
              <li>ISO 27001 · NIST</li>
              <li>DPDP readiness</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/consulting#co-vendor" className="ix-dom" style={{ "--i": "3" }}>
            <span className="ix-dom-h">
              <Icon name="briefcase" />
              <b>{"Vendor selection & RFP"}</b>
            </span>
            <ul>
              <li>OEM-neutral</li>
              <li>TCO-based scoring</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/consulting#co-pmo" className="ix-dom" style={{ "--i": "4" }}>
            <span className="ix-dom-h">
              <Icon name="layout" />
              <b>Programme management</b>
            </span>
            <ul>
              <li>PMO · RAID</li>
              <li>Vendor governance</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/consulting#co-cost" className="ix-dom" style={{ "--i": "5" }}>
            <span className="ix-dom-h">
              <Icon name="chart" />
              <b>Cost optimisation</b>
            </span>
            <ul>
              <li>TCO · licences</li>
              <li>FinOps</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
        </div>
        <div className="ap-prom" data-reveal="">
          <div style={{ "--i": "0" }}>
            <Icon name="compass" />
            <span>Vendor-neutral advice</span>
          </div>
          <div style={{ "--i": "1" }}>
            <Icon name="layers" />
            <span>Infra-to-app depth</span>
          </div>
          <div style={{ "--i": "2" }}>
            <Icon name="doc" />
            <span>Board-ready outputs</span>
          </div>
          <div style={{ "--i": "3" }}>
            <Icon name="rocket" />
            <span>Delivery behind every plan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
