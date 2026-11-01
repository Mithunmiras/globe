import React from "react";
import Icon from "../../../../../Component/Icon";

export default function HowSection() {
  return (
    <section className="dx " id="ins-re-how">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Approach</span>
          <h2 className="dx-h">
            From assessment <span>to run</span>
          </h2>
          <p className="dx-lede">One accountable partner across the lifecycle.</p>
        </div>
        <ol className="cx-pipe gl" data-reveal="">
          <li style={{ "--i": "0" }}>
            <Icon name="eye" />
            <b>Assess</b>
            <span>Current state, risks and regulatory obligations</span>
          </li>
          <li style={{ "--i": "1" }}>
            <Icon name="edit" />
            <b>Design</b>
            <span>Target architecture and roadmap for your sector</span>
          </li>
          <li style={{ "--i": "2" }}>
            <Icon name="rocket" />
            <b>Deliver</b>
            <span>Build, migrate and integrate with minimal disruption</span>
          </li>
          <li style={{ "--i": "3" }}>
            <Icon name="headset" />
            <b>Run</b>
            <span>24x7 operations with SLA and compliance reporting</span>
          </li>
          <li style={{ "--i": "4" }}>
            <Icon name="trend" />
            <b>Improve</b>
            <span>Quarterly reviews, optimisation and new use cases</span>
          </li>
        </ol>
      </div>
    </section>
  );
}
