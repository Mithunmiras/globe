import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function DeliverySection() {
  return (
    <section className="dx ice" id="dcs-strategy-delivery">
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
          <Link to="/data-center-strategy" className="dcs-st on" style={{ "--i": "0" }}>
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
            <Icon name="users" />
            <b>Discover</b>
            <span>Requirements and constraints</span>
          </li>
          <li style={{ "--i": "1" }}>
            <Icon name="eye" />
            <b>Screen</b>
            <span>Options and sites</span>
          </li>
          <li style={{ "--i": "2" }}>
            <Icon name="chart" />
            <b>Model</b>
            <span>Cost and capacity</span>
          </li>
          <li style={{ "--i": "3" }}>
            <Icon name="layout" />
            <b>Concept</b>
            <span>Brief and master plan</span>
          </li>
          <li style={{ "--i": "4" }}>
            <Icon name="check" />
            <b>Decide</b>
            <span>Gate review</span>
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
                  <b>Feasibility report</b>
                </td>
                <td>Use case, options, assumptions, site constraints, preliminary risks and recommended next step.</td>
              </tr>
              <tr>
                <td>
                  <b>Concept design brief</b>
                </td>
                <td>
                  Design intent, target capacity, redundancy objectives, cooling concept, security zoning and key
                  interfaces.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Master plan</b>
                </td>
                <td>
                  Campus/site layout, phase boundaries, utility corridors, future buildings and expansion strategy.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Preliminary cost model</b>
                </td>
                <td>CAPEX/OPEX categories, assumptions, contingencies, exclusions and estimate confidence.</td>
              </tr>
              <tr>
                <td>
                  <b>Risk/decision register</b>
                </td>
                <td>Risks, owner, impact, mitigation, decision gate and evidence needed.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
