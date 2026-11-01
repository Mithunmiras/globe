import React from "react";
import Icon from "../../../../../Component/Icon";

export default function RoadmapSection() {
  return (
    <section className="dx ice" id="cs-roadmap">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Roadmap</span>
          <h2 className="dx-h">
            A phased roadmap keeps <span>delivery practical</span>
          </h2>
          <p className="dx-lede">
            Start with the baseline, close priority gaps, then embed ongoing operations and assurance.
          </p>
        </div>
        <div className="cx-road" data-reveal="">
          <svg className="cx-road-svg" viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true">
            <path
              className="bg"
              d="M0 120 C 150 120 150 40 300 40 S 450 120 600 120 S 750 40 900 40 S 1050 120 1200 120"
            />
            <path
              className="fg"
              d="M0 120 C 150 120 150 40 300 40 S 450 120 600 120 S 750 40 900 40 S 1050 120 1200 120"
            />
          </svg>
          <div className="cx-stop" style={{ "--i": "0" }}>
            <span className="pin">
              <Icon name="eye" />
            </span>
            <b>Discover</b>
            <p>Scope · stakeholders · systems · data · suppliers</p>
          </div>
          <div className="cx-stop up" style={{ "--i": "1" }}>
            <span className="pin">
              <Icon name="doc" />
            </span>
            <b>Assess</b>
            <p>Control gap · DPDP readiness · risk prioritisation</p>
          </div>
          <div className="cx-stop" style={{ "--i": "2" }}>
            <span className="pin">
              <Icon name="layout" />
            </span>
            <b>Design</b>
            <p>Target architecture · policies · RACI · roadmap</p>
          </div>
          <div className="cx-stop up" style={{ "--i": "3" }}>
            <span className="pin">
              <Icon name="gear" />
            </span>
            <b>Implement</b>
            <p>Priority controls · integrations · remediation</p>
          </div>
          <div className="cx-stop" style={{ "--i": "4" }}>
            <span className="pin">
              <Icon name="users" />
            </span>
            <b>Enable</b>
            <p>Training · certificates · playbooks · evidence</p>
          </div>
          <div className="cx-stop up" style={{ "--i": "5" }}>
            <span className="pin">
              <Icon name="chart" />
            </span>
            <b>Operate</b>
            <p>Monitoring · KPIs · reviews · improvement</p>
          </div>
        </div>
        <div className="ix-bar">
          <small>Suggested first workstream</small>
          <span>Confirm scope and run a joint cyber / DPDP gap assessment.</span>
        </div>
      </div>
    </section>
  );
}
