import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="dc-why">
      <div className="wrap">
        <div className="dx-why">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Partnering today for a brighter tomorrow</span>
              <h2 className="dx-h">
                Why <span>choose us</span>
              </h2>
              <p className="dx-sub">More than infrastructure. A long-term partner.</p>
              <p className="dx-lede">
                We combine domain expertise, engineering excellence and end-to-end accountability to deliver data
                centers that are ready for today and built for what’s next.
              </p>
            </div>
            <Link to="/contact" className="btn btn-gold">
              Talk to a data center expert
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="dx-wgrid">
            <div className="dx-w lead">
              <span className="dx-ic c-gold ">
                <Icon name="hand" />
              </span>
              <b>End-to-End Partner</b>
              <span>Design · Build · Integrate · Operate</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy ">
                <Icon name="users" />
              </span>
              <b>Proven Expertise</b>
              <span>Deep domain knowledge across mission-critical, cloud and AI-ready infrastructure.</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy ">
                <Icon name="chart" />
              </span>
              <b>{"Scalable & Future-Ready"}</b>
              <span>From 2–20 MW and beyond, with modular, flexible growth.</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy ">
                <Icon name="gear" />
              </span>
              <b>Engineering Excellence</b>
              <span>Optimized for performance, efficiency and resilience.</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy ">
                <Icon name="target" />
              </span>
              <b>Customer Centric Approach</b>
              <span>Outcome-focused solutions aligned to your business goals.</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy ">
                <Icon name="shield" />
              </span>
              <b>{"Security & Compliance"}</b>
              <span>Aligned to TIA-942, ISO 27001 and applicable industry standards.</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy ">
                <Icon name="headset" />
              </span>
              <b>24×7 Lifecycle Support</b>
              <span>NOC, DCIM, observability and continuous optimization.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
