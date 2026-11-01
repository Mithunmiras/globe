import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="ins-pm-hero" aria-label="Industries">
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-58-9c90b247f2.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-10-c730a88655.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-62-7f5bf97400.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-61-a5418fa7f0.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-136-6439d7d57a.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">Industries</div>
          <h1>
            Products <em>{"& Manufacturing"}</em>
          </h1>
          <p>Connected plants, integrated supply chains and secure OT/IT for makers and sellers.</p>
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
