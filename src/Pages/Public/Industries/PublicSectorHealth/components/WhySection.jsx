import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="ins-ph-why">
      <div className="wrap">
        <nav className="dcs-crumb" aria-label="Breadcrumb">
          <Link to="/industries">Industries</Link>
          <Icon name="arrow" />
          <span>{"Public Sector & Health"}</span>
        </nav>
        <div className="dcs-intro">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Sector overview</span>
              <h2 className="dx-h">
                Public Sector <em>{"& Health"}</em>
              </h2>
              <p className="dx-lede">
                Public services, hospitals, labs and campuses run on systems that must be secure, auditable and
                available when people need them. We design and run technology that meets public-sector standards and
                clinical realities.
              </p>
            </div>
            <div className="dcs-roles">
              <small>Where DGC fits</small>
              <span>{"Government departments & PSUs"}</span>
              <span>Defence suppliers</span>
              <span>{"Hospitals & diagnostics"}</span>
              <span>{"Pharma & life sciences"}</span>
              <span>{"Universities & schools"}</span>
            </div>
          </div>
          <div>
            <h4 className="dcs-h4">Challenges we solve</h4>
            <div className="dcs-ch" data-reveal="">
              <div style={{ "--i": "0" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Ageing infrastructure supporting critical citizen and clinical services</p>
              </div>
              <div style={{ "--i": "1" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Sensitive personal and health data under strict protection rules</p>
              </div>
              <div style={{ "--i": "2" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Validation and documentation burden in regulated environments</p>
              </div>
              <div style={{ "--i": "3" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Limited in-house teams for 24x7 operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
