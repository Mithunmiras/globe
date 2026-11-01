import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function ThanksSection() {
  return (
    <section className="dx dx-thanks">
      <div className="wrap">
        <div className="dx-cta-card">
          <i className="dx-dots" aria-hidden="true" /> <span className="dx-pill dark">Next step</span>
          <h2 className="dx-h">
            Turn alarms into <span>action.</span>
          </h2>
          <p className="dx-lede" style={{ color: "#C9D7F2", marginInline: "auto" }}>
            Connect your monitoring systems and give every alarm an owner.
          </p>
          <div className="dx-cta c">
            <Link to="/contact" className="btn btn-gold">
              Discuss a data center project
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
