import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function StorySection() {
  return (
    <section className="dx ice ix-story" id="dw-story">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Digital workplace services</span>
          <h2 className="dx-h">
            Devices, collaboration <span>and automation</span>
          </h2>
          <p className="dx-lede">Choose a service on the left — the detail opens alongside.</p>
        </div>
        <div className="ix-grid" data-tabs="">
          <div className="ix-rail" role="tablist" aria-orientation="vertical" aria-label="Digital workplace services">
            <button type="button" role="tab" id="dw-euc-t" aria-controls="dw-euc" aria-selected="true">
              <Icon name="laptop" />
              <span>End-user computing</span>
            </button>
            <button type="button" role="tab" id="dw-collab-t" aria-controls="dw-collab" aria-selected="false">
              <Icon name="video" />
              <span>Collaboration</span>
            </button>
            <button type="button" role="tab" id="dw-m365-t" aria-controls="dw-m365" aria-selected="false">
              <Icon name="mail" />
              <span>Microsoft 365</span>
            </button>
            <button type="button" role="tab" id="dw-mdm-t" aria-controls="dw-mdm" aria-selected="false">
              <Icon name="phone" />
              <span>Device management</span>
            </button>
            <button type="button" role="tab" id="dw-auto-t" aria-controls="dw-auto" aria-selected="false">
              <Icon name="layout" />
              <span>{"Workflow & RPA"}</span>
            </button>
            <button type="button" role="tab" id="dw-itsa-t" aria-controls="dw-itsa" aria-selected="false">
              <Icon name="headset" />
              <span>IT service automation</span>
            </button>
          </div>
          <div className="ix-main">
            <section className="ix-chapter" id="dw-euc" role="tabpanel" aria-labelledby="dw-euc-t">
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">End-user computing</h2>
                  <p className="dx-lede">
                    The right device for every role, delivered ready to work and supported through its life.
                  </p>
                  <div className="ix-chips">
                    <span>{"Laptops & desktops"}</span>
                    <span>VDI / DaaS</span>
                    <span>Lifecycle</span>
                    <span>Field support</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="dw-euc-l">
                <header>
                  <span className="dx-k">Device lifecycle</span>
                  <h3>From procurement to disposal</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="cart" />
                    <b>Procure</b>
                    <span>Standard catalogue by role</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="gear" />
                    <b>{"Image & enrol"}</b>
                    <span>Zero-touch with Autopilot</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="truck" />
                    <b>Deploy</b>
                    <span>Ship, install, hand over</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="headset" />
                    <b>Support</b>
                    <span>Desk and field engineers</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="trash" />
                    <b>Retire</b>
                    <span>Certified wipe, e-waste</span>
                  </li>
                </ol>
              </article>
              <article className="ix-scene" id="dw-euc-t">
                <header>
                  <span className="dx-k">Services</span>
                  <h3>Computing for every role</h3>
                </header>
                <div className="ix-tiles c2" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="laptop" />
                    </span>
                    <b>{"Laptops & desktops"}</b>
                    <span>Business, engineering and kiosk devices</span>
                    <em>Dell · HP · Lenovo · Apple</em>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="server" />
                    </span>
                    <b>{"VDI & DaaS"}</b>
                    <span>Secure desktops from the data center or cloud</span>
                    <em>Citrix · Omnissa · Azure Virtual Desktop · Windows 365</em>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="cpu" />
                    </span>
                    <b>Engineering workstations</b>
                    <span>Certified for CAD and simulation</span>
                    <em>Dell Precision · HP Z · ThinkStation</em>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="pin" />
                    </span>
                    <b>{"Field & IMAC"}</b>
                    <span>Install, move, add, change at every site</span>
                    <em>Scheduled and on-call visits</em>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="dw-collab" role="tabpanel" aria-labelledby="dw-collab-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Collaboration</h2>
                  <p className="dx-lede">Suites, video rooms and boardrooms that start with one touch.</p>
                  <div className="ix-chips">
                    <span>Teams</span>
                    <span>Google Workspace</span>
                    <span>{"Webex & Zoom"}</span>
                    <span>{"Rooms & AV"}</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="dw-co">
                <header>
                  <span className="dx-k">Collaboration</span>
                  <h3>Meet, chat and share — anywhere</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="mail" />
                    </span>
                    <b>Collaboration suites</b>
                    <span>Teams, Google Workspace, Zoho Workplace</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="video" />
                    </span>
                    <b>Video rooms</b>
                    <span>Huddle to large rooms, one-touch join</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="building" />
                    </span>
                    <b>Boardroom AV</b>
                    <span>Displays, cameras, audio, control</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="phone" />
                    </span>
                    <b>Calling</b>
                    <span>Teams Phone, Webex Calling, SIP trunks</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="laptop" />
                    </span>
                    <b>{"BYOD & BYOM"}</b>
                    <span>Bring your own device or meeting</span>
                  </div>
                  <div className="ix-tile dark" style={{ "--i": "5" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="chart" />
                    </span>
                    <b>Adoption</b>
                    <span>Training, champions, usage reports</span>
                  </div>
                </div>
                <Link to="/it-infrastructure#in-collab" className="cl-more">
                  <Icon name="video" />
                  <span>
                    <b>Rooms in detail</b>
                    <small>See meeting-room designs and boardroom AV</small>
                  </span>
                  <Icon name="arrow" />
                </Link>
              </article>
            </section>
            <section className="ix-chapter" id="dw-m365" role="tabpanel" aria-labelledby="dw-m365-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Microsoft 365</h2>
                  <p className="dx-lede">Deployed, migrated, secured and adopted — with Copilot readiness built in.</p>
                  <div className="ix-chips">
                    <span>Migration</span>
                    <span>Security</span>
                    <span>Governance</span>
                    <span>Copilot</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="dw-m-p">
                <header>
                  <span className="dx-k">Programme</span>
                  <h3>From mailbox to modern workplace</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="eye" />
                    <b>Assess</b>
                    <span>Licences, data, risks</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="upload" />
                    <b>Migrate</b>
                    <span>Mail, files, sites</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="shield" />
                    <b>Secure</b>
                    <span>Identity, devices, data</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="users" />
                    <b>Adopt</b>
                    <span>Training, champions</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="spark" />
                    <b>Copilot-ready</b>
                    <span>Permissions cleaned</span>
                  </li>
                </ol>
              </article>
              <article className="ix-scene" id="dw-m-s">
                <header>
                  <span className="dx-k">Services</span>
                  <h3>Microsoft 365, done properly</h3>
                </header>
                <div className="ai-2">
                  <div className="ix-list dark">
                    <h4>{"Security & governance"}</h4>
                    <ul>
                      <li>
                        <Icon name="check" />
                        Entra ID, MFA, conditional access
                      </li>
                      <li>
                        <Icon name="check" />
                        Defender for Office and endpoints
                      </li>
                      <li>
                        <Icon name="check" />
                        Purview labels and DLP
                      </li>
                      <li>
                        <Icon name="check" />
                        Retention and eDiscovery
                      </li>
                      <li>
                        <Icon name="check" />
                        Guest and sharing policies
                      </li>
                    </ul>
                  </div>
                  <div className="ix-tiles c2" data-reveal="">
                    <div className="ix-tile" style={{ "--i": "0" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="upload" />
                      </span>
                      <b>Migrations</b>
                      <span>Google, Exchange, file shares to M365</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "1" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="layers" />
                      </span>
                      <b>{"SharePoint & Teams"}</b>
                      <span>Intranet, sites, team structure</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "2" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="key" />
                      </span>
                      <b>Licence optimisation</b>
                      <span>Right plan for each user</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "3" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="spark" />
                      </span>
                      <b>Copilot readiness</b>
                      <span>Data hygiene, pilots, training</span>
                    </div>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="dw-mdm" role="tabpanel" aria-labelledby="dw-mdm-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Device management</h2>
                  <p className="dx-lede">
                    Every device enrolled, compliant and recoverable — company-owned or personal.
                  </p>
                  <div className="ix-chips">
                    <span>Intune</span>
                    <span>Zero-touch</span>
                    <span>Compliance</span>
                    <span>BYOD</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="dw-md">
                <header>
                  <span className="dx-k">Device management</span>
                  <h3>Manage every endpoint from one console</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="gear" />
                    </span>
                    <b>Zero-touch enrolment</b>
                    <span>Autopilot, Apple Business Manager, Android Enterprise</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="check" />
                    </span>
                    <b>Compliance policies</b>
                    <span>Encryption, OS versions, screen lock</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="upload" />
                    </span>
                    <b>{"Patching & apps"}</b>
                    <span>Updates and app delivery on schedule</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="phone" />
                    </span>
                    <b>BYOD protection</b>
                    <span>Work data separated from personal</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="lock" />
                    </span>
                    <b>Lost or stolen</b>
                    <span>Remote lock and wipe</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "5" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="chart" />
                    </span>
                    <b>Reporting</b>
                    <span>Inventory, health and risk</span>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Platforms</small>
                  <span>Microsoft Intune · Jamf · Hexnode · ManageEngine Endpoint Central · Omnissa Workspace ONE</span>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="dw-auto" role="tabpanel" aria-labelledby="dw-auto-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Workflow automation & RPA"}</h2>
                  <p className="dx-lede">
                    Digital approvals, software robots and document AI that remove routine work.
                  </p>
                  <div className="ix-chips">
                    <span>Workflow</span>
                    <span>RPA</span>
                    <span>Document AI</span>
                    <span>Process mining</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="dw-lad">
                <header>
                  <span className="dx-k">The automation ladder</span>
                  <h3>Start simple, then add intelligence</h3>
                </header>
                <div className="ai-ladder" data-reveal="">
                  <div style={{ "--i": "0" }}>
                    <span>
                      <Icon name="layout" />
                    </span>
                    <b>Workflow</b>
                    <small>Rules, forms and approvals</small>
                  </div>
                  <div style={{ "--i": "1" }}>
                    <span>
                      <Icon name="gear" />
                    </span>
                    <b>RPA bots</b>
                    <small>Software robots that work screens like a person</small>
                  </div>
                  <div style={{ "--i": "2" }}>
                    <span>
                      <Icon name="doc" />
                    </span>
                    <b>Document AI</b>
                    <small>Reads invoices, orders and forms</small>
                  </div>
                  <div style={{ "--i": "3" }}>
                    <span>
                      <Icon name="spark" />
                    </span>
                    <b>AI agents</b>
                    <small>Handle exceptions that need judgement, with approvals</small>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="dw-wf">
                <header>
                  <span className="dx-k">{"Workflow & RPA"}</span>
                  <h3>Where automation pays back fastest</h3>
                </header>
                <div className="ai-2">
                  <div className="ix-list dark">
                    <h4>Good candidates</h4>
                    <ul>
                      <li>
                        <Icon name="check" />
                        High volume, done daily
                      </li>
                      <li>
                        <Icon name="check" />
                        Clear rules, few exceptions
                      </li>
                      <li>
                        <Icon name="check" />
                        Copying between systems
                      </li>
                      <li>
                        <Icon name="check" />
                        Purchase and capex approvals
                      </li>
                      <li>
                        <Icon name="check" />
                        Onboarding and offboarding
                      </li>
                    </ul>
                  </div>
                  <div className="ix-tiles c2" data-reveal="">
                    <div className="ix-tile" style={{ "--i": "0" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="layout" />
                      </span>
                      <b>Workflow</b>
                      <span>ServiceNow · Power Automate · SAP Build · Zoho Flow</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "1" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="gear" />
                      </span>
                      <b>RPA</b>
                      <span>UiPath · Power Automate · Automation Anywhere</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "2" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="doc" />
                      </span>
                      <b>Document AI</b>
                      <span>Invoices, POs, e-way bills into ERP</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "3" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="eye" />
                      </span>
                      <b>Process mining</b>
                      <span>Celonis · SAP Signavio · UiPath</span>
                    </div>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Example bots</small>
                  <span>Vendor onboarding · GST reconciliation · order entry · daily MIS reports</span>
                </div>
              </article>
              <Link to="/ai-automation#ai-auto" className="cl-more">
                <Icon name="spark" />
                <span>
                  <b>{"AI & Automation"}</b>
                  <small>See intelligent automation and AI agents</small>
                </span>
                <Icon name="arrow" />
              </Link>
            </section>
            <section className="ix-chapter" id="dw-itsa" role="tabpanel" aria-labelledby="dw-itsa-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">IT service automation</h2>
                  <p className="dx-lede">
                    IT that fixes itself first — self-service, smart ticketing and automated remediation.
                  </p>
                  <div className="ix-chips">
                    <span>Self-service</span>
                    <span>Smart ticketing</span>
                    <span>Auto-remediation</span>
                    <span>ITSM</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="dw-it">
                <header>
                  <span className="dx-k">IT service automation</span>
                  <h3>Fewer tickets, faster fixes</h3>
                </header>
                <div className="ai-loop" data-reveal="">
                  <div style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="headset" />
                    </span>
                    <b>Self-service IT</b>
                    <span>Teams or WhatsApp chat for resets and access requests</span>
                    <em>Copilot Studio · ServiceNow</em>
                  </div>
                  <div style={{ "--i": "1" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="layout" />
                    </span>
                    <b>Smart ticketing</b>
                    <span>AI categorises, routes and summarises tickets</span>
                    <em>ServiceNow · Jira · Freshservice</em>
                  </div>
                  <div style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="eye" />
                    </span>
                    <b>Anomaly detection</b>
                    <span>Spots unusual behaviour before users feel it</span>
                    <em>Dynatrace · Datadog · Splunk</em>
                  </div>
                  <div style={{ "--i": "3" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="gear" />
                    </span>
                    <b>Auto-remediation</b>
                    <span>Known issues fixed by approved runbooks</span>
                    <em>Ansible · PowerShell · Terraform</em>
                  </div>
                  <span className="ai-loop-c" aria-hidden="true">
                    <Icon name="spark" />
                  </span>
                </div>
                <div className="ix-bar">
                  <small>Joiners, movers, leavers</small>
                  <span>Accounts, licences, devices and access granted or removed automatically from HR events.</span>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
