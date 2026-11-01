import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="dcs-critical-hero" aria-label="Data Center">
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-100-5a0e451508.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-63-e0e2762053.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-06-a61d1013f2.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-101-85107ec5e3.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-46-d505f44361.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">Data Center</div>
          <h1>
            Critical <em>Infrastructure</em>
          </h1>
          <p>Power, cooling, building, fire, security, water and fuel — designed as one facility.</p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Discuss a data center project
              <Icon name="arrow" />
            </Link>
            <Link to="/data-center" className="btn btn-ghost">
              Data Center overview
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
