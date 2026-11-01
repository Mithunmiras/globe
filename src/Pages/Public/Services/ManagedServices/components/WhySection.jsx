import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="ms-why">
      <div className="wrap">
        <div className="dx-why">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Why Digital Globe Consultancy</span>
              <h2 className="dx-h">
                Built by us, <span>run by us.</span>
              </h2>
            </div>
            <Link to="/contact" className="btn btn-gold">
              Talk to our operations team
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="dx-wgrid">
            <div className="dx-w lead">
              <span className="dx-ic c-gold">
                <Icon name="layers" />
              </span>
              <b>One accountable team</b>
              <span>Infrastructure, security, cloud and apps together</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="eye" />
              </span>
              <b>24x7 coverage</b>
              <span>NOC, SOC and service desk around the clock</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="chart" />
              </span>
              <b>Measured SLAs</b>
              <span>Monthly reports and quarterly reviews</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="trend" />
              </span>
              <b>Continuous improvement</b>
              <span>Root causes fixed, routine work automated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
