import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function IndustrySection() {
  return (
    <section className="dx ice" id="ins-si-ind">
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
              id="ins-si-c0-t"
              aria-controls="ins-si-c0"
              aria-selected="true"
              style={{ "--i": "0" }}
            >
              <Icon name="bed" />
              <span>{"Travel & Hospitality"}</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-si-c1-t"
              aria-controls="ins-si-c1"
              aria-selected="false"
              style={{ "--i": "1" }}
            >
              <Icon name="truck" />
              <span>{"Logistics & Warehousing"}</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-si-c2-t"
              aria-controls="ins-si-c2"
              aria-selected="false"
              style={{ "--i": "2" }}
            >
              <Icon name="building" />
              <span>{"Real Estate & Construction"}</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-si-c3-t"
              aria-controls="ins-si-c3"
              aria-selected="false"
              style={{ "--i": "3" }}
            >
              <Icon name="briefcase" />
              <span>Professional Services</span>
            </button>
          </div>
          <div className="dsy-stage">
            <div className="dsy-p ind-p" role="tabpanel" id="ins-si-c0" aria-labelledby="ins-si-c0-t">
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
                  <img src="/images/img-13-d14043565a.jpg" alt="" loading="lazy" />
                  <Icon name="bed" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="apps" />
                  Applications
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="dc" />
                  Data Center
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="shield" />
                  Cybersecurity
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Guest experience
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Property Wi-Fi
                </span>
              </div>
              <div className="dsy-body">
                <h3>{"Travel & Hospitality"}</h3>
                <p className="dsy-lead">
                  Guest-facing applications, property networks and payment security across hotels and travel brands.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Guest experience, property Wi-Fi, payment security, multi-property operations.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>Property network and Wi-Fi, PMS/POS integration, PCI DSS controls, managed support.</p>
                </div>
                <div className="ind-sv">
                  <small>Services involved</small>
                  <Link to="/applications">
                    <Icon name="apps" />
                    Enterprise Applications
                  </Link>
                  <Link to="/data-center">
                    <Icon name="dc" />
                    {"Data Center & Infrastructure"}
                  </Link>
                  <Link to="/cybersecurity">
                    <Icon name="shield" />
                    {"Cybersecurity & Resilience"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="dsy-p ind-p" role="tabpanel" id="ins-si-c1" aria-labelledby="ins-si-c1-t" hidden>
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
                  <img src="/images/img-70-2f356a82f8.jpg" alt="" loading="lazy" />
                  <Icon name="truck" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="dc" />
                  Data Center
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="apps" />
                  Applications
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="chart" />
                  {"Data & AI"}
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Shipment visibility
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Warehouse throughput
                </span>
              </div>
              <div className="dsy-body">
                <h3>{"Logistics & Warehousing"}</h3>
                <p className="dsy-lead">Warehouse networks, WMS/ERP integration and real-time tracking dashboards.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Shipment visibility, warehouse throughput, fleet data, customer portals.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>Warehouse Wi-Fi and scanning networks, WMS/TMS/ERP integration, tracking dashboards.</p>
                </div>
                <div className="ind-sv">
                  <small>Services involved</small>
                  <Link to="/data-center">
                    <Icon name="dc" />
                    {"Data Center & Infrastructure"}
                  </Link>
                  <Link to="/applications">
                    <Icon name="apps" />
                    Enterprise Applications
                  </Link>
                  <Link to="/data-analytics">
                    <Icon name="chart" />
                    {"Data, Analytics & AI"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="dsy-p ind-p" role="tabpanel" id="ins-si-c2" aria-labelledby="ins-si-c2-t" hidden>
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
                  <img src="/images/img-71-dd1567c847.jpg" alt="" loading="lazy" />
                  <Icon name="building" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="dc" />
                  Data Center
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="apps" />
                  Applications
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="chart" />
                  {"Data & AI"}
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Site connectivity
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Project controls
                </span>
              </div>
              <div className="dsy-body">
                <h3>{"Real Estate & Construction"}</h3>
                <p className="dsy-lead">Smart-building systems, site connectivity and project applications.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Site connectivity, project controls, smart buildings, handover data.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>Temporary and permanent site networks, project applications, BMS integration.</p>
                </div>
                <div className="ind-sv">
                  <small>Services involved</small>
                  <Link to="/data-center">
                    <Icon name="dc" />
                    {"Data Center & Infrastructure"}
                  </Link>
                  <Link to="/applications">
                    <Icon name="apps" />
                    Enterprise Applications
                  </Link>
                  <Link to="/data-analytics">
                    <Icon name="chart" />
                    {"Data, Analytics & AI"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="dsy-p ind-p" role="tabpanel" id="ins-si-c3" aria-labelledby="ins-si-c3-t" hidden>
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
                  <img src="/images/img-72-f856d51665.jpg" alt="" loading="lazy" />
                  <Icon name="briefcase" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="laptop" />
                  Workplace
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="shield" />
                  Cybersecurity
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="cloud" />
                  Cloud
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Client confidentiality
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Document control
                </span>
              </div>
              <div className="dsy-body">
                <h3>Professional Services</h3>
                <p className="dsy-lead">
                  Secure collaboration, document management and productivity on Microsoft 365 and cloud.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Client confidentiality, document control, hybrid work, billing.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>Microsoft 365 workplace, document management, identity and DLP, cloud platforms.</p>
                </div>
                <div className="ind-sv">
                  <small>Services involved</small>
                  <Link to="/digital-workplace">
                    <Icon name="laptop" />
                    {"Digital Workplace & Automation"}
                  </Link>
                  <Link to="/cybersecurity">
                    <Icon name="shield" />
                    {"Cybersecurity & Resilience"}
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
