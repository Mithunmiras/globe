import React from "react";
import Icon from "../../../../../Component/Icon";

export default function ScopeSection() {
  return (
    <section className="dx ice" id="dcs-ai-scope">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Service scope</span>
          <h2 className="dx-h">
            AI infrastructure <span>components</span>
          </h2>
          <p className="dx-lede">Choose a component to see its scope, considerations and outputs.</p>
        </div>
        <div className="dsy" data-tabs="">
          <div className="dsy-chips" role="tablist" aria-label="Components">
            <button
              type="button"
              role="tab"
              id="dcs-ai-c0-t"
              aria-controls="dcs-ai-c0"
              aria-selected="true"
              style={{ "--i": "0" }}
            >
              <Icon name="target" />
              <span>Workload assessment</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-ai-c1-t"
              aria-controls="dcs-ai-c1"
              aria-selected="false"
              style={{ "--i": "1" }}
            >
              <Icon name="cpu" />
              <span>GPU / accelerator compute</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-ai-c2-t"
              aria-controls="dcs-ai-c2"
              aria-selected="false"
              style={{ "--i": "2" }}
            >
              <Icon name="server" />
              <span>Rack and row density</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-ai-c3-t"
              aria-controls="dcs-ai-c3"
              aria-selected="false"
              style={{ "--i": "3" }}
            >
              <Icon name="bolt" />
              <span>Power delivery</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-ai-c4-t"
              aria-controls="dcs-ai-c4"
              aria-selected="false"
              style={{ "--i": "4" }}
            >
              <Icon name="drop" />
              <span>Liquid cooling</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-ai-c5-t"
              aria-controls="dcs-ai-c5"
              aria-selected="false"
              style={{ "--i": "5" }}
            >
              <Icon name="net" />
              <span>Network fabric</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-ai-c6-t"
              aria-controls="dcs-ai-c6"
              aria-selected="false"
              style={{ "--i": "6" }}
            >
              <Icon name="db" />
              <span>AI storage and data pipeline</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-ai-c7-t"
              aria-controls="dcs-ai-c7"
              aria-selected="false"
              style={{ "--i": "7" }}
            >
              <Icon name="layers" />
              <span>Orchestration</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-ai-c8-t"
              aria-controls="dcs-ai-c8"
              aria-selected="false"
              style={{ "--i": "8" }}
            >
              <Icon name="eye" />
              <span>Monitoring</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-ai-c9-t"
              aria-controls="dcs-ai-c9"
              aria-selected="false"
              style={{ "--i": "9" }}
            >
              <Icon name="lock" />
              <span>Security</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-ai-c10-t"
              aria-controls="dcs-ai-c10"
              aria-selected="false"
              style={{ "--i": "10" }}
            >
              <Icon name="trend" />
              <span>Expansion</span>
            </button>
          </div>
          <div className="dsy-stage">
            <div className="dsy-p" role="tabpanel" id="dcs-ai-c0" aria-labelledby="dcs-ai-c0-t">
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon
                    className="nv-poly"
                    points="64.1,11.5 91.7,30.6 88.5,64.1 69.4,91.7 35.9,88.5 8.3,69.4 11.5,35.9 30.6,8.3"
                  />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="88.5" y2="64.1" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L88.5,64.1" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="35.9" y2="88.5" style={{ "--i": "2" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                    <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L35.9,88.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="11.5" y2="35.9" style={{ "--i": "3" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "3" }}>
                    <animateMotion dur="3.65s" repeatCount="indefinite" path="M50,50 L11.5,35.9" />
                  </circle>
                  <circle className="nv-nd" cx="91.7" cy="30.6" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="69.4" cy="91.7" r="1.6" style={{ "--i": "1" }} />
                  <circle className="nv-nd" cx="8.3" cy="69.4" r="1.6" style={{ "--i": "2" }} />
                  <circle className="nv-nd f" cx="30.6" cy="8.3" r="1.6" style={{ "--i": "3" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="target" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Training/inference needs
                </span>
                <span className="nv-chip" style={{ left: "88.5%", top: "64.1%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Cluster scale
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Utilisation
                </span>
                <span className="nv-chip" style={{ left: "11.5%", top: "35.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Workload assessment
                </span>
              </div>
              <div className="dsy-body">
                <h3>Workload assessment</h3>
                <p className="dsy-lead">
                  Training/inference needs, cluster scale, utilisation, performance and growth assumptions.
                </p>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-ai-c1" aria-labelledby="dcs-ai-c1-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon
                    className="nv-poly"
                    points="64.1,11.5 91.7,30.6 88.5,64.1 69.4,91.7 35.9,88.5 8.3,69.4 11.5,35.9 30.6,8.3"
                  />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="88.5" y2="64.1" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L88.5,64.1" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="35.9" y2="88.5" style={{ "--i": "2" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                    <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L35.9,88.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="11.5" y2="35.9" style={{ "--i": "3" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "3" }}>
                    <animateMotion dur="3.65s" repeatCount="indefinite" path="M50,50 L11.5,35.9" />
                  </circle>
                  <circle className="nv-nd" cx="91.7" cy="30.6" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="69.4" cy="91.7" r="1.6" style={{ "--i": "1" }} />
                  <circle className="nv-nd" cx="8.3" cy="69.4" r="1.6" style={{ "--i": "2" }} />
                  <circle className="nv-nd f" cx="30.6" cy="8.3" r="1.6" style={{ "--i": "3" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="cpu" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  GPU servers
                </span>
                <span className="nv-chip" style={{ left: "88.5%", top: "64.1%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Accelerator architecture
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Interconnects
                </span>
                <span className="nv-chip" style={{ left: "11.5%", top: "35.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  GPU / accelerator compute
                </span>
              </div>
              <div className="dsy-body">
                <h3>GPU / accelerator compute</h3>
                <p className="dsy-lead">
                  GPU servers, accelerator architecture, interconnects, hardware lifecycle and vendor compatibility.
                </p>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-ai-c2" aria-labelledby="dcs-ai-c2-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon
                    className="nv-poly"
                    points="64.1,11.5 91.7,30.6 88.5,64.1 69.4,91.7 35.9,88.5 8.3,69.4 11.5,35.9 30.6,8.3"
                  />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="88.5" y2="64.1" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L88.5,64.1" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="35.9" y2="88.5" style={{ "--i": "2" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                    <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L35.9,88.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="11.5" y2="35.9" style={{ "--i": "3" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "3" }}>
                    <animateMotion dur="3.65s" repeatCount="indefinite" path="M50,50 L11.5,35.9" />
                  </circle>
                  <circle className="nv-nd" cx="91.7" cy="30.6" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="69.4" cy="91.7" r="1.6" style={{ "--i": "1" }} />
                  <circle className="nv-nd" cx="8.3" cy="69.4" r="1.6" style={{ "--i": "2" }} />
                  <circle className="nv-nd f" cx="30.6" cy="8.3" r="1.6" style={{ "--i": "3" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="server" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Power per rack
                </span>
                <span className="nv-chip" style={{ left: "88.5%", top: "64.1%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Physical layout
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Service clearances
                </span>
                <span className="nv-chip" style={{ left: "11.5%", top: "35.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Rack and row density
                </span>
              </div>
              <div className="dsy-body">
                <h3>Rack and row density</h3>
                <p className="dsy-lead">
                  Power per rack, physical layout, service clearances, weight and growth envelope.
                </p>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-ai-c3" aria-labelledby="dcs-ai-c3-t" hidden>
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
                  <Icon name="bolt" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Rack feeds
                </span>
                <span className="nv-chip" style={{ left: "76.3%", top: "81.4%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Metering
                </span>
                <span className="nv-chip" style={{ left: "9.6%", top: "57.1%", "--i": "2", "--tx": "-12%" }}>
                  <Icon name="check" />
                  Power delivery
                </span>
              </div>
              <div className="dsy-body">
                <h3>Power delivery</h3>
                <p className="dsy-lead">
                  High-capacity distribution, rack feeds, metering, power quality and redundancy.
                </p>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-ai-c4" aria-labelledby="dcs-ai-c4-t" hidden>
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
                  <Icon name="drop" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Direct-to-chip loops
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  CDUs
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Manifolds
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Leak detection
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Liquid cooling
                </span>
              </div>
              <div className="dsy-body">
                <h3>Liquid cooling</h3>
                <p className="dsy-lead">
                  Direct-to-chip loops, CDUs, manifolds, leak detection, fluid compatibility and service access.
                </p>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-ai-c5" aria-labelledby="dcs-ai-c5-t" hidden>
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
                  <Icon name="net" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Topology
                </span>
                <span className="nv-chip" style={{ left: "76.3%", top: "81.4%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Bandwidth
                </span>
                <span className="nv-chip" style={{ left: "9.6%", top: "57.1%", "--i": "2", "--tx": "-12%" }}>
                  <Icon name="check" />
                  Network fabric
                </span>
              </div>
              <div className="dsy-body">
                <h3>Network fabric</h3>
                <p className="dsy-lead">
                  High-speed Ethernet or InfiniBand as appropriate; topology, bandwidth, latency and congestion
                  planning.
                </p>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-ai-c6" aria-labelledby="dcs-ai-c6-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon
                    className="nv-poly"
                    points="64.1,11.5 91.7,30.6 88.5,64.1 69.4,91.7 35.9,88.5 8.3,69.4 11.5,35.9 30.6,8.3"
                  />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="88.5" y2="64.1" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L88.5,64.1" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="35.9" y2="88.5" style={{ "--i": "2" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                    <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L35.9,88.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="11.5" y2="35.9" style={{ "--i": "3" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "3" }}>
                    <animateMotion dur="3.65s" repeatCount="indefinite" path="M50,50 L11.5,35.9" />
                  </circle>
                  <circle className="nv-nd" cx="91.7" cy="30.6" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="69.4" cy="91.7" r="1.6" style={{ "--i": "1" }} />
                  <circle className="nv-nd" cx="8.3" cy="69.4" r="1.6" style={{ "--i": "2" }} />
                  <circle className="nv-nd f" cx="30.6" cy="8.3" r="1.6" style={{ "--i": "3" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="db" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  High-throughput storage
                </span>
                <span className="nv-chip" style={{ left: "88.5%", top: "64.1%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Data ingest
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Parallel access
                </span>
                <span className="nv-chip" style={{ left: "11.5%", top: "35.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  AI storage and data pipeline
                </span>
              </div>
              <div className="dsy-body">
                <h3>AI storage and data pipeline</h3>
                <p className="dsy-lead">
                  High-throughput storage, data ingest, parallel access, backup and data lifecycle.
                </p>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-ai-c7" aria-labelledby="dcs-ai-c7-t" hidden>
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
                  Cluster management
                </span>
                <span className="nv-chip" style={{ left: "76.3%", top: "81.4%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Workload scheduling
                </span>
                <span className="nv-chip" style={{ left: "9.6%", top: "57.1%", "--i": "2", "--tx": "-12%" }}>
                  <Icon name="check" />
                  Orchestration
                </span>
              </div>
              <div className="dsy-body">
                <h3>Orchestration</h3>
                <p className="dsy-lead">
                  Cluster management, workload scheduling, container platforms and resource allocation.
                </p>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-ai-c8" aria-labelledby="dcs-ai-c8-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon
                    className="nv-poly"
                    points="64.1,11.5 91.7,30.6 88.5,64.1 69.4,91.7 35.9,88.5 8.3,69.4 11.5,35.9 30.6,8.3"
                  />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="88.5" y2="64.1" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L88.5,64.1" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="35.9" y2="88.5" style={{ "--i": "2" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "2" }}>
                    <animateMotion dur="3.30s" repeatCount="indefinite" path="M50,50 L35.9,88.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="11.5" y2="35.9" style={{ "--i": "3" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "3" }}>
                    <animateMotion dur="3.65s" repeatCount="indefinite" path="M50,50 L11.5,35.9" />
                  </circle>
                  <circle className="nv-nd" cx="91.7" cy="30.6" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="69.4" cy="91.7" r="1.6" style={{ "--i": "1" }} />
                  <circle className="nv-nd" cx="8.3" cy="69.4" r="1.6" style={{ "--i": "2" }} />
                  <circle className="nv-nd f" cx="30.6" cy="8.3" r="1.6" style={{ "--i": "3" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="eye" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  GPU utilisation
                </span>
                <span className="nv-chip" style={{ left: "88.5%", top: "64.1%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Power
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Temperatures
                </span>
                <span className="nv-chip" style={{ left: "11.5%", top: "35.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Monitoring
                </span>
              </div>
              <div className="dsy-body">
                <h3>Monitoring</h3>
                <p className="dsy-lead">
                  GPU utilisation, power, temperatures, network/storage performance and fault telemetry.
                </p>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-ai-c9" aria-labelledby="dcs-ai-c9-t" hidden>
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
                  <Icon name="lock" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Identity
                </span>
                <span className="nv-chip" style={{ left: "76.3%", top: "81.4%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Secure administration
                </span>
                <span className="nv-chip" style={{ left: "9.6%", top: "57.1%", "--i": "2", "--tx": "-12%" }}>
                  <Icon name="check" />
                  Security
                </span>
              </div>
              <div className="dsy-body">
                <h3>Security</h3>
                <p className="dsy-lead">
                  Tenant/workload isolation, identity, secure administration, data protection and model/data access
                  controls.
                </p>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-ai-c10" aria-labelledby="dcs-ai-c10-t" hidden>
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon className="nv-poly" points="64.1,11.5 93.2,65.8 35.9,88.5 6.8,34.2" />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <line className="nv-ln" x1="50" y1="50" x2="35.9" y2="88.5" style={{ "--i": "1" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "1" }}>
                    <animateMotion dur="2.95s" repeatCount="indefinite" path="M50,50 L35.9,88.5" />
                  </circle>
                  <circle className="nv-nd" cx="93.2" cy="65.8" r="1.6" style={{ "--i": "0" }} />
                  <circle className="nv-nd f" cx="6.8" cy="34.2" r="1.6" style={{ "--i": "1" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="trend" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Modular AI pods
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "1", "--tx": "-50%" }}>
                  <Icon name="layers" />
                  Expansion
                </span>
              </div>
              <div className="dsy-body">
                <h3>Expansion</h3>
                <p className="dsy-lead">Modular AI pods, phased power/cooling/network growth and workload migration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
