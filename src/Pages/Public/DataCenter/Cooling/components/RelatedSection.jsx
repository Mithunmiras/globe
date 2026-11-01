import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function RelatedSection() {
  return (
    <section className="dx ice" id="dcs-cooling-rel">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Related</span>
          <h2 className="dx-h">
            Explore related <span>capabilities</span>
          </h2>
        </div>
        <div className="dcs-rel" data-reveal="">
          <Link to="/data-center-ai" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="cpu" />
            </span>
            <b>AI Data Center</b>
            <span>GPU/HPC, liquid cooling and AI fabric</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-power" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="bolt" />
            </span>
            <b>Power</b>
            <span>Utility to rack: UPS, generation, distribution</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-sustainability" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="leaf" />
            </span>
            <b>{"Optimise & Sustain"}</b>
            <span>Energy, efficiency, capacity and sustainability</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-monitoring" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="headset" />
            </span>
            <b>{"DCIM & Monitoring"}</b>
            <span>BMS, EPMS, DCIM, CMMS and ITSM</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
        </div>
      </div>
    </section>
  );
}
