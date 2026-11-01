import React from "react";
import { Link } from "react-router-dom";

export default function DeliverySection() {
  return (
    <section className="dx ice" id="dcs-monitoring-delivery">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Delivery</span>
          <h2 className="dx-h">
            Delivery approach <span>and evidence</span>
          </h2>
          <p className="dx-lede">Where this work sits in the data center lifecycle, and what you receive.</p>
        </div>
        <div className="dcs-strip" data-reveal="">
          <Link to="/data-center-strategy" className="dcs-st" style={{ "--i": "0" }}>
            <i>1</i>
            <span>Concept</span>
          </Link>
          <Link to="/data-center-design" className="dcs-st" style={{ "--i": "1" }}>
            <i>2</i>
            <span>Design</span>
          </Link>
          <Link to="/data-center-build" className="dcs-st" style={{ "--i": "2" }}>
            <i>3</i>
            <span>Procure</span>
          </Link>
          <Link to="/data-center-build" className="dcs-st" style={{ "--i": "3" }}>
            <i>4</i>
            <span>{"Build & integrate"}</span>
          </Link>
          <Link to="/data-center-build" className="dcs-st" style={{ "--i": "4" }}>
            <i>5</i>
            <span>Commission</span>
          </Link>
          <Link to="/data-center-operations" className="dcs-st on" style={{ "--i": "5" }}>
            <i>6</i>
            <span>Operate</span>
          </Link>
          <Link to="/data-center-sustainability" className="dcs-st" style={{ "--i": "6" }}>
            <i>7</i>
            <span>Optimise</span>
          </Link>
          <Link to="/data-center-expansion" className="dcs-st" style={{ "--i": "7" }}>
            <i>8</i>
            <span>{"Scale & modernise"}</span>
          </Link>
        </div>
        <h4 className="dcs-h4">Deliverables and acceptance evidence</h4>
        <div className="dx-tbl2" data-reveal="">
          <table>
            <thead>
              <tr>
                <th>Deliverable</th>
                <th>Contents</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Monitoring architecture</b>
                </td>
                <td>Systems, integrations and data flows.</td>
              </tr>
              <tr>
                <td>
                  <b>Alarm matrix</b>
                </td>
                <td>Priorities, owners, acknowledgement and escalation.</td>
              </tr>
              <tr>
                <td>
                  <b>Capacity dashboards</b>
                </td>
                <td>Space, power, cooling, ports and assets.</td>
              </tr>
              <tr>
                <td>
                  <b>Security controls</b>
                </td>
                <td>Segmentation, access and logging for facility interfaces.</td>
              </tr>
              <tr>
                <td>
                  <b>BC/DR runbooks</b>
                </td>
                <td>Recovery objectives, procedures and exercise records.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
