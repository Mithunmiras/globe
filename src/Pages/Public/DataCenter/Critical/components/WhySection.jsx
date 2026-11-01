import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="dcs-critical-why">
      <div className="wrap">
        <nav className="dcs-crumb" aria-label="Breadcrumb">
          <Link to="/data-center">Data Center</Link>
          <Icon name="arrow" />
          <span>Critical Infrastructure</span>
        </nav>
        <div className="dcs-intro">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Critical Infrastructure</span>
              <h2 className="dx-h">
                The systems that keep <span>the IT load alive</span>
              </h2>
              <p className="dx-lede">
                Power, cooling, building, fire, physical security, water and fuel, designed as one interdependent
                facility rather than a list of products.
              </p>
            </div>
            <div className="dcs-roles">
              <small>Where DGC fits</small>
              <span>Design coordinator</span>
              <span>Integrator</span>
              <span>Commissioning coordinator</span>
            </div>
          </div>
          <div>
            <h4 className="dcs-h4">Customer challenges</h4>
            <div className="dcs-ch" data-reveal="">
              <div style={{ "--i": "0" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Systems specified in silos with hidden interdependencies</p>
              </div>
              <div style={{ "--i": "1" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Single points of failure in power or cooling paths</p>
              </div>
              <div style={{ "--i": "2" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Fire and security not integrated with facility controls</p>
              </div>
              <div style={{ "--i": "3" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Water and fuel risks overlooked</p>
              </div>
              <div style={{ "--i": "4" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Maintenance that requires shutting down the load</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
