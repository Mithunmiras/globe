import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function HeroSection() {
  return (
    <section className="vhero about-v" id="about-video" aria-label="About Digital Globe Consultancy">
      <video
        className="vh-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/img-77-1bf6c00533.jpg"
        aria-hidden="true"
      >
        <source src="/videos/video-03-a44ee9103d.mp4" type="video/mp4" />
        <source src="/videos/video-04-707f38e2eb.webm" type="video/webm" />
      </video>
      <div className="vh-shade" aria-hidden="true" />
      <div className="wrap vh-in">
        <div className="vh-copy">
          <div className="kicker">About us</div>
          <h1>
            {"Your Technology Transformation &"} <em>Managed Services Partner</em>
          </h1>
          <p>
            A Bengaluru-based, consulting-led technology partner. One partner, multiple technology layers, one
            accountable delivery model.
          </p>
          <div className="actions">
            <Link to="/contact" className="btn btn-gold">
              Work with us
              <Icon name="arrow" />
            </Link>
            <Link to="/about#leadership" className="btn btn-ghost">
              Meet the leadership
            </Link>
          </div>
        </div>
      </div>
      <button type="button" className="vh-pp" aria-label="Pause background video">
        <Icon name="pause" />
      </button>
    </section>
  );
}
