import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DiagramSection() {
  return (
    <section className="dx " id="dcs-fire-security-diagram">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Architecture</span>
          <h2 className="dx-h">
            Layered <span>physical security</span>
          </h2>
        </div>
        <figure className="dcs-fig">
          <div className="dcs-rings-wrap" data-reveal="">
            <div className="dcs-rings">
              <div className="dcs-ring" style={{ "--k": "0", "--n": "5" }}>
                <span>Perimeter</span>
              </div>
              <div className="dcs-ring" style={{ "--k": "1", "--n": "5" }}>
                <span>Site entry</span>
              </div>
              <div className="dcs-ring" style={{ "--k": "2", "--n": "5" }}>
                <span>Building</span>
              </div>
              <div className="dcs-ring" style={{ "--k": "3", "--n": "5" }}>
                <span>Data hall</span>
              </div>
              <div className="dcs-ring" style={{ "--k": "4", "--n": "5" }}>
                <span>{"Cage & rack"}</span>
              </div>
              <div className="dcs-core">
                <Icon name="server" />
                <b>Critical assets</b>
              </div>
            </div>
            <ol className="dcs-legend">
              <li style={{ "--i": "0" }}>
                <i>1</i>
                <b>Perimeter</b>
                <span>Fence, gates, barriers, detection</span>
              </li>
              <li style={{ "--i": "1" }}>
                <i>2</i>
                <b>Site entry</b>
                <span>Guardhouse, visitor registration, identity checks</span>
              </li>
              <li style={{ "--i": "2" }}>
                <i>3</i>
                <b>Building</b>
                <span>Access cards, biometrics, CCTV</span>
              </li>
              <li style={{ "--i": "3" }}>
                <i>4</i>
                <b>Data hall</b>
                <span>Mantraps, secure zones, role-based access</span>
              </li>
              <li style={{ "--i": "4" }}>
                <i>5</i>
                <b>{"Cage & rack"}</b>
                <span>Tenant separation, rack locks, audit</span>
              </li>
            </ol>
          </div>
          <figcaption>Illustrative layered security model; zoning is designed per site and risk assessment.</figcaption>
        </figure>
        <h4 className="dcs-h4">Design considerations</h4>
        <div className="ix-tiles c3" data-reveal="">
          <div className="ix-tile" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="fire" />
            </span>
            <b>Hazard-specific</b>
            <span>Suppression chosen for the space and equipment</span>
          </div>
          <div className="ix-tile" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="layers" />
            </span>
            <b>Integration</b>
            <span>Fire, power, cooling and access respond together</span>
          </div>
          <div className="ix-tile" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="users" />
            </span>
            <b>People first</b>
            <span>Egress and life safety never compromised</span>
          </div>
          <div className="ix-tile" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="key" />
            </span>
            <b>Least privilege</b>
            <span>Access reviewed periodically</span>
          </div>
          <div className="ix-tile" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="doc" />
            </span>
            <b>Evidence</b>
            <span>Logs and records retained for audit</span>
          </div>
          <div className="ix-tile" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="check" />
            </span>
            <b>Tested sequences</b>
            <span>Integrated tests before handover</span>
          </div>
        </div>
      </div>
    </section>
  );
}
