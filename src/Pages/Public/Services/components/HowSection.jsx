import React from "react";
import Icon from "../../../../Component/Icon";

export default function HowSection() {
  return (
    <section className="band white" id="svc-how">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">Engagement</div>
            <h2>
              Advise. Implement. <em>Operate.</em>
            </h2>
          </div>
          <p />
        </div>
        <div className="icards n3">
          <div className="icard">
            <div className="ic">
              <Icon name="compass" />
            </div>
            <h3>Advise</h3>
            <p>Assess, strategise, roadmap</p>
          </div>
          <div className="icard">
            <div className="ic">
              <Icon name="rocket" />
            </div>
            <h3>Implement</h3>
            <p>Design, build, integrate</p>
          </div>
          <div className="icard">
            <div className="ic">
              <Icon name="headset" />
            </div>
            <h3>Operate</h3>
            <p>24x7 NOC, SOC, AMS</p>
          </div>
        </div>
        <div style={{ marginTop: "16px" }}>
          <div className="chiprow">
            <span className="chip">
              <Icon name="check" />
              Advisory
            </span>
            <span className="chip">
              <Icon name="check" />
              Fixed-scope projects
            </span>
            <span className="chip">
              <Icon name="check" />
              {"AMC & resident engineers"}
            </span>
            <span className="chip">
              <Icon name="check" />
              Managed services
            </span>
            <span className="chip">
              <Icon name="check" />
              Co-managed
            </span>
            <span className="chip">
              <Icon name="check" />
              Outcome-based
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
