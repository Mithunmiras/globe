import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="dcs-power-hero" aria-label="Data Center">
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-63-e0e2762053.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-11-93cb3d9c3a.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-107-0325cf742f.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-02-9247f20ff2.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-93-0006f51419.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">Data Center</div>
          <h1>
            <em>Power</em>
          </h1>
          <p>Utility supply, substations, standby generation, UPS, distribution and rack power.</p>
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
