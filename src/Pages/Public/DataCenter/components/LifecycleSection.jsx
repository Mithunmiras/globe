import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../Component/Icon";

export default function LifecycleSection() {
  return (
    <section className="dx ice ix-story dl-life" id="dc-life">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Data center lifecycle</span>
          <h2 className="dx-h">
            One partner, <span>from concept to expansion</span>
          </h2>
          <p className="dx-lede">
            Eight phases, one accountable team. Choose a phase on the left — the detail opens alongside.
          </p>
        </div>
        <div className="ix-grid" data-tabs="">
          <div className="ix-rail" role="tablist" aria-orientation="vertical" aria-label="Lifecycle phases">
            <button type="button" role="tab" id="dc-strategy-t" aria-controls="dc-strategy" aria-selected="true">
              <Icon name="compass" />
              <span>{"Strategy & Concept"}</span>
            </button>
            <button type="button" role="tab" id="dc-design-t" aria-controls="dc-design" aria-selected="false">
              <Icon name="edit" />
              <span>{"Design & Engineering"}</span>
            </button>
            <button type="button" role="tab" id="dc-critical-t" aria-controls="dc-critical" aria-selected="false">
              <Icon name="bolt" />
              <span>Critical Infrastructure</span>
            </button>
            <button type="button" role="tab" id="dc-it-t" aria-controls="dc-it" aria-selected="false">
              <Icon name="server" />
              <span>{"IT & Network"}</span>
            </button>
            <button type="button" role="tab" id="dc-build-t" aria-controls="dc-build" aria-selected="false">
              <Icon name="gear" />
              <span>{"Build & Commission"}</span>
            </button>
            <button type="button" role="tab" id="dc-operate-t" aria-controls="dc-operate" aria-selected="false">
              <Icon name="eye" />
              <span>{"Operate & Maintain"}</span>
            </button>
            <button type="button" role="tab" id="dc-optimise-t" aria-controls="dc-optimise" aria-selected="false">
              <Icon name="leaf" />
              <span>{"Optimise & Sustain"}</span>
            </button>
            <button type="button" role="tab" id="dc-expand-t" aria-controls="dc-expand" aria-selected="false">
              <Icon name="trend" />
              <span>{"Expand & Modernise"}</span>
            </button>
          </div>
          <div className="ix-main">
            <section className="ix-chapter" id="dc-strategy" role="tabpanel" aria-labelledby="dc-strategy-t">
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Strategy & Concept"}</h2>
                  <p className="dx-lede">Business case, feasibility, capacity and site.</p>
                  <div className="ix-chips" />
                </div>
              </div>
              <article className="ix-scene" id="dc-st-p">
                <header>
                  <span className="dx-k">How we start</span>
                  <h3>From demand to a fundable concept</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="chart" />
                    <b>Demand</b>
                    <span>IT load and growth forecast</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="pin" />
                    <b>Site</b>
                    <span>Power, fibre, risk, land</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="eye" />
                    <b>Feasibility</b>
                    <span>Technical and regulatory</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="card" />
                    <b>Business case</b>
                    <span>CapEx, OpEx, TCO</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="layout" />
                    <b>Concept</b>
                    <span>Tier target and layout</span>
                  </li>
                </ol>
              </article>
              <article className="ix-scene" id="dc-st-t">
                <header>
                  <span className="dx-k">Decisions we help you make</span>
                  <h3>Get the big choices right early</h3>
                </header>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="chart" />
                    </span>
                    <b>Capacity planning</b>
                    <span>IT load, rack density and phased growth</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="pin" />
                    </span>
                    <b>Site selection</b>
                    <span>Grid capacity, fibre routes, flood and seismic risk</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="shield" />
                    </span>
                    <b>Resilience target</b>
                    <span>Tier III or IV, N+1 or 2N, uptime goals</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="card" />
                    </span>
                    <b>Build, colo or cloud</b>
                    <span>Options compared on lifecycle cost</span>
                  </div>
                </div>
              </article>
              <Link to="/data-center-strategy" className="cl-more">
                <Icon name="compass" />
                <span>
                  <b>{"Open the Strategy & Concept page"}</b>
                  <small>Scope, architecture, deliverables and standards</small>
                </span>
                <Icon name="arrow" />
              </Link>
            </section>
            <section className="ix-chapter" id="dc-design" role="tabpanel" aria-labelledby="dc-design-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Design & Engineering"}</h2>
                  <p className="dx-lede">Master planning and multidisciplinary engineering.</p>
                  <div className="ix-chips" />
                </div>
              </div>
              <article className="ix-scene" id="dc-de-p">
                <header>
                  <span className="dx-k">Design stages</span>
                  <h3>Master plan to construction drawings</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="layout" />
                    <b>Master plan</b>
                    <span>Campus, phases, white space</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="edit" />
                    <b>Concept</b>
                    <span>Topology and sizing</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="layers" />
                    <b>Detailed design</b>
                    <span>All disciplines coordinated</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="doc" />
                    <b>Tender pack</b>
                    <span>Specs, BOQ, drawings</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="check" />
                    <b>For construction</b>
                    <span>Approved and issued</span>
                  </li>
                </ol>
              </article>
              <article className="ix-scene" id="dc-de-t">
                <header>
                  <span className="dx-k">Disciplines</span>
                  <h3>Multidisciplinary engineering under one roof</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="bolt" />
                    </span>
                    <b>Electrical</b>
                    <span>Single-line, 2N / N+1, protection studies</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="snow" />
                    </span>
                    <b>Mechanical</b>
                    <span>Cooling plant, airflow, CFD modelling</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="building" />
                    </span>
                    <b>{"Civil & structural"}</b>
                    <span>Floor loading, plinths, roofs</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="fire" />
                    </span>
                    <b>{"Fire & life safety"}</b>
                    <span>Detection, suppression, egress</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="shield" />
                    </span>
                    <b>{"ELV & security"}</b>
                    <span>Access, CCTV, BMS, DCIM</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "5" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="net" />
                    </span>
                    <b>{"IT & cabling"}</b>
                    <span>Structured cabling, meet-me rooms</span>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Tools</small>
                  <span>BIM and 5D BIM · CFD airflow modelling · load-flow and short-circuit studies</span>
                </div>
              </article>
              <Link to="/data-center-design" className="cl-more">
                <Icon name="edit" />
                <span>
                  <b>{"Open the Design & Engineering page"}</b>
                  <small>Scope, architecture, deliverables and standards</small>
                </span>
                <Icon name="arrow" />
              </Link>
            </section>
            <section className="ix-chapter" id="dc-critical" role="tabpanel" aria-labelledby="dc-critical-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">Critical Infrastructure</h2>
                  <p className="dx-lede">Power, cooling, building, fire and security.</p>
                  <div className="ix-chips" />
                </div>
              </div>
              <article className="ix-scene" id="dc-cr-t">
                <header>
                  <span className="dx-k">Critical infrastructure</span>
                  <h3>Everything that keeps the IT load running</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="bolt" />
                    </span>
                    <b>Power</b>
                    <span>Utility intake, transformers, UPS, generators, PDUs</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="snow" />
                    </span>
                    <b>Cooling</b>
                    <span>Chillers, CRAH, in-row and liquid cooling</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="building" />
                    </span>
                    <b>Building</b>
                    <span>Raised floor, containment, structure</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="fire" />
                    </span>
                    <b>Fire</b>
                    <span>VESDA early detection, clean-agent suppression</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="lock" />
                    </span>
                    <b>Physical security</b>
                    <span>Access control, mantraps, CCTV</span>
                  </div>
                  <div className="ix-tile dark" style={{ "--i": "5" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="eye" />
                    </span>
                    <b>Monitoring</b>
                    <span>BMS, EPMS and DCIM</span>
                  </div>
                </div>
                <Link to="/data-center-power" className="cl-more">
                  <Icon name="bolt" />
                  <span>
                    <b>Power, cooling, fire and security in detail</b>
                    <small>Open the facility system pages</small>
                  </span>
                  <Icon name="arrow" />
                </Link>
              </article>
              <Link to="/data-center-critical" className="cl-more">
                <Icon name="bolt" />
                <span>
                  <b>Open the Critical Infrastructure page</b>
                  <small>Scope, architecture, deliverables and standards</small>
                </span>
                <Icon name="arrow" />
              </Link>
            </section>
            <section className="ix-chapter" id="dc-it" role="tabpanel" aria-labelledby="dc-it-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"IT & Network"}</h2>
                  <p className="dx-lede">Compute, storage, network and platforms.</p>
                  <div className="ix-chips" />
                </div>
              </div>
              <article className="ix-scene" id="dc-it-t">
                <header>
                  <span className="dx-k">{"IT & network"}</span>
                  <h3>The IT stack inside the white space</h3>
                </header>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="cpu" />
                    </span>
                    <b>Compute</b>
                    <span>Enterprise servers and GPU systems</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="db" />
                    </span>
                    <b>Storage</b>
                    <span>SAN, NAS, object and backup</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="net" />
                    </span>
                    <b>Network</b>
                    <span>Spine-leaf fabric, DCI, internet edge</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layers" />
                    </span>
                    <b>Platforms</b>
                    <span>Virtualisation, Kubernetes, private cloud</span>
                  </div>
                </div>
                <Link to="/data-center-it-network" className="cl-more">
                  <Icon name="server" />
                  <span>
                    <b>{"IT & Network"}</b>
                    <small>Racks, compute, network and storage</small>
                  </span>
                  <Icon name="arrow" />
                </Link>
              </article>
              <Link to="/data-center-it-network" className="cl-more">
                <Icon name="server" />
                <span>
                  <b>{"Open the IT & Network page"}</b>
                  <small>Scope, architecture, deliverables and standards</small>
                </span>
                <Icon name="arrow" />
              </Link>
            </section>
            <section className="ix-chapter" id="dc-build" role="tabpanel" aria-labelledby="dc-build-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Build & Commission"}</h2>
                  <p className="dx-lede">Procurement, installation, integration and testing.</p>
                  <div className="ix-chips" />
                </div>
              </div>
              <article className="ix-scene" id="dc-bu-p">
                <header>
                  <span className="dx-k">Delivery</span>
                  <h3>From purchase order to handover</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="cart" />
                    <b>Procure</b>
                    <span>OEM orders, logistics</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="gear" />
                    <b>Install</b>
                    <span>Site works, cabling</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="layers" />
                    <b>Integrate</b>
                    <span>Systems tied together</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="check" />
                    <b>Test</b>
                    <span>Commissioning L1–L5</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="doc" />
                    <b>Handover</b>
                    <span>{"As-builts, O&M manuals"}</span>
                  </li>
                </ol>
              </article>
              <article className="ix-scene" id="dc-bu-c">
                <header>
                  <span className="dx-k">Commissioning</span>
                  <h3>Five levels of commissioning</h3>
                </header>
                <div className="cx-cov" data-reveal="">
                  <div className="b" style={{ "--i": "0" }}>
                    <span>
                      <Icon name="factory" />
                      <b>L1 · Factory acceptance</b>
                    </span>
                    <p>Equipment tested at the manufacturer before shipping</p>
                  </div>
                  <div className="g" style={{ "--i": "1" }}>
                    <span>
                      <Icon name="truck" />
                      <b>L2 · Site inspection</b>
                    </span>
                    <p>Delivery and installation verified on site</p>
                  </div>
                  <div className="o" style={{ "--i": "2" }}>
                    <span>
                      <Icon name="bolt" />
                      <b>L3 · Start-up</b>
                    </span>
                    <p>Each system energised and started individually</p>
                  </div>
                  <div className="t" style={{ "--i": "3" }}>
                    <span>
                      <Icon name="gear" />
                      <b>L4 · Functional tests</b>
                    </span>
                    <p>Systems tested under load and failure modes</p>
                  </div>
                  <div className="p" style={{ "--i": "4" }}>
                    <span>
                      <Icon name="check" />
                      <b>L5 · Integrated systems test</b>
                    </span>
                    <p>The whole facility tested together, including failover</p>
                  </div>
                </div>
              </article>
              <Link to="/data-center-build" className="cl-more">
                <Icon name="gear" />
                <span>
                  <b>{"Open the Build & Commission page"}</b>
                  <small>Scope, architecture, deliverables and standards</small>
                </span>
                <Icon name="arrow" />
              </Link>
            </section>
            <section className="ix-chapter" id="dc-operate" role="tabpanel" aria-labelledby="dc-operate-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Operate & Maintain"}</h2>
                  <p className="dx-lede">24×7 operations, maintenance and monitoring.</p>
                  <div className="ix-chips" />
                </div>
              </div>
              <article className="ix-scene" id="dc-op-t">
                <header>
                  <span className="dx-k">Operations</span>
                  <h3>Run it around the clock</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="eye" />
                    </span>
                    <b>24×7 monitoring</b>
                    <span>Facility and IT watched by our NOC</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="gear" />
                    </span>
                    <b>Preventive maintenance</b>
                    <span>Planned schedules for every asset</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="trend" />
                    </span>
                    <b>Predictive maintenance</b>
                    <span>Sensor trends flag issues early</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="doc" />
                    </span>
                    <b>{"Incident & change"}</b>
                    <span>ITIL processes and method statements</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="briefcase" />
                    </span>
                    <b>{"Spares & AMCs"}</b>
                    <span>Critical spares and OEM contracts</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "5" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="chart" />
                    </span>
                    <b>SLA reporting</b>
                    <span>Uptime, incidents and capacity monthly</span>
                  </div>
                </div>
                <Link to="/managed-services#ms-dc" className="cl-more">
                  <Icon name="headset" />
                  <span>
                    <b>Managed IT Services</b>
                    <small>Data center operations and 24×7 support</small>
                  </span>
                  <Icon name="arrow" />
                </Link>
              </article>
              <Link to="/data-center-operations" className="cl-more">
                <Icon name="eye" />
                <span>
                  <b>{"Open the Operate & Maintain page"}</b>
                  <small>Scope, architecture, deliverables and standards</small>
                </span>
                <Icon name="arrow" />
              </Link>
            </section>
            <section className="ix-chapter" id="dc-optimise" role="tabpanel" aria-labelledby="dc-optimise-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Optimise & Sustain"}</h2>
                  <p className="dx-lede">Energy, efficiency, capacity and sustainability.</p>
                  <div className="ix-chips" />
                </div>
              </div>
              <article className="ix-scene" id="dc-oz-t">
                <header>
                  <span className="dx-k">Optimisation</span>
                  <h3>Lower energy, more capacity</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="chart" />
                    </span>
                    <b>{"PUE & WUE tracking"}</b>
                    <span>Energy and water efficiency measured live</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="snow" />
                    </span>
                    <b>Cooling optimisation</b>
                    <span>Containment, setpoints, free cooling</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layers" />
                    </span>
                    <b>Capacity management</b>
                    <span>Space, power and cooling headroom</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="leaf" />
                    </span>
                    <b>Renewable energy</b>
                    <span>Solar and green power agreements</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="fire" />
                    </span>
                    <b>Heat reuse</b>
                    <span>Waste heat put to work where viable</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "5" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="doc" />
                    </span>
                    <b>ESG reporting</b>
                    <span>Carbon and sustainability metrics</span>
                  </div>
                </div>
                <Link to="/data-center-sustainability#dc-green" className="cl-more">
                  <Icon name="leaf" />
                  <span>
                    <b>Sustainability</b>
                    <small>Green data center design</small>
                  </span>
                  <Icon name="arrow" />
                </Link>
              </article>
              <Link to="/data-center-sustainability" className="cl-more">
                <Icon name="leaf" />
                <span>
                  <b>{"Open the Optimise & Sustain page"}</b>
                  <small>Scope, architecture, deliverables and standards</small>
                </span>
                <Icon name="arrow" />
              </Link>
            </section>
            <section className="ix-chapter" id="dc-expand" role="tabpanel" aria-labelledby="dc-expand-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Expand & Modernise"}</h2>
                  <p className="dx-lede">Modular growth, AI workloads and future capacity.</p>
                  <div className="ix-chips" />
                </div>
              </div>
              <article className="ix-scene" id="dc-ex-t">
                <header>
                  <span className="dx-k">Growth</span>
                  <h3>Ready for what comes next</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layers" />
                    </span>
                    <b>Modular growth</b>
                    <span>Prefabricated modules added in phases</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="cpu" />
                    </span>
                    <b>AI workloads</b>
                    <span>High-density racks and GPU clusters</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="drop" />
                    </span>
                    <b>Liquid cooling</b>
                    <span>Direct-to-chip and rear-door heat exchangers</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="bolt" />
                    </span>
                    <b>Power upgrades</b>
                    <span>More capacity without downtime</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="gear" />
                    </span>
                    <b>Technology refresh</b>
                    <span>IT and facility equipment renewed</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "5" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="cloud" />
                    </span>
                    <b>Hybrid integration</b>
                    <span>Data center and cloud as one estate</span>
                  </div>
                </div>
                <Link to="/data-center-ai#dc-ai" className="cl-more">
                  <Icon name="cpu" />
                  <span>
                    <b>{"AI & high-density"}</b>
                    <small>Designs for GPU-dense workloads</small>
                  </span>
                  <Icon name="arrow" />
                </Link>
              </article>
              <Link to="/data-center-expansion" className="cl-more">
                <Icon name="trend" />
                <span>
                  <b>{"Open the Expand & Modernise page"}</b>
                  <small>Scope, architecture, deliverables and standards</small>
                </span>
                <Icon name="arrow" />
              </Link>
            </section>
          </div>
        </div>
        <div className="dl-cross" data-reveal="">
          <h3>Cross-cutting capabilities across every phase</h3>
          <div>
            <span style={{ "--i": "0" }}>
              <Icon name="layout" />
              Project Management
            </span>
            <span style={{ "--i": "1" }}>
              <Icon name="gov" />
              {"Safety & Compliance"}
            </span>
            <span style={{ "--i": "2" }}>
              <Icon name="shield" />
              Cybersecurity
            </span>
            <span style={{ "--i": "3" }}>
              <Icon name="target" />
              Risk Management
            </span>
            <span style={{ "--i": "4" }}>
              <Icon name="check" />
              Quality Assurance
            </span>
            <span style={{ "--i": "5" }}>
              <Icon name="leaf" />
              Sustainability
            </span>
            <span style={{ "--i": "6" }}>
              <Icon name="doc" />
              Documentation
            </span>
            <span style={{ "--i": "7" }}>
              <Icon name="chart" />
              Lifecycle Cost Management
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
