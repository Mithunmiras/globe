import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="dcs-design-why">
      <div className="wrap">
        <nav className="dcs-crumb" aria-label="Breadcrumb">
          <Link to="/data-center">Data Center</Link>
          <Icon name="arrow" />
          <span>{"Design & Engineering"}</span>
        </nav>
        <div className="dcs-intro">
          <div>
            <div className="dx-head">
              <span className="dx-pill">{"Design & Engineering"}</span>
              <h2 className="dx-h">
                Multidisciplinary design, <span>coordinated as one</span>
              </h2>
              <p className="dx-lede">
                Architecture, civil, structural, electrical, mechanical, IT and controls designed together, with reviews
                that check maintainability and testability.
              </p>
            </div>
            <div className="dcs-roles">
              <small>Where DGC fits</small>
              <span>Design coordinator</span>
              <span>Design reviewer</span>
              <span>Owner’s representative</span>
            </div>
          </div>
          <div>
            <h4 className="dcs-h4">Customer challenges</h4>
            <div className="dcs-ch" data-reveal="">
              <div style={{ "--i": "0" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Disciplines designed in isolation, with clashing interfaces</p>
              </div>
              <div style={{ "--i": "1" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Maintenance access and replacement paths not planned</p>
              </div>
              <div style={{ "--i": "2" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Floor loading and white-space growth underestimated</p>
              </div>
              <div style={{ "--i": "3" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Designs that are hard to test and commission</p>
              </div>
              <div style={{ "--i": "4" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>No traceable design basis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
