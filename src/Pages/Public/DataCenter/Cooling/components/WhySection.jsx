import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="dcs-cooling-why">
      <div className="wrap">
        <nav className="dcs-crumb" aria-label="Breadcrumb">
          <Link to="/data-center">Data Center</Link>
          <Icon name="arrow" />
          <span>Cooling</span>
        </nav>
        <div className="dcs-intro">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Cooling</span>
              <h2 className="dx-h">
                Cooling matched to <span>workload and climate</span>
              </h2>
              <p className="dx-lede">
                Air, liquid or hybrid cooling selected for IT density, redundancy, climate, water and efficiency, with
                controls and maintenance designed in.
              </p>
            </div>
            <div className="dcs-roles">
              <small>Where DGC fits</small>
              <span>Design coordinator</span>
              <span>Integrator</span>
              <span>Optimisation advisor</span>
            </div>
          </div>
          <div>
            <h4 className="dcs-h4">Customer challenges</h4>
            <div className="dcs-ch" data-reveal="">
              <div style={{ "--i": "0" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Rising rack density beyond air-cooling limits</p>
              </div>
              <div style={{ "--i": "1" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Hotspots, bypass and recirculation</p>
              </div>
              <div style={{ "--i": "2" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Water availability and treatment</p>
              </div>
              <div style={{ "--i": "3" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Leak risk with liquid cooling</p>
              </div>
              <div style={{ "--i": "4" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Control sequences that fail under real conditions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
