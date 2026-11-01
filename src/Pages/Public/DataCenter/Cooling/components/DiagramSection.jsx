import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DiagramSection() {
  return (
    <section className="dx " id="dcs-cooling-diagram">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Architecture</span>
          <h2 className="dx-h">
            How heat <span>leaves the building</span>
          </h2>
        </div>
        <figure className="dcs-fig">
          <div className="dcs-chain cool" data-reveal="">
            <div className="dcs-row n5">
              <div className="dcs-node" style={{ "--i": "0" }}>
                <Icon name="cpu" />
                <b>IT heat</b>
                <small>Servers and GPUs</small>
              </div>
              <div className="dcs-node" style={{ "--i": "1" }}>
                <Icon name="snow" />
                <b>CRAH / CDU</b>
                <small>Air or liquid capture</small>
              </div>
              <div className="dcs-node" style={{ "--i": "2" }}>
                <Icon name="gear" />
                <b>{"Pumps & piping"}</b>
                <small>Chilled water loop</small>
              </div>
              <div className="dcs-node" style={{ "--i": "3" }}>
                <Icon name="snow" />
                <b>Chillers</b>
                <small>Central plant</small>
              </div>
              <div className="dcs-node" style={{ "--i": "4" }}>
                <Icon name="wifi" />
                <b>Heat rejection</b>
                <small>Towers, dry coolers</small>
              </div>
              <i className="dcs-flow" aria-hidden="true" />
            </div>
          </div>
          <figcaption>
            Illustrative cooling relationship; actual systems may use air, liquid or hybrid architectures.
          </figcaption>
        </figure>
        <h4 className="dcs-h4">Design considerations</h4>
        <div className="ix-tiles c3" data-reveal="">
          <div className="ix-tile" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="layers" />
            </span>
            <b>Density drives design</b>
            <span>No universal maximum density is promised</span>
          </div>
          <div className="ix-tile" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="gear" />
            </span>
            <b>Maintainability</b>
            <span>Isolation valves and service access</span>
          </div>
          <div className="ix-tile" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="drop" />
            </span>
            <b>Leak detection</b>
            <span>Sensors and procedures for liquid loops</span>
          </div>
          <div className="ix-tile" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="leaf" />
            </span>
            <b>Energy vs water</b>
            <span>Trade-offs judged on project data</span>
          </div>
          <div className="ix-tile" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="users" />
            </span>
            <b>Operator training</b>
            <span>Sequences understood by the shift team</span>
          </div>
          <div className="ix-tile" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="check" />
            </span>
            <b>Commissioning</b>
            <span>Failure and load scenarios tested</span>
          </div>
        </div>
      </div>
    </section>
  );
}
