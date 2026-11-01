import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="ins-ph-hero" aria-label="Industries">
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-09-c214ac8037.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-55-9fd3b842d2.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-56-7760ae68d1.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-57-e379f27ce4.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-138-93c2ad67a3.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">Industries</div>
          <h1>
            Public Sector <em>{"& Health"}</em>
          </h1>
          <p>Secure, auditable and always-available systems for citizens, patients and learners.</p>
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
