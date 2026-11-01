import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function AdvisorySection() {
  return (
    <section className="dx ice" id="co-advisory">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">What you receive</span>
          <h2 className="dx-h">
            Outputs you can <span>act on</span>
          </h2>
          <p className="dx-lede">
            Every engagement ends with documents your leadership can approve and your teams can deliver.
          </p>
        </div>
        <div className="ai-uc" data-reveal="">
          <div style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="doc" />
            </span>
            <div>
              <b>Board-ready roadmap</b>
              <span>Phased, costed and prioritised</span>
            </div>
          </div>
          <div style={{ "--i": "1" }}>
            <span className="dx-ic c-gold">
              <Icon name="chart" />
            </span>
            <div>
              <b>Business case</b>
              <span>Costs, benefits, payback</span>
            </div>
          </div>
          <div style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="layers" />
            </span>
            <div>
              <b>Target architecture</b>
              <span>Current to future state</span>
            </div>
          </div>
          <div style={{ "--i": "3" }}>
            <span className="dx-ic c-gold">
              <Icon name="shield" />
            </span>
            <div>
              <b>Risk register</b>
              <span>Owners and actions</span>
            </div>
          </div>
          <div style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="mail" />
            </span>
            <div>
              <b>RFP pack</b>
              <span>Ready to issue</span>
            </div>
          </div>
          <div style={{ "--i": "5" }}>
            <span className="dx-ic c-gold">
              <Icon name="target" />
            </span>
            <div>
              <b>KPI scorecard</b>
              <span>How success is measured</span>
            </div>
          </div>
          <Link to="/contact" className="ai-uc-cta">
            <Icon name="compass" />
            <b>Book an assessment</b>
            <span>Talk to a consultant</span>
          </Link>
          <Link to="/services" className="ai-uc-cta gold">
            <Icon name="layers" />
            <b>All services</b>
            <span>From advice to 24x7 operations</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
