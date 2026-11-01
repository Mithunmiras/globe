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
            Let’s build a workplace <span>that just works.</span>
          </h2>
          <p className="dx-lede" style={{ color: "#C9D7F2", marginInline: "auto" }}>
            Start with a workplace assessment: devices, Microsoft 365, collaboration and automation opportunities.
          </p>
          <div className="dx-cta c">
            <Link to="/contact" className="btn btn-gold">
              Book an assessment
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
