import React from "react";
import Icon from "../../../../../Component/Icon";

export default function MaturitySection() {
  return (
    <section className="dx ice" id="da-maturity">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Analytics maturity</span>
          <h2 className="dx-h">
            From hindsight <span>to foresight</span>
          </h2>
        </div>
        <div className="da-mat" data-reveal="">
          <div style={{ "--i": "0" }}>
            <span>
              <Icon name="doc" />
            </span>
            <small>Descriptive</small>
            <b>What happened?</b>
            <p>Sales, stock and cost reports</p>
          </div>
          <div style={{ "--i": "1" }}>
            <span>
              <Icon name="eye" />
            </span>
            <small>Diagnostic</small>
            <b>Why did it happen?</b>
            <p>Drill-downs and root-cause views</p>
          </div>
          <div style={{ "--i": "2" }}>
            <span>
              <Icon name="trend" />
            </span>
            <small>Predictive</small>
            <b>What will happen?</b>
            <p>Demand, cash and failure forecasts</p>
          </div>
          <div style={{ "--i": "3" }}>
            <span>
              <Icon name="target" />
            </span>
            <small>Prescriptive</small>
            <b>What should we do?</b>
            <p>Recommended actions and alerts</p>
          </div>
        </div>
        <div className="da-mat-ax">
          <span>Hindsight</span>
          <div className="ln" />
          <span>Foresight</span>
        </div>
      </div>
    </section>
  );
}
