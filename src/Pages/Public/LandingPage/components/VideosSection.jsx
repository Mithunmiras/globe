import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function VideosSection() {
  return (
    <section className="band vstrip-sec" id="home-videos">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">In action</div>
            <h2>
              Technology we <em>build and run</em>
            </h2>
          </div>
          <p>A look inside the environments we design, deliver and operate every day.</p>
        </div>
        <div className="vs-grid">
          <Link to="/data-center-ai" className="vs-card" style={{ "--i": "0" }}>
            <img className="vs-ph" src="/images/img-46-d505f44361.jpg" alt="" loading="lazy" />
            <video
              muted
              loop
              playsInline
              preload="none"
              poster="/images/img-46-d505f44361.jpg"
              aria-hidden="true"
              data-vs=""
            />
            <span className="vs-shade" />
            <span className="vs-live">
              <i />
              Watch
            </span>
            <span className="vs-tx">
              <b>AI-ready data centers</b>
              <small>GPU pods, liquid cooling and high-density racks</small>
            </span>
            <span className="vs-go">
              <Icon name="arrow" />
            </span>
          </Link>
          <Link to="/managed-services" className="vs-card" style={{ "--i": "1" }}>
            <img className="vs-ph" src="/images/img-47-c7e0953d53.jpg" alt="" loading="lazy" />
            <video
              muted
              loop
              playsInline
              preload="none"
              poster="/images/img-47-c7e0953d53.jpg"
              aria-hidden="true"
              data-vs=""
            />
            <span className="vs-shade" />
            <span className="vs-live">
              <i />
              Watch
            </span>
            <span className="vs-tx">
              <b>24x7 operations</b>
              <small>NOC and SOC monitoring with SLA reporting</small>
            </span>
            <span className="vs-go">
              <Icon name="arrow" />
            </span>
          </Link>
          <Link to="/cybersecurity" className="vs-card" style={{ "--i": "2" }}>
            <img className="vs-ph" src="/images/img-48-044e7f2cba.jpg" alt="" loading="lazy" />
            <video
              muted
              loop
              playsInline
              preload="none"
              poster="/images/img-48-044e7f2cba.jpg"
              aria-hidden="true"
              data-vs=""
            />
            <span className="vs-shade" />
            <span className="vs-live">
              <i />
              Watch
            </span>
            <span className="vs-tx">
              <b>Cyber resilience</b>
              <small>Security operations protecting every layer</small>
            </span>
            <span className="vs-go">
              <Icon name="arrow" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
