import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="da-hero" aria-label={"Data, Analytics & AI"}>
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-106-c61755c3d5.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-120-48bcfc21e4.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-98-d1191f4707.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-106-c61755c3d5.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-90-8f2281b5c6.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">{"Services · Data, Analytics & AI"}</div>
          <h1>
            Data, Analytics <em>{"& AI"}</em>
          </h1>
          <p>
            Data engineering, data platforms, governance, BI dashboards, advanced analytics, GenAI, AI agents and MLOps.
          </p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Build your first dashboard
              <Icon name="arrow" />
            </Link>
            <Link to="/data-analytics#da-maturity" className="btn btn-ghost">
              From hindsight to foresight
            </Link>
          </div>
        </div>
        <div className="vh-kpi">
          <div style={{ "--i": "0" }}>
            <b>9</b>
            <small>Analytics capabilities</small>
          </div>
          <div style={{ "--i": "1" }}>
            <b>Bronze → Gold</b>
            <small>Lakehouse layers</small>
          </div>
          <div style={{ "--i": "2" }}>
            <b>1</b>
            <small>Definition per KPI</small>
          </div>
          <div style={{ "--i": "3" }}>
            <b>Tool-neutral</b>
            <small>Power BI to open source</small>
          </div>
        </div>
      </div>
      <button type="button" className="vh-pp" aria-label="Pause background video">
        <Icon name="pause" />
      </button>
    </section>
  );
}
