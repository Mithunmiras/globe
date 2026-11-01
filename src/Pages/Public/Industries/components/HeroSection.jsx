import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="ind-hero" aria-label="Industries">
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-08-d45099ac5c.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-58-9c90b247f2.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-12-b050dbf75f.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-55-9fd3b842d2.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-134-260ad40046.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">Industries</div>
          <h1>
            Technology that fits <em>how your industry runs.</em>
          </h1>
          <p>28 industries, six sector groups, one accountable partner.</p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Talk to an industry expert
              <Icon name="arrow" />
            </Link>
            <Link to="/industries#ind-grid" className="btn btn-ghost">
              Explore by sector
            </Link>
          </div>
        </div>
        <div className="vh-kpi">
          <div style={{ "--i": "0" }}>
            <b>28</b>
            <small>Industries served</small>
          </div>
          <div style={{ "--i": "1" }}>
            <b>6</b>
            <small>Sector groups</small>
          </div>
          <div style={{ "--i": "2" }}>
            <b>8</b>
            <small>Services</small>
          </div>
          <div style={{ "--i": "3" }}>
            <b>24x7</b>
            <small>{"NOC & SOC"}</small>
          </div>
        </div>
      </div>
      <button type="button" className="vh-pp" aria-label="Pause background video">
        <Icon name="pause" />
      </button>
    </section>
  );
}
