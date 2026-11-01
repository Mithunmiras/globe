import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function IndustrySection() {
  return (
    <section className="dx ice" id="ins-cmt-ind">
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
              id="ins-cmt-c0-t"
              aria-controls="ins-cmt-c0"
              aria-selected="true"
              style={{ "--i": "0" }}
            >
              <Icon name="tower" />
              <span>Telecom</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-cmt-c1-t"
              aria-controls="ins-cmt-c1"
              aria-selected="false"
              style={{ "--i": "1" }}
            >
              <Icon name="film" />
              <span>{"Media & Entertainment"}</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-cmt-c2-t"
              aria-controls="ins-cmt-c2"
              aria-selected="false"
              style={{ "--i": "2" }}
            >
              <Icon name="code" />
              <span>{"Software & Platforms"}</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-cmt-c3-t"
              aria-controls="ins-cmt-c3"
              aria-selected="false"
              style={{ "--i": "3" }}
            >
              <Icon name="headset" />
              <span>{"IT, ITES & GCCs"}</span>
            </button>
            <button
              type="button"
              role="tab"
              id="ins-cmt-c4-t"
              aria-controls="ins-cmt-c4"
              aria-selected="false"
              style={{ "--i": "4" }}
            >
              <Icon name="dc" />
              <span>{"Data Center & Colocation Providers"}</span>
            </button>
          </div>
          <div className="dsy-stage">
            <div className="dsy-p ind-p" role="tabpanel" id="ins-cmt-c0" aria-labelledby="ins-cmt-c0-t">
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
                  <img src="/images/img-12-b050dbf75f.jpg" alt="" loading="lazy" />
                  <Icon name="tower" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="dc" />
                  Data Center
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="headset" />
                  Managed IT
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="cloud" />
                  Cloud
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Network uptime
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Edge capacity
                </span>
              </div>
              <div className="dsy-body">
                <h3>Telecom</h3>
                <p className="dsy-lead">High-density data center, network and NOC operations at carrier scale.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Network uptime, edge capacity, NOC efficiency, regulatory security.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>Edge and core DC design, network modernisation, NOC tooling and operations.</p>
                </div>
                <div className="ind-sv">
                  <small>Services involved</small>
                  <Link to="/data-center">
                    <Icon name="dc" />
                    {"Data Center & Infrastructure"}
                  </Link>
                  <Link to="/managed-services">
                    <Icon name="headset" />
                    Managed IT Services
                  </Link>
                  <Link to="/cloud">
                    <Icon name="cloud" />
                    {"Cloud & Modernisation"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="dsy-p ind-p" role="tabpanel" id="ins-cmt-c1" aria-labelledby="ins-cmt-c1-t" hidden>
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
                  <img src="/images/img-66-549e117934.jpg" alt="" loading="lazy" />
                  <Icon name="film" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="dc" />
                  Data Center
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="cloud" />
                  Cloud
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="shield" />
                  Cybersecurity
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Storage throughput
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Content protection
                </span>
              </div>
              <div className="dsy-body">
                <h3>{"Media & Entertainment"}</h3>
                <p className="dsy-lead">High-throughput storage, content workflows and secure distribution.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Storage throughput, content protection, streaming scale, remote production.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>High-performance storage, media workflow integration, content security, CDN-ready cloud.</p>
                </div>
                <div className="ind-sv">
                  <small>Services involved</small>
                  <Link to="/data-center">
                    <Icon name="dc" />
                    {"Data Center & Infrastructure"}
                  </Link>
                  <Link to="/cloud">
                    <Icon name="cloud" />
                    {"Cloud & Modernisation"}
                  </Link>
                  <Link to="/cybersecurity">
                    <Icon name="shield" />
                    {"Cybersecurity & Resilience"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="dsy-p ind-p" role="tabpanel" id="ins-cmt-c2" aria-labelledby="ins-cmt-c2-t" hidden>
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
                  <img src="/images/img-67-82ae21661c.jpg" alt="" loading="lazy" />
                  <Icon name="code" />
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
                  Release speed
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Cloud cost
                </span>
              </div>
              <div className="dsy-body">
                <h3>{"Software & Platforms"}</h3>
                <p className="dsy-lead">
                  Cloud-native platforms, DevSecOps and AI-ready GPU infrastructure for product companies.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Release speed, cloud cost, SOC 2 readiness, GPU capacity.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>Kubernetes platforms, DevSecOps pipelines, FinOps, GPU clusters for AI.</p>
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
            <div className="dsy-p ind-p" role="tabpanel" id="ins-cmt-c3" aria-labelledby="ins-cmt-c3-t" hidden>
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
                  <img src="/images/img-68-d145d43354.jpg" alt="" loading="lazy" />
                  <Icon name="headset" />
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
                  <Icon name="headset" />
                  Managed IT
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Fast centre set-up
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  End-user experience
                </span>
              </div>
              <div className="dsy-body">
                <h3>{"IT, ITES & GCCs"}</h3>
                <p className="dsy-lead">
                  Scalable delivery-centre infrastructure, end-user services and managed NOC/SOC.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Fast centre set-up, client security requirements, end-user experience.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>
                    Delivery-centre build-outs, client-segregated networks, Microsoft 365 workplace, managed NOC/SOC.
                  </p>
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
                  <Link to="/managed-services">
                    <Icon name="headset" />
                    Managed IT Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="dsy-p ind-p" role="tabpanel" id="ins-cmt-c4" aria-labelledby="ins-cmt-c4-t" hidden>
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
                  <img src="/images/img-69-27e063cc66.jpg" alt="" loading="lazy" />
                  <Icon name="dc" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="dc" />
                  Data Center
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="headset" />
                  Managed IT
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="compass" />
                  Consulting
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Time to capacity
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  PUE
                </span>
              </div>
              <div className="dsy-body">
                <h3>{"Data Center & Colocation Providers"}</h3>
                <p className="dsy-lead">
                  Design-build, power, cooling, CDUs and 24x7 operations for operators and hyperscale tenants.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="target" />
                    Priorities we hear
                  </small>
                  <p>Time to capacity, PUE, high-density readiness, tenant SLAs.</p>
                </div>
                <div className="dsy-c op">
                  <small>
                    <Icon name="check" />
                    What we deliver
                  </small>
                  <p>Design-build, liquid cooling and CDUs, DCIM, commissioning and critical operations.</p>
                </div>
                <div className="ind-sv">
                  <small>Services involved</small>
                  <Link to="/data-center">
                    <Icon name="dc" />
                    {"Data Center & Infrastructure"}
                  </Link>
                  <Link to="/managed-services">
                    <Icon name="headset" />
                    Managed IT Services
                  </Link>
                  <Link to="/consulting">
                    <Icon name="compass" />
                    {"Consulting & Advisory"}
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
