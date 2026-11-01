import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="ins-si-why">
      <div className="wrap">
        <nav className="dcs-crumb" aria-label="Breadcrumb">
          <Link to="/industries">Industries</Link>
          <Icon name="arrow" />
          <span>{"Services & Infrastructure"}</span>
        </nav>
        <div className="dcs-intro">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Sector overview</span>
              <h2 className="dx-h">
                Services <em>{"& Infrastructure"}</em>
              </h2>
              <p className="dx-lede">
                Hotels, logistics networks, builders and professional firms depend on connected sites, guest and client
                applications, and secure collaboration. We deliver the technology that keeps their service promise.
              </p>
            </div>
            <div className="dcs-roles">
              <small>Where DGC fits</small>
              <span>{"Hotels & travel brands"}</span>
              <span>{"Logistics & 3PL providers"}</span>
              <span>{"Developers & contractors"}</span>
              <span>{"Law, audit & consulting firms"}</span>
              <span>Facility operators</span>
            </div>
          </div>
          <div>
            <h4 className="dcs-h4">Challenges we solve</h4>
            <div className="dcs-ch" data-reveal="">
              <div style={{ "--i": "0" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Many sites, each with different networks and systems</p>
              </div>
              <div style={{ "--i": "1" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Guest and client data handled across many hands</p>
              </div>
              <div style={{ "--i": "2" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Little real-time visibility of shipments and projects</p>
              </div>
              <div style={{ "--i": "3" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Hybrid teams needing secure, simple collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
