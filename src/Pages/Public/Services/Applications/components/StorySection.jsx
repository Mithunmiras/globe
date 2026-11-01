import React from "react";
import Icon from "../../../../../Component/Icon";

export default function StorySection() {
  return (
    <section className="dx ice ix-story" id="ap-story">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Applications</span>
          <h2 className="dx-h">
            Implemented, integrated <span>and supported</span>
          </h2>
          <p className="dx-lede">Choose an application family on the left — the detail opens alongside.</p>
        </div>
        <div className="ix-grid" data-tabs="">
          <div className="ix-rail" role="tablist" aria-orientation="vertical" aria-label="Applications">
            <button type="button" role="tab" id="ap-erp-t" aria-controls="ap-erp" aria-selected="true">
              <Icon name="erp" />
              <span>ERP</span>
            </button>
            <button type="button" role="tab" id="ap-crm-t" aria-controls="ap-crm" aria-selected="false">
              <Icon name="users" />
              <span>CRM</span>
            </button>
            <button type="button" role="tab" id="ap-plm-t" aria-controls="ap-plm" aria-selected="false">
              <Icon name="layers" />
              <span>PLM</span>
            </button>
            <button type="button" role="tab" id="ap-mes-t" aria-controls="ap-mes" aria-selected="false">
              <Icon name="factory" />
              <span>{"MES & Industry 4.0"}</span>
            </button>
            <button type="button" role="tab" id="ap-design-t" aria-controls="ap-design" aria-selected="false">
              <Icon name="cpu" />
              <span>CAD · CAE · CAM</span>
            </button>
            <button type="button" role="tab" id="ap-custom-t" aria-controls="ap-custom" aria-selected="false">
              <Icon name="code" />
              <span>{"Custom & integration"}</span>
            </button>
          </div>
          <div className="ix-main">
            <section className="ix-chapter" id="ap-erp" role="tabpanel" aria-labelledby="ap-erp-t">
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">ERP</h2>
                  <p className="dx-lede">
                    SAP, Oracle and Microsoft Dynamics 365 — implemented with Indian GST supported on every platform.
                  </p>
                  <div className="ix-chips">
                    <span>SAP</span>
                    <span>Oracle</span>
                    <span>Dynamics 365</span>
                    <span>GST</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ap-erp-pl">
                <header>
                  <span className="dx-k">Platforms</span>
                  <h3>Pick a platform</h3>
                </header>
                <div className="ix-tiers ps" data-tabs="">
                  <div className="ix-tier-l" role="tablist">
                    <button
                      type="button"
                      role="tab"
                      id="ap-erp-ps-0-t"
                      aria-controls="ap-erp-ps-0"
                      aria-selected="true"
                    >
                      <Icon name="erp" />
                      <b>SAP for growing and large enterprises</b>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      id="ap-erp-ps-1-t"
                      aria-controls="ap-erp-ps-1"
                      aria-selected="false"
                    >
                      <Icon name="db" />
                      <b>Oracle ERP, NetSuite to Fusion</b>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      id="ap-erp-ps-2-t"
                      aria-controls="ap-erp-ps-2"
                      aria-selected="false"
                    >
                      <Icon name="apps" />
                      <b>Dynamics 365 for Microsoft-first firms</b>
                    </button>
                  </div>
                  <div className="ix-tier-p">
                    <div role="tabpanel" id="ap-erp-ps-0" aria-labelledby="ap-erp-ps-0-t">
                      <span className="dx-k">Platform</span>
                      <h4>SAP for growing and large enterprises</h4>
                      <div className="dx-meta">
                        <div>
                          <small>Products</small>
                          <b>S/4HANA, Business One, BTP</b>
                        </div>
                        <div>
                          <small>Best fit</small>
                          <b>Multi-plant manufacturers</b>
                        </div>
                        <div>
                          <small>Method</small>
                          <b>SAP Activate</b>
                        </div>
                      </div>
                      <div className="ix-tiles c2" data-reveal="">
                        <div className="ix-tile" style={{ "--i": "0" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="card" />
                          </span>
                          <b>Finance</b>
                          <span>FI, CO, GST, e-invoicing</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "1" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="truck" />
                          </span>
                          <b>Supply chain</b>
                          <span>MM, SD, warehouse, planning</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "2" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="factory" />
                          </span>
                          <b>Manufacturing</b>
                          <span>PP, QM, PM; PLM and MES links</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "3" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="layers" />
                          </span>
                          <b>Extensions</b>
                          <span>Fiori, Analytics Cloud, BTP</span>
                        </div>
                      </div>
                      <div className="ix-bar">
                        <small>DGC services</small>
                        <span>Greenfield and brownfield S/4HANA · ECC upgrades · Basis · AMS</span>
                      </div>
                    </div>
                    <div role="tabpanel" id="ap-erp-ps-1" aria-labelledby="ap-erp-ps-1-t" hidden>
                      <span className="dx-k">Platform</span>
                      <h4>Oracle ERP, NetSuite to Fusion</h4>
                      <div className="dx-meta">
                        <div>
                          <small>Products</small>
                          <b>Fusion, NetSuite, EBS, JDE</b>
                        </div>
                        <div>
                          <small>Best fit</small>
                          <b>Finance-led enterprises</b>
                        </div>
                        <div>
                          <small>Method</small>
                          <b>Oracle Unified Method</b>
                        </div>
                      </div>
                      <div className="ix-tiles c2" data-reveal="">
                        <div className="ix-tile" style={{ "--i": "0" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="chart" />
                          </span>
                          <b>{"Financials & EPM"}</b>
                          <span>Ledger, payables, planning, close</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "1" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="cart" />
                          </span>
                          <b>{"Procurement & SCM"}</b>
                          <span>Sourcing, inventory, orders</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "2" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="factory" />
                          </span>
                          <b>Manufacturing</b>
                          <span>Discrete, process, quality</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "3" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="cloud" />
                          </span>
                          <b>{"Upgrade & hosting"}</b>
                          <span>EBS and JDE to OCI or Fusion</span>
                        </div>
                      </div>
                      <div className="ix-bar">
                        <small>DGC services</small>
                        <span>NetSuite rollouts · Fusion projects · GST localisation · support</span>
                      </div>
                    </div>
                    <div role="tabpanel" id="ap-erp-ps-2" aria-labelledby="ap-erp-ps-2-t" hidden>
                      <span className="dx-k">Platform</span>
                      <h4>Dynamics 365 for Microsoft-first firms</h4>
                      <div className="dx-meta">
                        <div>
                          <small>Products</small>
                          <b>Finance, SCM, Business Central</b>
                        </div>
                        <div>
                          <small>Best fit</small>
                          <b>Microsoft 365 companies</b>
                        </div>
                        <div>
                          <small>Method</small>
                          <b>Success by Design</b>
                        </div>
                      </div>
                      <div className="ix-tiles c2" data-reveal="">
                        <div className="ix-tile" style={{ "--i": "0" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="card" />
                          </span>
                          <b>Finance</b>
                          <span>Multi-entity, GST, TDS</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "1" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="truck" />
                          </span>
                          <b>Supply chain</b>
                          <span>Planning, warehouse, production</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "2" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="briefcase" />
                          </span>
                          <b>Business Central</b>
                          <span>All-in-one ERP for SMEs</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "3" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="spark" />
                          </span>
                          <b>Power Platform</b>
                          <span>Power BI, Apps, Automate, Copilot</span>
                        </div>
                      </div>
                      <div className="ix-bar">
                        <small>DGC services</small>
                        <span>NAV / AX upgrades · new rollouts · Power BI · support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="ap-erp-fit">
                <header>
                  <span className="dx-k">Choosing a platform</span>
                  <h3>Which ERP fits which business</h3>
                </header>
                <div className="dx-tbl2" data-reveal="">
                  <table>
                    <thead>
                      <tr>
                        <th />
                        <th>SAP</th>
                        <th>Oracle</th>
                        <th>Dynamics 365</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b>Small / mid</b>
                        </td>
                        <td>Business One</td>
                        <td>NetSuite</td>
                        <td>Business Central</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Enterprise</b>
                        </td>
                        <td>S/4HANA</td>
                        <td>Fusion Cloud</td>
                        <td>Finance + SCM</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Strength</b>
                        </td>
                        <td>Manufacturing depth</td>
                        <td>Finance and EPM</td>
                        <td>Microsoft fit</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Extend with</b>
                        </td>
                        <td>BTP</td>
                        <td>APEX, OIC</td>
                        <td>Power Platform</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Indian GST</b>
                        </td>
                        <td>Supported</td>
                        <td>Supported</td>
                        <td>Supported</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="ix-bar">
                  <small>Vendor-neutral</small>
                  <span>We score your processes, budget and IT skills before recommending a platform.</span>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="ap-crm" role="tabpanel" aria-labelledby="ap-crm-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">CRM</h2>
                  <p className="dx-lede">
                    Salesforce for scale and depth, Zoho for fast, affordable rollouts — connected to ERP end to end.
                  </p>
                  <div className="ix-chips">
                    <span>Salesforce</span>
                    <span>Zoho</span>
                    <span>Quote to cash</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ap-crm-pl">
                <header>
                  <span className="dx-k">Platforms</span>
                  <h3>Pick a platform</h3>
                </header>
                <div className="ix-tiers ps" data-tabs="">
                  <div className="ix-tier-l" role="tablist">
                    <button
                      type="button"
                      role="tab"
                      id="ap-crm-ps-0-t"
                      aria-controls="ap-crm-ps-0"
                      aria-selected="true"
                    >
                      <Icon name="trend" />
                      <b>Salesforce for scale and depth</b>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      id="ap-crm-ps-1-t"
                      aria-controls="ap-crm-ps-1"
                      aria-selected="false"
                    >
                      <Icon name="users" />
                      <b>Zoho CRM for fast, affordable rollouts</b>
                    </button>
                  </div>
                  <div className="ix-tier-p">
                    <div role="tabpanel" id="ap-crm-ps-0" aria-labelledby="ap-crm-ps-0-t">
                      <span className="dx-k">Platform</span>
                      <h4>Salesforce for scale and depth</h4>
                      <div className="dx-meta">
                        <div>
                          <small>Products</small>
                          <b>Sales, Service, Marketing</b>
                        </div>
                        <div>
                          <small>Best fit</small>
                          <b>Mid-size to enterprise</b>
                        </div>
                        <div>
                          <small>AI</small>
                          <b>Agentforce, Einstein</b>
                        </div>
                      </div>
                      <div className="ix-tiles c2" data-reveal="">
                        <div className="ix-tile" style={{ "--i": "0" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="trend" />
                          </span>
                          <b>Sales Cloud</b>
                          <span>Leads, pipeline, CPQ, forecasts</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "1" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="headset" />
                          </span>
                          <b>Service Cloud</b>
                          <span>Cases, field service, SLAs</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "2" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="globe" />
                          </span>
                          <b>{"Marketing & portals"}</b>
                          <span>Journeys, dealer and partner portals</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "3" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="ai" />
                          </span>
                          <b>{"AI & analytics"}</b>
                          <span>Agentforce agents, Tableau</span>
                        </div>
                      </div>
                      <div className="ix-bar">
                        <small>DGC services</small>
                        <span>MuleSoft ERP integration · data migration · Lightning · admin</span>
                      </div>
                    </div>
                    <div role="tabpanel" id="ap-crm-ps-1" aria-labelledby="ap-crm-ps-1-t" hidden>
                      <span className="dx-k">Platform</span>
                      <h4>Zoho CRM for fast, affordable rollouts</h4>
                      <div className="dx-meta">
                        <div>
                          <small>Products</small>
                          <b>CRM, Zoho One, Desk</b>
                        </div>
                        <div>
                          <small>Best fit</small>
                          <b>Small and mid-size firms</b>
                        </div>
                        <div>
                          <small>AI</small>
                          <b>Zia assistant</b>
                        </div>
                      </div>
                      <div className="ix-tiles c2" data-reveal="">
                        <div className="ix-tile" style={{ "--i": "0" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="gear" />
                          </span>
                          <b>Sales automation</b>
                          <span>Blueprint processes, workflows</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "1" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="headset" />
                          </span>
                          <b>Service desk</b>
                          <span>Zoho Desk tickets and SLAs</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "2" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="code" />
                          </span>
                          <b>Custom apps</b>
                          <span>Zoho Creator and Deluge scripts</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "3" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="chart" />
                          </span>
                          <b>Analytics</b>
                          <span>Zoho Analytics dashboards</span>
                        </div>
                      </div>
                      <div className="ix-bar">
                        <small>DGC services</small>
                        <span>Spreadsheet migration · WhatsApp and telephony · Books / Tally links · training</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="ap-crm-q2c">
                <header>
                  <span className="dx-k">Quote to cash</span>
                  <h3>CRM connected to ERP, end to end</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="users" />
                    <b>Lead</b>
                    <span>Captured in CRM</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="doc" />
                    <b>Quote</b>
                    <span>Prices from ERP</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="erp" />
                    <b>Sales order</b>
                    <span>Booked in ERP</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="truck" />
                    <b>Delivery</b>
                    <span>Stock and dispatch</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="card" />
                    <b>Invoice</b>
                    <span>GST e-invoice</span>
                  </li>
                  <li style={{ "--i": "5" }}>
                    <Icon name="headset" />
                    <b>Service</b>
                    <span>Cases back in CRM</span>
                  </li>
                </ol>
                <div className="dx-tbl2" data-reveal="">
                  <table>
                    <thead>
                      <tr>
                        <th />
                        <th>Salesforce</th>
                        <th>Zoho CRM</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b>Typical customer</b>
                        </td>
                        <td>Mid-size to enterprise</td>
                        <td>Small to mid-size</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Strength</b>
                        </td>
                        <td>Depth, ecosystem, AI</td>
                        <td>Value, speed, suite</td>
                      </tr>
                      <tr>
                        <td>
                          <b>ERP links</b>
                        </td>
                        <td>MuleSoft to SAP / Oracle / D365</td>
                        <td>APIs to Books, Tally, B1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="ap-plm" role="tabpanel" aria-labelledby="ap-plm-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">PLM</h2>
                  <p className="dx-lede">
                    Dassault Systèmes 3DEXPERIENCE and Siemens Teamcenter — one trusted product record from design to
                    factory.
                  </p>
                  <div className="ix-chips">
                    <span>3DEXPERIENCE</span>
                    <span>Teamcenter</span>
                    <span>BOM</span>
                    <span>Change</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ap-plm-pl">
                <header>
                  <span className="dx-k">Platforms</span>
                  <h3>Pick a platform</h3>
                </header>
                <div className="ix-tiers ps" data-tabs="">
                  <div className="ix-tier-l" role="tablist">
                    <button
                      type="button"
                      role="tab"
                      id="ap-plm-ps-0-t"
                      aria-controls="ap-plm-ps-0"
                      aria-selected="true"
                    >
                      <Icon name="layers" />
                      <b>3DEXPERIENCE from design to factory</b>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      id="ap-plm-ps-1-t"
                      aria-controls="ap-plm-ps-1"
                      aria-selected="false"
                    >
                      <Icon name="gear" />
                      <b>Teamcenter and the Xcelerator portfolio</b>
                    </button>
                  </div>
                  <div className="ix-tier-p">
                    <div role="tabpanel" id="ap-plm-ps-0" aria-labelledby="ap-plm-ps-0-t">
                      <span className="dx-k">Platform</span>
                      <h4>3DEXPERIENCE from design to factory</h4>
                      <div className="dx-meta">
                        <div>
                          <small>Platform</small>
                          <b>3DEXPERIENCE</b>
                        </div>
                        <div>
                          <small>Best fit</small>
                          <b>Auto, aero, industrial</b>
                        </div>
                        <div>
                          <small>SMEs</small>
                          <b>SOLIDWORKS</b>
                        </div>
                      </div>
                      <div className="ix-tiles c2" data-reveal="">
                        <div className="ix-tile" style={{ "--i": "0" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="layers" />
                          </span>
                          <b>ENOVIA</b>
                          <span>Product data, BOM, change</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "1" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="cpu" />
                          </span>
                          <b>{"CATIA & SOLIDWORKS"}</b>
                          <span>3D design and PDM</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "2" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="chart" />
                          </span>
                          <b>SIMULIA</b>
                          <span>Abaqus, CST simulation</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "3" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="factory" />
                          </span>
                          <b>DELMIA</b>
                          <span>Manufacturing planning, Apriso</span>
                        </div>
                      </div>
                      <div className="ix-bar">
                        <small>DGC services</small>
                        <span>Platform deployment · ENOVIA setup · PDM · migration · ERP link</span>
                      </div>
                    </div>
                    <div role="tabpanel" id="ap-plm-ps-1" aria-labelledby="ap-plm-ps-1-t" hidden>
                      <span className="dx-k">Platform</span>
                      <h4>Teamcenter and the Xcelerator portfolio</h4>
                      <div className="dx-meta">
                        <div>
                          <small>Platform</small>
                          <b>Teamcenter, Teamcenter X</b>
                        </div>
                        <div>
                          <small>Best fit</small>
                          <b>Machinery, electronics</b>
                        </div>
                        <div>
                          <small>Design</small>
                          <b>NX, Solid Edge</b>
                        </div>
                      </div>
                      <div className="ix-tiles c2" data-reveal="">
                        <div className="ix-tile" style={{ "--i": "0" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="layers" />
                          </span>
                          <b>Teamcenter</b>
                          <span>BOM, change, workflows</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "1" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="cpu" />
                          </span>
                          <b>{"NX & Solid Edge"}</b>
                          <span>Design and manufacturing CAD</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "2" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="chart" />
                          </span>
                          <b>Simcenter</b>
                          <span>STAR-CCM+, Amesim, testing</span>
                        </div>
                        <div className="ix-tile" style={{ "--i": "3" }}>
                          <span className="dx-ic c-blue">
                            <Icon name="factory" />
                          </span>
                          <b>Tecnomatix</b>
                          <span>Plant and process simulation</span>
                        </div>
                      </div>
                      <div className="ix-bar">
                        <small>DGC services</small>
                        <span>Teamcenter rollouts and upgrades · Active Workspace · SAP integration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="ix-scene" id="ap-plm-svc">
                <header>
                  <span className="dx-k">Services</span>
                  <h3>What we deliver on any PLM platform</h3>
                </header>
                <div className="ix-tiles c3" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layers" />
                    </span>
                    <b>BOM management</b>
                    <span>EBOM to MBOM</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="edit" />
                    </span>
                    <b>Change control</b>
                    <span>ECR / ECO workflows</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="upload" />
                    </span>
                    <b>Data migration</b>
                    <span>Legacy CAD and PDM</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="arrow" />
                    </span>
                    <b>PLM–ERP link</b>
                    <span>Parts, BOMs, changes</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "4" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="check" />
                    </span>
                    <b>Compliance</b>
                    <span>ISO 9001, IATF, AS9100</span>
                  </div>
                  <div className="ix-tile dark" style={{ "--i": "5" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="gear" />
                    </span>
                    <b>{"Run & upgrade"}</b>
                    <span>Support, new releases</span>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Outcome</small>
                  <span>One trusted product record shared by design, purchase and production.</span>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="ap-mes" role="tabpanel" aria-labelledby="ap-mes-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"MES & Industry 4.0"}</h2>
                  <p className="dx-lede">Run the shop floor with Opcenter and connect the plant to the business.</p>
                  <div className="ix-chips">
                    <span>Opcenter</span>
                    <span>DELMIA Apriso</span>
                    <span>OPC UA</span>
                    <span>IT/OT</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ap-mes-op">
                <header>
                  <span className="dx-k">Siemens Opcenter</span>
                  <h3>Run the shop floor with Opcenter</h3>
                </header>
                <div className="dx-meta">
                  <div>
                    <small>Products</small>
                    <b>Opcenter Execution, Quality</b>
                  </div>
                  <div>
                    <small>Also</small>
                    <b>DELMIA Apriso</b>
                  </div>
                  <div>
                    <small>Scheduling</small>
                    <b>Opcenter APS</b>
                  </div>
                </div>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="gear" />
                    </span>
                    <b>Execution</b>
                    <span>Work orders, routing, operators</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="check" />
                    </span>
                    <b>Quality</b>
                    <span>SPC, NCR and CAPA</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layout" />
                    </span>
                    <b>Scheduling</b>
                    <span>Finite-capacity planning</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="eye" />
                    </span>
                    <b>{"Traceability & OEE"}</b>
                    <span>Genealogy, downtime, OEE</span>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>DGC services</small>
                  <span>Assessment · pilot line · rollout · ERP / PLM link · 24x7 support</span>
                </div>
              </article>
              <article className="ix-scene" id="ap-mes-it">
                <header>
                  <span className="dx-k">IT/OT</span>
                  <h3>Connecting the plant to the business</h3>
                </header>
                <div className="ix-layers" data-reveal="">
                  <div className="ix-layer" style={{ "--i": "0" }}>
                    <span className="ix-lic">
                      <Icon name="erp" />
                    </span>
                    <b>Level 4 · Business</b>
                    <span>ERP, PLM, CRM</span>
                    <i className="ix-pulse" />
                  </div>
                  <div className="ix-layer" style={{ "--i": "1" }}>
                    <span className="ix-lic">
                      <Icon name="factory" />
                    </span>
                    <b>Level 3 · Operations</b>
                    <span>MES, quality, scheduling</span>
                    <i className="ix-pulse" />
                  </div>
                  <div className="ix-layer" style={{ "--i": "2" }}>
                    <span className="ix-lic">
                      <Icon name="eye" />
                    </span>
                    <b>Level 2 · Supervisory</b>
                    <span>SCADA, HMI, historians</span>
                    <i className="ix-pulse" />
                  </div>
                  <div className="ix-layer" style={{ "--i": "3" }}>
                    <span className="ix-lic">
                      <Icon name="cpu" />
                    </span>
                    <b>Level 1 · Control</b>
                    <span>PLCs and drives</span>
                    <i className="ix-pulse" />
                  </div>
                  <div className="ix-layer" style={{ "--i": "4" }}>
                    <span className="ix-lic">
                      <Icon name="gear" />
                    </span>
                    <b>Level 0 · Process</b>
                    <span>Machines and sensors</span>
                    <i className="ix-pulse" />
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Connected by</small>
                  <span>OPC UA, MQTT · edge gateways · Kepware · historians · IT/OT firewalls</span>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="ap-design" role="tabpanel" aria-labelledby="ap-design-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">CAD · CAE · CAM</h2>
                  <p className="dx-lede">
                    Design, simulate and machine — plus the hardware behind engineering software.
                  </p>
                  <div className="ix-chips">
                    <span>CAD</span>
                    <span>Simulation</span>
                    <span>CAM</span>
                    <span>Workstations</span>
                    <span>HPC</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ap-cad">
                <header>
                  <span className="dx-k">CAD</span>
                  <h3>CAD tools for every engineering team</h3>
                </header>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="cpu" />
                    </span>
                    <b>Mechanical 3D</b>
                    <span>CATIA, NX, Creo, SOLIDWORKS, Solid Edge, Inventor</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="building" />
                    </span>
                    <b>{"2D, plant & building"}</b>
                    <span>AutoCAD, Plant 3D, Revit, AVEVA E3D</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="bolt" />
                    </span>
                    <b>{"Electrical & PCB"}</b>
                    <span>EPLAN, AutoCAD Electrical, Altium</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="cloud" />
                    </span>
                    <b>{"Cloud & visual"}</b>
                    <span>Fusion, Onshape, KeyShot</span>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>DGC services</small>
                  <span>Licensing · templates and standards · PDM · training</span>
                </div>
              </article>
              <article className="ix-scene" id="ap-cae">
                <header>
                  <span className="dx-k">Simulation (CAE)</span>
                  <h3>Simulate before you build</h3>
                </header>
                <div className="dx-tbl2" data-reveal="">
                  <table>
                    <thead>
                      <tr>
                        <th>Discipline</th>
                        <th>Typical tools</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b>Structural FEA</b>
                        </td>
                        <td>Ansys Mechanical, Abaqus, Simcenter 3D, Altair</td>
                      </tr>
                      <tr>
                        <td>
                          <b>CFD</b>
                        </td>
                        <td>Ansys Fluent, STAR-CCM+, OpenFOAM</td>
                      </tr>
                      <tr>
                        <td>
                          <b>{"Crash & impact"}</b>
                        </td>
                        <td>LS-DYNA, Abaqus/Explicit</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Electromagnetic</b>
                        </td>
                        <td>Ansys HFSS / Maxwell, CST</td>
                      </tr>
                      <tr>
                        <td>
                          <b>System / 1D</b>
                        </td>
                        <td>Simcenter Amesim, MATLAB / Simulink</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Process</b>
                        </td>
                        <td>Moldflow, MAGMASOFT, AutoForm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="ix-bar">
                  <small>Compute</small>
                  <span>Solvers run on our on-premises HPC clusters or cloud HPC.</span>
                </div>
              </article>
              <article className="ix-scene" id="ap-cam">
                <header>
                  <span className="dx-k">CAM</span>
                  <h3>From model to machine</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="cpu" />
                    <b>CAD-integrated CAM</b>
                    <span>NX CAM, CATIA / DELMIA, SOLIDWORKS CAM, Fusion</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="gear" />
                    <b>Dedicated CAM</b>
                    <span>Mastercam, hyperMILL, PowerMill, ESPRIT</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="check" />
                    <b>Verification</b>
                    <span>VERICUT simulation, custom post-processors</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="factory" />
                    <b>Shop-floor link</b>
                    <span>Tool management, DNC, MES</span>
                  </li>
                </ol>
                <div className="ix-bar">
                  <small>DGC services</small>
                  <span>Post-processor tuning · machine simulation · CAM to MES link</span>
                </div>
              </article>
              <article className="ix-scene" id="ap-dinf">
                <header>
                  <span className="dx-k">Infrastructure</span>
                  <h3>The hardware behind engineering software</h3>
                </header>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="laptop" />
                    </span>
                    <b>Certified workstations</b>
                    <span>Dell Precision, HP Z, ThinkStation, NVIDIA RTX</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="key" />
                    </span>
                    <b>Licence management</b>
                    <span>FlexNet servers, usage reporting</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="server" />
                    </span>
                    <b>GPU VDI for CAD</b>
                    <span>NVIDIA vGPU, Citrix, Omnissa</span>
                  </div>
                  <div className="ix-tile dark" style={{ "--i": "3" }}>
                    <span className="dx-ic c-gold">
                      <Icon name="cpu" />
                    </span>
                    <b>HPC for simulation</b>
                    <span>Clusters, schedulers, cloud burst</span>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Applications plus infrastructure</small>
                  <span>One partner for the software and the systems it runs on.</span>
                </div>
              </article>
            </section>
            <section className="ix-chapter" id="ap-custom" role="tabpanel" aria-labelledby="ap-custom-t" hidden>
              <div className="ix-ch-head">
                <div>
                  <h2 className="dx-h">{"Custom, integration & testing"}</h2>
                  <p className="dx-lede">
                    Software built around your process, the APIs and middleware that join it all up, and testing before
                    go-live.
                  </p>
                  <div className="ix-chips">
                    <span>Web</span>
                    <span>Mobile</span>
                    <span>Low-code</span>
                    <span>APIs</span>
                    <span>Testing</span>
                  </div>
                </div>
              </div>
              <article className="ix-scene" id="ap-cus">
                <header>
                  <span className="dx-k">Custom applications</span>
                  <h3>Software built around your process</h3>
                </header>
                <div className="ix-tiles c4" data-reveal="">
                  <div className="ix-tile" style={{ "--i": "0" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="code" />
                    </span>
                    <b>Web</b>
                    <span>React, Angular, .NET, Java, Node.js, Python</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "1" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="laptop" />
                    </span>
                    <b>Mobile</b>
                    <span>Flutter, React Native</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "2" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="layout" />
                    </span>
                    <b>Low-code</b>
                    <span>Power Apps, Zoho Creator, SAP Build, OutSystems</span>
                  </div>
                  <div className="ix-tile" style={{ "--i": "3" }}>
                    <span className="dx-ic c-blue">
                      <Icon name="ai" />
                    </span>
                    <b>AI-enabled apps</b>
                    <span>LLM APIs, RAG, document AI</span>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Examples</small>
                  <span>Supplier portals · plant dashboards · dealer apps · quality checklists</span>
                </div>
              </article>
              <article className="ix-scene" id="ap-int">
                <header>
                  <span className="dx-k">Integration</span>
                  <h3>APIs and middleware that join it all up</h3>
                </header>
                <div className="ap-int2">
                  <div className="ap-hub" data-reveal="">
                    <svg viewBox="0 0 400 400" aria-hidden="true">
                      <circle className="o1" cx="200" cy="200" r="150" />
                      <circle className="o2" cx="200" cy="200" r="98" />
                      <line x1="200" y1="200" x2="200.0" y2="50.0" style={{ "--i": "0" }} />
                      <line x1="200" y1="200" x2="329.9" y2="125.0" style={{ "--i": "1" }} />
                      <line x1="200" y1="200" x2="329.9" y2="275.0" style={{ "--i": "2" }} />
                      <line x1="200" y1="200" x2="200.0" y2="350.0" style={{ "--i": "3" }} />
                      <line x1="200" y1="200" x2="70.1" y2="275.0" style={{ "--i": "4" }} />
                      <line x1="200" y1="200" x2="70.1" y2="125.0" style={{ "--i": "5" }} />
                    </svg>
                    <div className="ap-core">
                      <Icon name="layers" />
                      <b>Integration layer</b>
                      <small>APIs · events · MDM</small>
                    </div>
                    <div className="ap-sat" style={{ left: "50.0%", top: "12.5%", "--i": "0" }}>
                      <Icon name="erp" />
                      <b>ERP</b>
                    </div>
                    <div className="ap-sat" style={{ left: "82.5%", top: "31.3%", "--i": "1" }}>
                      <Icon name="users" />
                      <b>CRM</b>
                    </div>
                    <div className="ap-sat" style={{ left: "82.5%", top: "68.8%", "--i": "2" }}>
                      <Icon name="layers" />
                      <b>PLM</b>
                    </div>
                    <div className="ap-sat" style={{ left: "50.0%", top: "87.5%", "--i": "3" }}>
                      <Icon name="factory" />
                      <b>MES</b>
                    </div>
                    <div className="ap-sat" style={{ left: "17.5%", top: "68.8%", "--i": "4" }}>
                      <Icon name="cpu" />
                      <b>CAD</b>
                    </div>
                    <div className="ap-sat" style={{ left: "17.5%", top: "31.2%", "--i": "5" }}>
                      <Icon name="code" />
                      <b>Custom apps</b>
                    </div>
                  </div>
                  <div className="ix-tiles c2" data-reveal="">
                    <div className="ix-tile" style={{ "--i": "0" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="code" />
                      </span>
                      <b>APIs</b>
                      <span>REST / GraphQL behind an API gateway</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "1" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="bolt" />
                      </span>
                      <b>{"Events & files"}</b>
                      <span>Kafka streams, EDI, file transfer</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "2" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="db" />
                      </span>
                      <b>Master data</b>
                      <span>MDM for parts, customers, suppliers</span>
                    </div>
                    <div className="ix-tile" style={{ "--i": "3" }}>
                      <span className="dx-ic c-blue">
                        <Icon name="layers" />
                      </span>
                      <b>Platforms</b>
                      <span>MuleSoft, SAP Integration Suite, Azure, OIC, Boomi, Zoho Flow</span>
                    </div>
                  </div>
                </div>
                <div className="ix-bar">
                  <small>Plus</small>
                  <span>Monitoring and alerting so failed messages are caught early.</span>
                </div>
              </article>
              <article className="ix-scene" id="ap-test">
                <header>
                  <span className="dx-k">{"Testing & quality"}</span>
                  <h3>Tested before it reaches your users</h3>
                </header>
                <ol className="cx-pipe gl" data-reveal="">
                  <li style={{ "--i": "0" }}>
                    <Icon name="doc" />
                    <b>Test plan</b>
                    <span>Scope, risks, test data</span>
                  </li>
                  <li style={{ "--i": "1" }}>
                    <Icon name="check" />
                    <b>Functional</b>
                    <span>Processes end to end</span>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <Icon name="gear" />
                    <b>Regression</b>
                    <span>Automated suites</span>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <Icon name="bolt" />
                    <b>Performance</b>
                    <span>Load and stress</span>
                  </li>
                  <li style={{ "--i": "4" }}>
                    <Icon name="shield" />
                    <b>Security</b>
                    <span>Code and app scans</span>
                  </li>
                  <li style={{ "--i": "5" }}>
                    <Icon name="users" />
                    <b>UAT</b>
                    <span>Business sign-off</span>
                  </li>
                </ol>
                <div className="ix-bar">
                  <small>Tools</small>
                  <span>Tricentis Tosca · Selenium · Playwright · JMeter · SAP Solution Manager / Cloud ALM</span>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
