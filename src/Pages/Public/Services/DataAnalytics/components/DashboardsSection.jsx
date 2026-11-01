import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DashboardsSection() {
  return (
    <section className="dx " id="da-dashboards">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Dashboards</span>
          <h2 className="dx-h">
            Dashboards for every <span>part of the business</span>
          </h2>
          <p className="dx-lede">Pick a view — each opens as a working layout.</p>
        </div>
        <div className="da-sel dash" data-tabs="">
          <div className="da-sel-l" role="tablist" aria-orientation="vertical">
            <button type="button" role="tab" id="da-d-design-t" aria-controls="da-d-design" aria-selected="true">
              <Icon name="layout" />
              <span>
                <b>Design principles</b>
                <small>Dashboards people actually use</small>
              </span>
            </button>
            <button type="button" role="tab" id="da-d-cxo-t" aria-controls="da-d-cxo" aria-selected="false">
              <Icon name="briefcase" />
              <span>
                <b>Executive</b>
                <small>The business on one screen</small>
              </span>
            </button>
            <button type="button" role="tab" id="da-d-sales-t" aria-controls="da-d-sales" aria-selected="false">
              <Icon name="trend" />
              <span>
                <b>{"Sales & customer"}</b>
                <small>Pipeline, accounts, mix</small>
              </span>
            </button>
            <button type="button" role="tab" id="da-d-fin-t" aria-controls="da-d-fin" aria-selected="false">
              <Icon name="card" />
              <span>
                <b>Finance</b>
                <small>{"P&L, cash, forecast"}</small>
              </span>
            </button>
            <button type="button" role="tab" id="da-d-scm-t" aria-controls="da-d-scm" aria-selected="false">
              <Icon name="truck" />
              <span>
                <b>Supply chain</b>
                <small>Stock, suppliers, OTIF</small>
              </span>
            </button>
            <button type="button" role="tab" id="da-d-mfg-t" aria-controls="da-d-mfg" aria-selected="false">
              <Icon name="factory" />
              <span>
                <b>Manufacturing</b>
                <small>Plant performance and OEE</small>
              </span>
            </button>
          </div>
          <div className="da-sel-p">
            <div className="da-pane" role="tabpanel" id="da-d-design" aria-labelledby="da-d-design-t">
              <span className="dx-k">Dashboards · Design principles</span>
              <h3 className="da-h">Dashboards people actually use</h3>
              <div className="da-2">
                <div className="da-wire" data-reveal="">
                  <div className="k">KPI</div>
                  <div className="k">KPI</div>
                  <div className="k">KPI</div>
                  <div className="k">KPI</div>
                  <div className="t">Trend</div>
                  <div className="s">Split</div>
                  <div className="d">Detail table on drill-down</div>
                </div>
                <div className="ix-list">
                  <h4>Design principles</h4>
                  <ul>
                    <li>
                      <Icon name="check" />
                      Summary on top, detail below
                    </li>
                    <li>
                      <Icon name="check" />
                      One audience, one question per page
                    </li>
                    <li>
                      <Icon name="check" />A few KPIs, each with a target and trend
                    </li>
                    <li>
                      <Icon name="check" />
                      Status in words and colour, never colour alone
                    </li>
                    <li>
                      <Icon name="check" />
                      Drill-down from summary to transaction
                    </li>
                    <li>
                      <Icon name="check" />
                      Fast and mobile-ready, refreshed automatically
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-pane" role="tabpanel" id="da-d-cxo" aria-labelledby="da-d-cxo-t" hidden>
              <span className="dx-k">Dashboards · Executive</span>
              <h3 className="da-h">The CXO cockpit: the business on one screen</h3>
              <div className="da-board" data-reveal="">
                <div className="da-chrome">
                  <span>
                    <i />
                    <i />
                    <i />
                  </span>
                  <b>CXO cockpit</b>
                  <em>Illustrative layout</em>
                </div>
                <div className="da-krow">
                  <div className="da-kpi ok" style={{ "--i": "0" }}>
                    <small>Revenue</small>
                    <svg viewBox="0 0 98 40" aria-hidden="true">
                      <polyline points="0,28 14,23 28,25 42,18 56,19 70,14 84,12 98,9" />
                    </svg>
                    <em>On track</em>
                  </div>
                  <div className="da-kpi wn" style={{ "--i": "1" }}>
                    <small>Margin</small>
                    <svg viewBox="0 0 98 40" aria-hidden="true">
                      <polyline points="0,16 14,17 28,15 42,17 56,14 70,14 84,12 98,11" />
                    </svg>
                    <em>Watch</em>
                  </div>
                  <div className="da-kpi ok" style={{ "--i": "2" }}>
                    <small>Cash</small>
                    <svg viewBox="0 0 98 40" aria-hidden="true">
                      <polyline points="0,24 14,22 28,22 42,20 56,17 70,18 84,15 98,13" />
                    </svg>
                    <em>On track</em>
                  </div>
                  <div className="da-kpi ok" style={{ "--i": "3" }}>
                    <small>OTIF</small>
                    <svg viewBox="0 0 98 40" aria-hidden="true">
                      <polyline points="0,11 14,12 28,10 42,10 56,9 70,8 84,7 98,6" />
                    </svg>
                    <em>Improving</em>
                  </div>
                </div>
                <div className="da-viz">
                  <div className="da-bars">
                    <small>Monthly revenue vs target</small>
                    <div>
                      <i style={{ "--h": "48%", "--i": "0" }}>
                        <u style={{ "--t": "55%" }} />
                      </i>
                      <i style={{ "--h": "56%", "--i": "1" }}>
                        <u style={{ "--t": "58%" }} />
                      </i>
                      <i style={{ "--h": "52%", "--i": "2" }}>
                        <u style={{ "--t": "60%" }} />
                      </i>
                      <i style={{ "--h": "64%", "--i": "3" }}>
                        <u style={{ "--t": "62%" }} />
                      </i>
                      <i style={{ "--h": "60%", "--i": "4" }}>
                        <u style={{ "--t": "64%" }} />
                      </i>
                      <i style={{ "--h": "72%", "--i": "5" }}>
                        <u style={{ "--t": "66%" }} />
                      </i>
                      <i style={{ "--h": "68%", "--i": "6" }}>
                        <u style={{ "--t": "70%" }} />
                      </i>
                      <i style={{ "--h": "80%", "--i": "7" }}>
                        <u style={{ "--t": "72%" }} />
                      </i>
                      <i style={{ "--h": "76%", "--i": "8" }}>
                        <u style={{ "--t": "74%" }} />
                      </i>
                      <i style={{ "--h": "86%", "--i": "9" }}>
                        <u style={{ "--t": "78%" }} />
                      </i>
                      <i style={{ "--h": "82%", "--i": "10" }}>
                        <u style={{ "--t": "80%" }} />
                      </i>
                      <i style={{ "--h": "90%", "--i": "11" }}>
                        <u style={{ "--t": "84%" }} />
                      </i>
                    </div>
                    <span className="lg">
                      <b />
                      Actual
                      <b className="t" />
                      Target
                    </span>
                  </div>
                  <div className="da-donut">
                    <small>Sales mix</small>
                    <svg viewBox="0 0 42 42" aria-hidden="true">
                      <circle r="15.9" cx="21" cy="21" className="a" />
                      <circle r="15.9" cx="21" cy="21" className="b" />
                      <circle r="15.9" cx="21" cy="21" className="c" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="da-chips">
                <small>Typical KPIs</small>
                <span>Revenue vs target</span>
                <span>Gross margin</span>
                <span>Order book</span>
                <span>Cash and receivables</span>
                <span>On-time in full (OTIF)</span>
                <span>Plant OEE</span>
                <span>Inventory days</span>
              </div>
              <div className="ix-bar">
                <small>Illustrative layout</small>
                <span>Drill into region, product or plant.</span>
              </div>
            </div>
            <div className="da-pane" role="tabpanel" id="da-d-sales" aria-labelledby="da-d-sales-t" hidden>
              <span className="dx-k">{"Dashboards · Sales & customer"}</span>
              <h3 className="da-h">Sales and customer analytics</h3>
              <div className="da-2 r">
                <div className="da-board" data-reveal="">
                  <div className="da-chrome">
                    <span>
                      <i />
                      <i />
                      <i />
                    </span>
                    <b>Sales</b>
                    <em>Illustrative layout</em>
                  </div>
                  <div className="da-krow">
                    <div className="da-kpi ok" style={{ "--i": "0" }}>
                      <small>Revenue</small>
                      <svg viewBox="0 0 98 40" aria-hidden="true">
                        <polyline points="0,28 14,23 28,25 42,18 56,19 70,14 84,12 98,9" />
                      </svg>
                      <em>On track</em>
                    </div>
                    <div className="da-kpi wn" style={{ "--i": "1" }}>
                      <small>Win rate</small>
                      <svg viewBox="0 0 98 40" aria-hidden="true">
                        <polyline points="0,16 14,17 28,15 42,17 56,14 70,14 84,12 98,11" />
                      </svg>
                      <em>Watch</em>
                    </div>
                    <div className="da-kpi ok" style={{ "--i": "2" }}>
                      <small>Pipeline</small>
                      <svg viewBox="0 0 98 40" aria-hidden="true">
                        <polyline points="0,24 14,22 28,22 42,20 56,17 70,18 84,15 98,13" />
                      </svg>
                      <em>Growing</em>
                    </div>
                    <div className="da-kpi bd" style={{ "--i": "3" }}>
                      <small>Overdue</small>
                      <svg viewBox="0 0 98 40" aria-hidden="true">
                        <polyline points="0,11 14,12 28,10 42,10 56,9 70,8 84,7 98,6" />
                      </svg>
                      <em>Act today</em>
                    </div>
                  </div>
                  <div className="da-viz">
                    <div className="da-bars">
                      <small>Revenue vs target by month</small>
                      <div>
                        <i style={{ "--h": "48%", "--i": "0" }}>
                          <u style={{ "--t": "55%" }} />
                        </i>
                        <i style={{ "--h": "56%", "--i": "1" }}>
                          <u style={{ "--t": "58%" }} />
                        </i>
                        <i style={{ "--h": "52%", "--i": "2" }}>
                          <u style={{ "--t": "60%" }} />
                        </i>
                        <i style={{ "--h": "64%", "--i": "3" }}>
                          <u style={{ "--t": "62%" }} />
                        </i>
                        <i style={{ "--h": "60%", "--i": "4" }}>
                          <u style={{ "--t": "64%" }} />
                        </i>
                        <i style={{ "--h": "72%", "--i": "5" }}>
                          <u style={{ "--t": "66%" }} />
                        </i>
                        <i style={{ "--h": "68%", "--i": "6" }}>
                          <u style={{ "--t": "70%" }} />
                        </i>
                        <i style={{ "--h": "80%", "--i": "7" }}>
                          <u style={{ "--t": "72%" }} />
                        </i>
                        <i style={{ "--h": "76%", "--i": "8" }}>
                          <u style={{ "--t": "74%" }} />
                        </i>
                        <i style={{ "--h": "86%", "--i": "9" }}>
                          <u style={{ "--t": "78%" }} />
                        </i>
                        <i style={{ "--h": "82%", "--i": "10" }}>
                          <u style={{ "--t": "80%" }} />
                        </i>
                        <i style={{ "--h": "90%", "--i": "11" }}>
                          <u style={{ "--t": "84%" }} />
                        </i>
                      </div>
                      <span className="lg">
                        <b />
                        Actual
                        <b className="t" />
                        Target
                      </span>
                    </div>
                    <div className="da-donut">
                      <small>Product mix</small>
                      <svg viewBox="0 0 42 42" aria-hidden="true">
                        <circle r="15.9" cx="21" cy="21" className="a" />
                        <circle r="15.9" cx="21" cy="21" className="b" />
                        <circle r="15.9" cx="21" cy="21" className="c" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="da-qs">
                  <h4>Questions answered</h4>
                  <ul>
                    <li>
                      <Icon name="spark" />
                      <span>Are we on track for the quarter?</span>
                    </li>
                    <li>
                      <Icon name="spark" />
                      <span>Which customers are growing or slipping?</span>
                    </li>
                    <li>
                      <Icon name="spark" />
                      <span>Where is the pipeline stuck?</span>
                    </li>
                    <li>
                      <Icon name="spark" />
                      <span>Who needs follow-up today?</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="da-mt">
                <div style={{ "--i": "0" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="trend" />
                  </span>
                  <b>Performance</b>
                  <span>Revenue, volume and price vs target by region and rep</span>
                </div>
                <div style={{ "--i": "1" }}>
                  <span className="dx-ic c-gold">
                    <Icon name="layout" />
                  </span>
                  <b>Pipeline</b>
                  <span>Stage funnel, win rate, deal ageing from CRM</span>
                </div>
                <div style={{ "--i": "2" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="users" />
                  </span>
                  <b>Customers</b>
                  <span>Top accounts, churn risk, outstanding payments</span>
                </div>
                <div style={{ "--i": "3" }}>
                  <span className="dx-ic c-gold">
                    <Icon name="bag" />
                  </span>
                  <b>Product mix</b>
                  <span>Margin by SKU, ABC analysis, price realisation</span>
                </div>
              </div>
            </div>
            <div className="da-pane" role="tabpanel" id="da-d-fin" aria-labelledby="da-d-fin-t" hidden>
              <span className="dx-k">Dashboards · Finance</span>
              <h3 className="da-h">Finance analytics and planning</h3>
              <div className="da-2 r">
                <div className="da-board" data-reveal="">
                  <div className="da-chrome">
                    <span>
                      <i />
                      <i />
                      <i />
                    </span>
                    <b>Finance</b>
                    <em>Illustrative layout</em>
                  </div>
                  <div className="da-krow">
                    <div className="da-kpi ok" style={{ "--i": "0" }}>
                      <small>{"P&L"}</small>
                      <svg viewBox="0 0 98 40" aria-hidden="true">
                        <polyline points="0,28 14,23 28,25 42,18 56,19 70,14 84,12 98,9" />
                      </svg>
                      <em>On budget</em>
                    </div>
                    <div className="da-kpi wn" style={{ "--i": "1" }}>
                      <small>DSO</small>
                      <svg viewBox="0 0 98 40" aria-hidden="true">
                        <polyline points="0,16 14,17 28,15 42,17 56,14 70,14 84,12 98,11" />
                      </svg>
                      <em>Watch</em>
                    </div>
                    <div className="da-kpi ok" style={{ "--i": "2" }}>
                      <small>Cash</small>
                      <svg viewBox="0 0 98 40" aria-hidden="true">
                        <polyline points="0,24 14,22 28,22 42,20 56,17 70,18 84,15 98,13" />
                      </svg>
                      <em>On track</em>
                    </div>
                    <div className="da-kpi bd" style={{ "--i": "3" }}>
                      <small>Costs</small>
                      <svg viewBox="0 0 98 40" aria-hidden="true">
                        <polyline points="0,11 14,12 28,10 42,10 56,9 70,8 84,7 98,6" />
                      </svg>
                      <em>Over budget</em>
                    </div>
                  </div>
                  <div className="da-viz">
                    <div className="da-bars">
                      <small>Actual vs budget</small>
                      <div>
                        <i style={{ "--h": "48%", "--i": "0" }}>
                          <u style={{ "--t": "55%" }} />
                        </i>
                        <i style={{ "--h": "56%", "--i": "1" }}>
                          <u style={{ "--t": "58%" }} />
                        </i>
                        <i style={{ "--h": "52%", "--i": "2" }}>
                          <u style={{ "--t": "60%" }} />
                        </i>
                        <i style={{ "--h": "64%", "--i": "3" }}>
                          <u style={{ "--t": "62%" }} />
                        </i>
                        <i style={{ "--h": "60%", "--i": "4" }}>
                          <u style={{ "--t": "64%" }} />
                        </i>
                        <i style={{ "--h": "72%", "--i": "5" }}>
                          <u style={{ "--t": "66%" }} />
                        </i>
                        <i style={{ "--h": "68%", "--i": "6" }}>
                          <u style={{ "--t": "70%" }} />
                        </i>
                        <i style={{ "--h": "80%", "--i": "7" }}>
                          <u style={{ "--t": "72%" }} />
                        </i>
                        <i style={{ "--h": "76%", "--i": "8" }}>
                          <u style={{ "--t": "74%" }} />
                        </i>
                        <i style={{ "--h": "86%", "--i": "9" }}>
                          <u style={{ "--t": "78%" }} />
                        </i>
                        <i style={{ "--h": "82%", "--i": "10" }}>
                          <u style={{ "--t": "80%" }} />
                        </i>
                        <i style={{ "--h": "90%", "--i": "11" }}>
                          <u style={{ "--t": "84%" }} />
                        </i>
                      </div>
                      <span className="lg">
                        <b />
                        Actual
                        <b className="t" />
                        Target
                      </span>
                    </div>
                    <div className="da-donut">
                      <small>Cost by centre</small>
                      <svg viewBox="0 0 42 42" aria-hidden="true">
                        <circle r="15.9" cx="21" cy="21" className="a" />
                        <circle r="15.9" cx="21" cy="21" className="b" />
                        <circle r="15.9" cx="21" cy="21" className="c" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="da-qs">
                  <h4>Questions answered</h4>
                  <ul>
                    <li>
                      <Icon name="spark" />
                      <span>How profitable is each unit and product?</span>
                    </li>
                    <li>
                      <Icon name="spark" />
                      <span>Where is cash tied up?</span>
                    </li>
                    <li>
                      <Icon name="spark" />
                      <span>Are costs within budget?</span>
                    </li>
                    <li>
                      <Icon name="spark" />
                      <span>What does next quarter look like?</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="da-mt">
                <div style={{ "--i": "0" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="chart" />
                  </span>
                  <b>{"Profit & loss"}</b>
                  <span>Actual vs budget vs last year, by entity and unit</span>
                </div>
                <div style={{ "--i": "1" }}>
                  <span className="dx-ic c-gold">
                    <Icon name="card" />
                  </span>
                  <b>Working capital</b>
                  <span>Receivables and payables ageing, DSO, DPO, cash</span>
                </div>
                <div style={{ "--i": "2" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="target" />
                  </span>
                  <b>Cost control</b>
                  <span>Cost-centre spend and variance explanations</span>
                </div>
                <div style={{ "--i": "3" }}>
                  <span className="dx-ic c-gold">
                    <Icon name="trend" />
                  </span>
                  <b>Forecast</b>
                  <span>Rolling forecast and what-if scenarios</span>
                </div>
              </div>
            </div>
            <div className="da-pane" role="tabpanel" id="da-d-scm" aria-labelledby="da-d-scm-t" hidden>
              <span className="dx-k">Dashboards · Supply chain</span>
              <h3 className="da-h">Supply chain and inventory analytics</h3>
              <div className="da-2 r">
                <div className="da-board" data-reveal="">
                  <div className="da-chrome">
                    <span>
                      <i />
                      <i />
                      <i />
                    </span>
                    <b>Supply chain</b>
                    <em>Illustrative layout</em>
                  </div>
                  <div className="da-krow">
                    <div className="da-kpi ok" style={{ "--i": "0" }}>
                      <small>OTIF</small>
                      <svg viewBox="0 0 98 40" aria-hidden="true">
                        <polyline points="0,28 14,23 28,25 42,18 56,19 70,14 84,12 98,9" />
                      </svg>
                      <em>Improving</em>
                    </div>
                    <div className="da-kpi wn" style={{ "--i": "1" }}>
                      <small>Stock cover</small>
                      <svg viewBox="0 0 98 40" aria-hidden="true">
                        <polyline points="0,16 14,17 28,15 42,17 56,14 70,14 84,12 98,11" />
                      </svg>
                      <em>Watch</em>
                    </div>
                    <div className="da-kpi ok" style={{ "--i": "2" }}>
                      <small>Supplier OTD</small>
                      <svg viewBox="0 0 98 40" aria-hidden="true">
                        <polyline points="0,24 14,22 28,22 42,20 56,17 70,18 84,15 98,13" />
                      </svg>
                      <em>On track</em>
                    </div>
                    <div className="da-kpi bd" style={{ "--i": "3" }}>
                      <small>Backlog</small>
                      <svg viewBox="0 0 98 40" aria-hidden="true">
                        <polyline points="0,11 14,12 28,10 42,10 56,9 70,8 84,7 98,6" />
                      </svg>
                      <em>Act today</em>
                    </div>
                  </div>
                  <div className="da-viz">
                    <div className="da-bars">
                      <small>Dispatch vs plan</small>
                      <div>
                        <i style={{ "--h": "48%", "--i": "0" }}>
                          <u style={{ "--t": "55%" }} />
                        </i>
                        <i style={{ "--h": "56%", "--i": "1" }}>
                          <u style={{ "--t": "58%" }} />
                        </i>
                        <i style={{ "--h": "52%", "--i": "2" }}>
                          <u style={{ "--t": "60%" }} />
                        </i>
                        <i style={{ "--h": "64%", "--i": "3" }}>
                          <u style={{ "--t": "62%" }} />
                        </i>
                        <i style={{ "--h": "60%", "--i": "4" }}>
                          <u style={{ "--t": "64%" }} />
                        </i>
                        <i style={{ "--h": "72%", "--i": "5" }}>
                          <u style={{ "--t": "66%" }} />
                        </i>
                        <i style={{ "--h": "68%", "--i": "6" }}>
                          <u style={{ "--t": "70%" }} />
                        </i>
                        <i style={{ "--h": "80%", "--i": "7" }}>
                          <u style={{ "--t": "72%" }} />
                        </i>
                        <i style={{ "--h": "76%", "--i": "8" }}>
                          <u style={{ "--t": "74%" }} />
                        </i>
                        <i style={{ "--h": "86%", "--i": "9" }}>
                          <u style={{ "--t": "78%" }} />
                        </i>
                        <i style={{ "--h": "82%", "--i": "10" }}>
                          <u style={{ "--t": "80%" }} />
                        </i>
                        <i style={{ "--h": "90%", "--i": "11" }}>
                          <u style={{ "--t": "84%" }} />
                        </i>
                      </div>
                      <span className="lg">
                        <b />
                        Actual
                        <b className="t" />
                        Target
                      </span>
                    </div>
                    <div className="da-donut">
                      <small>Stock ageing</small>
                      <svg viewBox="0 0 42 42" aria-hidden="true">
                        <circle r="15.9" cx="21" cy="21" className="a" />
                        <circle r="15.9" cx="21" cy="21" className="b" />
                        <circle r="15.9" cx="21" cy="21" className="c" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="da-qs">
                  <h4>Questions answered</h4>
                  <ul>
                    <li>
                      <Icon name="spark" />
                      <span>Do we hold the right stock?</span>
                    </li>
                    <li>
                      <Icon name="spark" />
                      <span>Are suppliers delivering on time?</span>
                    </li>
                    <li>
                      <Icon name="spark" />
                      <span>Will customer orders ship on time?</span>
                    </li>
                    <li>
                      <Icon name="spark" />
                      <span>What is freight really costing?</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="da-mt">
                <div style={{ "--i": "0" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="db" />
                  </span>
                  <b>Inventory</b>
                  <span>Days of cover, ageing, slow and non-moving stock</span>
                </div>
                <div style={{ "--i": "1" }}>
                  <span className="dx-ic c-gold">
                    <Icon name="cart" />
                  </span>
                  <b>Procurement</b>
                  <span>Supplier on-time delivery, price variance, lead times</span>
                </div>
                <div style={{ "--i": "2" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="check" />
                  </span>
                  <b>Fulfilment</b>
                  <span>OTIF, order backlog, dispatch status</span>
                </div>
                <div style={{ "--i": "3" }}>
                  <span className="dx-ic c-gold">
                    <Icon name="truck" />
                  </span>
                  <b>Logistics</b>
                  <span>Freight cost per shipment, transit times, carriers</span>
                </div>
              </div>
            </div>
            <div className="da-pane" role="tabpanel" id="da-d-mfg" aria-labelledby="da-d-mfg-t" hidden>
              <span className="dx-k">Dashboards · Manufacturing</span>
              <h3 className="da-h">Plant performance and OEE</h3>
              <div className="da-oee" data-reveal="">
                <div style={{ "--i": "0" }}>
                  <svg viewBox="0 0 42 42" aria-hidden="true">
                    <circle r="16" cx="21" cy="21" className="bg" />
                    <circle r="16" cx="21" cy="21" className="fg" style={{ "--p": "86" }} />
                  </svg>
                  <b>Availability</b>
                  <span>Run time vs planned</span>
                </div>
                <em>×</em>
                <div style={{ "--i": "1" }}>
                  <svg viewBox="0 0 42 42" aria-hidden="true">
                    <circle r="16" cx="21" cy="21" className="bg" />
                    <circle r="16" cx="21" cy="21" className="fg" style={{ "--p": "78" }} />
                  </svg>
                  <b>Performance</b>
                  <span>Actual vs ideal speed</span>
                </div>
                <em>×</em>
                <div style={{ "--i": "2" }}>
                  <svg viewBox="0 0 42 42" aria-hidden="true">
                    <circle r="16" cx="21" cy="21" className="bg" />
                    <circle r="16" cx="21" cy="21" className="fg" style={{ "--p": "92" }} />
                  </svg>
                  <b>Quality</b>
                  <span>Good units vs total</span>
                </div>
                <em>=</em>
                <div className="res">
                  <span className="g">
                    <Icon name="gear" />
                  </span>
                  <b>OEE</b>
                  <span>Line health</span>
                </div>
              </div>
              <div className="da-mt">
                <div style={{ "--i": "0" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="factory" />
                  </span>
                  <b>Production</b>
                  <span>Output vs plan, downtime reasons</span>
                </div>
                <div style={{ "--i": "1" }}>
                  <span className="dx-ic c-gold">
                    <Icon name="check" />
                  </span>
                  <b>Quality</b>
                  <span>First-pass yield, defects, scrap</span>
                </div>
                <div style={{ "--i": "2" }}>
                  <span className="dx-ic c-blue">
                    <Icon name="gear" />
                  </span>
                  <b>Maintenance</b>
                  <span>MTBF, MTTR, breakdown trends</span>
                </div>
                <div style={{ "--i": "3" }}>
                  <span className="dx-ic c-gold">
                    <Icon name="bolt" />
                  </span>
                  <b>Energy</b>
                  <span>Consumption per unit and per line</span>
                </div>
              </div>
              <div className="ix-bar">
                <small>Data from</small>
                <span>MES, SCADA and machine controllers, joined with ERP orders and costs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
