import React from "react";
import Icon from "../../../../../Component/Icon";

export default function OutcomeSection() {
  return (
    <section className="dx ice" id="cs-outcome">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="cx-2">
          <div>
            <div className="dx-head">
              <span className="dx-pill">The security outcome</span>
              <h2 className="dx-h">
                From fragmented controls <span>to measurable protection</span>
              </h2>
            </div>
            <div className="cx-out" data-reveal="">
              <div style={{ "--i": "0" }}>
                <span className="cx-out-ic">
                  <Icon name="target" />
                </span>
                <b>Reduce exposure</b>
                <p>Identify and prioritise critical risks</p>
              </div>
              <div style={{ "--i": "1" }}>
                <span className="cx-out-ic">
                  <Icon name="lock" />
                </span>
                <b>Protect trust</b>
                <p>Safeguard data, identities and software</p>
              </div>
              <div style={{ "--i": "2" }}>
                <span className="cx-out-ic">
                  <Icon name="check" />
                </span>
                <b>Prove readiness</b>
                <p>Demonstrate response, recovery and evidence</p>
              </div>
            </div>
          </div>
          <div>
            <div className="dx-head">
              <span className="dx-pill">Start with risk</span>
              <h2 className="dx-h">
                Start with risk — <span>not a product list</span>
              </h2>
              <p className="dx-lede">The programme connects business risks to controls, owners and evidence.</p>
            </div>
            <div className="cx-risks" data-reveal="">
              <div style={{ "--i": "0" }}>
                <span>
                  <Icon name="users" />
                  <i>!</i>
                </span>
                <b>Identity</b>
                <p>Stolen credentials · Excess privilege</p>
              </div>
              <div style={{ "--i": "1" }}>
                <span>
                  <Icon name="db" />
                  <i>!</i>
                </span>
                <b>Data</b>
                <p>Exposure or misuse of personal data</p>
              </div>
              <div style={{ "--i": "2" }}>
                <span>
                  <Icon name="code" />
                  <i>!</i>
                </span>
                <b>Software</b>
                <p>Vulnerable code · Leaked secrets</p>
              </div>
              <div style={{ "--i": "3" }}>
                <span>
                  <Icon name="gear" />
                  <i>!</i>
                </span>
                <b>Operations</b>
                <p>Missed alerts · Service disruption</p>
              </div>
            </div>
            <ol className="cx-pipe gl" data-reveal="">
              <li style={{ "--i": "0" }}>
                <Icon name="eye" />
                <b>Assess</b>
                <span />
              </li>
              <li style={{ "--i": "1" }}>
                <Icon name="target" />
                <b>Prioritise</b>
                <span />
              </li>
              <li style={{ "--i": "2" }}>
                <Icon name="gear" />
                <b>Implement</b>
                <span />
              </li>
              <li style={{ "--i": "3" }}>
                <Icon name="chart" />
                <b>Monitor</b>
                <span />
              </li>
              <li style={{ "--i": "4" }}>
                <Icon name="doc" />
                <b>Prove</b>
                <span />
              </li>
            </ol>
            <p className="dx-note">Each control has a defined owner, operating process and evidence trail.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
