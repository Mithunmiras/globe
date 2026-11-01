import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="in-hero" aria-label={"Data Center & Infrastructure"}>
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-102-02ff746614.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-04-1a2fe92a5e.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-107-0325cf742f.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-102-02ff746614.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-129-443dbd7e35.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">{"Services · Data Center & Infrastructure"}</div>
          <h1>
            IT <em>Infrastructure</em>
          </h1>
          <p>Data center, network, security and digital workplace, designed, deployed and managed end to end.</p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Map your roadmap
              <Icon name="arrow" />
            </Link>
            <Link to="/it-infrastructure#in-map" className="btn btn-ghost">
              See the four domains
            </Link>
          </div>
        </div>
        <div className="vh-kpi">
          <div style={{ "--i": "0" }}>
            <b>4</b>
            <small>Infrastructure domains</small>
          </div>
          <div style={{ "--i": "1" }}>
            <b>OEM-neutral</b>
            <small>Best fit per layer</small>
          </div>
          <div style={{ "--i": "2" }}>
            <b>24x7</b>
            <small>NOC and SOC</small>
          </div>
          <div style={{ "--i": "3" }}>
            <b>3-2-1-1-0</b>
            <small>Backup rule</small>
          </div>
        </div>
      </div>
      <button type="button" className="vh-pp" aria-label="Pause background video">
        <Icon name="pause" />
      </button>
    </section>
  );
}
