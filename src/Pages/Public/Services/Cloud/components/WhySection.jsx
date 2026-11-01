import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="cl-why">
      <div className="wrap">
        <div className="dx-why">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Why Digital Globe Consultancy</span>
              <h2 className="dx-h">
                Global clouds, Indian clouds, <span>one partner.</span>
              </h2>
            </div>
            <Link to="/contact" className="btn btn-gold">
              Plan your cloud journey
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="dx-wgrid">
            <div className="dx-w lead">
              <span className="dx-ic c-gold">
                <Icon name="compass" />
              </span>
              <b>Provider-neutral</b>
              <span>Advice based on your workloads</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="pin" />
              </span>
              <b>India-first compliance</b>
              <span>DPDP, CERT-In, sector rules</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="layers" />
              </span>
              <b>Infra-to-app depth</b>
              <span>Network, security, ERP, MES, PLM</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="chart" />
              </span>
              <b>Cost discipline</b>
              <span>FinOps from the first day</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
