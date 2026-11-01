import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function ClMapSection() {
  return (
    <section className="dx " id="cl-map">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Our multi-cloud model</span>
          <h2 className="dx-h">
            Each workload on <span>the cloud that fits it</span>
          </h2>
          <p className="dx-lede">
            Global hyperscalers, Indian sovereign clouds and private platforms — planned, migrated, secured and run as
            one estate.
          </p>
        </div>
        <div className="cl-model" data-reveal="">
          <div className="cl-col" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="globe" />
            </span>
            <b>Global hyperscalers</b>
            <div className="cl-chips">
              <span>AWS</span>
              <span>Azure</span>
              <span>Google</span>
              <span>Oracle</span>
            </div>
            <i className="cl-drop" aria-hidden="true" />
          </div>
          <div className="cl-col" style={{ "--i": "1" }}>
            <span className="dx-ic c-gold">
              <Icon name="pin" />
            </span>
            <b>Cloud for India</b>
            <div className="cl-chips">
              <span>Yotta</span>
              <span>E2E</span>
              <span>CtrlS</span>
              <span>Sify</span>
              <span>Tata</span>
            </div>
            <i className="cl-drop" aria-hidden="true" />
          </div>
          <div className="cl-col" style={{ "--i": "2" }}>
            <span className="dx-ic c-navy">
              <Icon name="server" />
            </span>
            <b>{"Private & edge"}</b>
            <div className="cl-chips">
              <span>VMware</span>
              <span>Nutanix</span>
              <span>Azure Local</span>
            </div>
            <i className="cl-drop" aria-hidden="true" />
          </div>
          <div className="cl-ctl">
            <Icon name="layers" />
            <b>One control layer</b>
            <span>Identity</span>
            <span>Security</span>
            <span>Monitoring</span>
            <span>Cost</span>
          </div>
        </div>
        <h3 className="cl-sub">Six cloud services, full lifecycle</h3>
        <div className="ix-doms n6" data-reveal="">
          <Link to="/cloud#cl-multi" className="ix-dom" style={{ "--i": "0" }}>
            <span className="ix-dom-h">
              <Icon name="compass" />
              <b>Strategy</b>
            </span>
            <ul>
              <li>Readiness</li>
              <li>Provider choice</li>
              <li>TCO</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cloud#cl-migration" className="ix-dom" style={{ "--i": "1" }}>
            <span className="ix-dom-h">
              <Icon name="arrow" />
              <b>Migration</b>
            </span>
            <ul>
              <li>Servers, SAP, apps</li>
              <li>In waves</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cloud#cl-migration" className="ix-dom" style={{ "--i": "2" }}>
            <span className="ix-dom-h">
              <Icon name="layers" />
              <b>Landing zones</b>
            </span>
            <ul>
              <li>Secure foundations</li>
              <li>Hybrid links</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cloud#cl-security" className="ix-dom" style={{ "--i": "3" }}>
            <span className="ix-dom-h">
              <Icon name="shield" />
              <b>Security</b>
            </span>
            <ul>
              <li>Posture</li>
              <li>Identity</li>
              <li>DPDP</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cloud#cl-finops" className="ix-dom" style={{ "--i": "4" }}>
            <span className="ix-dom-h">
              <Icon name="chart" />
              <b>FinOps</b>
            </span>
            <ul>
              <li>Rightsizing</li>
              <li>Cost reviews</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/cloud#cl-managed" className="ix-dom" style={{ "--i": "5" }}>
            <span className="ix-dom-h">
              <Icon name="headset" />
              <b>Managed 24x7</b>
            </span>
            <ul>
              <li>CloudOps, backup, DR</li>
              <li>SLA</li>
            </ul>
            <i>
              Explore
              <Icon name="arrow" />
            </i>
          </Link>
        </div>
      </div>
    </section>
  );
}
