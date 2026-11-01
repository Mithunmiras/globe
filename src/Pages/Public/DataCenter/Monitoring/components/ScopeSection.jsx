import React from "react";
import Icon from "../../../../../Component/Icon";

export default function ScopeSection() {
  return (
    <section className="dx ice" id="dcs-monitoring-scope">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Service scope</span>
          <h2 className="dx-h">
            Monitoring systems <span>and resilience</span>
          </h2>
          <p className="dx-lede">Choose a component to see its scope, considerations and outputs.</p>
        </div>
        <div className="dsy" data-tabs="">
          <div className="dsy-chips" role="tablist" aria-label="Components">
            <button
              type="button"
              role="tab"
              id="dcs-monitoring-c0-t"
              aria-controls="dcs-monitoring-c0"
              aria-selected="true"
              style={{ "--i": "0" }}
            >
              <Icon name="building" />
              <span>BMS — Building Management System</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-monitoring-c1-t"
              aria-controls="dcs-monitoring-c1"
              aria-selected="false"
              style={{ "--i": "1" }}
            >
              <Icon name="bolt" />
              <span>EPMS — Electrical Power Monitoring</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-monitoring-c2-t"
              aria-controls="dcs-monitoring-c2"
              aria-selected="false"
              style={{ "--i": "2" }}
            >
              <Icon name="layers" />
              <span>DCIM — Data Center Infrastructure Management</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-monitoring-c3-t"
              aria-controls="dcs-monitoring-c3"
              aria-selected="false"
              style={{ "--i": "3" }}
            >
              <Icon name="gear" />
              <span>CMMS</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-monitoring-c4-t"
              aria-controls="dcs-monitoring-c4"
              aria-selected="false"
              style={{ "--i": "4" }}
            >
              <Icon name="headset" />
              <span>ITSM</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-monitoring-c5-t"
              aria-controls="dcs-monitoring-c5"
              aria-selected="false"
              style={{ "--i": "5" }}
            >
              <Icon name="target" />
              <span>Alarm management</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-monitoring-c6-t"
              aria-controls="dcs-monitoring-c6"
              aria-selected="false"
              style={{ "--i": "6" }}
            >
              <Icon name="chart" />
              <span>Capacity dashboards</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-monitoring-c7-t"
              aria-controls="dcs-monitoring-c7"
              aria-selected="false"
              style={{ "--i": "7" }}
            >
              <Icon name="lock" />
              <span>Data quality and access</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-monitoring-c8-t"
              aria-controls="dcs-monitoring-c8"
              aria-selected="false"
              style={{ "--i": "8" }}
            >
              <Icon name="shield" />
              <span>Cybersecurity and resilience</span>
            </button>
          </div>
          <div className="dsy-stage">
            <div className="dsy-p" role="tabpanel" id="dcs-monitoring-c0" aria-labelledby="dcs-monitoring-c0-t">
              <div className="nv" aria-hidden="true">
                <svg className="nv-svg" viewBox="0 0 100 100" aria-hidden="true">
                  <polygon className="nv-poly" points="64.1,11.5 34.2,93.2" />
                  <rect className="nv-sq" x="17" y="17" width="66" height="66" rx="16" />
                  <line className="nv-ln" x1="50" y1="50" x2="64.1" y2="11.5" style={{ "--i": "0" }} />
                  <circle className="nv-pk" r="1.1" style={{ "--i": "0" }}>
                    <animateMotion dur="2.60s" repeatCount="indefinite" path="M50,50 L64.1,11.5" />
                  </circle>
                  <circle className="nv-nd" cx="34.2" cy="93.2" r="1.6" style={{ "--i": "0" }} />
                </svg>
                <span className="nv-core">
                  <Icon name="building" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  BMS — Building Management System
                </span>
              </div>
              <div className="dsy-body">
                <h3>BMS — Building Management System</h3>
                <p className="dsy-lead">Building services and mechanical systems, depending on implementation.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Monitor and control relevant building systems and environmental conditions.</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-monitoring-c1" aria-labelledby="dcs-monitoring-c1-t" hidden>
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
                  Electrical distribution
                </span>
                <span className="nv-chip" style={{ left: "76.3%", top: "81.4%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Power quality
                </span>
                <span className="nv-chip" style={{ left: "9.6%", top: "57.1%", "--i": "2", "--tx": "-12%" }}>
                  <Icon name="check" />
                  EPMS — Electrical Power Monitoring
                </span>
              </div>
              <div className="dsy-body">
                <h3>EPMS — Electrical Power Monitoring</h3>
                <p className="dsy-lead">Electrical distribution, power quality, metering and electrical alarms.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Understand electrical status, load trends and power events.</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-monitoring-c2" aria-labelledby="dcs-monitoring-c2-t" hidden>
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
                  <Icon name="layers" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Connect asset
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Space
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Power
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  IT assets
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Rack space and capacity
                </span>
              </div>
              <div className="dsy-body">
                <h3>DCIM — Data Center Infrastructure Management</h3>
                <p className="dsy-lead">Relationships among facility resources, IT assets, rack space and capacity.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Connect asset, space, power, cooling and capacity views for planning and operations.</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-monitoring-c3" aria-labelledby="dcs-monitoring-c3-t" hidden>
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
                  <Icon name="gear" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Maintenance work orders
                </span>
                <span className="nv-chip" style={{ left: "88.5%", top: "64.1%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Preventive maintenance
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Asset history and spares
                </span>
                <span className="nv-chip" style={{ left: "11.5%", top: "35.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  CMMS
                </span>
              </div>
              <div className="dsy-body">
                <h3>CMMS</h3>
                <p className="dsy-lead">Maintenance work orders, preventive maintenance, asset history and spares.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Plan maintenance and retain service history.</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-monitoring-c4" aria-labelledby="dcs-monitoring-c4-t" hidden>
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
                  <Icon name="headset" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Standardise workflows
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Incidents
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Changes
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Problems
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  ITSM
                </span>
              </div>
              <div className="dsy-body">
                <h3>ITSM</h3>
                <p className="dsy-lead">Incidents, changes, problems, requests and configuration management.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Standardise workflows, escalation and service reporting.</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-monitoring-c5" aria-labelledby="dcs-monitoring-c5-t" hidden>
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
                  Integrations
                </span>
                <span className="nv-chip" style={{ left: "88.5%", top: "64.1%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Alarm ownership
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Priority/severity
                </span>
                <span className="nv-chip" style={{ left: "11.5%", top: "35.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Alarm management
                </span>
              </div>
              <div className="dsy-body">
                <h3>Alarm management</h3>
                <p className="dsy-lead">
                  Integrations, alarm ownership, priority/severity, acknowledgement and escalation paths.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Alarms prioritised so operators act on what matters.</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-monitoring-c6" aria-labelledby="dcs-monitoring-c6-t" hidden>
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
                  Space
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Power
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Cooling
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Ports and assets
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Capacity dashboards
                </span>
              </div>
              <div className="dsy-body">
                <h3>Capacity dashboards</h3>
                <p className="dsy-lead">Space, power, cooling, ports and assets.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Thresholds and forecasts drive expansion decisions.</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-monitoring-c7" aria-labelledby="dcs-monitoring-c7-t" hidden>
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
                  Access control
                </span>
                <span className="nv-chip" style={{ left: "76.3%", top: "81.4%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Audit logs
                </span>
                <span className="nv-chip" style={{ left: "9.6%", top: "57.1%", "--i": "2", "--tx": "-12%" }}>
                  <Icon name="check" />
                  Data quality and access
                </span>
              </div>
              <div className="dsy-body">
                <h3>Data quality and access</h3>
                <p className="dsy-lead">Access control, audit logs, retention and integration maintenance.</p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Predictive or AI claims only where the solution and data support them.</p>
                </div>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-monitoring-c8" aria-labelledby="dcs-monitoring-c8-t" hidden>
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
                  <Icon name="shield" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Physical security
                </span>
                <span className="nv-chip" style={{ left: "91.0%", top: "51.5%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Segmentation
                </span>
                <span className="nv-chip" style={{ left: "61.3%", top: "89.4%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Hardening
                </span>
                <span className="nv-chip" style={{ left: "16.0%", top: "72.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  SIEM integration
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Immutable backups
                </span>
              </div>
              <div className="dsy-body">
                <h3>Cybersecurity and resilience</h3>
                <p className="dsy-lead">
                  Segmentation, privileged and vendor access, hardening, SIEM integration, immutable backups,
                  OT/facility interface security, BC/DR runbooks and exercises.
                </p>
                <div className="dsy-c co">
                  <small>
                    <Icon name="compass" />
                    {"Design & operational considerations"}
                  </small>
                  <p>Physical security, cyber security and business continuity as complementary controls.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
