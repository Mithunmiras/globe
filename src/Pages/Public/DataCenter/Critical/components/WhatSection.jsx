import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhatSection() {
  return (
    <section className="dx " id="dc-what">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">What we deliver</span>
          <h2 className="dx-h">
            Every capability, <span>one accountable team</span>
          </h2>
        </div>
        <div className="dx-bento">
          <div className="dx-b lead">
            <span className="dx-pill dark">Build · Secure · Scale · Transform</span>
            <h3>For a digital tomorrow</h3>
            <ul>
              <li>
                <Icon name="check" />
                Secure by design
              </li>
              <li>
                <Icon name="check" />
                Scalable on-demand
              </li>
              <li>
                <Icon name="check" />
                Always on business
              </li>
              <li>
                <Icon name="check" />
                Sustainable operations
              </li>
              <li>
                <Icon name="check" />
                Ready for what's next
              </li>
            </ul>
          </div>
          <div className="dx-b">
            <span className="dx-ic c-blue ">
              <Icon name="server" />
            </span>
            <b>{"Compute & AI"}</b>
            <span>{"High-performance compute for AI/ML, cloud & enterprise workloads"}</span>
          </div>
          <div className="dx-b">
            <span className="dx-ic c-orange ">
              <Icon name="net" />
            </span>
            <b>Networking</b>
            <span>High-speed, low-latency and secure connectivity (100G/400G)</span>
          </div>
          <div className="dx-b">
            <span className="dx-ic c-green ">
              <Icon name="db" />
            </span>
            <b>Storage</b>
            <span>High-capacity, high-performance and resilient storage solutions</span>
          </div>
          <div className="dx-b">
            <span className="dx-ic c-teal ">
              <Icon name="snow" />
            </span>
            <b>{"Cooling & Power"}</b>
            <span>N+1 redundancy, energy-efficient cooling and power infrastructure</span>
          </div>
          <div className="dx-b">
            <span className="dx-ic c-purple ">
              <Icon name="shield" />
            </span>
            <b>Security</b>
            <span>{"Physical & cyber security with 24x7 monitoring and access control"}</span>
          </div>
          <div className="dx-b">
            <span className="dx-ic c-blue ">
              <Icon name="cloud" />
            </span>
            <b>Managed Services</b>
            <span>End-to-end operations, monitoring and lifecycle management</span>
          </div>
          <div className="dx-b">
            <span className="dx-ic c-green ">
              <Icon name="leaf" />
            </span>
            <b>Sustainability</b>
            <span>Energy-efficient infrastructure for a greener future</span>
          </div>
          <Link to="/contact" className="dx-b cta">
            <b>Plan your facility</b>
            <span>Strategy to 24/7 operations, one partner.</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
        </div>
      </div>
    </section>
  );
}
