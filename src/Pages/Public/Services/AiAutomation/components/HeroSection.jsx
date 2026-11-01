import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="ai-hero" aria-label={"Data, Analytics & AI"}>
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-07-62fce3caf3.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-100-5a0e451508.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-67-82ae21661c.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-07-62fce3caf3.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-132-d135455c6f.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">{"Services · Data, Analytics & AI"}</div>
          <h1>
            {"AI &"} <em>Automation</em>
          </h1>
          <p>
            Generative AI, AI agents, machine learning and intelligent automation, built safely into how your business
            runs.
          </p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Find your first AI win
              <Icon name="arrow" />
            </Link>
            <Link to="/ai-automation#ai-value" className="btn btn-ghost">
              See where the value is
            </Link>
          </div>
        </div>
        <div className="vh-kpi">
          <div style={{ "--i": "0" }}>
            <b>8</b>
            <small>Capabilities</small>
          </div>
          <div style={{ "--i": "1" }}>
            <b>4</b>
            <small>Ways to run AI</small>
          </div>
          <div style={{ "--i": "2" }}>
            <b>7</b>
            <small>Ready-to-pilot use cases</small>
          </div>
          <div style={{ "--i": "3" }}>
            <b>ISO/IEC 42001</b>
            <small>AI management aligned</small>
          </div>
        </div>
      </div>
      <button type="button" className="vh-pp" aria-label="Pause background video">
        <Icon name="pause" />
      </button>
    </section>
  );
}
