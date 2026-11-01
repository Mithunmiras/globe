import React from "react";
import { Link } from "react-router-dom";

export default function DeliverySection() {
  return (
    <section className="dx ice" id="dcs-power-delivery">
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
          <Link to="/data-center-design" className="dcs-st on" style={{ "--i": "1" }}>
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
          <Link to="/data-center-operations" className="dcs-st" style={{ "--i": "5" }}>
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
                  <b>Design basis and load list</b>
                </td>
                <td>Loads, diversity, growth and redundancy assumptions.</td>
              </tr>
              <tr>
                <td>
                  <b>Single-line diagrams</b>
                </td>
                <td>Distribution and protection philosophy; equipment schedules.</td>
              </tr>
              <tr>
                <td>
                  <b>Studies</b>
                </td>
                <td>
                  Short-circuit, protection coordination, arc-flash or other required studies by qualified engineers, as
                  applicable.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Sizing and operating modes</b>
                </td>
                <td>UPS, generator and battery sizing assumptions, operating modes and maintenance strategy.</td>
              </tr>
              <tr>
                <td>
                  <b>Metering and alarm plan</b>
                </td>
                <td>Metering, alarm matrix, controls/interfaces and commissioning tests.</td>
              </tr>
              <tr>
                <td>
                  <b>Handover records</b>
                </td>
                <td>Submittals, FAT/SAT plans, as-built drawings, test results and maintenance information.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
