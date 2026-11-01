import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function DirectorySection() {
  return (
    <section className="dx ice" id="dc-directory">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Explore the Data Center vertical</span>
          <h2 className="dx-h">
            Fourteen disciplines, <span>one integrated facility</span>
          </h2>
          <p className="dx-lede">Each page explains scope, architecture, delivery, deliverables and standards.</p>
        </div>
        <div className="dcs-dir" data-reveal="">
          <Link to="/data-center-strategy" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="compass" />
            </span>
            <b>{"Strategy & Concept"}</b>
            <span>Business case, feasibility, capacity and site</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-design" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="edit" />
            </span>
            <b>{"Design & Engineering"}</b>
            <span>Master planning and multidisciplinary engineering</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-critical" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="bolt" />
            </span>
            <b>Critical Infrastructure</b>
            <span>Power, cooling, building, fire and security</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-it-network" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="server" />
            </span>
            <b>{"IT & Network"}</b>
            <span>Compute, storage, network and platforms</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-build" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="gear" />
            </span>
            <b>{"Build & Commission"}</b>
            <span>Procurement, installation, integration and testing</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-operations" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="eye" />
            </span>
            <b>{"Operate & Maintain"}</b>
            <span>24×7 operations, maintenance and monitoring</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-sustainability" style={{ "--i": "6" }}>
            <span className="dx-ic c-blue">
              <Icon name="leaf" />
            </span>
            <b>{"Optimise & Sustain"}</b>
            <span>Energy, efficiency, capacity and sustainability</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-expansion" style={{ "--i": "7" }}>
            <span className="dx-ic c-blue">
              <Icon name="trend" />
            </span>
            <b>{"Expand & Modernise"}</b>
            <span>Modular growth, AI workloads and future capacity</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-power" style={{ "--i": "8" }}>
            <span className="dx-ic c-blue">
              <Icon name="bolt" />
            </span>
            <b>Power</b>
            <span>Utility to rack: UPS, generation, distribution</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-cooling" style={{ "--i": "9" }}>
            <span className="dx-ic c-blue">
              <Icon name="snow" />
            </span>
            <b>Cooling</b>
            <span>Air, liquid and hybrid cooling and controls</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-fire-security" style={{ "--i": "10" }}>
            <span className="dx-ic c-blue">
              <Icon name="shield" />
            </span>
            <b>{"Fire & Security"}</b>
            <span>Detection, suppression and layered security</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-monitoring" style={{ "--i": "11" }}>
            <span className="dx-ic c-blue">
              <Icon name="headset" />
            </span>
            <b>{"DCIM & Monitoring"}</b>
            <span>BMS, EPMS, DCIM, CMMS and ITSM</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-ai" style={{ "--i": "12" }}>
            <span className="dx-ic c-blue">
              <Icon name="cpu" />
            </span>
            <b>AI Data Center</b>
            <span>GPU/HPC, liquid cooling and AI fabric</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-standards" style={{ "--i": "13" }}>
            <span className="dx-ic c-blue">
              <Icon name="check" />
            </span>
            <b>{"Standards & Assurance"}</b>
            <span>Certification pathways and evidence</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/contact" className="cta">
            <Icon name="headset" />
            <b>Not sure where to start?</b>
            <span>Tell us your project stage and capacity, and we will point you to the right specialist.</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
        </div>
      </div>
    </section>
  );
}
