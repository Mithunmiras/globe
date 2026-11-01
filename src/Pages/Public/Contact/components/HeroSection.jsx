import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="ct-hero" aria-label="Contact us">
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-96-34d405ccb8.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-123-4cfe6e1479.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-91-23c884b386.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-96-34d405ccb8.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-141-d0e653ee64.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">Contact us</div>
          <h1>
            Your vision. Our expertise. <em>Infinite possibilities.</em>
          </h1>
          <p>
            Tell us what you want to secure, modernize, connect or scale. Our sales team replies within one business
            day.
          </p>
          <div className="actions">
            <Link to="/contact#cf-name" className="btn btn-gold">
              Send an enquiry
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
        <div className="vh-kpi">
          <div style={{ "--i": "0" }}>
            <b>1 day</b>
            <small>Reply time</small>
          </div>
          <div style={{ "--i": "1" }}>
            <b>Bengaluru</b>
            <small>Head office</small>
          </div>
          <div style={{ "--i": "2" }}>
            <b>8</b>
            <small>Services</small>
          </div>
          <div style={{ "--i": "3" }}>
            <b>24x7</b>
            <small>Managed operations</small>
          </div>
        </div>
      </div>
      <button type="button" className="vh-pp" aria-label="Pause background video">
        <Icon name="pause" />
      </button>
    </section>
  );
}
