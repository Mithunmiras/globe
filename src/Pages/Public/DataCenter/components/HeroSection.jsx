import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="dc-cap" aria-label={"Data Center & Infrastructure"}>
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-02-9247f20ff2.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-05-749d8ea2f0.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-91-23c884b386.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-06-a61d1013f2.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-92-e52cca94f7.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">{"Services · Data Center & Infrastructure"}</div>
          <h1>
            Data Center <em>{"& Infrastructure"}</em>
          </h1>
          <p>
            Data centre design, power and cooling, racks, compute, storage, network, backup, DR, high-density and AI
            infrastructure.
          </p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Plan your facility
              <Icon name="arrow" />
            </Link>
            <Link to="/data-center#dc-life" className="btn btn-ghost">
              Explore the lifecycle
            </Link>
          </div>
        </div>
        <div className="vh-kpi">
          <div style={{ "--i": "0" }}>
            <b>2 – 20 MW</b>
            <small>Scalable capacity</small>
          </div>
          <div style={{ "--i": "1" }}>
            <b>99.995%+</b>
            <small>Uptime target</small>
          </div>
          <div style={{ "--i": "2" }}>
            <b>PUE 1.3 – 1.5</b>
            <small>Optimized efficiency</small>
          </div>
          <div style={{ "--i": "3" }}>
            <b>Tier III / IV</b>
            <small>Ready architecture</small>
          </div>
        </div>
      </div>
      <button type="button" className="vh-pp" aria-label="Pause background video">
        <Icon name="pause" />
      </button>
    </section>
  );
}
