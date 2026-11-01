import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function RelatedSection() {
  return (
    <section className="dx ice" id="ins-cmt-rel">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Other sectors</span>
          <h2 className="dx-h">
            Explore other <span>sectors</span>
          </h2>
        </div>
        <div className="dcs-rel" data-reveal="">
          <Link to="/industries-financial-services" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="bank" />
            </span>
            <b>Financial Services</b>
            <span>Banking, Capital Markets, Insurance</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/industries-public-sector-health" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="health" />
            </span>
            <b>{"Public Sector & Health"}</b>
            <span>{"Government & Public Service, Aerospace & Defence, Healthcare & Hospitals"}</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/industries-manufacturing" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="factory" />
            </span>
            <b>{"Products & Manufacturing"}</b>
            <span>Automotive, Industrial Manufacturing, Chemicals</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/industries-energy-resources" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="leaf" />
            </span>
            <b>{"Resources & Energy"}</b>
            <span>{"Energy, Oil & Gas, Utilities & Power, Natural Resources & Mining"}</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
          <Link to="/industries-services-infrastructure" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="truck" />
            </span>
            <b>{"Services & Infrastructure"}</b>
            <span>{"Travel & Hospitality, Logistics & Warehousing, Real Estate & Construction"}</span>
            <i>
              <Icon name="arrow" />
            </i>
          </Link>
        </div>
      </div>
    </section>
  );
}
