import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="ins-cmt-why">
      <div className="wrap">
        <nav className="dcs-crumb" aria-label="Breadcrumb">
          <Link to="/industries">Industries</Link>
          <Icon name="arrow" />
          <span>{"Communications, Media & Technology"}</span>
        </nav>
        <div className="dcs-intro">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Sector overview</span>
              <h2 className="dx-h">
                Communications, <em>{"Media & Technology"}</em>
              </h2>
              <p className="dx-lede">
                Telecom operators, media houses, software companies, GCCs and data center providers build their business
                on technology. We help them design, scale and operate the platforms and capacity their customers depend
                on.
              </p>
            </div>
            <div className="dcs-roles">
              <small>Where DGC fits</small>
              <span>{"Telecom operators & ISPs"}</span>
              <span>{"Media & OTT platforms"}</span>
              <span>{"Software & SaaS companies"}</span>
              <span>{"IT services firms & GCCs"}</span>
              <span>{"Colocation & hyperscale operators"}</span>
            </div>
          </div>
          <div>
            <h4 className="dcs-h4">Challenges we solve</h4>
            <div className="dcs-ch" data-reveal="">
              <div style={{ "--i": "0" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Capacity demand growing faster than build cycles</p>
              </div>
              <div style={{ "--i": "1" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>AI workloads needing new power, cooling and network design</p>
              </div>
              <div style={{ "--i": "2" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Cloud costs rising with scale</p>
              </div>
              <div style={{ "--i": "3" }}>
                <span>
                  <Icon name="target" />
                </span>
                <p>Customer and tenant expectations of 24x7 transparency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
