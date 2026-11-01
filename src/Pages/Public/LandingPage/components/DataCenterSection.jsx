import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function DataCenterSection() {
  return (
    <section className="band white" id="home-dc">
      <div className="wrap split">
        <div>
          <div className="kicker">Spotlight · Data center</div>
          <h2
            style={{ fontSize: "clamp(28px,3vw,44px)", fontWeight: "800", margin: "10px 0 14px", fontStretch: "92%" }}
          >
            From a one-line brief to a{" "}
            <em style={{ fontStyle: "normal", color: "var(--brand-ink)" }}>build-ready AI data center.</em>
          </h2>
          <div className="kv">
            <div>
              <span>Capacity range</span>
              <b>2–20 MW</b>
            </div>
            <div>
              <span>Rack density</span>
              <b>10–130+ kW</b>
            </div>
            <div>
              <span>Availability</span>
              <b>Tier III / IV</b>
            </div>
            <div>
              <span>Efficiency target</span>
              <b>PUE 1.3–1.5</b>
            </div>
          </div>
          <div style={{ marginTop: "22px" }}>
            <Link to="/data-center" className="btn btn-gold">
              Explore data center
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
        <div className="media">
          <img
            src="/images/img-45-f832ee6b68.jpg"
            alt="Illustration of a modern data center building"
            style={{ aspectRatio: "1/1" }}
          />
        </div>
      </div>
    </section>
  );
}
