import React from "react";
import Icon from "../../../../../Component/Icon";

export default function ScopeSection() {
  return (
    <section className="dx ice" id="dcs-strategy-scope">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Service scope</span>
          <h2 className="dx-h">
            Business case, site <span>and master plan</span>
          </h2>
          <p className="dx-lede">Choose a component to see its scope, considerations and outputs.</p>
        </div>
        <div className="dsy" data-tabs="">
          <div className="dsy-chips" role="tablist" aria-label="Components">
            <button
              type="button"
              role="tab"
              id="dcs-strategy-c0-t"
              aria-controls="dcs-strategy-c0"
              aria-selected="true"
              style={{ "--i": "0" }}
            >
              <Icon name="chart" />
              <span>Business case and feasibility</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-strategy-c1-t"
              aria-controls="dcs-strategy-c1"
              aria-selected="false"
              style={{ "--i": "1" }}
            >
              <Icon name="pin" />
              <span>Site selection and due diligence</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-strategy-c2-t"
              aria-controls="dcs-strategy-c2"
              aria-selected="false"
              style={{ "--i": "2" }}
            >
              <Icon name="layers" />
              <span>Capacity planning</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-strategy-c3-t"
              aria-controls="dcs-strategy-c3"
              aria-selected="false"
              style={{ "--i": "3" }}
            >
              <Icon name="layout" />
              <span>Master planning</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-strategy-c4-t"
              aria-controls="dcs-strategy-c4"
              aria-selected="false"
              style={{ "--i": "4" }}
            >
              <Icon name="target" />
              <span>Decision gates and risk register</span>
            </button>
          </div>
          <div className="dsy-stage">
            <div className="dsy-p" role="tabpanel" id="dcs-strategy-c0" aria-labelledby="dcs-strategy-c0-t">
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon
                    className="nv-poly"
                    points="64.1,11.5 88.2,24.3 91.0,51.5 86.2,78.4 61.3,89.4 34.2,93.2 16.0,72.9 4.0,48.4 17.7,24.7 37.4,5.8"
                  />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="91.0" y2="51.5" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L91.0,51.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="61.3" y2="89.4" style={{ "--i": "2" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                    <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L61.3,89.4" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="16.0" y2="72.9" style={{ "--i": "3" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "3" }}>
                    <animateMotion dur="3.65s" repeatCount="indefinite" path="M50,50 L16.0,72.9" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="17.7" y2="24.7" style={{ "--i": "4" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "4" }}>
                    <animateMotion dur="4.00s" repeatCount="indefinite" path="M50,50 L17.7,24.7" />
                  </circle>
                  <circle className="nv-nd" cx="88.2" cy="24.3" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="86.2" cy="78.4" r="1.6" style={{ "--i": "1" }} />
                  <circle className="nv-nd" cx="34.2" cy="93.2" r="1.6" style={{ "--i": "2" }} />
                  <circle className="nv-nd f" cx="4.0" cy="48.4" r="1.6" style={{ "--i": "3" }} />
                  <circle className="nv-nd" cx="37.4" cy="5.8" r="1.6" style={{ "--i": "4" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="chart" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Feasibility report
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Preliminary cost model
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Initial CAPEX/OPEX/TCO
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Phasing
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Lead times
                </span>
              </div>
              <div className="dsy-body">
                <h3>Business case and feasibility</h3>
                <p className="dsy-lead">
                  Business purpose, workload, users, availability requirements, data residency and growth assumptions;
                  compare build, lease/colocation, cloud, hybrid and managed options.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>
                    Initial CAPEX/OPEX/TCO, phasing, commercial model and sensitivity scenarios; delivery risks across
                    utilities, lead times, land, approvals and supply chain.
                  </p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="doc" />
                    Typical outputs
                  </small>
                  <p>Feasibility report, preliminary cost model</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-strategy-c1" aria-labelledby="dcs-strategy-c1-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon
                    className="nv-poly"
                    points="64.1,11.5 88.2,24.3 91.0,51.5 86.2,78.4 61.3,89.4 34.2,93.2 16.0,72.9 4.0,48.4 17.7,24.7 37.4,5.8"
                  />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="91.0" y2="51.5" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L91.0,51.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="61.3" y2="89.4" style={{ "--i": "2" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                    <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L61.3,89.4" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="16.0" y2="72.9" style={{ "--i": "3" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "3" }}>
                    <animateMotion dur="3.65s" repeatCount="indefinite" path="M50,50 L16.0,72.9" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="17.7" y2="24.7" style={{ "--i": "4" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "4" }}>
                    <animateMotion dur="4.00s" repeatCount="indefinite" path="M50,50 L17.7,24.7" />
                  </circle>
                  <circle className="nv-nd" cx="88.2" cy="24.3" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="86.2" cy="78.4" r="1.6" style={{ "--i": "1" }} />
                  <circle className="nv-nd" cx="34.2" cy="93.2" r="1.6" style={{ "--i": "2" }} />
                  <circle className="nv-nd f" cx="4.0" cy="48.4" r="1.6" style={{ "--i": "3" }} />
                  <circle className="nv-nd" cx="37.4" cy="5.8" r="1.6" style={{ "--i": "4" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="pin" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Flood
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Seismic
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Geotechnical surveys
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Land-use
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Building
                </span>
              </div>
              <div className="dsy-body">
                <h3>Site selection and due diligence</h3>
                <p className="dsy-lead">
                  Land title/lease, access, logistics, surroundings and expansion potential; grid capacity, tariffs and
                  alternate supply; fibre routes and carrier diversity.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>
                    Flood, seismic, climate and other hazards; water availability and drainage; geotechnical surveys;
                    land-use, building, electrical, fire and environmental approvals.
                  </p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="doc" />
                    Typical outputs
                  </small>
                  <p>Site comparison and due-diligence report</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-strategy-c2" aria-labelledby="dcs-strategy-c2-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon className="nv-poly" points="64.1,11.5 95.3,42.1 76.3,81.4 34.2,93.2 9.6,57.1 20.5,14.7" />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="76.3" y2="81.4" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L76.3,81.4" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="9.6" y2="57.1" style={{ "--i": "2" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                    <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L9.6,57.1" />
                  </circle>
                  <circle className="nv-nd" cx="95.3" cy="42.1" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="34.2" cy="93.2" r="1.6" style={{ "--i": "1" }} />
                  <circle className="nv-nd" cx="20.5" cy="14.7" r="1.6" style={{ "--i": "2" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="layers" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  IT load in kW/MW
                </span>
                <span className="nv-chip" style={{ left: "76.3%", top: "81.4%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Phase-by-phase growth
                </span>
                <span className="nv-chip" style={{ left: "9.6%", top: "57.1%", "--i": "2", "--tx": "-12%" }}>
                  <Icon name="check" />
                  Capacity planning
                </span>
              </div>
              <div className="dsy-body">
                <h3>Capacity planning</h3>
                <p className="dsy-lead">
                  IT load in kW/MW, phase-by-phase growth, rack count and rack-density profile.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Power and cooling capacity by phase, redundancy objectives and maintenance access.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="doc" />
                    Typical outputs
                  </small>
                  <p>Capacity model and release plan</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-strategy-c3" aria-labelledby="dcs-strategy-c3-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon
                    className="nv-poly"
                    points="64.1,11.5 88.2,24.3 91.0,51.5 86.2,78.4 61.3,89.4 34.2,93.2 16.0,72.9 4.0,48.4 17.7,24.7 37.4,5.8"
                  />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="91.0" y2="51.5" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L91.0,51.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="61.3" y2="89.4" style={{ "--i": "2" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                    <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L61.3,89.4" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="16.0" y2="72.9" style={{ "--i": "3" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "3" }}>
                    <animateMotion dur="3.65s" repeatCount="indefinite" path="M50,50 L16.0,72.9" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="17.7" y2="24.7" style={{ "--i": "4" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "4" }}>
                    <animateMotion dur="4.00s" repeatCount="indefinite" path="M50,50 L17.7,24.7" />
                  </circle>
                  <circle className="nv-nd" cx="88.2" cy="24.3" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="86.2" cy="78.4" r="1.6" style={{ "--i": "1" }} />
                  <circle className="nv-nd" cx="34.2" cy="93.2" r="1.6" style={{ "--i": "2" }} />
                  <circle className="nv-nd f" cx="4.0" cy="48.4" r="1.6" style={{ "--i": "3" }} />
                  <circle className="nv-nd" cx="37.4" cy="5.8" r="1.6" style={{ "--i": "4" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="layout" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Campus/site master plan
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Expansion zones
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Modular blocks
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Temporary works
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Phase interfaces
                </span>
              </div>
              <div className="dsy-body">
                <h3>Master planning</h3>
                <p className="dsy-lead">
                  White space, support space, electrical/mechanical rooms, MMRs, staging and secure storage; utility
                  corridors and replacement routes.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>
                    Expansion zones, modular blocks, temporary works, phase interfaces, long-lead equipment and
                    expansion triggers.
                  </p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="doc" />
                    Typical outputs
                  </small>
                  <p>Campus/site master plan</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-strategy-c4" aria-labelledby="dcs-strategy-c4-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon
                    className="nv-poly"
                    points="64.1,11.5 88.2,24.3 91.0,51.5 86.2,78.4 61.3,89.4 34.2,93.2 16.0,72.9 4.0,48.4 17.7,24.7 37.4,5.8"
                  />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="91.0" y2="51.5" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L91.0,51.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="61.3" y2="89.4" style={{ "--i": "2" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                    <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L61.3,89.4" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="16.0" y2="72.9" style={{ "--i": "3" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "3" }}>
                    <animateMotion dur="3.65s" repeatCount="indefinite" path="M50,50 L16.0,72.9" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="17.7" y2="24.7" style={{ "--i": "4" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "4" }}>
                    <animateMotion dur="4.00s" repeatCount="indefinite" path="M50,50 L17.7,24.7" />
                  </circle>
                  <circle className="nv-nd" cx="88.2" cy="24.3" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="86.2" cy="78.4" r="1.6" style={{ "--i": "1" }} />
                  <circle className="nv-nd" cx="34.2" cy="93.2" r="1.6" style={{ "--i": "2" }} />
                  <circle className="nv-nd f" cx="4.0" cy="48.4" r="1.6" style={{ "--i": "3" }} />
                  <circle className="nv-nd" cx="37.4" cy="5.8" r="1.6" style={{ "--i": "4" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="target" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Owner
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Review at every gate
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Assumptions
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Dependencies
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Decision gates and risk register
                </span>
              </div>
              <div className="dsy-body">
                <h3>Decision gates and risk register</h3>
                <p className="dsy-lead">
                  Assumptions, dependencies, exclusions and the evidence required to proceed at each gate.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Owner, impact and mitigation for each risk; review at every gate.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="doc" />
                    Typical outputs
                  </small>
                  <p>Risk and decision register</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
