import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DiagramSection() {
  return (
    <section className="dx " id="dcs-operations-diagram">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Architecture</span>
          <h2 className="dx-h">
            The operating <span>loop</span>
          </h2>
        </div>
        <figure className="dcs-fig">
          <div className="ix-zt n6" data-reveal="">
            <div className="ix-zs" style={{ "--i": "0" }}>
              <Icon name="eye" />
              <b>Monitor</b>
              <span>Alarms and trends</span>
            </div>
            <div className="ix-zs" style={{ "--i": "1" }}>
              <Icon name="users" />
              <b>Shift handover</b>
              <span>Status and actions</span>
            </div>
            <div className="ix-zs" style={{ "--i": "2" }}>
              <Icon name="gear" />
              <b>Maintain</b>
              <span>Planned and corrective</span>
            </div>
            <div className="ix-zs" style={{ "--i": "3" }}>
              <Icon name="doc" />
              <b>Change</b>
              <span>MOPs and approvals</span>
            </div>
            <div className="ix-zs" style={{ "--i": "4" }}>
              <Icon name="chart" />
              <b>Report</b>
              <span>SLA and KPIs</span>
            </div>
            <div className="ix-zs end" style={{ "--i": "5" }}>
              <Icon name="trend" />
              <b>Improve</b>
              <span>Root causes fixed</span>
            </div>
            <i className="ix-zdot" aria-hidden="true" />
          </div>
          <figcaption>Illustrative operating cycle.</figcaption>
        </figure>
        <h4 className="dcs-h4">Design considerations</h4>
        <div className="ix-tiles c3" data-reveal="">
          <div className="ix-tile" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="users" />
            </span>
            <b>Staffing</b>
            <span>Coverage and skills defined in contract</span>
          </div>
          <div className="ix-tile" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="target" />
            </span>
            <b>Escalation</b>
            <span>Response times by severity</span>
          </div>
          <div className="ix-tile" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="doc" />
            </span>
            <b>Procedures</b>
            <span>SOP, MOP and EOP kept current</span>
          </div>
          <div className="ix-tile" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="gear" />
            </span>
            <b>Safe isolation</b>
            <span>Maintenance without risk to load</span>
          </div>
          <div className="ix-tile" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="briefcase" />
            </span>
            <b>Vendors</b>
            <span>SLAs tracked and enforced</span>
          </div>
          <div className="ix-tile" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="chart" />
            </span>
            <b>Transparency</b>
            <span>Monthly reporting and reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
