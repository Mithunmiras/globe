import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function WhySection() {
  return (
    <section className="dx " id="dw-why">
      <div className="wrap">
        <div className="dx-why">
          <div>
            <div className="dx-head">
              <span className="dx-pill">Why Digital Globe Consultancy</span>
              <h2 className="dx-h">
                A better day at work, <span>for every employee.</span>
              </h2>
            </div>
            <Link to="/contact" className="btn btn-gold">
              Plan your digital workplace
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="dx-wgrid">
            <div className="dx-w lead">
              <span className="dx-ic c-gold">
                <Icon name="users" />
              </span>
              <b>People first</b>
              <span>Designed around how teams actually work</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="shield" />
              </span>
              <b>Secure by default</b>
              <span>Identity, devices and data protected</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="gear" />
              </span>
              <b>Automation built in</b>
              <span>Routine requests handled without tickets</span>
            </div>
            <div className="dx-w">
              <span className="dx-ic c-navy">
                <Icon name="headset" />
              </span>
              <b>One support team</b>
              <span>Desk, field and 24x7 operations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
