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
            Let’s map your <span>infrastructure roadmap.</span>
          </h2>
          <p className="dx-lede" style={{ color: "#C9D7F2", marginInline: "auto" }}>
            Start with an assessment workshop and a prioritized plan.
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
