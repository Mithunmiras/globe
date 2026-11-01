import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function VideosSection() {
  return (
    <section className="band vstrip-sec" id="svc-videos">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">In action</div>
            <h2>
              Eight services, <em>one partner</em>
            </h2>
          </div>
          <p>Consulting, infrastructure, security, cloud, applications, data and operations, delivered together.</p>
        </div>
        <div className="vs-grid">
          <Link to="/cloud" className="vs-card" style={{ "--i": "0" }}>
            <img className="vs-ph" src="/images/img-127-c9754dfe4b.jpg" alt="" loading="lazy" />
            <video
              muted
              loop
              playsInline
              preload="none"
              poster="/images/img-127-c9754dfe4b.jpg"
              aria-hidden="true"
              data-vs=""
            />
            <span className="vs-shade" />
            <span className="vs-live">
              <i />
              Watch
            </span>
            <span className="vs-tx">
              <b>{"Cloud & modernisation"}</b>
              <small>Landing zones, migration and FinOps</small>
            </span>
            <span className="vs-go">
              <Icon name="arrow" />
            </span>
          </Link>
          <Link to="/data-analytics" className="vs-card" style={{ "--i": "1" }}>
            <img className="vs-ph" src="/images/img-90-8f2281b5c6.jpg" alt="" loading="lazy" />
            <video
              muted
              loop
              playsInline
              preload="none"
              poster="/images/img-90-8f2281b5c6.jpg"
              aria-hidden="true"
              data-vs=""
            />
            <span className="vs-shade" />
            <span className="vs-live">
              <i />
              Watch
            </span>
            <span className="vs-tx">
              <b>{"Data, analytics & AI"}</b>
              <small>Platforms, dashboards and GenAI</small>
            </span>
            <span className="vs-go">
              <Icon name="arrow" />
            </span>
          </Link>
          <Link to="/managed-services" className="vs-card" style={{ "--i": "2" }}>
            <img className="vs-ph" src="/images/img-128-e34914f029.jpg" alt="" loading="lazy" />
            <video
              muted
              loop
              playsInline
              preload="none"
              poster="/images/img-128-e34914f029.jpg"
              aria-hidden="true"
              data-vs=""
            />
            <span className="vs-shade" />
            <span className="vs-live">
              <i />
              Watch
            </span>
            <span className="vs-tx">
              <b>Managed IT services</b>
              <small>Round-the-clock operations with clear SLAs</small>
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
