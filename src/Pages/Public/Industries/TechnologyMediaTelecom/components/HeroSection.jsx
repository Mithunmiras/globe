import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="ins-cmt-hero" aria-label="Industries">
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-12-b050dbf75f.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-67-82ae21661c.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-69-27e063cc66.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-66-549e117934.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-137-4a1f35a95c.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">Industries</div>
          <h1>
            Communications, <em>{"Media & Technology"}</em>
          </h1>
          <p>Carrier-scale infrastructure, cloud-native platforms and AI-ready capacity.</p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Talk to an industry expert
              <Icon name="arrow" />
            </Link>
            <Link to="/industries" className="btn btn-ghost">
              All industries
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
