import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DaMapSection() {
  return (
    <section className="dx " id="da-map">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Capability map</span>
          <h2 className="dx-h">
            Nine analytics capabilities, <span>one team</span>
          </h2>
          <p className="dx-lede">From scattered spreadsheets to one trusted view of the business.</p>
        </div>
        <div className="da-nine" data-reveal="">
          <div style={{ "--i": "0" }}>
            <span className="da-n-ic">
              <Icon name="compass" />
            </span>
            <b>BI strategy</b>
            <small>KPI framework and roadmap</small>
            <i className="da-n-viz v0" aria-hidden="true">
              <u />
              <u />
              <u />
              <u />
            </i>
          </div>
          <div style={{ "--i": "1" }}>
            <span className="da-n-ic">
              <Icon name="arrow" />
            </span>
            <b>Data engineering</b>
            <small>Pipelines from every source</small>
            <i className="da-n-viz v1" aria-hidden="true">
              <u />
              <u />
              <u />
              <u />
            </i>
          </div>
          <div style={{ "--i": "2" }}>
            <span className="da-n-ic">
              <Icon name="db" />
            </span>
            <b>{"Warehouse & lakehouse"}</b>
            <small>One trusted data store</small>
            <i className="da-n-viz v2" aria-hidden="true">
              <u />
              <u />
              <u />
              <u />
            </i>
          </div>
          <div style={{ "--i": "3" }}>
            <span className="da-n-ic">
              <Icon name="chart" />
            </span>
            <b>{"Dashboards & reports"}</b>
            <small>Executive to shop-floor views</small>
            <i className="da-n-viz v0" aria-hidden="true">
              <u />
              <u />
              <u />
              <u />
            </i>
          </div>
          <div style={{ "--i": "4" }}>
            <span className="da-n-ic">
              <Icon name="users" />
            </span>
            <b>Self-service BI</b>
            <small>Certified data for every team</small>
            <i className="da-n-viz v1" aria-hidden="true">
              <u />
              <u />
              <u />
              <u />
            </i>
          </div>
          <div style={{ "--i": "5" }}>
            <span className="da-n-ic">
              <Icon name="bolt" />
            </span>
            <b>Real-time analytics</b>
            <small>Live plant and IoT data</small>
            <i className="da-n-viz v2" aria-hidden="true">
              <u />
              <u />
              <u />
              <u />
            </i>
          </div>
          <div style={{ "--i": "6" }}>
            <span className="da-n-ic">
              <Icon name="spark" />
            </span>
            <b>{"AI & predictive"}</b>
            <small>{"Forecasts and plain-language Q&A"}</small>
            <i className="da-n-viz v0" aria-hidden="true">
              <u />
              <u />
              <u />
              <u />
            </i>
          </div>
          <div style={{ "--i": "7" }}>
            <span className="da-n-ic">
              <Icon name="phone" />
            </span>
            <b>{"Embedded & mobile"}</b>
            <small>Analytics in apps and phones</small>
            <i className="da-n-viz v1" aria-hidden="true">
              <u />
              <u />
              <u />
              <u />
            </i>
          </div>
          <div style={{ "--i": "8" }}>
            <span className="da-n-ic">
              <Icon name="shield" />
            </span>
            <b>{"Governance & support"}</b>
            <small>Security, quality, managed BI</small>
            <i className="da-n-viz v2" aria-hidden="true">
              <u />
              <u />
              <u />
              <u />
            </i>
          </div>
        </div>
      </div>
    </section>
  );
}
