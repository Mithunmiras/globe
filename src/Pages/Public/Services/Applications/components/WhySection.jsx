import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="ap-why">
      <div className="wrap">
        <div className="dx-why">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Why Digital Globe Consultancy</span>
              <h2 className="dx-h">
                From the design office <span>to the boardroom</span>
              </h2>
            </div>
            <Link to="/contact" className="btn btn-gold">
              Map your landscape
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="dx-wgrid">
            <div className="dx-w lead">
              <span className="dx-ic c-gold">
                <Icon name="layers" />
              </span>
              <b>Connected, not siloed</b>
              <span>ERP, CRM, PLM, MES linked</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="compass" />
              </span>
              <b>Vendor-neutral</b>
              <span>Right platform for you</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="factory" />
              </span>
              <b>Manufacturing know-how</b>
              <span>Plants, BOMs, shop floor</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="server" />
              </span>
              <b>Apps plus infrastructure</b>
              <span>One accountable partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
