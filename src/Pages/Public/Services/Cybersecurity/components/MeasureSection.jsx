import React from "react";
import Icon from "../../../../../Component/Icon";

export default function MeasureSection() {
  return (
    <section className="dx " id="cs-measure">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Reporting</span>
          <h2 className="dx-h">
            Measure outcomes, <span>not just activity</span>
          </h2>
          <p className="dx-lede">A concise dashboard helps leadership understand exposure, action and progress.</p>
        </div>
        <div className="cx-kpis" data-reveal="">
          <div className="b" style={{ "--i": "0" }}>
            <span className="ic">
              <Icon name="shield" />
            </span>
            <b>Security posture</b>
            <p>Critical vulnerabilities · control coverage · residual risk</p>
            <i className="spark" aria-hidden="true">
              <em style={{ "--h": "40%" }} />
              <em style={{ "--h": "55%" }} />
              <em style={{ "--h": "48%" }} />
              <em style={{ "--h": "62%" }} />
              <em style={{ "--h": "58%" }} />
              <em style={{ "--h": "74%" }} />
              <em style={{ "--h": "70%" }} />
              <em style={{ "--h": "86%" }} />
            </i>
          </div>
          <div className="r" style={{ "--i": "1" }}>
            <span className="ic">
              <Icon name="bolt" />
            </span>
            <b>{"SOC & response"}</b>
            <p>Incidents · MTTD / MTTR · SLA adherence</p>
            <i className="spark" aria-hidden="true">
              <em style={{ "--h": "80%" }} />
              <em style={{ "--h": "72%" }} />
              <em style={{ "--h": "66%" }} />
              <em style={{ "--h": "70%" }} />
              <em style={{ "--h": "58%" }} />
              <em style={{ "--h": "52%" }} />
              <em style={{ "--h": "44%" }} />
              <em style={{ "--h": "36%" }} />
            </i>
          </div>
          <div className="g" style={{ "--i": "2" }}>
            <span className="ic">
              <Icon name="key" />
            </span>
            <b>Identity</b>
            <p>MFA coverage · privileged accounts · review completion</p>
            <i className="spark" aria-hidden="true">
              <em style={{ "--h": "40%" }} />
              <em style={{ "--h": "55%" }} />
              <em style={{ "--h": "48%" }} />
              <em style={{ "--h": "62%" }} />
              <em style={{ "--h": "58%" }} />
              <em style={{ "--h": "74%" }} />
              <em style={{ "--h": "70%" }} />
              <em style={{ "--h": "86%" }} />
            </i>
          </div>
          <div className="t" style={{ "--i": "3" }}>
            <span className="ic">
              <Icon name="db" />
            </span>
            <b>{"Data & privacy"}</b>
            <p>Classification coverage · encryption · privacy actions</p>
            <i className="spark" aria-hidden="true">
              <em style={{ "--h": "80%" }} />
              <em style={{ "--h": "72%" }} />
              <em style={{ "--h": "66%" }} />
              <em style={{ "--h": "70%" }} />
              <em style={{ "--h": "58%" }} />
              <em style={{ "--h": "52%" }} />
              <em style={{ "--h": "44%" }} />
              <em style={{ "--h": "36%" }} />
            </i>
          </div>
          <div className="b" style={{ "--i": "4" }}>
            <span className="ic">
              <Icon name="code" />
            </span>
            <b>Applications</b>
            <p>Open code findings · remediation ageing · secret exposure</p>
            <i className="spark" aria-hidden="true">
              <em style={{ "--h": "40%" }} />
              <em style={{ "--h": "55%" }} />
              <em style={{ "--h": "48%" }} />
              <em style={{ "--h": "62%" }} />
              <em style={{ "--h": "58%" }} />
              <em style={{ "--h": "74%" }} />
              <em style={{ "--h": "70%" }} />
              <em style={{ "--h": "86%" }} />
            </i>
          </div>
          <div className="g" style={{ "--i": "5" }}>
            <span className="ic">
              <Icon name="users" />
            </span>
            <b>People</b>
            <p>Training completion · assessment scores · phishing outcomes</p>
            <i className="spark" aria-hidden="true">
              <em style={{ "--h": "80%" }} />
              <em style={{ "--h": "72%" }} />
              <em style={{ "--h": "66%" }} />
              <em style={{ "--h": "70%" }} />
              <em style={{ "--h": "58%" }} />
              <em style={{ "--h": "52%" }} />
              <em style={{ "--h": "44%" }} />
              <em style={{ "--h": "36%" }} />
            </i>
          </div>
        </div>
        <div className="ix-bar">
          <small>Reporting cadence</small>
          <span>Operational dashboards for control owners; concise risk and progress view for leadership.</span>
        </div>
      </div>
    </section>
  );
}
