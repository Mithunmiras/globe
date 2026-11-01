import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero" id="hero-video" aria-label="Digital Globe Consultancy">
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/img-14-f1e1170fde.jpg"
        aria-hidden="true"
      >
        <source src="/videos/video-01-c044a3a904.mp4" type="video/mp4" />
        <source src="/videos/video-02-cbc9ac4fa5.webm" type="video/webm" />
      </video>
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">Consulting-led technology transformation</div>
          <h1 className="tagline tg" aria-label="You dream it, we deliver it">
            <span className="tg-l" aria-hidden="true">
              <span className="tg-w">YOU</span> <span className="tg-w">DREAM</span>{" "}
              <span className="tg-it">
                <span className="tg-w">IT</span>
              </span>
            </span>
            <br />
            <em className="tg-l" aria-hidden="true">
              <span className="tg-w">WE</span> <span className="tg-w">DELIVER</span>{" "}
              <span className="tg-it two">
                <span className="tg-w">IT</span>
              </span>
            </em>
          </h1>
          <p>Technology consulting and delivery, from data center to AI.</p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Talk to a consultant
              <Icon name="arrow" />
            </Link>
            <Link to="/services" className="btn btn-ghost">
              Our services
            </Link>
          </div>
        </div>
        <div className="vh-chips">
          <Link to="/data-center">
            <span>
              <Icon name="dc" />
            </span>
            <p>
              <b>AI-ready data centers</b>
              <small>10 to 130+ kW per rack</small>
            </p>
          </Link>{" "}
          <Link to="/cybersecurity">
            <span>
              <Icon name="shield" />
            </span>
            <p>
              <b>{"24x7 SOC & DPDP"}</b>
              <small>Secure today, resilient tomorrow</small>
            </p>
          </Link>{" "}
          <Link to="/#home-cases">
            <span>
              <Icon name="cpu" />
            </span>
            <p>
              <b>3,700 GPUs delivered</b>
              <small>2.52 MW of AI heat removed</small>
            </p>
          </Link>
        </div>
      </div>
      <button type="button" className="vh-pp" aria-label="Pause background video">
        <Icon name="pause" />
      </button>
    </section>
  );
}
