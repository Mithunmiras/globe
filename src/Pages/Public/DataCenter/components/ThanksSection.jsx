import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function ThanksSection() {
  return (
    <section className="dx dx-thanks" id="dc-thanks">
      <div className="wrap">
        <div className="dx-cta-card">
          <i className="dx-dots" aria-hidden="true" />{" "}
          <span className="dx-pill dark">Partnering for a brighter tomorrow</span>
          <h2 className="dx-h">
            Together towards a <span>smarter tomorrow</span>
          </h2>
          <div className="dx-four">
            <div>
              <Icon name="users" />
              <b>People</b>
              <small>Stronger Together</small>
            </div>
            <div>
              <Icon name="gear" />
              <b>Technology</b>
              <small>Enable Progress</small>
            </div>
            <div>
              <Icon name="leaf" />
              <b>Sustainability</b>
              <small>A Greener Future</small>
            </div>
            <div>
              <Icon name="chart" />
              <b>Opportunities</b>
              <small>Beyond Today</small>
            </div>
          </div>
          <div className="dx-cta c">
            <Link to="/contact" className="btn btn-gold">
              Plan your facility
              <Icon name="arrow" />
            </Link>
            <Link to="/services" className="btn btn-ghost">
              All services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
