import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function IndustrySection() {
  return (
    <section className="dx ice" id="ins-re-ind">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Industries in this sector</span>
          <h2 className="dx-h">
            Choose your <span>industry</span>
          </h2>
          <p className="dx-lede">Select an industry to see the priorities we hear and what we deliver.</p>
        </div>
        <div className="dsy" data-tabs="">
          <div className="dsy-chips" role="tablist" aria-label="Industries">
            <button
              type="button"
              role="tab"
              id="ins-re-c0-t"
              aria-controls="ins-re-c0"
              aria-selected="true"
              style={{ "--i": "0" }}
            >
              <Icon name="fire" />
              <span>{"Energy, Oil & Gas"}</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-re-c1-t"
              aria-controls="ins-re-c1"
              aria-selected="false"
              style={{ "--i": "1" }}
            >
              <Icon name="bolt" />
              <span>{"Utilities & Power"}</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-re-c2-t"
              aria-controls="ins-re-c2"
              aria-selected="false"
              style={{ "--i": "2" }}
            >
              <Icon name="pick" />
              <span>{"Natural Resources & Mining"}</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-re-c3-t"
              aria-controls="ins-re-c3"
              aria-selected="false"
              style={{ "--i": "3" }}
            >
              <Icon name="wheat" />
              <span>{"Agriculture & Agri-tech"}</span>
            </button>
          </div>
          <div className="dsy-stage">
            <div className="dsy-p ind-p" role="tabpanel" id="ins-re-c0" aria-labelledby="ins-re-c0-t">
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
                <span className="nv-core ph">
                  <img src="/images/img-11-93cb3d9c3a.jpg" alt="" loading="lazy" />
                  <Icon name="fire" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="dc" />
                  Data Center
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="shield" />
                  Cybersecurity
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="chart" />
                  {"Data & AI"}
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Remote connectivity
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  OT security
                </span>
              </div>
              <div className="dsy-body">
                <h3>{"Energy, Oil & Gas"}</h3>
                <p className="dsy-lead">Remote-site connectivity, OT security and operational data platforms.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Remote connectivity, OT security, asset integrity, HSE reporting.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>Site networks and satellite/RF backhaul, OT security monitoring, operational data platforms.</p>
                </div>
                <div className="ind-sv">
                  <small>Services involved</small>
                  <Link to="/data-center">
                    <Icon name="dc" />
                    {"Data Center & Infrastructure"}
                  </Link>
                  <Link to="/cybersecurity">
                    <Icon name="shield" />
                    {"Cybersecurity & Resilience"}
                  </Link>
                  <Link to="/data-analytics">
                    <Icon name="chart" />
                    {"Data, Analytics & AI"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="dsy-p ind-p" role="tabpanel" id="ins-re-c1" aria-labelledby="ins-re-c1-t" hidden>
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
                <span className="nv-core ph">
                  <img src="/images/img-63-e0e2762053.jpg" alt="" loading="lazy" />
                  <Icon name="bolt" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="dc" />
                  Data Center
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="shield" />
                  Cybersecurity
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="apps" />
                  Applications
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Grid reliability
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  SCADA security
                </span>
              </div>
              <div className="dsy-body">
                <h3>{"Utilities & Power"}</h3>
                <p className="dsy-lead">Grid and plant networks, SCADA-aware security and field-force applications.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Grid reliability, SCADA security, field workforce, loss reduction.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>Substation and plant networks, SCADA-aware SOC, field-force mobility apps, metering analytics.</p>
                </div>
                <div className="ind-sv">
                  <small>Services involved</small>
                  <Link to="/data-center">
                    <Icon name="dc" />
                    {"Data Center & Infrastructure"}
                  </Link>
                  <Link to="/cybersecurity">
                    <Icon name="shield" />
                    {"Cybersecurity & Resilience"}
                  </Link>
                  <Link to="/applications">
                    <Icon name="apps" />
                    Enterprise Applications
                  </Link>
                </div>
              </div>
            </div>
            <div className="dsy-p ind-p" role="tabpanel" id="ins-re-c2" aria-labelledby="ins-re-c2-t" hidden>
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
                <span className="nv-core ph">
                  <img src="/images/img-64-8ef8573e31.jpg" alt="" loading="lazy" />
                  <Icon name="pick" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="dc" />
                  Data Center
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="chart" />
                  {"Data & AI"}
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="apps" />
                  Applications
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Equipment uptime
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Worker safety
                </span>
              </div>
              <div className="dsy-body">
                <h3>{"Natural Resources & Mining"}</h3>
                <p className="dsy-lead">Rugged field infrastructure, asset monitoring and safety analytics.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Equipment uptime, worker safety, rugged connectivity, production tracking.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>Rugged edge infrastructure, fleet and asset monitoring, safety analytics.</p>
                </div>
                <div className="ind-sv">
                  <small>Services involved</small>
                  <Link to="/data-center">
                    <Icon name="dc" />
                    {"Data Center & Infrastructure"}
                  </Link>
                  <Link to="/data-analytics">
                    <Icon name="chart" />
                    {"Data, Analytics & AI"}
                  </Link>
                  <Link to="/applications">
                    <Icon name="apps" />
                    Enterprise Applications
                  </Link>
                </div>
              </div>
            </div>
            <div className="dsy-p ind-p" role="tabpanel" id="ins-re-c3" aria-labelledby="ins-re-c3-t" hidden>
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
                <span className="nv-core ph">
                  <img src="/images/img-65-3cc02c21cb.jpg" alt="" loading="lazy" />
                  <Icon name="wheat" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="apps" />
                  Applications
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="chart" />
                  {"Data & AI"}
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="cloud" />
                  Cloud
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Yield
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Traceability
                </span>
              </div>
              <div className="dsy-body">
                <h3>{"Agriculture & Agri-tech"}</h3>
                <p className="dsy-lead">
                  Farm-to-market applications, IoT data and analytics for yield and supply planning.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Yield, traceability, farmer engagement, supply planning.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>Farm-to-market apps, IoT sensor platforms, yield and supply analytics on cloud.</p>
                </div>
                <div className="ind-sv">
                  <small>Services involved</small>
                  <Link to="/applications">
                    <Icon name="apps" />
                    Enterprise Applications
                  </Link>
                  <Link to="/data-analytics">
                    <Icon name="chart" />
                    {"Data, Analytics & AI"}
                  </Link>
                  <Link to="/cloud">
                    <Icon name="cloud" />
                    {"Cloud & Modernisation"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
