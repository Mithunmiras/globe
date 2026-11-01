import React from "react";
import Icon from "../../../../Component/Icon";

export default function ValuesSection() {
  return (
    <section className="band" id="about-values">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">What we stand for</div>
            <h2>
              Connecting technology <em>to a brighter tomorrow</em>
            </h2>
          </div>
          <p />
        </div>
        <div className="icards n6">
          <div className="icard" style={{ "--i": "0" }}>
            <div className="ic">
              <Icon name="users" />
            </div>
            <h3>Experienced team</h3>
            <p>Certified architects, engineers and consultants across data center, cloud, security and applications.</p>
          </div>
          <div className="icard" style={{ "--i": "1" }}>
            <div className="ic">
              <Icon name="gear" />
            </div>
            <h3>Proven methodology</h3>
            <p>Assess, design, deliver and run, with best-practice frameworks at every stage.</p>
          </div>
          <div className="icard" style={{ "--i": "2" }}>
            <div className="ic">
              <Icon name="compass" />
            </div>
            <h3>Tailored solutions</h3>
            <p>Designs built around your goals, budget, timelines and regulatory obligations.</p>
          </div>
          <div className="icard" style={{ "--i": "3" }}>
            <div className="ic">
              <Icon name="headset" />
            </div>
            <h3>End-to-end support</h3>
            <p>One accountable partner from strategy and build to 24x7 operations.</p>
          </div>
          <div className="icard" style={{ "--i": "4" }}>
            <div className="ic">
              <Icon name="chart" />
            </div>
            <h3>Measurable value</h3>
            <p>Outcomes tracked through SLAs, KPIs and reports your board can use.</p>
          </div>
          <div className="icard" style={{ "--i": "5" }}>
            <div className="ic">
              <Icon name="shield" />
            </div>
            <h3>Security by design</h3>
            <p>Controls built into every layer from day one, not added at the end.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
