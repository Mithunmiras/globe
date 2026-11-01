import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function DwMapSection() {
  return (
    <section className="dx " id="dw-map">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">{"Digital Workplace & Automation"}</span>
          <h2 className="dx-h">
            A workplace that <span>just works</span>
          </h2>
          <p className="dx-lede">
            Devices, collaboration and Microsoft 365 for every employee — and automation that takes routine work off
            their desks.
          </p>
        </div>
        <div className="ix-doms n6" data-reveal="">
          <Link to="/digital-workplace#dw-euc" className="ix-dom" style={{ "--i": "0" }}>
            <span className="ix-dom-h">
              <Icon name="laptop" />
              <b>End-user computing</b>
            </span>
            <ul>
              <li>Laptops, desktops, VDI</li>
              <li>Lifecycle and field support</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/digital-workplace#dw-collab" className="ix-dom" style={{ "--i": "1" }}>
            <span className="ix-dom-h">
              <Icon name="video" />
              <b>Collaboration</b>
            </span>
            <ul>
              <li>Teams, Webex, Zoom</li>
              <li>Meeting rooms and AV</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/digital-workplace#dw-m365" className="ix-dom" style={{ "--i": "2" }}>
            <span className="ix-dom-h">
              <Icon name="mail" />
              <b>Microsoft 365</b>
            </span>
            <ul>
              <li>Migration and rollout</li>
              <li>Security and Copilot readiness</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/digital-workplace#dw-mdm" className="ix-dom" style={{ "--i": "3" }}>
            <span className="ix-dom-h">
              <Icon name="phone" />
              <b>Device management</b>
            </span>
            <ul>
              <li>Intune, zero-touch</li>
              <li>Compliance and BYOD</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/digital-workplace#dw-auto" className="ix-dom" style={{ "--i": "4" }}>
            <span className="ix-dom-h">
              <Icon name="layout" />
              <b>{"Workflow & RPA"}</b>
            </span>
            <ul>
              <li>Approvals and forms</li>
              <li>Bots and document AI</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/digital-workplace#dw-itsa" className="ix-dom" style={{ "--i": "5" }}>
            <span className="ix-dom-h">
              <Icon name="headset" />
              <b>IT service automation</b>
            </span>
            <ul>
              <li>Self-service, smart tickets</li>
              <li>Auto-remediation</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
        </div>
        <div className="ap-prom" data-reveal="">
          <div style={{ "--i": "0" }}>
            <Icon name="users" />
            <span>Built around people</span>
          </div>
          <div style={{ "--i": "1" }}>
            <Icon name="shield" />
            <span>Secure by default</span>
          </div>
          <div style={{ "--i": "2" }}>
            <Icon name="gear" />
            <span>Automated, not manual</span>
          </div>
          <div style={{ "--i": "3" }}>
            <Icon name="headset" />
            <span>Supported 24x7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
