import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DiagramSection() {
  return (
    <section className="dx " id="dcs-expansion-diagram">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Architecture</span>
          <h2 className="dx-h">
            From forecast <span>to new capacity</span>
          </h2>
        </div>
        <figure className="dcs-fig">
          <div className="ix-zt n5" data-reveal="">
            <div className="ix-zs" style={{ "--i": "0" }}>
              <Icon name="chart" />
              <b>Forecast</b>
              <span>Demand and thresholds</span>
            </div>
            <div className="ix-zs" style={{ "--i": "1" }}>
              <Icon name="layout" />
              <b>Plan</b>
              <span>Master plan update</span>
            </div>
            <div className="ix-zs" style={{ "--i": "2" }}>
              <Icon name="gear" />
              <b>Build</b>
              <span>Phased works</span>
            </div>
            <div className="ix-zs" style={{ "--i": "3" }}>
              <Icon name="arrow" />
              <b>Migrate</b>
              <span>With rollback</span>
            </div>
            <div className="ix-zs end" style={{ "--i": "4" }}>
              <Icon name="check" />
              <b>Release</b>
              <span>Capacity in service</span>
            </div>
            <i className="ix-zdot" aria-hidden="true" />
          </div>
          <figcaption>Illustrative sequence; live-site works follow approved methods of procedure.</figcaption>
        </figure>
        <h4 className="dcs-h4">Design considerations</h4>
        <div className="ix-tiles c3" data-reveal="">
          <div className="ix-tile" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="shield" />
            </span>
            <b>Live-site risk</b>
            <span>Every change has a MOP and rollback</span>
          </div>
          <div className="ix-tile" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="layers" />
            </span>
            <b>Phasing</b>
            <span>Capacity released in blocks</span>
          </div>
          <div className="ix-tile" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="bolt" />
            </span>
            <b>Utilities</b>
            <span>Upgrades planned ahead of demand</span>
          </div>
          <div className="ix-tile" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="cpu" />
            </span>
            <b>AI readiness</b>
            <span>Space for higher density later</span>
          </div>
          <div className="ix-tile" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="doc" />
            </span>
            <b>Evidence</b>
            <span>Sanitisation and disposal records</span>
          </div>
          <div className="ix-tile" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="chart" />
            </span>
            <b>Triggers</b>
            <span>Thresholds start the next phase</span>
          </div>
        </div>
      </div>
    </section>
  );
}
