import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function RelatedSection() {
  return (
    <section className="dx ice" id="dcs-strategy-rel">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Related</span>
          <h2 className="dx-h">
            Explore related <span>capabilities</span>
          </h2>
        </div>
        <div className="dcs-rel" data-reveal="">
          <Link to="/data-center-design" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="edit" />
            </span>
            <b>{"Design & Engineering"}</b>
            <span>Master planning and multidisciplinary engineering</span>
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
          <Link to="/data-center-expansion" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="trend" />
            </span>
            <b>{"Expand & Modernise"}</b>
            <span>Modular growth, AI workloads and future capacity</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/data-center-standards" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="check" />
            </span>
            <b>{"Standards & Assurance"}</b>
            <span>Certification pathways and evidence</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
        </div>
      </div>
    </section>
  );
}
