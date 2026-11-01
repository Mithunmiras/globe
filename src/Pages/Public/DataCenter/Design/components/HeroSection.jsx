import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="dcs-design-hero" aria-label="Data Center">
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-03-667c99b746.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-98-d1191f4707.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-45-f832ee6b68.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-91-23c884b386.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-99-c328eaed73.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">Data Center</div>
          <h1>
            {"Design &"} <em>Engineering</em>
          </h1>
          <p>Master planning and multidisciplinary engineering, coordinated as one.</p>
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
