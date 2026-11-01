import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="in-why">
      <div className="wrap">
        <div className="dx-why">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Why Digital Globe Consultancy</span>
              <h2 className="dx-h">
                One accountable partner, <span>from the rack to the boardroom.</span>
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
                <Icon name="hand" />
              </span>
              <b>End-to-end coverage</b>
              <span>Compute, network, security, workplace</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="compass" />
              </span>
              <b>OEM-neutral advice</b>
              <span>Designs fit to workload and budget</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="shield" />
              </span>
              <b>Secure by design</b>
              <span>Aligned with ISO 27001, NIST, DPDP</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="headset" />
              </span>
              <b>24x7 operations</b>
              <span>NOC and SOC after go-live</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
