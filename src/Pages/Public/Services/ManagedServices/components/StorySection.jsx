import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function StorySection() {
  return (
    <section className="dx ice ix-story" id="ms-story">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Managed services</span>
          <h2 className="dx-h">
            What we run <span>for you</span>
          </h2>
          <p className="dx-lede">Choose a service on the left — the detail opens alongside.</p>
        </div>
        <div className="ix-grid" data-tabs="">
          <div className="ix-rail" role="tablist" aria-orientation="vertical" aria-label="Managed services">
            <button type="button" role="tab" id="ms-noc-t" aria-controls="ms-noc" aria-selected="true">
              <Icon name="eye" />
              <span>Managed NOC</span>
            </button>
            <button type="button" role="tab" id="ms-soc-t" aria-controls="ms-soc" aria-selected="false">
              <Icon name="shield" />
              <span>Managed SOC</span>
            </button>
            <button type="button" role="tab" id="ms-desk-t" aria-controls="ms-desk" aria-selected="false">
              <Icon name="headset" />
              <span>Service desk</span>
            </button>
            <button type="button" role="tab" id="ms-cloud-t" aria-controls="ms-cloud" aria-selected="false">
              <Icon name="cloud" />
              <span>Managed cloud</span>
            </button>
            <button type="button" role="tab" id="ms-ams-t" aria-controls="ms-ams" aria-selected="false">
              <Icon name="apps" />
              <span>Application support</span>
            </button>
            <button type="button" role="tab" id="ms-dc-t" aria-controls="ms-dc" aria-selected="false">
              <Icon name="dc" />
              <span>Data center operations</span>
            </button>
            <button type="button" role="tab" id="ms-euc-t" aria-controls="ms-euc" aria-selected="false">
              <Icon name="laptop" />
              <span>{"End-user & field"}</span>
            </button>
            <button type="button" role="tab" id="ms-backup-t" aria-controls="ms-backup" aria-selected="false">
              <Icon name="db" />
              <span>{"Backup & DR"}</span>
            </button>
          </div>
          <div className="ix-main">
            <section className="ix-chapter" id="ms-noc" role="tabpanel" aria-labelledby="ms-noc-t">
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Managed NOC</h2>
                  <p className="dx-lede">24x7 monitoring and management of networks, servers, storage and cloud.</p>
                  <div className="ix-chips">
                    <span>24x7</span>
                    <span>Monitoring</span>
                    <span>Patching</span>
                    <span>Capacity</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ms-noc-s">
                <header>
                  <span className="dx-k">Scope</span>
                  <h3>What our NOC watches and manages</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="net" />
                    </span>
                    <b>Network</b>
                    <span>LAN, WAN, SD-WAN, Wi-Fi, firewalls</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="server" />
                    </span>
                    <b>{"Servers & virtualisation"}</b>
                    <span>Windows, Linux, VMware, Hyper-V</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="db" />
                    </span>
                    <b>{"Storage & backup"}</b>
                    <span>Arrays, backup jobs, replication</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="cloud" />
                    </span>
                    <b>Cloud</b>
                    <span>AWS, Azure, Google and Indian clouds</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layers" />
                    </span>
                    <b>Databases</b>
                    <span>Availability, jobs, performance</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "5" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="bolt" />
                    </span>
                    <b>Facilities</b>
                    <span>UPS, cooling, environment sensors</span>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="ms-noc-a">
                <header>
                  <span className="dx-k">Activities</span>
                  <h3>Day-to-day operations</h3>
                </header>
                <div className="cx-cols" data-reveal="">
                  <div className="cx-col b" style={{ "--i": "0" }}>
                    <div className="cx-col-h">
                      <Icon name="eye" />
                      <b>Monitor</b>
                    </div>
                    <ul>
                      <li>Availability and performance</li>
                      <li>Threshold and event alerts</li>
                      <li>Capacity trends</li>
                    </ul>
                  </div>
                  <div className="cx-col g" style={{ "--i": "1" }}>
                    <div className="cx-col-h">
                      <Icon name="gear" />
                      <b>Maintain</b>
                    </div>
                    <ul>
                      <li>Patching windows</li>
                      <li>Firmware and upgrades</li>
                      <li>Configuration backups</li>
                    </ul>
                  </div>
                  <div className="cx-col t" style={{ "--i": "2" }}>
                    <div className="cx-col-h">
                      <Icon name="doc" />
                      <b>Report</b>
                    </div>
                    <ul>
                      <li>Uptime and incidents</li>
                      <li>Capacity forecast</li>
                      <li>Recommendations</li>
                    </ul>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Tools</small>
                  <span>Zabbix · PRTG · SolarWinds · Datadog · ManageEngine OpManager</span>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="ms-soc" role="tabpanel" aria-labelledby="ms-soc-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Managed SOC</h2>
                  <p className="dx-lede">Threats detected, investigated and contained — around the clock.</p>
                  <div className="ix-chips">
                    <span>SIEM</span>
                    <span>SOAR</span>
                    <span>EDR / XDR</span>
                    <span>Incident response</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ms-soc-f">
                <header>
                  <span className="dx-k">Flow</span>
                  <h3>From alert to closure</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="db" />
                    <b>Collect</b>
                    <span>Logs from every source</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="eye" />
                    <b>Detect</b>
                    <span>Use cases and threat intel</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="users" />
                    <b>Investigate</b>
                    <span>Analyst triage</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="shield" />
                    <b>Contain</b>
                    <span>Isolate, block, reset</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="doc" />
                    <b>Report</b>
                    <span>Root cause, lessons</span>
                  </li>
                </ol>
              </article>
              <article className="ix-scene" id="ms-soc-s">
                <header>
                  <span className="dx-k">Services</span>
                  <h3>What is included</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="eye" />
                    </span>
                    <b>SIEM monitoring</b>
                    <span>Microsoft Sentinel, Splunk, QRadar, Wazuh</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="laptop" />
                    </span>
                    <b>Endpoint response</b>
                    <span>EDR / XDR alerts handled</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="target" />
                    </span>
                    <b>Threat hunting</b>
                    <span>Proactive searches for attackers</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="bolt" />
                    </span>
                    <b>Incident response</b>
                    <span>Playbooks, containment, CERT-In reporting support</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="shield" />
                    </span>
                    <b>Vulnerability management</b>
                    <span>Scans, prioritised fixes, tracking</span>
                  </div>
                  <div className="ix-tile dark" style={{ "--i": "5" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="doc" />
                    </span>
                    <b>Compliance reports</b>
                    <span>Evidence for audits and customers</span>
                  </div>
                </div>
                <Link to="/cybersecurity#cs-soc" className="cl-more">
                  <Icon name="shield" />
                  <span>
                    <b>Cybersecurity</b>
                    <small>See the security portfolio</small>
                  </span>
                  <Icon name="arrow" />
                </Link>
              </article>
            </section>
            <section className="ix-chapter" id="ms-desk" role="tabpanel" aria-labelledby="ms-desk-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Service desk</h2>
                  <p className="dx-lede">One number, one portal, one queue — for every user and every site.</p>
                  <div className="ix-chips">
                    <span>Single point of contact</span>
                    <span>Self-service</span>
                    <span>Multilingual</span>
                    <span>ITSM</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ms-desk-c">
                <header>
                  <span className="dx-k">Channels</span>
                  <h3>How users reach us</h3>
                </header>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="phone" />
                    </span>
                    <b>Phone</b>
                    <span>Business hours or 24x7</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="mail" />
                    </span>
                    <b>Email</b>
                    <span>Tickets created automatically</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layout" />
                    </span>
                    <b>Portal</b>
                    <span>Requests, status, knowledge base</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="spark" />
                    </span>
                    <b>{"Chat & AI"}</b>
                    <span>Teams or WhatsApp self-service</span>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="ms-desk-i">
                <header>
                  <span className="dx-k">Included</span>
                  <h3>What the desk handles</h3>
                </header>
                <div className="ai-2">
                  <div className="ix-list dark">
                    <h4>Typical requests</h4>
                    <ul>
                      <li>
                        <Icon name="check" />
                        Password resets and access
                      </li>
                      <li>
                        <Icon name="check" />
                        Software and device requests
                      </li>
                      <li>
                        <Icon name="check" />
                        Joiners, movers, leavers
                      </li>
                      <li>
                        <Icon name="check" />
                        How-to questions
                      </li>
                      <li>
                        <Icon name="check" />
                        Incident logging and updates
                      </li>
                    </ul>
                  </div>
                  <div className="ix-tiles c2" data-reveal="">
                    <div className="ix-tile" style={{ "--i": "0" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="layout" />
                      </span>
                      <b>ServiceNow</b>
                      <span>Enterprise ITSM</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "1" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="headset" />
                      </span>
                      <b>Freshservice</b>
                      <span>Fast, simple ITSM</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "2" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="gear" />
                      </span>
                      <b>ManageEngine</b>
                      <span>ServiceDesk Plus</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "3" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="layers" />
                      </span>
                      <b>Jira Service Mgmt</b>
                      <span>For product teams</span>
                    </div>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="ms-cloud" role="tabpanel" aria-labelledby="ms-cloud-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Managed cloud</h2>
                  <p className="dx-lede">24x7 managed cloud, every provider.</p>
                  <div className="ix-chips">
                    <span>CloudOps</span>
                    <span>FinOps</span>
                    <span>{"Patch & backup"}</span>
                    <span>Security</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ms-cl">
                <header>
                  <span className="dx-k">Managed cloud</span>
                  <h3>Run, secure and optimise every cloud</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="eye" />
                    </span>
                    <b>Monitoring</b>
                    <span>24x7 NOC on health and uptime</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="shield" />
                    </span>
                    <b>Security ops</b>
                    <span>SOC monitoring and response</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="gear" />
                    </span>
                    <b>{"Patch & backup"}</b>
                    <span>Patching, restore tests</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="doc" />
                    </span>
                    <b>Change control</b>
                    <span>ITIL incident and change</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="chart" />
                    </span>
                    <b>Cost reviews</b>
                    <span>Monthly FinOps actions</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "5" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="headset" />
                    </span>
                    <b>One desk</b>
                    <span>One contact, one SLA</span>
                  </div>
                </div>
                <Link to="/cloud#cl-managed" className="cl-more">
                  <Icon name="cloud" />
                  <span>
                    <b>Cloud</b>
                    <small>See cloud services</small>
                  </span>
                  <Icon name="arrow" />
                </Link>
              </article>
            </section>
            <section className="ix-chapter" id="ms-ams" role="tabpanel" aria-labelledby="ms-ams-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Application support</h2>
                  <p className="dx-lede">SLA-based application management for ERP, CRM, PLM, MES and custom apps.</p>
                  <div className="ix-chips">
                    <span>AMS</span>
                    <span>L1–L3</span>
                    <span>Enhancements</span>
                    <span>Upgrades</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ms-ams-l">
                <header>
                  <span className="dx-k">Support levels</span>
                  <h3>Application management, end to end</h3>
                </header>
                <div className="cx-cols" data-reveal="">
                  <div className="cx-col b" style={{ "--i": "0" }}>
                    <div className="cx-col-h">
                      <Icon name="headset" />
                      <b>L1 · Functional</b>
                    </div>
                    <ul>
                      <li>User queries and how-to</li>
                      <li>Master data fixes</li>
                      <li>Report requests</li>
                    </ul>
                  </div>
                  <div className="cx-col g" style={{ "--i": "1" }}>
                    <div className="cx-col-h">
                      <Icon name="gear" />
                      <b>L2 · Configuration</b>
                    </div>
                    <ul>
                      <li>Incident fixes</li>
                      <li>Configuration changes</li>
                      <li>Interface monitoring</li>
                    </ul>
                  </div>
                  <div className="cx-col t" style={{ "--i": "2" }}>
                    <div className="cx-col-h">
                      <Icon name="code" />
                      <b>L3 · Technical</b>
                    </div>
                    <ul>
                      <li>Code fixes and enhancements</li>
                      <li>Performance tuning</li>
                      <li>Upgrades and patches</li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="ms-ams-c">
                <header>
                  <span className="dx-k">Coverage</span>
                  <h3>Applications we support</h3>
                </header>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="erp" />
                    </span>
                    <b>ERP</b>
                    <span>SAP, Oracle, Dynamics 365</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="users" />
                    </span>
                    <b>CRM</b>
                    <span>Salesforce, Zoho</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layers" />
                    </span>
                    <b>{"PLM & MES"}</b>
                    <span>Teamcenter, 3DEXPERIENCE, Opcenter</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="code" />
                    </span>
                    <b>{"Custom & integration"}</b>
                    <span>Web, mobile, APIs, middleware</span>
                  </div>
                </div>
                <Link to="/applications" className="cl-more">
                  <Icon name="apps" />
                  <span>
                    <b>Applications</b>
                    <small>See application services</small>
                  </span>
                  <Icon name="arrow" />
                </Link>
              </article>
            </section>
            <section className="ix-chapter" id="ms-dc" role="tabpanel" aria-labelledby="ms-dc-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Data center operations</h2>
                  <p className="dx-lede">Facility and IT operations for on-premises and edge data centers.</p>
                  <div className="ix-chips">
                    <span>Facilities</span>
                    <span>DCIM</span>
                    <span>Remote hands</span>
                    <span>Audits</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ms-dc-t">
                <header>
                  <span className="dx-k">Scope</span>
                  <h3>Keeping the facility always on</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="bolt" />
                    </span>
                    <b>Power</b>
                    <span>UPS, generators, PDUs, load checks</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="snow" />
                    </span>
                    <b>Cooling</b>
                    <span>CRAC/CRAH, chillers, liquid cooling</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="eye" />
                    </span>
                    <b>{"DCIM & BMS"}</b>
                    <span>Environment and capacity monitoring</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="hand" />
                    </span>
                    <b>Remote hands</b>
                    <span>Rack, stack, cable, swap parts</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="shield" />
                    </span>
                    <b>Physical security</b>
                    <span>Access, CCTV, visitor logs</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "5" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="check" />
                    </span>
                    <b>{"Audits & drills"}</b>
                    <span>Preventive maintenance, failover tests</span>
                  </div>
                </div>
                <Link to="/data-center" className="cl-more">
                  <Icon name="dc" />
                  <span>
                    <b>Data Center</b>
                    <small>See design and build services</small>
                  </span>
                  <Icon name="arrow" />
                </Link>
              </article>
            </section>
            <section className="ix-chapter" id="ms-euc" role="tabpanel" aria-labelledby="ms-euc-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"End-user & field services"}</h2>
                  <p className="dx-lede">Devices and on-site support for offices, plants and branches.</p>
                  <div className="ix-chips">
                    <span>Devices</span>
                    <span>IMAC</span>
                    <span>Field engineers</span>
                    <span>Asset lifecycle</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ms-euc-l">
                <header>
                  <span className="dx-k">Device lifecycle</span>
                  <h3>From procurement to disposal</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="cart" />
                    <b>Procure</b>
                    <span>Standard catalogue</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="gear" />
                    <b>{"Image & enrol"}</b>
                    <span>Intune, autopilot</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="truck" />
                    <b>Deploy</b>
                    <span>Ship, install, hand over</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="headset" />
                    <b>Support</b>
                    <span>Desk and field</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="trash" />
                    <b>Retire</b>
                    <span>Data wipe, e-waste</span>
                  </li>
                </ol>
              </article>
              <article className="ix-scene" id="ms-euc-t">
                <header>
                  <span className="dx-k">Services</span>
                  <h3>Support where people work</h3>
                </header>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="laptop" />
                    </span>
                    <b>Desktop support</b>
                    <span>Laptops, desktops, printers</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="phone" />
                    </span>
                    <b>Mobile devices</b>
                    <span>MDM, apps, security</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="users" />
                    </span>
                    <b>IMAC</b>
                    <span>Install, move, add, change</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="pin" />
                    </span>
                    <b>Field engineers</b>
                    <span>Scheduled and on-call site visits</span>
                  </div>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="ms-backup" role="tabpanel" aria-labelledby="ms-backup-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Backup & DR"}</h2>
                  <p className="dx-lede">Backups that are tested and recovery that is rehearsed.</p>
                  <div className="ix-chips">
                    <span>3-2-1-1-0</span>
                    <span>Immutable</span>
                    <span>DR drills</span>
                    <span>Ransomware recovery</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ms-bk">
                <header>
                  <span className="dx-k">{"Backup & DR"}</span>
                  <h3>Recover with confidence</h3>
                </header>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="upload" />
                    </span>
                    <b>Backup</b>
                    <span>Daily backups, monitored and verified</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="check" />
                    </span>
                    <b>Restore tests</b>
                    <span>Scheduled test restores with reports</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layers" />
                    </span>
                    <b>Replication</b>
                    <span>Critical systems copied to a second site</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="bolt" />
                    </span>
                    <b>DR drills</b>
                    <span>Failover rehearsed and documented</span>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>3-2-1-1-0</small>
                  <span>3 copies · 2 media · 1 offsite · 1 immutable or offline · 0 errors on restore tests</span>
                </div>
                <div className="ix-bar">
                  <small>Tools</small>
                  <span>Veeam · Commvault · Rubrik · Cohesity · Azure Site Recovery · AWS DRS</span>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
