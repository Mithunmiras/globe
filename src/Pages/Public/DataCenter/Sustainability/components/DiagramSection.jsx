import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DiagramSection() {
  return (
    <section className="dx " id="dcs-sustainability-diagram">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Architecture</span>
          <h2 className="dx-h">
            The optimisation <span>cycle</span>
          </h2>
        </div>
        <figure className="dcs-fig">
          <div className="ix-zt n5" data-reveal="">
            <div className="ix-zs" style={{ "--i": "0" }}>
              <Icon name="eye" />
              <b>Measure</b>
              <span>Boundaries and data quality</span>
            </div>
            <div className="ix-zs" style={{ "--i": "1" }}>
              <Icon name="chart" />
              <b>Baseline</b>
              <span>Current performance</span>
            </div>
            <div className="ix-zs" style={{ "--i": "2" }}>
              <Icon name="target" />
              <b>Prioritise</b>
              <span>Savings vs risk</span>
            </div>
            <div className="ix-zs" style={{ "--i": "3" }}>
              <Icon name="gear" />
              <b>Implement</b>
              <span>Controlled changes</span>
            </div>
            <div className="ix-zs end" style={{ "--i": "4" }}>
              <Icon name="check" />
              <b>Verify</b>
              <span>Post-change measurement</span>
            </div>
            <i className="ix-zdot" aria-hidden="true" />
          </div>
          <figcaption>Illustrative cycle; targets and savings are project-specific.</figcaption>
        </figure>
        <h4 className="dcs-h4">Design considerations</h4>
        <div className="ix-tiles c3" data-reveal="">
          <div className="ix-tile" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="doc" />
            </span>
            <b>Boundaries</b>
            <span>PUE and WUE reported with scope and period</span>
          </div>
          <div className="ix-tile" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="db" />
            </span>
            <b>Data quality</b>
            <span>Reliable meters before conclusions</span>
          </div>
          <div className="ix-tile" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="shield" />
            </span>
            <b>Equipment limits</b>
            <span>Never optimise past manufacturer guidance</span>
          </div>
          <div className="ix-tile" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="check" />
            </span>
            <b>Verification</b>
            <span>Savings measured, not assumed</span>
          </div>
          <div className="ix-tile" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="leaf" />
            </span>
            <b>Trade-offs</b>
            <span>Energy and water judged together</span>
          </div>
          <div className="ix-tile" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="trash" />
            </span>
            <b>Responsible disposal</b>
            <span>Sanitisation and e-waste evidence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
