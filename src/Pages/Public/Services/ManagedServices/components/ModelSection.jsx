import React from "react";
import Icon from "../../../../../Component/Icon";

export default function ModelSection() {
  return (
    <section className="dx ice" id="ms-model">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Operating model</span>
          <h2 className="dx-h">
            Run around the clock, <span>improved every month</span>
          </h2>
          <p className="dx-lede">
            ITIL-aligned processes, one ticketing system and clear escalation from first call to OEM.
          </p>
        </div>
        <div className="ix-zt n6" data-reveal="">
          <div className="ix-zs" style={{ "--i": "0" }}>
            <Icon name="eye" />
            <b>Monitor</b>
            <span>Health, capacity, security</span>
          </div>
          <div className="ix-zs" style={{ "--i": "1" }}>
            <Icon name="bolt" />
            <b>Detect</b>
            <span>Alerts correlated</span>
          </div>
          <div className="ix-zs" style={{ "--i": "2" }}>
            <Icon name="users" />
            <b>Triage</b>
            <span>Priority and owner</span>
          </div>
          <div className="ix-zs" style={{ "--i": "3" }}>
            <Icon name="gear" />
            <b>Resolve</b>
            <span>Runbooks, L2/L3, OEM</span>
          </div>
          <div className="ix-zs" style={{ "--i": "4" }}>
            <Icon name="doc" />
            <b>Report</b>
            <span>SLA and trends</span>
          </div>
          <div className="ix-zs end" style={{ "--i": "5" }}>
            <Icon name="trend" />
            <b>Improve</b>
            <span>Root cause, automation</span>
          </div>
          <i className="ix-zdot" aria-hidden="true" />
        </div>
        <div className="ms-2">
          <div className="ix-layers" data-reveal="">
            <div className="ix-layer" style={{ "--i": "0" }}>
              <span className="ix-lic">
                <Icon name="headset" />
              </span>
              <b>L1 · Service desk</b>
              <span>Calls, chat, email, portal; first-time fix and routing</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "1" }}>
              <span className="ix-lic">
                <Icon name="gear" />
              </span>
              <b>L2 · Operations engineers</b>
              <span>Incident resolution, changes, patching</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "2" }}>
              <span className="ix-lic">
                <Icon name="cpu" />
              </span>
              <b>L3 · Specialists</b>
              <span>Architecture, complex faults, problem management</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "3" }}>
              <span className="ix-lic">
                <Icon name="briefcase" />
              </span>
              <b>{"OEM & partner escalation"}</b>
              <span>Vendor cases managed for you to closure</span>
              <i className="ix-pulse" />
            </div>
          </div>
          <div className="ix-list dark">
            <h4>ITIL processes we run</h4>
            <ul>
              <li>
                <Icon name="check" />
                Incident management
              </li>
              <li>
                <Icon name="check" />
                Service requests
              </li>
              <li>
                <Icon name="check" />
                Problem management
              </li>
              <li>
                <Icon name="check" />
                Change and release
              </li>
              <li>
                <Icon name="check" />
                Asset and configuration
              </li>
              <li>
                <Icon name="check" />
                Capacity and availability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
