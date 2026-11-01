import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="dcs-monitoring-hero" aria-label="Data Center">
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-106-c61755c3d5.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-05-749d8ea2f0.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-68-d145d43354.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-120-48bcfc21e4.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-121-e86c5fbc8c.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">Data Center</div>
          <h1>
            {"DCIM &"} <em>Monitoring</em>
          </h1>
          <p>BMS, EPMS, DCIM, CMMS and ITSM connected, with cyber resilience built in.</p>
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
