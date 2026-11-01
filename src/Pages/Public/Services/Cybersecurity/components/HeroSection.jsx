import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="cs-hero" aria-label={"Cybersecurity & Resilience"}>
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-115-8fe11c0115.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-116-44e0443c50.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-117-b83935ce00.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-115-8fe11c0115.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-48-044e7f2cba.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">{"Services · Cybersecurity & Resilience"}</div>
          <h1>
            Securing businesses <em>for a safer, stronger tomorrow</em>
          </h1>
          <p>
            Security assessments, SOC, SIEM/XDR, identity, Zero Trust, endpoint security, GRC, compliance and incident
            response.
          </p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Request a gap assessment
              <Icon name="arrow" />
            </Link>
            <Link to="/cybersecurity#cs-data" className="btn btn-ghost">
              DPDP readiness
            </Link>
          </div>
        </div>
        <div className="vh-kpi">
          <div style={{ "--i": "0" }}>
            <b>24x7x365</b>
            <small>SOC monitoring</small>
          </div>
          <div style={{ "--i": "1" }}>
            <b>L1–L3</b>
            <small>Certified analysts</small>
          </div>
          <div style={{ "--i": "2" }}>
            <b>13 May 2027</b>
            <small>DPDP major obligations</small>
          </div>
          <div style={{ "--i": "3" }}>
            <b>₹250 Cr</b>
            <small>Maximum DPDP penalty</small>
          </div>
        </div>
      </div>
      <button type="button" className="vh-pp" aria-label="Pause background video">
        <Icon name="pause" />
      </button>
    </section>
  );
}
