import React from "react";
import Icon from "../../../../../Component/Icon";

export default function PlatformsSection() {
  return (
    <section className="dx ice" id="da-platforms">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Data stack</span>
          <h2 className="dx-h">
            Sources, platforms <span>and tools</span>
          </h2>
          <p className="dx-lede">Choose a layer on the left — the detail opens alongside.</p>
        </div>
        <div className="da-sel " data-tabs="">
          <div className="da-sel-l" role="tablist" aria-orientation="vertical">
            <button type="button" role="tab" id="da-sources-t" aria-controls="da-sources" aria-selected="true">
              <Icon name="erp" />
              <span>
                <b>Sources</b>
                <small>Connecting every system you run</small>
              </span>
            </button>
            <button type="button" role="tab" id="da-plat-t" aria-controls="da-plat" aria-selected="false">
              <Icon name="db" />
              <span>
                <b>Data platforms</b>
                <small>Lakehouse and warehouse</small>
              </span>
            </button>
            <button type="button" role="tab" id="da-bi-t" aria-controls="da-bi" aria-selected="false">
              <Icon name="chart" />
              <span>
                <b>BI tools</b>
                <small>Dashboard tools we deliver</small>
              </span>
            </button>
            <button type="button" role="tab" id="da-choose-t" aria-controls="da-choose" aria-selected="false">
              <Icon name="compass" />
              <span>
                <b>Tool selection</b>
                <small>Choosing the right BI tool</small>
              </span>
            </button>
          </div>
          <div className="da-sel-p">
            <div className="da-pane" role="tabpanel" id="da-sources" aria-labelledby="da-sources-t">
              <span className="dx-k">Data stack · Sources</span>
              <h3 className="da-h">Connecting every system you run</h3>
              <div className="da-src" data-reveal="">
                <div style={{ "--i": "0" }}>
                  <Icon name="erp" />
                  <b>ERP</b>
                  <span>SAP, Oracle, Dynamics 365, Tally, Zoho Books</span>
                </div>
                <div style={{ "--i": "1" }}>
                  <Icon name="users" />
                  <b>CRM</b>
                  <span>Salesforce, Zoho CRM, HubSpot, Dynamics CRM</span>
                </div>
                <div style={{ "--i": "2" }}>
                  <Icon name="factory" />
                  <b>{"Plant & IoT"}</b>
                  <span>MES, SCADA, historians, PLCs via OPC UA</span>
                </div>
                <div style={{ "--i": "3" }}>
                  <Icon name="layers" />
                  <b>Engineering</b>
                  <span>PLM, BOMs, change orders, quality systems</span>
                </div>
                <div style={{ "--i": "4" }}>
                  <Icon name="headset" />
                  <b>{"People & IT"}</b>
                  <span>HRMS, payroll, ServiceNow, Microsoft 365</span>
                </div>
                <div style={{ "--i": "5" }}>
                  <Icon name="doc" />
                  <b>{"Files & web"}</b>
                  <span>Excel, SharePoint, Google Sheets, REST APIs</span>
                </div>
                <div className="da-src-c">
                  <Icon name="db" />
                  <b>One trusted data store</b>
                </div>
              </div>
            </div>
            <div className="da-pane" role="tabpanel" id="da-plat" aria-labelledby="da-plat-t" hidden>
              <span className="dx-k">Data stack · Platforms</span>
              <h3 className="da-h">Data platforms we build on</h3>
              <div className="ix-tiles c3" data-reveal="">
                <div className="ix-tile" style={{ "--i": "0" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="layers" />
                  </span>
                  <b>Microsoft Fabric</b>
                  <span>All-in-one lakehouse with Power BI built in</span>
                </div>
                <div className="ix-tile" style={{ "--i": "1" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="db" />
                  </span>
                  <b>Databricks</b>
                  <span>Lakehouse for large data, data science and ML</span>
                </div>
                <div className="ix-tile" style={{ "--i": "2" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="snow" />
                  </span>
                  <b>Snowflake</b>
                  <span>Cloud data warehouse that scales on demand</span>
                </div>
                <div className="ix-tile" style={{ "--i": "3" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="cloud" />
                  </span>
                  <b>Google BigQuery</b>
                  <span>Serverless warehouse with built-in ML</span>
                </div>
                <div className="ix-tile" style={{ "--i": "4" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="server" />
                  </span>
                  <b>Amazon Redshift</b>
                  <span>Warehouse for AWS-based data estates</span>
                </div>
                <div className="ix-tile" style={{ "--i": "5" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="erp" />
                  </span>
                  <b>{"SAP Datasphere & BW"}</b>
                  <span>Keeps SAP business context for SAP-heavy firms</span>
                </div>
              </div>
              <div className="ix-bar">
                <small>Also</small>
                <span>
                  PostgreSQL and SQL Server warehouses for smaller estates · Indian cloud hosting where data must stay
                  local
                </span>
              </div>
            </div>
            <div className="da-pane" role="tabpanel" id="da-bi" aria-labelledby="da-bi-t" hidden>
              <span className="dx-k">Data stack · BI tools</span>
              <h3 className="da-h">Dashboard tools we deliver</h3>
              <div className="ix-tiles c3" data-reveal="">
                <div className="ix-tile" style={{ "--i": "0" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="chart" />
                  </span>
                  <b>Power BI</b>
                  <span>Best value for Microsoft 365 users; Copilot built in</span>
                </div>
                <div className="ix-tile" style={{ "--i": "1" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="eye" />
                  </span>
                  <b>Tableau</b>
                  <span>Rich visual exploration; Salesforce ecosystem</span>
                </div>
                <div className="ix-tile" style={{ "--i": "2" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="compass" />
                  </span>
                  <b>Qlik Sense</b>
                  <span>Associative engine for free-form exploration</span>
                </div>
                <div className="ix-tile" style={{ "--i": "3" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="layers" />
                  </span>
                  <b>Looker</b>
                  <span>Governed semantic model on Google Cloud</span>
                </div>
                <div className="ix-tile" style={{ "--i": "4" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="trend" />
                  </span>
                  <b>Zoho Analytics</b>
                  <span>Affordable BI for SMEs and Zoho users</span>
                </div>
                <div className="ix-tile" style={{ "--i": "5" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="erp" />
                  </span>
                  <b>SAP Analytics Cloud</b>
                  <span>BI and planning for SAP customers</span>
                </div>
              </div>
              <div className="ix-bar">
                <small>Open source</small>
                <span>Apache Superset · Metabase · Grafana — for low licence cost or embedded use</span>
              </div>
            </div>
            <div className="da-pane" role="tabpanel" id="da-choose" aria-labelledby="da-choose-t" hidden>
              <span className="dx-k">Data stack · Tool selection</span>
              <h3 className="da-h">Choosing the right BI tool</h3>
              <div className="dx-tbl2" data-reveal="">
                <table>
                  <thead>
                    <tr>
                      <th>Tool</th>
                      <th>Best for</th>
                      <th>Licensing model</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>Power BI</b>
                      </td>
                      <td>Microsoft 365 and Fabric users</td>
                      <td>Per user or capacity</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Tableau</b>
                      </td>
                      <td>Visual analysts, Salesforce users</td>
                      <td>Per user, by role</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Qlik Sense</b>
                      </td>
                      <td>Free-form exploration</td>
                      <td>Per user or capacity</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Looker</b>
                      </td>
                      <td>Google Cloud data teams</td>
                      <td>Platform plus users</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Zoho Analytics</b>
                      </td>
                      <td>SMEs on a budget</td>
                      <td>Plan-based, low cost</td>
                    </tr>
                    <tr>
                      <td>
                        <b>SAP Analytics Cloud</b>
                      </td>
                      <td>SAP-centric planning and BI</td>
                      <td>Per user</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Superset / Metabase</b>
                      </td>
                      <td>Embedded or cost-sensitive use</td>
                      <td>Open source</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="ix-bar">
                <small>Tool-neutral</small>
                <span>We recommend a tool only after reviewing your users, existing licences and data platform.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
