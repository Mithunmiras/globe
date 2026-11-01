import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="dcs-operations-why">
      <div className="wrap">
        <nav className="dcs-crumb" aria-label="Breadcrumb">
          <Link to="/data-center">Data Center</Link>
          <Icon name="arrow" />
          <span>{"Operate & Maintain"}</span>
        </nav>
        <div className="dcs-intro">
          <div>
            <div className="dx-head">
              <span className="dx-pill">{"Operate & Maintain"}</span>
              <h2 className="dx-h">
                Run the facility, <span>shift after shift</span>
              </h2>
              <p className="dx-lede">
                Facility operations, maintenance, NOC/SOC integration, procedures, capacity and vendor management, with
                clear service reporting.
              </p>
            </div>
            <div className="dcs-roles">
              <small>Where DGC fits</small>
              <span>Managed service provider</span>
              <span>Operations advisor</span>
            </div>
          </div>
          <div>
            <h4 className="dcs-h4">Customer challenges</h4>
            <div className="dcs-ch" data-reveal="">
              <div style={{ "--i": "0" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Unclear shift handovers and escalation</p>
              </div>
              <div style={{ "--i": "1" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Maintenance that risks live load</p>
              </div>
              <div style={{ "--i": "2" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Procedures out of date or missing</p>
              </div>
              <div style={{ "--i": "3" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Vendor SLAs not tracked</p>
              </div>
              <div style={{ "--i": "4" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>No single monthly view of performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
