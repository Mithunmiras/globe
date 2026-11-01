import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="dcs-monitoring-why">
      <div className="wrap">
        <nav className="dcs-crumb" aria-label="Breadcrumb">
          <Link to="/data-center">Data Center</Link>
          <Icon name="arrow" />
          <span>{"DCIM & Monitoring"}</span>
        </nav>
        <div className="dcs-intro">
          <div>
            <div className="dx-head">
              <span className="dx-pill">{"DCIM & Monitoring"}</span>
              <h2 className="dx-h">
                See every system, <span>act on every alarm</span>
              </h2>
              <p className="dx-lede">
                BMS, EPMS, DCIM, CMMS and ITSM connected so alarms reach the right owner, capacity is visible and
                operations are auditable, with cyber resilience built in.
              </p>
            </div>
            <div className="dcs-roles">
              <small>Where DGC fits</small>
              <span>Integrator</span>
              <span>Design coordinator</span>
              <span>Managed service provider</span>
            </div>
          </div>
          <div>
            <h4 className="dcs-h4">Customer challenges</h4>
            <div className="dcs-ch" data-reveal="">
              <div style={{ "--i": "0" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Alarms everywhere, ownership nowhere</p>
              </div>
              <div style={{ "--i": "1" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Capacity tracked in spreadsheets</p>
              </div>
              <div style={{ "--i": "2" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Monitoring systems that do not talk to each other</p>
              </div>
              <div style={{ "--i": "3" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Facility interfaces exposed to cyber risk</p>
              </div>
              <div style={{ "--i": "4" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Maintenance history scattered or lost</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
