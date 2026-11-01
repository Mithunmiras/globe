import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="dcs-expansion-why">
      <div className="wrap">
        <nav className="dcs-crumb" aria-label="Breadcrumb">
          <Link to="/data-center">Data Center</Link>
          <Icon name="arrow" />
          <span>{"Expand & Modernise"}</span>
        </nav>
        <div className="dcs-intro">
          <div>
            <div className="dx-head">
              <span className="dx-pill">{"Expand & Modernise"}</span>
              <h2 className="dx-h">
                Grow and modernise <span>without disruption</span>
              </h2>
              <p className="dx-lede">
                Phased expansion, infrastructure upgrades, technology refresh, workload migration and responsible
                decommissioning, all while live operations continue.
              </p>
            </div>
            <div className="dcs-roles">
              <small>Where DGC fits</small>
              <span>Advisor</span>
              <span>Project manager</span>
              <span>Integrator</span>
            </div>
          </div>
          <div>
            <h4 className="dcs-h4">Customer challenges</h4>
            <div className="dcs-ch" data-reveal="">
              <div style={{ "--i": "0" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Capacity limits reached before plans are ready</p>
              </div>
              <div style={{ "--i": "1" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Upgrades that risk the live load</p>
              </div>
              <div style={{ "--i": "2" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Ageing power and cooling plant</p>
              </div>
              <div style={{ "--i": "3" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Complex workload migrations</p>
              </div>
              <div style={{ "--i": "4" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Equipment disposal without evidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
