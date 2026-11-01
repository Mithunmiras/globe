import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="co-why">
      <div className="wrap">
        <div className="dx-why">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Why Digital Globe Consultancy</span>
              <h2 className="dx-h">
                Advice from the people <span>who also deliver.</span>
              </h2>
            </div>
            <Link to="/contact" className="btn btn-gold">
              Book an assessment
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="dx-wgrid">
            <div className="dx-w lead">
              <span className="dx-ic c-gold">
                <Icon name="compass" />
              </span>
              <b>Vendor-neutral</b>
              <span>OEM-neutral, TCO-based recommendations</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="layers" />
              </span>
              <b>End-to-end depth</b>
              <span>Data center to applications, security and AI</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="pin" />
              </span>
              <b>India-first compliance</b>
              <span>DPDP, CERT-In and sector rules</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="rocket" />
              </span>
              <b>Plans that ship</b>
              <span>The same team can implement and operate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
