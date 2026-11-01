import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="ins-si-hero" aria-label="Industries">
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-70-2f356a82f8.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-13-d14043565a.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-71-dd1567c847.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-72-f856d51665.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-140-0a6ff3aa0b.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">Industries</div>
          <h1>
            Services <em>{"& Infrastructure"}</em>
          </h1>
          <p>Connected properties, real-time logistics and secure, productive service businesses.</p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Talk to an industry expert
              <Icon name="arrow" />
            </Link>
            <Link to="/industries" className="btn btn-ghost">
              All industries
            </Link>
          </div>
        </div>
        <div className="vh-kpi" />
      </div>
      <button type="button" className="vh-pp" aria-label="Pause background video">
        <Icon name="pause" />
      </button>
    </section>
  );
}
