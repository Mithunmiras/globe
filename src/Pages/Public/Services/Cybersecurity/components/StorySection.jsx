import React from "react";
import Icon from "../../../../../Component/Icon";

export default function StorySection() {
  return (
    <section className="dx ice ix-story" id="cs-story">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Security areas</span>
          <h2 className="dx-h">
            How we <span>secure your business</span>
          </h2>
          <p className="dx-lede">Pick an area on the left to see what we put in place.</p>
        </div>
        <div className="ix-grid" data-tabs="">
          <div className="ix-rail" role="tablist" aria-orientation="vertical" aria-label="Security areas">
            <button type="button" role="tab" id="cs-gov-t" aria-controls="cs-gov" aria-selected="true">
              <Icon name="gov" />
              <span>Governance</span>
            </button>
            <button type="button" role="tab" id="cs-identity-t" aria-controls="cs-identity" aria-selected="false">
              <Icon name="key" />
              <span>{"Identity & platforms"}</span>
            </button>
            <button type="button" role="tab" id="cs-software-t" aria-controls="cs-software" aria-selected="false">
              <Icon name="code" />
              <span>Secure software</span>
            </button>
            <button type="button" role="tab" id="cs-data-t" aria-controls="cs-data" aria-selected="false">
              <Icon name="db" />
              <span>{"Data & DPDP"}</span>
            </button>
            <button type="button" role="tab" id="cs-soc-t" aria-controls="cs-soc" aria-selected="false">
              <Icon name="eye" />
              <span>Security operations</span>
            </button>
            <button type="button" role="tab" id="cs-resilience-t" aria-controls="cs-resilience" aria-selected="false">
              <Icon name="gear" />
              <span>Resilience</span>
            </button>
            <button type="button" role="tab" id="cs-people-t" aria-controls="cs-people" aria-selected="false">
              <Icon name="users" />
              <span>{"People & suppliers"}</span>
            </button>
            <button type="button" role="tab" id="cs-awareness-t" aria-controls="cs-awareness" aria-selected="false">
              <Icon name="book" />
              <span>Awareness</span>
            </button>
          </div>
          <div className="ix-main">
            <section className="ix-chapter" id="cs-gov" role="tabpanel" aria-labelledby="cs-gov-t">
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Governance & operating model"}</h2>
                  <p className="dx-lede">
                    Clear accountability from leadership decisions to day-to-day control operation.
                  </p>
                  <div className="ix-chips">
                    <span>Security strategy</span>
                    <span>Risk</span>
                    <span>Policies</span>
                    <span>Compliance</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="cs-gov-model">
                <header>
                  <span className="dx-k">Operating model</span>
                  <h3>A simple operating model</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="gov" />
                    <b>Govern</b>
                    <span>Business risk · policy · risk acceptance · accountability</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="shield" />
                    <b>Protect</b>
                    <span>Identity · devices · network · applications · data</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="eye" />
                    <b>{"Detect & respond"}</b>
                    <span>Logging · monitoring · alert triage · incident playbooks</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="gear" />
                    <b>Recover</b>
                    <span>Continuity plans · tested backups · service restoration</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="chart" />
                    <b>{"Assure & improve"}</b>
                    <span>KPIs · audits · training evidence · lessons learned</span>
                  </li>
                </ol>
                <div className="cx-quote">
                  Governance sets direction; technical controls reduce exposure; <b>evidence demonstrates operation.</b>
                </div>
              </article>
              <article className="ix-scene" id="cs-gov-grc">
                <header>
                  <span className="dx-k">Governance</span>
                  <h3>{"Cyber risk, GRC & information security"}</h3>
                </header>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="doc" />
                    </span>
                    <b>Security governance</b>
                    <span>Policies, risk register, roles</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="check" />
                    </span>
                    <b>Compliance alignment</b>
                    <span>ISO 27001, NIST CSF, SOC 2, PCI DSS</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layers" />
                    </span>
                    <b>{"Evidence & assurance"}</b>
                    <span>Attestations, access and training records</span>
                  </div>
                  <div className="ix-tile dark" style={{ "--i": "3" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="users" />
                    </span>
                    <b>{"People & suppliers"}</b>
                    <span>Screening, due diligence, awareness</span>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="cs-identity" role="tabpanel" aria-labelledby="cs-identity-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Identity, network & cloud"}</h2>
                  <p className="dx-lede">
                    Layer identity, endpoint, network and cloud controls instead of relying on a single perimeter.
                  </p>
                  <div className="ix-chips">
                    <span>IAM</span>
                    <span>MFA</span>
                    <span>PAM</span>
                    <span>Zero Trust</span>
                    <span>EDR / XDR</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="cs-id-layers">
                <header>
                  <span className="dx-k">Control who connects</span>
                  <h3>Control who connects — and what they can reach</h3>
                </header>
                <div className="cx-cols" data-reveal="">
                  <div className="cx-col b" style={{ "--i": "0" }}>
                    <div className="cx-col-h">
                      <Icon name="key" />
                      <b>{"Identity & privilege"}</b>
                    </div>
                    <ul>
                      <li>MFA and SSO</li>
                      <li>Joiner / mover / leaver controls</li>
                      <li>Least privilege access</li>
                      <li>PAM vaulting and session monitoring</li>
                      <li>Periodic access reviews</li>
                    </ul>
                  </div>
                  <div className="cx-col n" style={{ "--i": "1" }}>
                    <div className="cx-col-h">
                      <Icon name="net" />
                      <b>{"Network & endpoint"}</b>
                    </div>
                    <ul>
                      <li>NGFW / IDS / IPS</li>
                      <li>Segmentation and secure remote access</li>
                      <li>EDR / XDR and device controls</li>
                      <li>Hardening, patching and vulnerability management</li>
                      <li>Centralised logs and alerting</li>
                    </ul>
                  </div>
                  <div className="cx-col t" style={{ "--i": "2" }}>
                    <div className="cx-col-h">
                      <Icon name="cloud" />
                      <b>{"Cloud & platform"}</b>
                    </div>
                    <ul>
                      <li>Secure configuration baselines</li>
                      <li>Cloud posture / workload controls</li>
                      <li>Identity-aware access</li>
                      <li>Backup and recovery controls</li>
                      <li>Continuous configuration monitoring</li>
                    </ul>
                  </div>
                </div>
                <div className="cx-evi">
                  <Icon name="doc" />
                  <span>
                    <b>Evidence:</b> access approvals, access-review records, security logs and remediation tracking.
                  </span>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="cs-software" role="tabpanel" aria-labelledby="cs-software-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Secure software</h2>
                  <p className="dx-lede">
                    Security checks begin before code is written and continue through release and operation.
                  </p>
                  <div className="ix-chips">
                    <span>SSDLC</span>
                    <span>SAST / DAST</span>
                    <span>Secrets</span>
                    <span>CI/CD</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="cs-sw-life">
                <header>
                  <span className="dx-k">Secure SDLC</span>
                  <h3>Build security into the software lifecycle</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="doc" />
                    <b>Plan</b>
                    <span>{"Risk & requirements"}</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="spark" />
                    <b>Design</b>
                    <span>Threat modelling</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="code" />
                    <b>Code</b>
                    <span>Secure coding</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="gear" />
                    <b>Build</b>
                    <span>{"Dependency & secret scan"}</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="eye" />
                    <b>Test</b>
                    <span>SAST / DAST / API</span>
                  </li>
                  <li style={{ "--i": "5" }}>
                    <Icon name="layers" />
                    <b>Release</b>
                    <span>{"Approval & signing"}</span>
                  </li>
                  <li style={{ "--i": "6" }}>
                    <Icon name="chart" />
                    <b>Operate</b>
                    <span>{"Monitor & remediate"}</span>
                  </li>
                </ol>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="db" />
                    </span>
                    <b>Repository governance</b>
                    <span>Branch protection · approved reviewers · access control</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="key" />
                    </span>
                    <b>Secrets management</b>
                    <span>Vaulting · scanning · rotation · CI/CD controls</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="check" />
                    </span>
                    <b>Assurance</b>
                    <span>Findings triaged · exceptions approved · fixes tracked</span>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="cs-data" role="tabpanel" aria-labelledby="cs-data-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Data protection & DPDP"}</h2>
                  <p className="dx-lede">
                    DPDP readiness is connected to practical data governance, security and response controls.
                  </p>
                  <div className="ix-chips">
                    <span>Classification</span>
                    <span>Encryption</span>
                    <span>DLP</span>
                    <span>Privacy</span>
                    <span>DPDP Act</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="cs-data-life">
                <header>
                  <span className="dx-k">Protect personal data</span>
                  <h3>Protect personal data across its lifecycle</h3>
                </header>
                <ol className="cx-loop" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <em>1</em>
                    <Icon name="eye" />
                    <b>Discover</b>
                    <span>Map personal data and processing purposes</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <em>2</em>
                    <Icon name="layers" />
                    <b>Classify</b>
                    <span>Public · internal · confidential · restricted</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <em>3</em>
                    <Icon name="lock" />
                    <b>Protect</b>
                    <span>Access controls · encryption · key management</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <em>4</em>
                    <Icon name="gov" />
                    <b>Govern</b>
                    <span>Retention · processor oversight · approved use</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <em>5</em>
                    <Icon name="users" />
                    <b>Respond</b>
                    <span>Rights / requests · incident workflow · escalation</span>
                  </li>
                  <li style={{ "--i": "5" }}>
                    <em>6</em>
                    <Icon name="x" />
                    <b>Dispose</b>
                    <span>Secure deletion · records of destruction</span>
                  </li>
                </ol>
                <div className="cx-sys">
                  <Icon name="gov" />
                  DPDP Act, 2023 and applicable Rules: translate legal obligations into assigned controls, workflows and
                  evidence.
                </div>
              </article>
              <article className="ix-scene" id="cs-data-dpdp">
                <header>
                  <span className="dx-k">{"DPDP Act, 2023 & Rules, 2025"}</span>
                  <h3>From compliance to confidence</h3>
                </header>
                <div className="cx-dates" data-reveal="">
                  <div style={{ "--i": "0" }}>
                    <b data-n="">13 Nov 2025</b>
                    <span>Rules notified</span>
                  </div>
                  <div style={{ "--i": "1" }}>
                    <b data-n="">13 Nov 2026</b>
                    <span>One-year provisions</span>
                  </div>
                  <div style={{ "--i": "2" }}>
                    <b data-n="">13 May 2027</b>
                    <span>Major obligations</span>
                  </div>
                  <div style={{ "--i": "3" }}>
                    <b data-n="">₹250 Cr</b>
                    <span>Maximum penalty</span>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Start here</small>
                  <span>{"2–3 week DPDP Readiness & Discovery Sprint"}</span>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="cs-soc" role="tabpanel" aria-labelledby="cs-soc-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Security operations</h2>
                  <p className="dx-lede">
                    A repeatable response path links monitoring, technical containment and business decision-making.
                  </p>
                  <div className="ix-chips">
                    <span>24x7 SOC</span>
                    <span>SIEM / SOAR</span>
                    <span>Incident response</span>
                    <span>MTTD / MTTR</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="cs-soc-path">
                <header>
                  <span className="dx-k">Security operations</span>
                  <h3>Detect early. Respond consistently.</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="db" />
                    <b>Collect</b>
                    <span>{"Logs & telemetry"}</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="chart" />
                    <b>Correlate</b>
                    <span>SIEM / analytics</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="bolt" />
                    <b>Triage</b>
                    <span>{"Severity & scope"}</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="lock" />
                    <b>Contain</b>
                    <span>{"Isolate & block"}</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="gear" />
                    <b>Recover</b>
                    <span>Restore service</span>
                  </li>
                  <li style={{ "--i": "5" }}>
                    <Icon name="spark" />
                    <b>Learn</b>
                    <span>Improve controls</span>
                  </li>
                </ol>
                <div className="ix-duo">
                  <div className="ix-card">
                    <span className="dx-ic c-blue">
                      <Icon name="chart" />
                    </span>
                    <h4>Operational view</h4>
                    <ul>
                      <li>
                        <Icon name="check" />
                        Alert volumes
                      </li>
                      <li>
                        <Icon name="check" />
                        MTTD / MTTR
                      </li>
                      <li>
                        <Icon name="check" />
                        SLA
                      </li>
                      <li>
                        <Icon name="check" />
                        Open actions
                      </li>
                    </ul>
                  </div>
                  <div className="ix-card dark">
                    <span className="dx-ic c-gold">
                      <Icon name="users" />
                    </span>
                    <h4>Leadership view</h4>
                    <ul>
                      <li>
                        <Icon name="check" />
                        Business impact
                      </li>
                      <li>
                        <Icon name="check" />
                        Material incidents
                      </li>
                      <li>
                        <Icon name="check" />
                        Residual risk
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cx-live" aria-hidden="true">
                  <span className="dot" />
                  24 x 7 x 365 monitoring by certified L1–L3 analysts
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="cs-resilience" role="tabpanel" aria-labelledby="cs-resilience-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Resilience</h2>
                  <p className="dx-lede">
                    Continuity and recovery are designed, assigned and tested before an incident.
                  </p>
                  <div className="ix-chips">
                    <span>BCP</span>
                    <span>DR</span>
                    <span>Cyber recovery</span>
                    <span>Exercises</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="cs-res-3">
                <header>
                  <span className="dx-k">Resilience</span>
                  <h3>Prepare for disruption — not just prevention</h3>
                </header>
                <div className="cx-cols" data-reveal="">
                  <div className="cx-col n" style={{ "--i": "0" }}>
                    <div className="cx-col-h">
                      <Icon name="shield" />
                      <b>Business continuity</b>
                    </div>
                    <ul>
                      <li>Business impact analysis</li>
                      <li>Critical process mapping</li>
                      <li>Crisis roles and communications</li>
                      <li>Continuity exercises</li>
                    </ul>
                  </div>
                  <div className="cx-col g" style={{ "--i": "1" }}>
                    <div className="cx-col-h">
                      <Icon name="db" />
                      <b>Disaster recovery</b>
                    </div>
                    <ul>
                      <li>Define RTO / RPO</li>
                      <li>Backup and replication design</li>
                      <li>Failover / fallback procedures</li>
                      <li>Recovery tests and sign-off</li>
                    </ul>
                  </div>
                  <div className="cx-col t" style={{ "--i": "2" }}>
                    <div className="cx-col-h">
                      <Icon name="cloud" />
                      <b>Cyber recovery</b>
                    </div>
                    <ul>
                      <li>Isolated / immutable backups</li>
                      <li>Ransomware recovery playbooks</li>
                      <li>Clean restore validation</li>
                      <li>Lessons learned</li>
                    </ul>
                  </div>
                </div>
                <div className="cx-evi">
                  <Icon name="doc" />
                  <span>
                    <b>Evidence:</b> approved plans, recovery objectives, test results, action owners and closure dates.
                  </span>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="cs-people" role="tabpanel" aria-labelledby="cs-people-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"People & suppliers"}</h2>
                  <p className="dx-lede">
                    Security boundaries include employees, contractors, subcontractors and downstream providers.
                  </p>
                  <div className="ix-chips">
                    <span>Personnel security</span>
                    <span>Supplier assurance</span>
                    <span>Governance evidence</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="cs-ppl-3">
                <header>
                  <span className="dx-k">{"People & third-party risk"}</span>
                  <h3>Extend assurance to people and suppliers</h3>
                </header>
                <div className="cx-cols" data-reveal="">
                  <div className="cx-col n" style={{ "--i": "0" }}>
                    <div className="cx-col-h">
                      <Icon name="users" />
                      <b>Personnel security</b>
                    </div>
                    <ul>
                      <li>Screening / verification status</li>
                      <li>Current personnel roster</li>
                      <li>Confidentiality agreements</li>
                      <li>Acceptable-use agreements</li>
                      <li>Joiner / mover / leaver controls</li>
                    </ul>
                  </div>
                  <div className="cx-col g" style={{ "--i": "1" }}>
                    <div className="cx-col-h">
                      <Icon name="hand" />
                      <b>Supplier assurance</b>
                    </div>
                    <ul>
                      <li>Subcontractor due diligence</li>
                      <li>Fourth-party dependencies</li>
                      <li>Risk classification</li>
                      <li>Contractual security clauses</li>
                      <li>Periodic reassessment</li>
                    </ul>
                  </div>
                  <div className="cx-col t" style={{ "--i": "2" }}>
                    <div className="cx-col-h">
                      <Icon name="doc" />
                      <b>Governance evidence</b>
                    </div>
                    <ul>
                      <li>Named owner and review date</li>
                      <li>Exceptions and remediation log</li>
                      <li>Incident notification obligations</li>
                      <li>Documented approvals</li>
                      <li>Audit-ready evidence pack</li>
                    </ul>
                  </div>
                </div>
                <div className="cx-tri">
                  <div>
                    <Icon name="check" />
                    <span>Clear accountability of access</span>
                  </div>
                  <div>
                    <Icon name="users" />
                    <span>Reduced third-party risks</span>
                  </div>
                  <div>
                    <Icon name="chart" />
                    <span>A defensible view for audits and compliance</span>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="cs-awareness" role="tabpanel" aria-labelledby="cs-awareness-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Cyber awareness</h2>
                  <p className="dx-lede">
                    A training and awareness platform turns learning into trackable behaviour and auditable evidence.
                  </p>
                  <div className="ix-chips">
                    <span>Phishing</span>
                    <span>Privacy / DPDP</span>
                    <span>Secure coding</span>
                    <span>Incident reporting</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="cs-aw">
                <header>
                  <span className="dx-k">Customer-specific requirement</span>
                  <h3>Cyber awareness that can be demonstrated</h3>
                </header>
                <div className="ix-split">
                  <ol className="cx-ladder" data-reveal="">
                    <li style={{ "--i": "0" }}>
                      <Icon name="users" />
                      <b>Assign</b>
                      <span>Role-based learning paths</span>
                    </li>
                    <li style={{ "--i": "1" }}>
                      <Icon name="book" />
                      <b>Learn</b>
                      <span>{"Short modules & scenarios"}</span>
                    </li>
                    <li style={{ "--i": "2" }}>
                      <Icon name="doc" />
                      <b>Assess</b>
                      <span>Quiz / pass threshold</span>
                    </li>
                    <li style={{ "--i": "3" }}>
                      <Icon name="check" />
                      <b>Certify</b>
                      <span>Certificate of completion</span>
                    </li>
                    <li style={{ "--i": "4" }}>
                      <Icon name="chart" />
                      <b>Report</b>
                      <span>{"Dashboard & evidence export"}</span>
                    </li>
                  </ol>
                  <div className="ix-list dark">
                    <h4>Evidence available</h4>
                    <ul>
                      <li>
                        <Icon name="check" />
                        Employee, role and department
                      </li>
                      <li>
                        <Icon name="check" />
                        Course assigned and due date
                      </li>
                      <li>
                        <Icon name="check" />
                        Completion timestamp and score
                      </li>
                      <li>
                        <Icon name="check" />
                        Certificate ID / downloadable certificate
                      </li>
                      <li>
                        <Icon name="check" />
                        Pending learners and refresher status
                      </li>
                      <li>
                        <Icon name="check" />
                        Management and audit reports
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cx-topics">
                  <small>Training topics</small>
                  <span>
                    <Icon name="shield" />
                    Information security
                  </span>
                  <span>
                    <Icon name="lock" />
                    Privacy / DPDP
                  </span>
                  <span>
                    <Icon name="mail" />
                    Phishing
                  </span>
                  <span>
                    <Icon name="users" />
                    Acceptable use
                  </span>
                  <span>
                    <Icon name="code" />
                    Secure coding
                  </span>
                  <span>
                    <Icon name="doc" />
                    Incident reporting
                  </span>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
