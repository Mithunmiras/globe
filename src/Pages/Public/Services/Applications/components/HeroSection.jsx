import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="ap-hero" aria-label="Enterprise Applications">
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-106-c61755c3d5.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-125-f05127486e.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-130-edfc4ce6db.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-106-c61755c3d5.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-131-e90af84eec.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">Services · Enterprise Applications</div>
          <h1>
            Enterprise <em>Applications</em>
          </h1>
          <p>
            ERP, SAP, Oracle, CRM, PLM, MES, custom software, application integration, testing and application support.
          </p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Map your landscape
              <Icon name="arrow" />
            </Link>
            <Link to="/applications#ap-thread" className="btn btn-ghost">
              See the digital thread
            </Link>
          </div>
        </div>
        <div className="vh-kpi">
          <div style={{ "--i": "0" }}>
            <b>5</b>
            <small>Application families</small>
          </div>
          <div style={{ "--i": "1" }}>
            <b>6</b>
            <small>Steps, order to delivery</small>
          </div>
          <div style={{ "--i": "2" }}>
            <b>L1–L3</b>
            <small>SLA-based AMS</small>
          </div>
          <div style={{ "--i": "3" }}>
            <b>GST</b>
            <small>Supported on every ERP</small>
          </div>
        </div>
      </div>
      <button type="button" className="vh-pp" aria-label="Pause background video">
        <Icon name="pause" />
      </button>
    </section>
  );
}
