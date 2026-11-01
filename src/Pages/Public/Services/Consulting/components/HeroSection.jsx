import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="co-hero" aria-label={"Consulting & Advisory"}>
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-123-4cfe6e1479.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-120-48bcfc21e4.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-96-34d405ccb8.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-123-4cfe6e1479.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-78-ac660de31f.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">{"Services · Consulting & Advisory"}</div>
          <h1>
            Advice that ends <em>in delivery.</em>
          </h1>
          <p>Vendor-neutral assessments, strategy and roadmaps.</p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Book an assessment
              <Icon name="arrow" />
            </Link>
            <Link to="/consulting#co-approach" className="btn btn-ghost">
              Our approach
            </Link>
          </div>
        </div>
        <div className="vh-kpi">
          <div style={{ "--i": "0" }}>
            <b>8</b>
            <small>Assessments</small>
          </div>
          <div style={{ "--i": "1" }}>
            <b>2–3 wks</b>
            <small>Typical sprint</small>
          </div>
          <div style={{ "--i": "2" }}>
            <b>Vendor-neutral</b>
            <small>Advice</small>
          </div>
          <div style={{ "--i": "3" }}>
            <b>Board-ready</b>
            <small>Roadmaps</small>
          </div>
        </div>
      </div>
      <button type="button" className="vh-pp" aria-label="Pause background video">
        <Icon name="pause" />
      </button>
    </section>
  );
}
