import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="ms-hero" aria-label="Managed IT Services">
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-05-749d8ea2f0.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-68-d145d43354.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-107-0325cf742f.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-05-749d8ea2f0.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-128-e34914f029.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">Services · Managed IT Services</div>
          <h1>
            Built by us. <em>Run by us.</em>
          </h1>
          <p>24x7 NOC, SOC, service desk, cloud and application support — one team, one SLA, one monthly report.</p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Book a service review
              <Icon name="arrow" />
            </Link>
            <Link to="/managed-services#ms-model" className="btn btn-ghost">
              See the operating model
            </Link>
          </div>
        </div>
        <div className="vh-kpi">
          <div style={{ "--i": "0" }}>
            <b>24x7</b>
            <small>{"NOC & SOC"}</small>
          </div>
          <div style={{ "--i": "1" }}>
            <b>8</b>
            <small>Managed services</small>
          </div>
          <div style={{ "--i": "2" }}>
            <b>L1–L3</b>
            <small>Support levels</small>
          </div>
          <div style={{ "--i": "3" }}>
            <b>ITIL</b>
            <small>Aligned processes</small>
          </div>
        </div>
      </div>
      <button type="button" className="vh-pp" aria-label="Pause background video">
        <Icon name="pause" />
      </button>
    </section>
  );
}
