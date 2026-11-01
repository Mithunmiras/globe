import React from "react";
import Icon from "../../../../../Component/Icon";

export default function ApproachSection() {
  return (
    <section className="dx ice" id="co-approach">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Our approach</span>
          <h2 className="dx-h">
            From question <span>to roadmap</span>
          </h2>
          <p className="dx-lede">Five steps, each with a clear output you can take to the board.</p>
        </div>
        <div className="co-d5" data-reveal="">
          <div style={{ "--i": "0" }}>
            <span className="ic">
              <Icon name="users" />
            </span>
            <b>Discover</b>
            <small>Goals, people, systems</small>
            <ul>
              <li>Stakeholder interviews</li>
              <li>Current-state inventory</li>
              <li>Pain points and constraints</li>
            </ul>
          </div>
          <div style={{ "--i": "1" }}>
            <span className="ic">
              <Icon name="eye" />
            </span>
            <b>Diagnose</b>
            <small>Gaps, risks, costs</small>
            <ul>
              <li>Gap and risk register</li>
              <li>Cost baseline</li>
              <li>Maturity scoring</li>
            </ul>
          </div>
          <div style={{ "--i": "2" }}>
            <span className="ic">
              <Icon name="layout" />
            </span>
            <b>Design</b>
            <small>Target state, options</small>
            <ul>
              <li>Target architecture</li>
              <li>Options with TCO</li>
              <li>Decision criteria</li>
            </ul>
          </div>
          <div style={{ "--i": "3" }}>
            <span className="ic">
              <Icon name="doc" />
            </span>
            <b>Deliver</b>
            <small>Roadmap, business case</small>
            <ul>
              <li>Phased roadmap</li>
              <li>Business case</li>
              <li>Board pack</li>
            </ul>
          </div>
          <div style={{ "--i": "4" }}>
            <span className="ic">
              <Icon name="target" />
            </span>
            <b>Drive</b>
            <small>PMO and assurance</small>
            <ul>
              <li>Programme governance</li>
              <li>KPI tracking</li>
              <li>Vendor oversight</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
