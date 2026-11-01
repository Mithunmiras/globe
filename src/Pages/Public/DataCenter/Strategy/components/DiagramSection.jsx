import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DiagramSection() {
  return (
    <section className="dx " id="dcs-strategy-diagram">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Architecture</span>
          <h2 className="dx-h">
            From need to <span>a fundable concept</span>
          </h2>
        </div>
        <figure className="dcs-fig">
          <div className="dcs-chain " data-reveal="">
            <div className="dcs-row n5">
              <div className="dcs-node" style={{ "--i": "0" }}>
                <Icon name="users" />
                <b>Business need</b>
                <small>Workload, users, growth</small>
              </div>
              <div className="dcs-node" style={{ "--i": "1" }}>
                <Icon name="chart" />
                <b>Options</b>
                <small>Build, colo, cloud, hybrid</small>
              </div>
              <div className="dcs-node" style={{ "--i": "2" }}>
                <Icon name="pin" />
                <b>Site screening</b>
                <small>Power, fibre, hazards</small>
              </div>
              <div className="dcs-node" style={{ "--i": "3" }}>
                <Icon name="card" />
                <b>Cost model</b>
                <small>CAPEX, OPEX, TCO</small>
              </div>
              <div className="dcs-node" style={{ "--i": "4" }}>
                <Icon name="check" />
                <b>Decision gate</b>
                <small>Proceed with evidence</small>
              </div>
              <i className="dcs-flow" aria-hidden="true" />
            </div>
          </div>
          <figcaption>Illustrative decision path; every project defines its own gates and evidence.</figcaption>
        </figure>
        <h4 className="dcs-h4">Design considerations</h4>
        <div className="ix-tiles c3" data-reveal="">
          <div className="ix-tile" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="bolt" />
            </span>
            <b>Power first</b>
            <span>Grid capacity and connection timeline often decide the site</span>
          </div>
          <div className="ix-tile" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="net" />
            </span>
            <b>Connectivity</b>
            <span>Carrier diversity and latency to users</span>
          </div>
          <div className="ix-tile" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="drop" />
            </span>
            <b>Water and climate</b>
            <span>Shapes the cooling strategy and its risks</span>
          </div>
          <div className="ix-tile" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="layers" />
            </span>
            <b>Phasing</b>
            <span>Capacity released in blocks as demand grows</span>
          </div>
          <div className="ix-tile" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="gov" />
            </span>
            <b>Approvals</b>
            <span>Statutory timelines built into the plan</span>
          </div>
          <div className="ix-tile" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="card" />
            </span>
            <b>Lifecycle cost</b>
            <span>Decisions judged on TCO, not first cost</span>
          </div>
        </div>
      </div>
    </section>
  );
}
