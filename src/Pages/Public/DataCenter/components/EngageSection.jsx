import React from "react";
import Icon from "../../../../Component/Icon";

export default function EngageSection() {
  return (
    <section className="dx " id="dc-engage">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Engagement models</span>
          <h2 className="dx-h">
            Engage the way <span>your project needs</span>
          </h2>
        </div>
        <div className="dcs-eng" data-reveal="">
          <div style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="compass" />
            </span>
            <b>{"Advisory & design"}</b>
            <p>Feasibility, due diligence, design reviews, capacity planning, specifications and owner-side PM.</p>
            <em>Best for: Concept-stage projects needing independent advice</em>
          </div>
          <div style={{ "--i": "1" }}>
            <span className="dx-ic c-gold">
              <Icon name="layers" />
            </span>
            <b>Integrated project delivery</b>
            <p>
              Procurement coordination, engineering integration, project management, installation coordination and
              commissioning with qualified partners.
            </p>
            <em>Best for: Greenfield builds, expansion and complex upgrades</em>
          </div>
          <div style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="headset" />
            </span>
            <b>Managed operations</b>
            <p>
              Facility/IT monitoring, maintenance coordination, operating procedures, capacity reporting and service
              levels.
            </p>
            <em>Best for: Existing facilities seeking structured operations</em>
          </div>
          <div style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="trend" />
            </span>
            <b>{"Optimisation & expansion"}</b>
            <p>
              Energy/capacity assessments, cooling improvement, technology refresh, AI upgrades and phased expansion.
            </p>
            <em>Best for: Operating facilities and growing workloads</em>
          </div>
        </div>
      </div>
    </section>
  );
}
