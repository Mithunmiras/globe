import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function RelatedSection() {
  return (
    <section className="dx ice" id="dcs-fire-security-rel">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Related</span>
          <h2 className="dx-h">
            Explore related <span>capabilities</span>
          </h2>
        </div>
        <div className="dcs-rel" data-reveal="">
          <Link to="/data-center-monitoring" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="headset" />
            </span>
            <b>{"DCIM & Monitoring"}</b>
            <span>BMS, EPMS, DCIM, CMMS and ITSM</span>
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
          <Link to="/data-center-build" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="gear" />
            </span>
            <b>{"Build & Commission"}</b>
            <span>Procurement, installation, integration and testing</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-operations" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="eye" />
            </span>
            <b>{"Operate & Maintain"}</b>
            <span>24×7 operations, maintenance and monitoring</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
        </div>
      </div>
    </section>
  );
}
