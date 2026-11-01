import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DiagramSection() {
  return (
    <section className="dx " id="dcs-design-diagram">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Architecture</span>
          <h2 className="dx-h">
            One coordinated <span>design stack</span>
          </h2>
        </div>
        <figure className="dcs-fig">
          <div className="ix-layers" data-reveal="">
            <div className="ix-layer" style={{ "--i": "0" }}>
              <span className="ix-lic">
                <Icon name="layout" />
              </span>
              <b>{"Site & campus"}</b>
              <span>Access, perimeter, utility routes, phases</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "1" }}>
              <span className="ix-lic">
                <Icon name="building" />
              </span>
              <b>Building</b>
              <span>Envelope, structure, rooms, loading</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "2" }}>
              <span className="ix-lic">
                <Icon name="bolt" />
              </span>
              <b>{"Power & cooling"}</b>
              <span>Electrical and mechanical systems</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "3" }}>
              <span className="ix-lic">
                <Icon name="server" />
              </span>
              <b>White space</b>
              <span>Racks, containment, cabling</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "4" }}>
              <span className="ix-lic">
                <Icon name="eye" />
              </span>
              <b>{"Controls & monitoring"}</b>
              <span>BMS, EPMS, DCIM, security systems</span>
              <i className="ix-pulse" />
            </div>
          </div>
          <figcaption>
            Illustrative cross-section of design layers; labelled examples are not project-specific.
          </figcaption>
        </figure>
        <h4 className="dcs-h4">Design considerations</h4>
        <div className="ix-tiles c3" data-reveal="">
          <div className="ix-tile" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="layers" />
            </span>
            <b>Capacity</b>
            <span>Phase-by-phase load and density</span>
          </div>
          <div className="ix-tile" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="shield" />
            </span>
            <b>Redundancy</b>
            <span>Concurrent maintainability where required</span>
          </div>
          <div className="ix-tile" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="gear" />
            </span>
            <b>Maintainability</b>
            <span>Access and replacement paths designed in</span>
          </div>
          <div className="ix-tile" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="check" />
            </span>
            <b>Testability</b>
            <span>Every system can be commissioned and proven</span>
          </div>
          <div className="ix-tile" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="leaf" />
            </span>
            <b>Energy</b>
            <span>Efficiency considered at design stage</span>
          </div>
          <div className="ix-tile" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="trend" />
            </span>
            <b>Growth</b>
            <span>Expansion without disrupting live operations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
