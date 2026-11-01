import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="ins-fs-why">
      <div className="wrap">
        <nav className="dcs-crumb" aria-label="Breadcrumb">
          <Link to="/industries">Industries</Link>
          <Icon name="arrow" />
          <span>Financial Services</span>
        </nav>
        <div className="dcs-intro">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Sector overview</span>
              <h2 className="dx-h">
                Financial <em>Services</em>
              </h2>
              <p className="dx-lede">
                Customers expect instant, secure digital service at any hour, while regulators expect evidence that
                every control works. We help financial institutions modernise without putting availability or compliance
                at risk.
              </p>
            </div>
            <div className="dcs-roles">
              <small>Where DGC fits</small>
              <span>{"Banks & NBFCs"}</span>
              <span>{"Brokers & exchanges"}</span>
              <span>Insurers</span>
              <span>{"Payment & lending fintechs"}</span>
              <span>Asset managers</span>
            </div>
          </div>
          <div>
            <h4 className="dcs-h4">Challenges we solve</h4>
            <div className="dcs-ch" data-reveal="">
              <div style={{ "--i": "0" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Legacy core and channel systems that slow product launches</p>
              </div>
              <div style={{ "--i": "1" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Rising cyber threats and strict incident-reporting timelines</p>
              </div>
              <div style={{ "--i": "2" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Audit and regulator evidence spread across teams and tools</p>
              </div>
              <div style={{ "--i": "3" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Zero tolerance for downtime in payments and trading</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
