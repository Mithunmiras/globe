import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DiagramSection() {
  return (
    <section className="dx " id="dcs-critical-diagram">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Architecture</span>
          <h2 className="dx-h">
            How the systems <span>depend on each other</span>
          </h2>
        </div>
        <figure className="dcs-fig">
          <div className="ap-hub dcs-hub" data-reveal="">
            <svg viewBox="0 0 400 400" aria-hidden="true">
              <circle className="o1" cx="200" cy="200" r="152" />
              <circle className="o2" cx="200" cy="200" r="98" />
              <line x1="200" y1="200" x2="200.0" y2="48.0" />
              <line x1="200" y1="200" x2="307.5" y2="92.5" />
              <line x1="200" y1="200" x2="352.0" y2="200.0" />
              <line x1="200" y1="200" x2="307.5" y2="307.5" />
              <line x1="200" y1="200" x2="200.0" y2="352.0" />
              <line x1="200" y1="200" x2="92.5" y2="307.5" />
              <line x1="200" y1="200" x2="48.0" y2="200.0" />
              <line x1="200" y1="200" x2="92.5" y2="92.5" />
            </svg>
            <div className="ap-core">
              <Icon name="server" />
              <b>IT load</b>
              <small>Protected by every layer</small>
            </div>
            <div className="ap-sat" style={{ left: "50.0%", top: "12.0%", "--i": "0" }}>
              <Icon name="bolt" />
              <b>Power</b>
            </div>
            <div className="ap-sat" style={{ left: "76.9%", top: "23.1%", "--i": "1" }}>
              <Icon name="snow" />
              <b>Cooling</b>
            </div>
            <div className="ap-sat" style={{ left: "88.0%", top: "50.0%", "--i": "2" }}>
              <Icon name="building" />
              <b>Building</b>
            </div>
            <div className="ap-sat" style={{ left: "76.9%", top: "76.9%", "--i": "3" }}>
              <Icon name="fire" />
              <b>Fire</b>
            </div>
            <div className="ap-sat" style={{ left: "50.0%", top: "88.0%", "--i": "4" }}>
              <Icon name="lock" />
              <b>Security</b>
            </div>
            <div className="ap-sat" style={{ left: "23.1%", top: "76.9%", "--i": "5" }}>
              <Icon name="drop" />
              <b>Water</b>
            </div>
            <div className="ap-sat" style={{ left: "12.0%", top: "50.0%", "--i": "6" }}>
              <Icon name="gear" />
              <b>Fuel</b>
            </div>
            <div className="ap-sat" style={{ left: "23.1%", top: "23.1%", "--i": "7" }}>
              <Icon name="eye" />
              <b>Monitoring</b>
            </div>
          </div>
          <figcaption>Illustrative interdependencies; each facility is designed for its own requirements.</figcaption>
        </figure>
        <h4 className="dcs-h4">Design considerations</h4>
        <div className="ix-tiles c3" data-reveal="">
          <div className="ix-tile" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="shield" />
            </span>
            <b>No single point of failure</b>
            <span>Redundancy matched to the availability target</span>
          </div>
          <div className="ix-tile" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="gear" />
            </span>
            <b>Concurrent maintenance</b>
            <span>Service any component without dropping load</span>
          </div>
          <div className="ix-tile" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="layers" />
            </span>
            <b>Interdependencies</b>
            <span>Power, cooling and fire respond together</span>
          </div>
          <div className="ix-tile" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="drop" />
            </span>
            <b>{"Water & fuel"}</b>
            <span>Autonomy and leak risks designed out</span>
          </div>
          <div className="ix-tile" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="eye" />
            </span>
            <b>Visibility</b>
            <span>Every system monitored and alarmed</span>
          </div>
          <div className="ix-tile" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="check" />
            </span>
            <b>Tested</b>
            <span>Integrated systems testing before handover</span>
          </div>
        </div>
      </div>
    </section>
  );
}
