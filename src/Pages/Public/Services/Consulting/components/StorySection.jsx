import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function StorySection() {
  return (
    <section className="dx ice ix-story" id="co-story">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Consulting services</span>
          <h2 className="dx-h">
            Strategy, governance <span>and programmes</span>
          </h2>
          <p className="dx-lede">Choose a service on the left — the detail opens alongside.</p>
        </div>
        <div className="ix-grid" data-tabs="">
          <div className="ix-rail" role="tablist" aria-orientation="vertical" aria-label="Consulting services">
            <button type="button" role="tab" id="co-assess-t" aria-controls="co-assess" aria-selected="true">
              <Icon name="eye" />
              <span>Assessments</span>
            </button>
            <button type="button" role="tab" id="co-strategy-t" aria-controls="co-strategy" aria-selected="false">
              <Icon name="compass" />
              <span>{"Strategy & architecture"}</span>
            </button>
            <button type="button" role="tab" id="co-grc-t" aria-controls="co-grc" aria-selected="false">
              <Icon name="gov" />
              <span>{"Governance & compliance"}</span>
            </button>
            <button type="button" role="tab" id="co-vendor-t" aria-controls="co-vendor" aria-selected="false">
              <Icon name="briefcase" />
              <span>Vendor selection</span>
            </button>
            <button type="button" role="tab" id="co-pmo-t" aria-controls="co-pmo" aria-selected="false">
              <Icon name="layout" />
              <span>Programme management</span>
            </button>
            <button type="button" role="tab" id="co-cost-t" aria-controls="co-cost" aria-selected="false">
              <Icon name="chart" />
              <span>Cost optimisation</span>
            </button>
          </div>
          <div className="ix-main">
            <section className="ix-chapter" id="co-assess" role="tabpanel" aria-labelledby="co-assess-t">
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Assessments & workshops"}</h2>
                  <p className="dx-lede">
                    Start with clarity: fixed-scope assessments that end in a prioritised, costed plan.
                  </p>
                  <div className="ix-chips">
                    <span>Fixed scope</span>
                    <span>Workshops</span>
                    <span>Prioritised findings</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="co-as-list">
                <header>
                  <span className="dx-k">Assessments</span>
                  <h3>Eight ways to start</h3>
                </header>
                <div className="co-as" data-reveal="">
                  <div style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="server" />
                    </span>
                    <b>Infrastructure assessment</b>
                    <small>Inventory, health, gaps</small>
                    <p>
                      <span>You receive</span>Asset register · health score · refresh plan
                    </p>
                  </div>
                  <div style={{ "--i": "1" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="dc" />
                    </span>
                    <b>Data center feasibility</b>
                    <small>Site, power, design</small>
                    <p>
                      <span>You receive</span>Site options · capacity model · concept design
                    </p>
                  </div>
                  <div style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="shield" />
                    </span>
                    <b>Cyber gap assessment</b>
                    <small>Controls vs frameworks</small>
                    <p>
                      <span>You receive</span>Control gaps · risk register · remediation plan
                    </p>
                  </div>
                  <div style={{ "--i": "3" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="doc" />
                    </span>
                    <b>DPDP readiness sprint</b>
                    <small>2–3 weeks</small>
                    <p>
                      <span>You receive</span>Data map · consent and notice gaps · action plan
                    </p>
                  </div>
                  <div style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="cloud" />
                    </span>
                    <b>Cloud readiness</b>
                    <small>Provider fit, TCO</small>
                    <p>
                      <span>You receive</span>Workload fit · TCO model · migration waves
                    </p>
                  </div>
                  <div style={{ "--i": "5" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="apps" />
                    </span>
                    <b>Application assessment</b>
                    <small>Landscape and roadmap</small>
                    <p>
                      <span>You receive</span>Application map · rationalisation · roadmap
                    </p>
                  </div>
                  <div style={{ "--i": "6" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="spark" />
                    </span>
                    <b>AI readiness workshop</b>
                    <small>Use cases, data, pilot</small>
                    <p>
                      <span>You receive</span>Scored use cases · data check · pilot plan
                    </p>
                  </div>
                  <div style={{ "--i": "7" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="chart" />
                    </span>
                    <b>KPI workshop</b>
                    <small>Dashboard quick-start</small>
                    <p>
                      <span>You receive</span>KPI definitions · data sources · first dashboard
                    </p>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="co-as-how">
                <header>
                  <span className="dx-k">How an assessment runs</span>
                  <h3>Short, structured and evidence-based</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="target" />
                    <b>Scope</b>
                    <span>Objectives, systems, stakeholders</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="users" />
                    <b>Workshops</b>
                    <span>Interviews and walk-throughs</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="eye" />
                    <b>Evidence</b>
                    <span>Configs, logs, documents</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="chart" />
                    <b>Analysis</b>
                    <span>Gaps, risks, costs scored</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="doc" />
                    <b>Read-out</b>
                    <span>Findings and roadmap</span>
                  </li>
                </ol>
              </article>
            </section>
            <section className="ix-chapter" id="co-strategy" role="tabpanel" aria-labelledby="co-strategy-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Strategy & architecture"}</h2>
                  <p className="dx-lede">
                    Technology roadmaps tied to business goals, and a target architecture everyone can build to.
                  </p>
                  <div className="ix-chips">
                    <span>Roadmaps</span>
                    <span>Target architecture</span>
                    <span>Business case</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="co-ea">
                <header>
                  <span className="dx-k">Architecture</span>
                  <h3>One architecture across every layer</h3>
                </header>
                <div className="ix-layers" data-reveal="">
                  <div className="ix-layer" style={{ "--i": "0" }}>
                    <span className="ix-lic">
                      <Icon name="briefcase" />
                    </span>
                    <b>Business</b>
                    <span>Goals, capabilities, processes</span>
                    <i className="ix-pulse" />
                  </div>
                  <div className="ix-layer" style={{ "--i": "1" }}>
                    <span className="ix-lic">
                      <Icon name="apps" />
                    </span>
                    <b>Applications</b>
                    <span>ERP, CRM, PLM, custom</span>
                    <i className="ix-pulse" />
                  </div>
                  <div className="ix-layer" style={{ "--i": "2" }}>
                    <span className="ix-lic">
                      <Icon name="db" />
                    </span>
                    <b>Data</b>
                    <span>Platforms, ownership, quality</span>
                    <i className="ix-pulse" />
                  </div>
                  <div className="ix-layer" style={{ "--i": "3" }}>
                    <span className="ix-lic">
                      <Icon name="server" />
                    </span>
                    <b>Technology</b>
                    <span>Data center, cloud, network</span>
                    <i className="ix-pulse" />
                  </div>
                  <div className="ix-layer" style={{ "--i": "4" }}>
                    <span className="ix-lic">
                      <Icon name="shield" />
                    </span>
                    <b>Security</b>
                    <span>Identity, controls, resilience</span>
                    <i className="ix-pulse" />
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Architecture</small>
                  <span>Infrastructure, cloud, applications and security designed together, not in silos.</span>
                </div>
              </article>
              <article className="ix-scene" id="co-rm">
                <header>
                  <span className="dx-k">Roadmap</span>
                  <h3>A roadmap the business can fund</h3>
                </header>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="target" />
                    </span>
                    <b>Goals first</b>
                    <span>Every initiative traced to a business outcome</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layers" />
                    </span>
                    <b>Phased waves</b>
                    <span>Quick wins, foundations, then transformation</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="chart" />
                    </span>
                    <b>Business case</b>
                    <span>Costs, benefits and payback per phase</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="gov" />
                    </span>
                    <b>Decision gates</b>
                    <span>Clear points to review, stop or scale</span>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="co-grc" role="tabpanel" aria-labelledby="co-grc-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Governance, risk & compliance"}</h2>
                  <p className="dx-lede">
                    Clear ownership of technology risk, mapped to the frameworks your customers and regulators expect.
                  </p>
                  <div className="ix-chips">
                    <span>ISO 27001</span>
                    <span>NIST CSF</span>
                    <span>DPDP</span>
                    <span>CERT-In</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="co-grc-f">
                <header>
                  <span className="dx-k">Frameworks</span>
                  <h3>Frameworks we align to</h3>
                </header>
                <div className="cx-cov" data-reveal="">
                  <div className="b" style={{ "--i": "0" }}>
                    <span>
                      <Icon name="check" />
                      <b>ISO/IEC 27001</b>
                    </span>
                    <p>Information security management system</p>
                  </div>
                  <div className="g" style={{ "--i": "1" }}>
                    <span>
                      <Icon name="shield" />
                      <b>NIST CSF</b>
                    </span>
                    <p>Govern, identify, protect, detect, respond, recover</p>
                  </div>
                  <div className="o" style={{ "--i": "2" }}>
                    <span>
                      <Icon name="doc" />
                      <b>{"DPDP Act & Rules"}</b>
                    </span>
                    <p>Personal data obligations in India</p>
                  </div>
                  <div className="t" style={{ "--i": "3" }}>
                    <span>
                      <Icon name="bolt" />
                      <b>CERT-In directions</b>
                    </span>
                    <p>Incident reporting and log retention</p>
                  </div>
                  <div className="p" style={{ "--i": "4" }}>
                    <span>
                      <Icon name="bank" />
                      <b>Sector rules</b>
                    </span>
                    <p>RBI, SEBI, IRDAI expectations</p>
                  </div>
                  <div className="b" style={{ "--i": "5" }}>
                    <span>
                      <Icon name="globe" />
                      <b>Customer frameworks</b>
                    </span>
                    <p>SOC 2, PCI DSS for global clients</p>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="co-grc-p">
                <header>
                  <span className="dx-k">Programme</span>
                  <h3>From policy to evidence</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="eye" />
                    <b>Assess</b>
                    <span>Controls vs framework</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="target" />
                    <b>Prioritise</b>
                    <span>Risk-ranked gaps</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="doc" />
                    <b>Policies</b>
                    <span>Owners and procedures</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="gear" />
                    <b>Implement</b>
                    <span>Controls in place</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="check" />
                    <b>Evidence</b>
                    <span>Audit-ready records</span>
                  </li>
                </ol>
                <Link to="/cybersecurity" className="cl-more">
                  <Icon name="shield" />
                  <span>
                    <b>Cybersecurity</b>
                    <small>See the full security portfolio</small>
                  </span>
                  <Icon name="arrow" />
                </Link>
              </article>
            </section>
            <section className="ix-chapter" id="co-vendor" role="tabpanel" aria-labelledby="co-vendor-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Vendor selection & RFP"}</h2>
                  <p className="dx-lede">
                    OEM-neutral, TCO-based selection — from requirements to a signed contract with the right SLAs.
                  </p>
                  <div className="ix-chips">
                    <span>Requirements</span>
                    <span>RFP</span>
                    <span>Scoring</span>
                    <span>Negotiation</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="co-v-p">
                <header>
                  <span className="dx-k">Process</span>
                  <h3>A fair, documented selection</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="doc" />
                    <b>Requirements</b>
                    <span>Must-haves and nice-to-haves</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="users" />
                    <b>Long list</b>
                    <span>Market scan</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="mail" />
                    <b>RFP</b>
                    <span>Structured questions</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="chart" />
                    <b>Evaluate</b>
                    <span>Demos and scoring</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="briefcase" />
                    <b>Negotiate</b>
                    <span>Price and terms</span>
                  </li>
                  <li style={{ "--i": "5" }}>
                    <Icon name="check" />
                    <b>Contract</b>
                    <span>SLAs and exit terms</span>
                  </li>
                </ol>
              </article>
              <article className="ix-scene" id="co-v-s">
                <header>
                  <span className="dx-k">Scoring</span>
                  <h3>Decisions you can defend</h3>
                </header>
                <div className="ai-2">
                  <div className="co-score" data-reveal="">
                    <h4>Sample weighted scorecard</h4>
                    <div style={{ "--i": "0" }}>
                      <span>Functional fit</span>
                      <i style={{ "--w": "30%" }} />
                      <b>30%</b>
                    </div>
                    <div style={{ "--i": "1" }}>
                      <span>Total cost of ownership</span>
                      <i style={{ "--w": "25%" }} />
                      <b>25%</b>
                    </div>
                    <div style={{ "--i": "2" }}>
                      <span>{"Delivery & support in India"}</span>
                      <i style={{ "--w": "20%" }} />
                      <b>20%</b>
                    </div>
                    <div style={{ "--i": "3" }}>
                      <span>{"Security & compliance"}</span>
                      <i style={{ "--w": "15%" }} />
                      <b>15%</b>
                    </div>
                    <div style={{ "--i": "4" }}>
                      <span>{"Roadmap & viability"}</span>
                      <i style={{ "--w": "10%" }} />
                      <b>10%</b>
                    </div>
                    <small>Weights agreed with you before any vendor is scored.</small>
                  </div>
                  <div className="ix-list dark">
                    <h4>What you get</h4>
                    <ul>
                      <li>
                        <Icon name="check" />
                        Requirements catalogue
                      </li>
                      <li>
                        <Icon name="check" />
                        {"RFP pack and Q&A log"}
                      </li>
                      <li>
                        <Icon name="check" />
                        Scored comparison and TCO
                      </li>
                      <li>
                        <Icon name="check" />
                        Recommendation report
                      </li>
                      <li>
                        <Icon name="check" />
                        Contract and SLA checklist
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="co-pmo" role="tabpanel" aria-labelledby="co-pmo-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Programme management</h2>
                  <p className="dx-lede">Plan, track and report — with one view of scope, risk, cost and vendors.</p>
                  <div className="ix-chips">
                    <span>PMO</span>
                    <span>RAID</span>
                    <span>Reporting</span>
                    <span>Vendor governance</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="co-pmo-t">
                <header>
                  <span className="dx-k">PMO services</span>
                  <h3>Programmes that land on time</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layout" />
                    </span>
                    <b>{"Plan & schedule"}</b>
                    <span>Integrated plan across vendors</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="shield" />
                    </span>
                    <b>RAID management</b>
                    <span>Risks, actions, issues, decisions</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="chart" />
                    </span>
                    <b>Status reporting</b>
                    <span>Weekly status, monthly steering</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="users" />
                    </span>
                    <b>Vendor governance</b>
                    <span>Milestones, SLAs, acceptance</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="edit" />
                    </span>
                    <b>Change control</b>
                    <span>Scope and cost changes approved</span>
                  </div>
                  <div className="ix-tile dark" style={{ "--i": "5" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="target" />
                    </span>
                    <b>Benefits tracking</b>
                    <span>Outcomes measured after go-live</span>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="co-pmo-c">
                <header>
                  <span className="dx-k">Cadence</span>
                  <h3>A simple governance rhythm</h3>
                </header>
                <div className="cx-cols" data-reveal="">
                  <div className="cx-col b" style={{ "--i": "0" }}>
                    <div className="cx-col-h">
                      <Icon name="users" />
                      <b>Weekly</b>
                    </div>
                    <ul>
                      <li>Working-team status</li>
                      <li>RAID review</li>
                      <li>Next-week plan</li>
                    </ul>
                  </div>
                  <div className="cx-col g" style={{ "--i": "1" }}>
                    <div className="cx-col-h">
                      <Icon name="chart" />
                      <b>Monthly</b>
                    </div>
                    <ul>
                      <li>Steering committee</li>
                      <li>Budget vs actual</li>
                      <li>Decisions and escalations</li>
                    </ul>
                  </div>
                  <div className="cx-col t" style={{ "--i": "2" }}>
                    <div className="cx-col-h">
                      <Icon name="target" />
                      <b>Quarterly</b>
                    </div>
                    <ul>
                      <li>Business review</li>
                      <li>Benefits realised</li>
                      <li>Roadmap refresh</li>
                    </ul>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="co-cost" role="tabpanel" aria-labelledby="co-cost-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Cost optimisation</h2>
                  <p className="dx-lede">Find and keep savings across infrastructure, cloud, licences and contracts.</p>
                  <div className="ix-chips">
                    <span>TCO</span>
                    <span>Licences</span>
                    <span>Cloud FinOps</span>
                    <span>Contracts</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="co-cost-l">
                <header>
                  <span className="dx-k">Levers</span>
                  <h3>Where savings usually come from</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="key" />
                    </span>
                    <b>Licence rationalisation</b>
                    <span>Unused and duplicate licences removed</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="server" />
                    </span>
                    <b>Consolidation</b>
                    <span>Fewer servers, sites and tools</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="cloud" />
                    </span>
                    <b>Cloud FinOps</b>
                    <span>Rightsizing, commitments, schedules</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="briefcase" />
                    </span>
                    <b>Contract renegotiation</b>
                    <span>AMC, support and telecom terms</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="gear" />
                    </span>
                    <b>Automation</b>
                    <span>Manual effort reduced</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "5" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="headset" />
                    </span>
                    <b>Managed services</b>
                    <span>Predictable run costs</span>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="co-cost-m">
                <header>
                  <span className="dx-k">Method</span>
                  <h3>Baseline, act, sustain</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="chart" />
                    <b>Baseline</b>
                    <span>Spend by area</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="eye" />
                    <b>Identify</b>
                    <span>Savings opportunities</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="target" />
                    <b>Prioritise</b>
                    <span>Value vs effort</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="gear" />
                    <b>Act</b>
                    <span>Changes delivered</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="check" />
                    <b>Sustain</b>
                    <span>Monthly tracking</span>
                  </li>
                </ol>
              </article>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
