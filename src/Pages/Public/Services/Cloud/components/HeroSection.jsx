import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero sub-v has-sl" id="cl-hero" aria-label={"Cloud & Modernisation"}>
      <div className="vh-sl" aria-hidden="true" style={{ "--n": "4" }}>
        <img src="/images/img-125-f05127486e.jpg" alt="" style={{ "--k": "0" }} />
        <img src="/images/img-05-749d8ea2f0.jpg" alt="" style={{ "--k": "1" }} loading="lazy" />
        <img src="/images/img-96-34d405ccb8.jpg" alt="" style={{ "--k": "2" }} loading="lazy" />
        <img src="/images/img-125-f05127486e.jpg" alt="" style={{ "--k": "3" }} loading="lazy" />
      </div>
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/img-127-c9754dfe4b.jpg"
        aria-hidden="true"
      />
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">{"Services · Cloud & Modernisation"}</div>
          <h1>
            {"Cloud &"} <em>Modernisation</em>
          </h1>
          <p>
            Public, private and hybrid cloud, migration, cloud security, modernisation, FinOps, backup and disaster
            recovery.
          </p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Plan your cloud journey
              <Icon name="arrow" />
            </Link>
            <Link to="/cloud#cl-story" className="btn btn-ghost">
              See cloud services
            </Link>
          </div>
        </div>
        <div className="vh-kpi">
          <div style={{ "--i": "0" }}>
            <b>6</b>
            <small>Cloud services</small>
          </div>
          <div style={{ "--i": "1" }}>
            <b>4 + 8</b>
            <small>Global and Indian clouds</small>
          </div>
          <div style={{ "--i": "2" }}>
            <b>7 Rs</b>
            <small>Migration paths</small>
          </div>
          <div style={{ "--i": "3" }}>
            <b>24x7</b>
            <small>Managed cloud</small>
          </div>
        </div>
      </div>
      <button type="button" className="vh-pp" aria-label="Pause background video">
        <Icon name="pause" />
      </button>
    </section>
  );
}
