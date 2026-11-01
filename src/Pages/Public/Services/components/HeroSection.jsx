import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="svc-hero" aria-label="Services">
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-123-4cfe6e1479.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-125-f05127486e.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-05-749d8ea2f0.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-115-8fe11c0115.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-126-178fd0b429.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">Services</div>
          <h1>
            Consulting-led. <em>Delivered end to end.</em>
          </h1>
          <p>
            Eight services, one accountable team: from strategy and architecture to implementation, security and
            operations.
          </p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Talk to a consultant
              <Icon name="arrow" />
            </Link>
            <Link to="/consulting" className="btn btn-ghost">
              {"Consulting & Advisory"}
            </Link>
          </div>
        </div>
        <div className="vh-kpi">
          <div style={{ "--i": "0" }}>
            <b>8</b>
            <small>Services</small>
          </div>
          <div style={{ "--i": "1" }}>
            <b>Advise</b>
            <small>Strategy</small>
          </div>
          <div style={{ "--i": "2" }}>
            <b>Implement</b>
            <small>Delivery</small>
          </div>
          <div style={{ "--i": "3" }}>
            <b>Operate</b>
            <small>24x7</small>
          </div>
        </div>
      </div>
      <button type="button" className="vh-pp" aria-label="Pause background video">
        <Icon name="pause" />
      </button>
    </section>
  );
}
