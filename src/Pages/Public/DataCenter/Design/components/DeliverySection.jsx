import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function DeliverySection() {
  return (
    <section className="dx ice" id="dcs-design-delivery">
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
        <ol className="cx-pipe gl" data-reveal="">
          <li style={{ "--i": "0" }}>
            <Icon name="doc" />
            <b>Design basis</b>
            <span>Requirements traced</span>
          </li>
          <li style={{ "--i": "1" }}>
            <Icon name="edit" />
            <b>Concept</b>
            <span>Topology and sizing</span>
          </li>
          <li style={{ "--i": "2" }}>
            <Icon name="layers" />
            <b>Detailed design</b>
            <span>All disciplines coordinated</span>
          </li>
          <li style={{ "--i": "3" }}>
            <Icon name="eye" />
            <b>Design review</b>
            <span>Interfaces and maintainability</span>
          </li>
          <li style={{ "--i": "4" }}>
            <Icon name="doc" />
            <b>Tender pack</b>
            <span>Specs, BOQ, drawings</span>
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
                  <b>Design reports</b>
                </td>
                <td>Design basis, assumptions, capacity and redundancy philosophy.</td>
              </tr>
              <tr>
                <td>
                  <b>Drawings and specifications</b>
                </td>
                <td>Discipline drawings, specifications and equipment schedules.</td>
              </tr>
              <tr>
                <td>
                  <b>Capacity plans</b>
                </td>
                <td>Space, power and cooling by phase.</td>
              </tr>
              <tr>
                <td>
                  <b>BOQ</b>
                </td>
                <td>Bill of quantities for tendering.</td>
              </tr>
              <tr>
                <td>
                  <b>Design review records</b>
                </td>
                <td>Comments, responses and closure evidence.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
