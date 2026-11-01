import React from "react";
import Icon from "../../../../../Component/Icon";

export default function ScopeSection() {
  return (
    <section className="dx ice" id="dcs-expansion-scope">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Service scope</span>
          <h2 className="dx-h">
            Expansion and <span>modernisation services</span>
          </h2>
          <p className="dx-lede">Choose a component to see its scope, considerations and outputs.</p>
        </div>
        <div className="dsy" data-tabs="">
          <div className="dsy-chips" role="tablist" aria-label="Components">
            <button
              type="button"
              role="tab"
              id="dcs-expansion-c0-t"
              aria-controls="dcs-expansion-c0"
              aria-selected="true"
              style={{ "--i": "0" }}
            >
              <Icon name="chart" />
              <span>Demand forecasting</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-expansion-c1-t"
              aria-controls="dcs-expansion-c1"
              aria-selected="false"
              style={{ "--i": "1" }}
            >
              <Icon name="layers" />
              <span>Phased and modular growth</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-expansion-c2-t"
              aria-controls="dcs-expansion-c2"
              aria-selected="false"
              style={{ "--i": "2" }}
            >
              <Icon name="bolt" />
              <span>Utility and long-lead planning</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-expansion-c3-t"
              aria-controls="dcs-expansion-c3"
              aria-selected="false"
              style={{ "--i": "3" }}
            >
              <Icon name="arrow" />
              <span>Workload migration</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-expansion-c4-t"
              aria-controls="dcs-expansion-c4"
              aria-selected="false"
              style={{ "--i": "4" }}
            >
              <Icon name="gear" />
              <span>Infrastructure modernisation</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-expansion-c5-t"
              aria-controls="dcs-expansion-c5"
              aria-selected="false"
              style={{ "--i": "5" }}
            >
              <Icon name="server" />
              <span>Technology refresh</span>
            </button>
            <button
              type="button"
              role="tab"
              id="dcs-expansion-c6-t"
              aria-controls="dcs-expansion-c6"
              aria-selected="false"
              style={{ "--i": "6" }}
            >
              <Icon name="trash" />
              <span>Decommissioning</span>
            </button>
          </div>
          <div className="dsy-stage">
            <div className="dsy-p" role="tabpanel" id="dcs-expansion-c0" aria-labelledby="dcs-expansion-c0-t">
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
                  Thresholds for space
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
                  Network
                </span>
                <span className="nv-chip" style={{ left: "17.7%", top: "24.7%", "--i": "4", "--tx": "-12%" }}>
                  <Icon name="chart" />
                  Demand forecasting
                </span>
              </div>
              <div className="dsy-body">
                <h3>Demand forecasting</h3>
                <p className="dsy-lead">Thresholds for space, power, cooling, network, storage and staff capacity.</p>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-expansion-c1" aria-labelledby="dcs-expansion-c1-t" hidden>
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
                  <Icon name="layers" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Phased and modular growth
                </span>
              </div>
              <div className="dsy-body">
                <h3>Phased and modular growth</h3>
                <p className="dsy-lead">Expansion that protects live operations and maintenance access.</p>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-expansion-c2" aria-labelledby="dcs-expansion-c2-t" hidden>
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
                  Utility upgrades
                </span>
                <span className="nv-chip" style={{ left: "76.3%", top: "81.4%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Long-lead equipment
                </span>
                <span className="nv-chip" style={{ left: "9.6%", top: "57.1%", "--i": "2", "--tx": "-12%" }}>
                  <Icon name="check" />
                  Utility and long-lead planning
                </span>
              </div>
              <div className="dsy-body">
                <h3>Utility and long-lead planning</h3>
                <p className="dsy-lead">
                  Utility upgrades, long-lead equipment, construction staging and cutover dependencies.
                </p>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-expansion-c3" aria-labelledby="dcs-expansion-c3-t" hidden>
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
                  <Icon name="arrow" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Change windows
                </span>
                <span className="nv-chip" style={{ left: "76.3%", top: "81.4%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Communications
                </span>
                <span className="nv-chip" style={{ left: "9.6%", top: "57.1%", "--i": "2", "--tx": "-12%" }}>
                  <Icon name="check" />
                  Workload migration
                </span>
              </div>
              <div className="dsy-body">
                <h3>Workload migration</h3>
                <p className="dsy-lead">Change windows, communications, rollback and acceptance tests.</p>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-expansion-c4" aria-labelledby="dcs-expansion-c4-t" hidden>
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
                  Power
                </span>
                <span className="nv-chip" style={{ left: "88.5%", top: "64.1%", "--i": "1", "--tx": "-88%" }}>
                  <Icon name="layers" />
                  Cooling
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "2", "--tx": "-50%" }}>
                  <Icon name="check" />
                  Monitoring
                </span>
                <span className="nv-chip" style={{ left: "11.5%", top: "35.9%", "--i": "3", "--tx": "-12%" }}>
                  <Icon name="target" />
                  Infrastructure modernisation
                </span>
              </div>
              <div className="dsy-body">
                <h3>Infrastructure modernisation</h3>
                <p className="dsy-lead">
                  Power, cooling, monitoring, security and network systems upgraded in controlled phases.
                </p>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-expansion-c5" aria-labelledby="dcs-expansion-c5-t" hidden>
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
                  <Icon name="server" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Servers
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "1", "--tx": "-50%" }}>
                  <Icon name="layers" />
                  Technology refresh
                </span>
              </div>
              <div className="dsy-body">
                <h3>Technology refresh</h3>
                <p className="dsy-lead">
                  Servers, storage and networking refreshed against support lifecycle and workload needs.
                </p>
              </div>
            </div>
            <div className="dsy-p" role="tabpanel" id="dcs-expansion-c6" aria-labelledby="dcs-expansion-c6-t" hidden>
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
                  <Icon name="trash" />
                </span>
                <span className="nv-chip hot" style={{ left: "64.1%", top: "11.5%", "--i": "0", "--tx": "-50%" }}>
                  <Icon name="spark" />
                  Asset reconciliation
                </span>
                <span className="nv-chip" style={{ left: "35.9%", top: "88.5%", "--i": "1", "--tx": "-50%" }}>
                  <Icon name="layers" />
                  Decommissioning
                </span>
              </div>
              <div className="dsy-body">
                <h3>Decommissioning</h3>
                <p className="dsy-lead">
                  Approved data sanitisation, asset reconciliation, environmental handling and evidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
