import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="cs-why">
      <div className="wrap">
        <div className="dx-why">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Why Digital Globe Consultancy</span>
              <h2 className="dx-h">
                Partner for a <span>secure tomorrow</span>
              </h2>
            </div>
            <Link to="/contact" className="btn btn-gold">
              Request a gap assessment
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="dx-wgrid">
            <div className="dx-w lead">
              <span className="dx-ic c-gold">
                <Icon name="users" />
              </span>
              <b>Experienced team</b>
              <span>Certified experts across domains</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="gear" />
              </span>
              <b>Proven methodology</b>
              <span>Industry best practices and frameworks</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="spark" />
              </span>
              <b>Tailored solutions</b>
              <span>Aligned to your business needs</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="hand" />
              </span>
              <b>End-to-end support</b>
              <span>From strategy to operations</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="chart" />
              </span>
              <b>Measurable value</b>
              <span>Improved security and business outcomes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
