import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../Component/Icon";

export default function AdvancedSection() {
  return (
    <section className="dx ice" id="da-advanced">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Advanced analytics</span>
          <h2 className="dx-h">
            Live, intelligent <span>and governed</span>
          </h2>
        </div>
        <div className="da-seg" data-tabs="">
          <div className="da-seg-l" role="tablist">
            <button type="button" role="tab" id="da-a-rt-t" aria-controls="da-a-rt" aria-selected="true">
              <Icon name="bolt" />
              <b>Real-time</b>
            </button>
            <button type="button" role="tab" id="da-a-ai-t" aria-controls="da-a-ai" aria-selected="false">
              <Icon name="spark" />
              <b>AI-powered</b>
            </button>
            <button type="button" role="tab" id="da-a-emb-t" aria-controls="da-a-emb" aria-selected="false">
              <Icon name="phone" />
              <b>{"Embedded & mobile"}</b>
            </button>
            <button type="button" role="tab" id="da-a-gov-t" aria-controls="da-a-gov" aria-selected="false">
              <Icon name="shield" />
              <b>{"Governance & security"}</b>
            </button>
          </div>
          <div className="da-seg-p" role="tabpanel" id="da-a-rt" aria-labelledby="da-a-rt-t">
            <span className="dx-k">Advanced · Real-time</span>
            <h3 className="da-h">Live dashboards for live operations</h3>
            <div className="da-stream" data-reveal="">
              <div style={{ "--i": "0" }}>
                <Icon name="cpu" />
                <b>{"Machines & sensors"}</b>
                <span>PLCs, IoT, GPS</span>
              </div>
              <div style={{ "--i": "1" }}>
                <Icon name="bolt" />
                <b>Event stream</b>
                <span>Kafka, Event Hubs</span>
              </div>
              <div style={{ "--i": "2" }}>
                <Icon name="db" />
                <b>Real-time store</b>
                <span>Time-series database</span>
              </div>
              <div style={{ "--i": "3" }}>
                <Icon name="chart" />
                <b>Live view</b>
                <span>Screens and alerts</span>
              </div>
              <i className="p1" />
              <i className="p2" />
              <i className="p3" />
            </div>
            <div className="ix-tiles c3" data-reveal="">
              <div className="ix-tile" style={{ "--i": "0" }}>
                <span className="dx-ic c-blue">
                  <Icon name="video" />
                </span>
                <b>Andon boards</b>
                <span>Line status and output on shop-floor TVs</span>
              </div>
              <div className="ix-tile" style={{ "--i": "1" }}>
                <span className="dx-ic c-blue">
                  <Icon name="thermo" />
                </span>
                <b>Threshold alerts</b>
                <span>Temperature, pressure or energy limits</span>
              </div>
              <div className="ix-tile" style={{ "--i": "2" }}>
                <span className="dx-ic c-blue">
                  <Icon name="truck" />
                </span>
                <b>Fleet tracking</b>
                <span>Live vehicle and shipment status</span>
              </div>
            </div>
            <div className="ix-bar">
              <small>Tools</small>
              <span>
                Fabric Real-Time Intelligence · Grafana · Azure Event Hubs · Amazon Kinesis · plant historians
              </span>
            </div>
          </div>
          <div className="da-seg-p" role="tabpanel" id="da-a-ai" aria-labelledby="da-a-ai-t" hidden>
            <span className="dx-k">Advanced · AI-powered analytics</span>
            <h3 className="da-h">Ask your data a question, in plain language</h3>
            <div className="da-ask" data-reveal="">
              <div className="q">
                <span>
                  <Icon name="users" />
                </span>
                <p>“Which three products lost the most margin this quarter, and why?”</p>
              </div>
              <div className="a">
                <span>
                  <Icon name="spark" />
                </span>
                <p>
                  <i />
                  <i />
                  <i />
                </p>
              </div>
            </div>
            <div className="ix-tiles c4" data-reveal="">
              <div className="ix-tile" style={{ "--i": "0" }}>
                <span className="dx-ic c-blue">
                  <Icon name="ai" />
                </span>
                <b>{"Natural-language Q&A"}</b>
                <span>Copilot in Power BI, Tableau AI, Qlik Answers, Zoho Zia</span>
              </div>
              <div className="ix-tile" style={{ "--i": "1" }}>
                <span className="dx-ic c-blue">
                  <Icon name="eye" />
                </span>
                <b>Anomaly alerts</b>
                <span>Unusual movements flagged and emailed automatically</span>
              </div>
              <div className="ix-tile" style={{ "--i": "2" }}>
                <span className="dx-ic c-blue">
                  <Icon name="trend" />
                </span>
                <b>Forecasts in dashboards</b>
                <span>Demand, sales and cash projections beside actuals</span>
              </div>
              <div className="ix-tile" style={{ "--i": "3" }}>
                <span className="dx-ic c-blue">
                  <Icon name="doc" />
                </span>
                <b>Written summaries</b>
                <span>AI-drafted commentary for monthly management packs</span>
              </div>
            </div>
            <Link to="/ai-automation" className="cl-more">
              <Icon name="spark" />
              <span>
                <b>{"GenAI, AI agents & MLOps"}</b>
                <small>{"See AI & Automation"}</small>
              </span>
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="da-seg-p" role="tabpanel" id="da-a-emb" aria-labelledby="da-a-emb-t" hidden>
            <span className="dx-k">{"Advanced · Embedded & mobile"}</span>
            <h3 className="da-h">Insight where people already work</h3>
            <div className="da-emb">
              <div className="da-phone" aria-hidden="true">
                <i className="nt" />
                <div className="sc">
                  <small>Sales today</small>
                  <div className="k">
                    <u />
                    <u />
                  </div>
                  <div className="b">
                    <i style={{ "--h": "40%" }} />
                    <i style={{ "--h": "62%" }} />
                    <i style={{ "--h": "50%" }} />
                    <i style={{ "--h": "74%" }} />
                    <i style={{ "--h": "66%" }} />
                    <i style={{ "--h": "88%" }} />
                  </div>
                  <div className="al">
                    <Icon name="bolt" />
                    <span>Alert: margin dip</span>
                  </div>
                </div>
              </div>
              <div className="cx-cols" data-reveal="">
                <div className="cx-col b" style={{ "--i": "0" }}>
                  <div className="cx-col-h">
                    <Icon name="apps" />
                    <b>Embedded in apps</b>
                  </div>
                  <ul>
                    <li>
                      Dashboards inside customer, dealer and supplier portals, with each user seeing only their own
                      data.
                    </li>
                    <li>Power BI Embedded · Tableau Embedded · Superset</li>
                  </ul>
                </div>
                <div className="cx-col g" style={{ "--i": "1" }}>
                  <div className="cx-col-h">
                    <Icon name="phone" />
                    <b>Mobile</b>
                  </div>
                  <ul>
                    <li>Phone-friendly layouts for managers and field teams, with push alerts on key changes.</li>
                    <li>Power BI, Tableau and Zoho mobile apps</li>
                  </ul>
                </div>
                <div className="cx-col t" style={{ "--i": "2" }}>
                  <div className="cx-col-h">
                    <Icon name="mail" />
                    <b>Delivered to you</b>
                  </div>
                  <ul>
                    <li>Scheduled PDF packs by email and alerts in Teams or WhatsApp.</li>
                    <li>Subscriptions · data alerts · bots</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="da-seg-p" role="tabpanel" id="da-a-gov" aria-labelledby="da-a-gov-t" hidden>
            <span className="dx-k">{"Advanced · Governance & security"}</span>
            <h3 className="da-h">One version of the truth, securely shared</h3>
            <div className="da-2">
              <div className="ix-list dark">
                <h4>Built into every project</h4>
                <ul>
                  <li>
                    <Icon name="check" />
                    One definition per KPI
                  </li>
                  <li>
                    <Icon name="check" />
                    Certified, endorsed datasets
                  </li>
                  <li>
                    <Icon name="check" />
                    Row-level security by role
                  </li>
                  <li>
                    <Icon name="check" />
                    Data-quality checks on refresh
                  </li>
                  <li>
                    <Icon name="check" />
                    Masking of personal data (DPDP)
                  </li>
                  <li>
                    <Icon name="check" />
                    Usage and audit logs
                  </li>
                </ul>
              </div>
              <div className="ix-tiles c2" data-reveal="">
                <div className="ix-tile" style={{ "--i": "0" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="book" />
                  </span>
                  <b>Data catalogue</b>
                  <span>Microsoft Purview, Unity Catalog</span>
                </div>
                <div className="ix-tile" style={{ "--i": "1" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="layers" />
                  </span>
                  <b>Semantic layer</b>
                  <span>Shared models with agreed KPI logic</span>
                </div>
                <div className="ix-tile" style={{ "--i": "2" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="check" />
                  </span>
                  <b>Quality tests</b>
                  <span>dbt tests and automated checks</span>
                </div>
                <div className="ix-tile" style={{ "--i": "3" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="key" />
                  </span>
                  <b>Access control</b>
                  <span>Entra ID groups, sensitivity labels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
