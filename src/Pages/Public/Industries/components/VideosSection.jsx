import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function VideosSection() {
  return (
    <section className="band vstrip-sec" id="ind-videos">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">Across sectors</div>
            <h2>
              Built for <em>how your industry runs</em>
            </h2>
          </div>
          <p>Banks, hospitals, factories, carriers and logistics networks run on the platforms we deliver.</p>
        </div>
        <div className="vs-grid">
          <Link to="/industries-financial-services" className="vs-card" style={{ "--i": "0" }}>
            <img className="vs-ph" src="/images/img-135-38c43d4347.jpg" alt="" loading="lazy" />
            <video
              muted
              loop
              playsInline
              preload="none"
              poster="/images/img-135-38c43d4347.jpg"
              aria-hidden="true"
              data-vs=""
            />
            <span className="vs-shade" />
            <span className="vs-live">
              <i />
              Watch
            </span>
            <span className="vs-tx">
              <b>Financial services</b>
              <small>Always-on, regulator-ready technology</small>
            </span>
            <span className="vs-go">
              <Icon name="arrow" />
            </span>
          </Link>
          <Link to="/industries-manufacturing" className="vs-card" style={{ "--i": "1" }}>
            <img className="vs-ph" src="/images/img-136-6439d7d57a.jpg" alt="" loading="lazy" />
            <video
              muted
              loop
              playsInline
              preload="none"
              poster="/images/img-136-6439d7d57a.jpg"
              aria-hidden="true"
              data-vs=""
            />
            <span className="vs-shade" />
            <span className="vs-live">
              <i />
              Watch
            </span>
            <span className="vs-tx">
              <b>{"Products & manufacturing"}</b>
              <small>Connected plants and secure OT/IT</small>
            </span>
            <span className="vs-go">
              <Icon name="arrow" />
            </span>
          </Link>
          <Link to="/industries-technology-media-telecom" className="vs-card" style={{ "--i": "2" }}>
            <img className="vs-ph" src="/images/img-137-4a1f35a95c.jpg" alt="" loading="lazy" />
            <video
              muted
              loop
              playsInline
              preload="none"
              poster="/images/img-137-4a1f35a95c.jpg"
              aria-hidden="true"
              data-vs=""
            />
            <span className="vs-shade" />
            <span className="vs-live">
              <i />
              Watch
            </span>
            <span className="vs-tx">
              <b>{"Communications & technology"}</b>
              <small>Carrier-scale and AI-ready capacity</small>
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
