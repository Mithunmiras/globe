import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function DeliverySection() {
  return (
    <section className="dx ice" id="dcs-build-delivery">
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
          <Link to="/data-center-build" className="dcs-st on" style={{ "--i": "2" }}>
            <i>3</i>
            <span>Procure</span>
          </Link>
          <Link to="/data-center-build" className="dcs-st on" style={{ "--i": "3" }}>
            <i>4</i>
            <span>{"Build & integrate"}</span>
          </Link>
          <Link to="/data-center-build" className="dcs-st on" style={{ "--i": "4" }}>
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
        <ol className="cx-pipe gl" data-reveal="">
          <li style={{ "--i": "0" }}>
            <Icon name="cart" />
            <b>Procure</b>
            <span>Tender and award</span>
          </li>
          <li style={{ "--i": "1" }}>
            <Icon name="gear" />
            <b>{"Build & integrate"}</b>
            <span>Install and inspect</span>
          </li>
          <li style={{ "--i": "2" }}>
            <Icon name="check" />
            <b>Commission</b>
            <span>FAT, SAT, IST</span>
          </li>
          <li style={{ "--i": "3" }}>
            <Icon name="users" />
            <b>Ready</b>
            <span>Train and prepare</span>
          </li>
          <li style={{ "--i": "4" }}>
            <Icon name="doc" />
            <b>Hand over</b>
            <span>Records and warranties</span>
          </li>
        </ol>
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
                  <b>Procurement records</b>
                </td>
                <td>Tender packs, evaluations, vendor list and submittal register.</td>
              </tr>
              <tr>
                <td>
                  <b>Construction records</b>
                </td>
                <td>Progress reports, inspections, issue and change logs.</td>
              </tr>
              <tr>
                <td>
                  <b>Test scripts and results</b>
                </td>
                <td>FAT, SAT, functional, load, failure and IST evidence.</td>
              </tr>
              <tr>
                <td>
                  <b>Defects register</b>
                </td>
                <td>Severity, owner, closure and retest.</td>
              </tr>
              <tr>
                <td>
                  <b>Handover pack</b>
                </td>
                <td>As-builts, training records, warranties, asset register and manuals.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
