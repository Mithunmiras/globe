import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function IndustrySection() {
  return (
    <section className="dx ice" id="ins-ph-ind">
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
              id="ins-ph-c0-t"
              aria-controls="ins-ph-c0"
              aria-selected="true"
              style={{ "--i": "0" }}
            >
              <Icon name="gov" />
              <span>{"Government & Public Service"}</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-ph-c1-t"
              aria-controls="ins-ph-c1"
              aria-selected="false"
              style={{ "--i": "1" }}
            >
              <Icon name="plane" />
              <span>{"Aerospace & Defence"}</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-ph-c2-t"
              aria-controls="ins-ph-c2"
              aria-selected="false"
              style={{ "--i": "2" }}
            >
              <Icon name="health" />
              <span>{"Healthcare & Hospitals"}</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-ph-c3-t"
              aria-controls="ins-ph-c3"
              aria-selected="false"
              style={{ "--i": "3" }}
            >
              <Icon name="pill" />
              <span>{"Life Sciences & Pharma"}</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-ph-c4-t"
              aria-controls="ins-ph-c4"
              aria-selected="false"
              style={{ "--i": "4" }}
            >
              <Icon name="cap" />
              <span>Education</span>
            </button>
          </div>
          <div className="dsy-stage">
            <div className="dsy-p ind-p" role="tabpanel" id="ins-ph-c0" aria-labelledby="ins-ph-c0-t">
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
                  <img src="/images/img-09-c214ac8037.jpg" alt="" loading="lazy" />
                  <Icon name="gov" />
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
                  Data sovereignty
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Audit trails
                </span>
              </div>
              <div className="dsy-body">
                <h3>{"Government & Public Service"}</h3>
                <p className="dsy-lead">
                  Secure, auditable infrastructure and citizen-service applications built to public-sector standards.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Citizen service availability, data sovereignty, audit trails, procurement compliance.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>Government-community cloud and on-premise designs, citizen portals, SOC and audit logging.</p>
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
            <div className="dsy-p ind-p" role="tabpanel" id="ins-ph-c1" aria-labelledby="ins-ph-c1-t" hidden>
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
                  <img src="/images/img-54-8bba614bd9.jpg" alt="" loading="lazy" />
                  <Icon name="plane" />
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
                  <Icon name="compass" />
                  Consulting
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Network segmentation
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Controlled data
                </span>
              </div>
              <div className="dsy-body">
                <h3>{"Aerospace & Defence"}</h3>
                <p className="dsy-lead">
                  Segmented, high-assurance networks, engineering compute and controlled data handling for programmes
                  and suppliers.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Network segmentation, controlled data, engineering compute, supplier security.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>
                    Segmented and air-gapped network designs, HPC for engineering, access control and data handling.
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
                  <Link to="/consulting">
                    <Icon name="compass" />
                    {"Consulting & Advisory"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="dsy-p ind-p" role="tabpanel" id="ins-ph-c2" aria-labelledby="ins-ph-c2-t" hidden>
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
                  <img src="/images/img-55-9fd3b842d2.jpg" alt="" loading="lazy" />
                  <Icon name="health" />
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
                  Clinical system uptime
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Medical device networks
                </span>
              </div>
              <div className="dsy-body">
                <h3>{"Healthcare & Hospitals"}</h3>
                <p className="dsy-lead">
                  Resilient hospital networks, protected patient data and always-available clinical systems.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Clinical system uptime, medical device networks, patient data protection, interoperability.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>Hospital network and Wi-Fi design, HIS/EMR hosting and DR, medical-device segmentation, SOC.</p>
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
            <div className="dsy-p ind-p" role="tabpanel" id="ins-ph-c3" aria-labelledby="ins-ph-c3-t" hidden>
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
                  <img src="/images/img-56-7760ae68d1.jpg" alt="" loading="lazy" />
                  <Icon name="pill" />
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
                  <Icon name="shield" />
                  Cybersecurity
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Data integrity
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Validated systems
                </span>
              </div>
              <div className="dsy-body">
                <h3>{"Life Sciences & Pharma"}</h3>
                <p className="dsy-lead">
                  Validated infrastructure, lab and manufacturing systems, and data integrity for regulated operations.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Data integrity, validated systems, lab and plant connectivity, audit readiness.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>Qualified infrastructure, validation documentation, LIMS/ERP integration, OT/IT security.</p>
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
                  <Link to="/cybersecurity">
                    <Icon name="shield" />
                    {"Cybersecurity & Resilience"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="dsy-p ind-p" role="tabpanel" id="ins-ph-c4" aria-labelledby="ins-ph-c4-t" hidden>
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
                  <img src="/images/img-57-e379f27ce4.jpg" alt="" loading="lazy" />
                  <Icon name="cap" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="laptop" />
                  Workplace
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="cloud" />
                  Cloud
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="headset" />
                  Managed IT
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Campus connectivity
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Hybrid learning
                </span>
              </div>
              <div className="dsy-body">
                <h3>Education</h3>
                <p className="dsy-lead">
                  Campus networks, cloud classrooms, student data protection and digital learning platforms.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Campus connectivity, hybrid learning, student data protection, lean IT teams.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>Campus LAN/Wi-Fi, cloud collaboration and LMS, identity and device management, managed support.</p>
                </div>
                <div className="ind-sv">
                  <small>Services involved</small>
                  <Link to="/digital-workplace">
                    <Icon name="laptop" />
                    {"Digital Workplace & Automation"}
                  </Link>
                  <Link to="/cloud">
                    <Icon name="cloud" />
                    {"Cloud & Modernisation"}
                  </Link>
                  <Link to="/managed-services">
                    <Icon name="headset" />
                    Managed IT Services
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
