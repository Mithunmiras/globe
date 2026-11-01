import React from "react";
import Icon from "../../../../../Component/Icon";

export default function JourneySection() {
  return (
    <section className="dx ice" id="cs-journey">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Your journey</span>
          <h2 className="dx-h">
            Your cybersecurity <span>journey with us</span>
          </h2>
          <p className="dx-lede">A structured path from assessment to continuous improvement.</p>
        </div>
        <ol className="dx-timeline n6">
          <li>
            <i>1</i>
            <b>Assess</b>
            <p>Evaluate risks and current state</p>
          </li>
          <li>
            <i>2</i>
            <b>Plan</b>
            <p>Define strategy, controls and roadmap</p>
          </li>
          <li>
            <i>3</i>
            <b>Implement</b>
            <p>Deploy solutions and enable teams</p>
          </li>
          <li>
            <i>4</i>
            <b>Monitor</b>
            <p>Continuous visibility and detection</p>
          </li>
          <li>
            <i>5</i>
            <b>Respond</b>
            <p>Investigate, contain and recover</p>
          </li>
          <li>
            <i>6</i>
            <b>Improve</b>
            <p>Optimise and stay ahead</p>
          </li>
        </ol>
        <div className="cx-to" data-reveal="">
          <div style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="shield" />
            </span>
            <b>Lower risk</b>
            <span>Prevent breaches and disruption</span>
          </div>
          <div style={{ "--i": "1" }}>
            <span className="dx-ic c-gold">
              <Icon name="gear" />
            </span>
            <b>Higher efficiency</b>
            <span>Secure and streamlined operations</span>
          </div>
          <div style={{ "--i": "2" }}>
            <span className="dx-ic c-green">
              <Icon name="chart" />
            </span>
            <b>Regulatory compliance</b>
            <span>Meet current and evolving requirements</span>
          </div>
          <div style={{ "--i": "3" }}>
            <span className="dx-ic c-purple">
              <Icon name="users" />
            </span>
            <b>Greater trust</b>
            <span>Build confidence with customers and partners</span>
          </div>
          <div style={{ "--i": "4" }}>
            <span className="dx-ic c-navy">
              <Icon name="headset" />
            </span>
            <b>Business continuity</b>
            <span>Stay resilient through evolving threats</span>
          </div>
          <div style={{ "--i": "5" }}>
            <span className="dx-ic c-orange">
              <Icon name="spark" />
            </span>
            <b>Long-term value</b>
            <span>Enable innovation with a secure foundation</span>
          </div>
        </div>
        <div className="cx-tri">
          <div>
            <Icon name="target" />
            <span>Lower risk and disruption</span>
          </div>
          <div>
            <Icon name="gear" />
            <span>Faster response</span>
          </div>
          <div>
            <Icon name="check" />
            <span>Regulatory confidence</span>
          </div>
          <div>
            <Icon name="chart" />
            <span>Stronger business resilience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
