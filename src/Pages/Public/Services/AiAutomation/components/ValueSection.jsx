import React from "react";
import Icon from "../../../../../Component/Icon";

export default function ValueSection() {
  return (
    <section className="dx ice" id="ai-value">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Where the value is</span>
          <h2 className="dx-h">
            AI and automation <span>in every function</span>
          </h2>
        </div>
        <div className="cx-cov" data-reveal="">
          <div className="b" style={{ "--i": "0" }}>
            <span>
              <Icon name="trend" />
              <b>{"Sales & service"}</b>
            </span>
            <p>Lead scoring, quote drafting, service chatbots, call summaries</p>
          </div>
          <div className="g" style={{ "--i": "1" }}>
            <span>
              <Icon name="card" />
              <b>Finance</b>
            </span>
            <p>Invoice capture, reconciliations, cash forecasting</p>
          </div>
          <div className="o" style={{ "--i": "2" }}>
            <span>
              <Icon name="truck" />
              <b>Supply chain</b>
            </span>
            <p>Demand forecasting, inventory optimization, supplier risk</p>
          </div>
          <div className="t" style={{ "--i": "3" }}>
            <span>
              <Icon name="factory" />
              <b>Manufacturing</b>
            </span>
            <p>Visual inspection, predictive maintenance, energy use</p>
          </div>
          <div className="p" style={{ "--i": "4" }}>
            <span>
              <Icon name="users" />
              <b>{"HR & people"}</b>
            </span>
            <p>Policy assistants, onboarding workflows</p>
          </div>
          <div className="b" style={{ "--i": "5" }}>
            <span>
              <Icon name="server" />
              <b>IT operations</b>
            </span>
            <p>Ticket triage, auto-remediation, anomaly detection</p>
          </div>
        </div>
      </div>
    </section>
  );
}
