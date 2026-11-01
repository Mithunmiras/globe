import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="ins-re-hero" aria-label="Industries">
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-11-93cb3d9c3a.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-63-e0e2762053.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-64-8ef8573e31.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-65-3cc02c21cb.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-139-515ebfee47.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">Industries</div>
          <h1>
            Resources <em>{"& Energy"}</em>
          </h1>
          <p>Rugged connectivity, OT security and operational data for remote, critical sites.</p>
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
