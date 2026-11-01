import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="dcs-strategy-why">
      <div className="wrap">
        <nav className="dcs-crumb" aria-label="Breadcrumb">
          <Link to="/data-center">Data Center</Link>
          <Icon name="arrow" />
          <span>{"Strategy & Concept"}</span>
        </nav>
        <div className="dcs-intro">
          <div>
            <div className="dx-head">
              <span className="dx-pill">{"Strategy & Concept"}</span>
              <h2 className="dx-h">
                Decide with confidence, <span>before you build</span>
              </h2>
              <p className="dx-lede">
                Clarify the business need, test the options and screen the site, power, fibre and approvals before
                committing capital.
              </p>
            </div>
            <div className="dcs-roles">
              <small>Where DGC fits</small>
              <span>Advisor</span>
              <span>Owner’s representative</span>
              <span>Design coordinator</span>
            </div>
          </div>
          <div>
            <h4 className="dcs-h4">Customer challenges</h4>
            <div className="dcs-ch" data-reveal="">
              <div style={{ "--i": "0" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Unclear workload, growth and availability requirements</p>
              </div>
              <div style={{ "--i": "1" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Build vs colocation vs cloud trade-offs not quantified</p>
              </div>
              <div style={{ "--i": "2" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Utility capacity and connection lead times unknown</p>
              </div>
              <div style={{ "--i": "3" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Site risks: flood, seismic, water, approvals</p>
              </div>
              <div style={{ "--i": "4" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>No agreed decision gates, assumptions or evidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
