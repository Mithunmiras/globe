import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function IndustrySection() {
  return (
    <section className="dx ice" id="ins-fs-ind">
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
              id="ins-fs-c0-t"
              aria-controls="ins-fs-c0"
              aria-selected="true"
              style={{ "--i": "0" }}
            >
              <Icon name="bank" />
              <span>Banking</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-fs-c1-t"
              aria-controls="ins-fs-c1"
              aria-selected="false"
              style={{ "--i": "1" }}
            >
              <Icon name="trend" />
              <span>Capital Markets</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-fs-c2-t"
              aria-controls="ins-fs-c2"
              aria-selected="false"
              style={{ "--i": "2" }}
            >
              <Icon name="umbrella" />
              <span>Insurance</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-fs-c3-t"
              aria-controls="ins-fs-c3"
              aria-selected="false"
              style={{ "--i": "3" }}
            >
              <Icon name="card" />
              <span>{"Fintech & Payments"}</span>
            </button>
          </div>
          <div className="dsy-stage">
            <div className="dsy-p ind-p" role="tabpanel" id="ins-fs-c0" aria-labelledby="ins-fs-c0-t">
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
                  <img src="/images/img-08-d45099ac5c.jpg" alt="" loading="lazy" />
                  <Icon name="bank" />
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
                  <Icon name="headset" />
                  Managed IT
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Branch connectivity
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Regulator audits
                </span>
              </div>
              <div className="dsy-body">
                <h3>Banking</h3>
                <p className="dsy-lead">
                  Always-on infrastructure, 24x7 SOC and regulator-aligned controls for core banking, digital channels
                  and branch networks.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>
                    Core and channel availability, branch connectivity, fraud and cyber resilience, regulator audits.
                  </p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>
                    Resilient DC and DR design, SD-WAN for branches, SOC with SIEM/SOAR, IT governance evidence packs.
                  </p>
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
                  <Link to="/managed-services">
                    <Icon name="headset" />
                    Managed IT Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="dsy-p ind-p" role="tabpanel" id="ins-fs-c1" aria-labelledby="ins-fs-c1-t" hidden>
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
                  <img src="/images/img-51-658bfd622f.jpg" alt="" loading="lazy" />
                  <Icon name="trend" />
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
                  Low latency
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Market-hours uptime
                </span>
              </div>
              <div className="dsy-body">
                <h3>Capital Markets</h3>
                <p className="dsy-lead">
                  Low-latency networks, resilient trading infrastructure and audit-ready security for brokers, exchanges
                  and asset managers.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Low latency, market-hours uptime, cyber resilience frameworks, surveillance data.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>
                    Low-latency network and colocation design, DR drills, cyber resilience programmes, data platforms.
                  </p>
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
            <div className="dsy-p ind-p" role="tabpanel" id="ins-fs-c2" aria-labelledby="ins-fs-c2-t" hidden>
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
                  <img src="/images/img-52-3d45e32535.jpg" alt="" loading="lazy" />
                  <Icon name="umbrella" />
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
                  <Icon name="shield" />
                  Cybersecurity
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Agent productivity
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Customer data protection
                </span>
              </div>
              <div className="dsy-body">
                <h3>Insurance</h3>
                <p className="dsy-lead">
                  Modernised policy and claims applications, analytics and protected customer data across agents and
                  digital channels.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Faster policy issuance and claims, agent productivity, customer data protection.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>
                    Policy and claims application modernisation, claims analytics and AI triage, data protection
                    controls.
                  </p>
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
                  <Link to="/cybersecurity">
                    <Icon name="shield" />
                    {"Cybersecurity & Resilience"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="dsy-p ind-p" role="tabpanel" id="ins-fs-c3" aria-labelledby="ins-fs-c3-t" hidden>
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
                  <img src="/images/img-53-23a4c1e3ec.jpg" alt="" loading="lazy" />
                  <Icon name="card" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="cloud" />
                  Cloud
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
                  Scale on demand
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  PCI DSS scope control
                </span>
              </div>
              <div className="dsy-body">
                <h3>{"Fintech & Payments"}</h3>
                <p className="dsy-lead">
                  PCI DSS-aligned platforms, scalable cloud and fraud-aware monitoring for payment and lending
                  businesses.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Scale on demand, PCI DSS scope control, fraud signals, rapid releases.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>Cloud landing zones, DevSecOps pipelines, PCI DSS scoping and controls, real-time monitoring.</p>
                </div>
                <div className="ind-sv">
                  <small>Services involved</small>
                  <Link to="/cloud">
                    <Icon name="cloud" />
                    {"Cloud & Modernisation"}
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
          </div>
        </div>
      </div>
    </section>
  );
}
