import React from "react";
import Icon from "../../../../../Component/Icon";

export default function SlaSection() {
  return (
    <section className="dx ice" id="ms-sla">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">{"SLAs & governance"}</span>
          <h2 className="dx-h">
            Measured, reported, <span>reviewed</span>
          </h2>
          <p className="dx-lede">
            Response and resolution targets are agreed per contract, by priority and service hours.
          </p>
        </div>
        <div className="ms-sla" data-reveal="">
          <div className="r" style={{ "--i": "0" }}>
            <span>P1</span>
            <b>Critical</b>
            <p>Business stopped, many users</p>
          </div>
          <div className="o" style={{ "--i": "1" }}>
            <span>P2</span>
            <b>High</b>
            <p>Major function degraded</p>
          </div>
          <div className="b" style={{ "--i": "2" }}>
            <span>P3</span>
            <b>Medium</b>
            <p>Single user or workaround exists</p>
          </div>
          <div className="t" style={{ "--i": "3" }}>
            <span>P4</span>
            <b>Low</b>
            <p>Requests and questions</p>
          </div>
        </div>
        <div className="ms-2">
          <div className="cx-cols" data-reveal="">
            <div className="cx-col b" style={{ "--i": "0" }}>
              <div className="cx-col-h">
                <Icon name="users" />
                <b>{"Daily & weekly"}</b>
              </div>
              <ul>
                <li>Operations stand-up</li>
                <li>Open incidents and changes</li>
                <li>Weekly service review</li>
              </ul>
            </div>
            <div className="cx-col g" style={{ "--i": "1" }}>
              <div className="cx-col-h">
                <Icon name="chart" />
                <b>Monthly</b>
              </div>
              <ul>
                <li>SLA and KPI report</li>
                <li>Trends and root causes</li>
                <li>Improvement plan</li>
              </ul>
            </div>
            <div className="cx-col t" style={{ "--i": "2" }}>
              <div className="cx-col-h">
                <Icon name="target" />
                <b>Quarterly</b>
              </div>
              <ul>
                <li>Business review</li>
                <li>Roadmap and risks</li>
                <li>Cost and capacity</li>
              </ul>
            </div>
          </div>
          <div className="ix-list dark">
            <h4>KPIs on every report</h4>
            <ul>
              <li>
                <Icon name="check" />
                SLA adherence
              </li>
              <li>
                <Icon name="check" />
                First-call resolution
              </li>
              <li>
                <Icon name="check" />
                Mean time to resolve
              </li>
              <li>
                <Icon name="check" />
                Uptime by service
              </li>
              <li>
                <Icon name="check" />
                Backlog and ageing
              </li>
              <li>
                <Icon name="check" />
                User satisfaction
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
