import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DiagramSection() {
  return (
    <section className="dx " id="dcs-monitoring-diagram">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Architecture</span>
          <h2 className="dx-h">
            One operational <span>picture</span>
          </h2>
        </div>
        <figure className="dcs-fig">
          <div className="ap-hub dcs-hub" data-reveal="">
            <svg viewBox="0 0 400 400" aria-hidden="true">
              <circle className="o1" cx="200" cy="200" r="152" />
              <circle className="o2" cx="200" cy="200" r="98" />
              <line x1="200" y1="200" x2="200.0" y2="48.0" />
              <line x1="200" y1="200" x2="331.6" y2="124.0" />
              <line x1="200" y1="200" x2="331.6" y2="276.0" />
              <line x1="200" y1="200" x2="200.0" y2="352.0" />
              <line x1="200" y1="200" x2="68.4" y2="276.0" />
              <line x1="200" y1="200" x2="68.4" y2="124.0" />
            </svg>
            <div className="ap-core">
              <Icon name="eye" />
              <b>Operations view</b>
              <small>Alarms · capacity · history</small>
            </div>
            <div className="ap-sat" style={{ left: "50.0%", top: "12.0%", "--i": "0" }}>
              <Icon name="building" />
              <b>BMS</b>
            </div>
            <div className="ap-sat" style={{ left: "82.9%", top: "31.0%", "--i": "1" }}>
              <Icon name="bolt" />
              <b>EPMS</b>
            </div>
            <div className="ap-sat" style={{ left: "82.9%", top: "69.0%", "--i": "2" }}>
              <Icon name="layers" />
              <b>DCIM</b>
            </div>
            <div className="ap-sat" style={{ left: "50.0%", top: "88.0%", "--i": "3" }}>
              <Icon name="gear" />
              <b>CMMS</b>
            </div>
            <div className="ap-sat" style={{ left: "17.1%", top: "69.0%", "--i": "4" }}>
              <Icon name="headset" />
              <b>ITSM</b>
            </div>
            <div className="ap-sat" style={{ left: "17.1%", top: "31.0%", "--i": "5" }}>
              <Icon name="shield" />
              <b>SIEM</b>
            </div>
          </div>
          <figcaption>Illustrative integration; the actual architecture depends on the systems in place.</figcaption>
        </figure>
        <h4 className="dcs-h4">Design considerations</h4>
        <div className="ix-tiles c3" data-reveal="">
          <div className="ix-tile" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="target" />
            </span>
            <b>Alarm ownership</b>
            <span>Every alarm has an owner and escalation path</span>
          </div>
          <div className="ix-tile" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="chart" />
            </span>
            <b>Capacity</b>
            <span>Space, power, cooling and ports in one view</span>
          </div>
          <div className="ix-tile" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="lock" />
            </span>
            <b>Secure interfaces</b>
            <span>OT and facility systems segmented</span>
          </div>
          <div className="ix-tile" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="doc" />
            </span>
            <b>Audit trail</b>
            <span>Logs and retention for evidence</span>
          </div>
          <div className="ix-tile" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="db" />
            </span>
            <b>Data quality</b>
            <span>Reliable data before analytics</span>
          </div>
          <div className="ix-tile" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="upload" />
            </span>
            <b>Recovery</b>
            <span>Backups and runbooks tested</span>
          </div>
        </div>
      </div>
    </section>
  );
}
