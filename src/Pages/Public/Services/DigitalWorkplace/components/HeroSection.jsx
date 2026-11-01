import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="dw-hero" aria-label={"Digital Workplace & Automation"}>
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-72-f856d51665.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-68-d145d43354.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-106-c61755c3d5.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-72-f856d51665.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-133-2ac294e649.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">{"Services · Digital Workplace & Automation"}</div>
          <h1>
            Digital Workplace <em>{"& Automation"}</em>
          </h1>
          <p>
            End-user computing, collaboration, Microsoft 365, device management, workflow automation, RPA and IT service
            automation.
          </p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Plan your digital workplace
              <Icon name="arrow" />
            </Link>
            <Link to="/digital-workplace#dw-day" className="btn btn-ghost">
              See the employee journey
            </Link>
          </div>
        </div>
        <div className="vh-kpi">
          <div style={{ "--i": "0" }}>
            <b>M365</b>
            <small>Deploy, secure, adopt</small>
          </div>
          <div style={{ "--i": "1" }}>
            <b>Zero-touch</b>
            <small>Device rollout</small>
          </div>
          <div style={{ "--i": "2" }}>
            <b>RPA</b>
            <small>Bots and document AI</small>
          </div>
          <div style={{ "--i": "3" }}>
            <b>Self-service</b>
            <small>IT automation</small>
          </div>
        </div>
      </div>
      <button type="button" className="vh-pp" aria-label="Pause background video">
        <Icon name="pause" />
      </button>
    </section>
  );
}
