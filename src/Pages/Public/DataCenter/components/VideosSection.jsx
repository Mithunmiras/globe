import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function VideosSection() {
  return (
    <section className="band vstrip-sec" id="dc-videos">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">Inside the facility</div>
            <h2>
              From power to <em>cooling to compute</em>
            </h2>
          </div>
          <p>The critical systems behind every data center we design, build and operate.</p>
        </div>
        <div className="vs-grid">
          <Link to="/data-center-power" className="vs-card" style={{ "--i": "0" }}>
            <img className="vs-ph" src="/images/img-93-0006f51419.jpg" alt="" loading="lazy" />
            <video
              muted
              loop
              playsInline
              preload="none"
              poster="/images/img-93-0006f51419.jpg"
              aria-hidden="true"
              data-vs=""
            />
            <span className="vs-shade" />
            <span className="vs-live">
              <i />
              Watch
            </span>
            <span className="vs-tx">
              <b>Power</b>
              <small>Utility to rack: generation, UPS and distribution</small>
            </span>
            <span className="vs-go">
              <Icon name="arrow" />
            </span>
          </Link>
          <Link to="/data-center-cooling" className="vs-card" style={{ "--i": "1" }}>
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
              <b>Cooling</b>
              <small>Air, liquid and hybrid cooling for high density</small>
            </span>
            <span className="vs-go">
              <Icon name="arrow" />
            </span>
          </Link>
          <Link to="/data-center-it-network" className="vs-card" style={{ "--i": "2" }}>
            <img className="vs-ph" src="/images/img-94-837ab96f47.jpg" alt="" loading="lazy" />
            <video
              muted
              loop
              playsInline
              preload="none"
              poster="/images/img-94-837ab96f47.jpg"
              aria-hidden="true"
              data-vs=""
            />
            <span className="vs-shade" />
            <span className="vs-live">
              <i />
              Watch
            </span>
            <span className="vs-tx">
              <b>{"IT & network"}</b>
              <small>Compute, storage and the fabric that connects them</small>
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
