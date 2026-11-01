import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DeckSection() {
  return (
    <section className="dx" id="dcs-power-deck">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Capability deck</span>
          <h2 className="dx-h">
            Power and distribution <span>we deliver</span>
          </h2>
          <p className="dx-lede">Power infrastructure and PDUs from the DGC Data Center capability deck.</p>
        </div>
        <div className="dx-tabs" data-tabs="">
          <div className="dx-tablist h" role="tablist" aria-label="Infrastructure layers">
            <button type="button" role="tab" id="inf-power-t" aria-controls="inf-power" aria-selected="true">
              <Icon name="bolt" />
              Power
            </button>
            <button type="button" role="tab" id="inf-pdu-t" aria-controls="inf-pdu" aria-selected="false">
              <Icon name="gear" />
              PDU
            </button>
          </div>
          <div className="dx-tpanes">
            <div role="tabpanel" id="inf-power" aria-labelledby="inf-power-t" className="dx-tp">
              <div className="dx-ip one">
                <div className="dx-ip-copy">
                  <span className="dx-k">Uninterrupted operations</span>
                  <h3>Power Infrastructure</h3>
                  <p className="dx-lede">
                    Redundant power feeds, UPS systems, PDUs and backup generators engineered for zero single points of
                    failure.
                  </p>
                </div>
              </div>
              <ol className="dx-chain">
                <li>
                  <img src="/images/img-110-7c8a1e9418.jpg" alt="" loading="lazy" />
                  <div>
                    <em>01</em>
                    <b>Utility Grid</b>
                    <span>Dual independent feeds</span>
                  </div>
                </li>
                <li>
                  <img src="/images/img-111-50744294c6.jpg" alt="" loading="lazy" />
                  <div>
                    <em>02</em>
                    <b>Backup Generators</b>
                    <span>{"N+1 diesel, auto-start <10s"}</span>
                  </div>
                </li>
                <li>
                  <img src="/images/img-112-081c50a4cb.jpg" alt="" loading="lazy" />
                  <div>
                    <em>03</em>
                    <b>UPS Systems</b>
                    <span>2N / N+1, dual conversion</span>
                  </div>
                </li>
                <li>
                  <img src="/images/img-113-24cb1aae39.jpg" alt="" loading="lazy" />
                  <div>
                    <em>04</em>
                    <b>PDU / Busway</b>
                    <span>Metered, 3-phase distribution</span>
                  </div>
                </li>
                <li>
                  <img src="/images/img-114-c4b8f51e00.jpg" alt="" loading="lazy" />
                  <div>
                    <em>05</em>
                    <b>IT Load</b>
                    <span>Dual-corded racks (A+B)</span>
                  </div>
                </li>
              </ol>
              <div className="dx-fgrid four">
                <div className="dx-f">
                  <span className="dx-ic c-blue ">
                    <Icon name="gear" />
                  </span>
                  <div>
                    <b>Power Configuration</b>
                    <span>2N / N+1 redundancy across UPS and distribution paths</span>
                  </div>
                </div>
                <div className="dx-f">
                  <span className="dx-ic c-gold ">
                    <Icon name="eye" />
                  </span>
                  <div>
                    <b>Backup Runtime</b>
                    <span>Battery bridge 10–15 min; generators sized for 48–72 hrs on-site fuel</span>
                  </div>
                </div>
                <div className="dx-f">
                  <span className="dx-ic c-blue ">
                    <Icon name="chart" />
                  </span>
                  <div>
                    <b>Efficiency Target</b>
                    <span>{"PUE 1.2 – 1.5 through free-cooling & high-efficiency UPS"}</span>
                  </div>
                </div>
                <div className="dx-f">
                  <span className="dx-ic c-gold ">
                    <Icon name="bolt" />
                  </span>
                  <div>
                    <b>Transfer Switching</b>
                    <span>Automatic Transfer Switches (ATS) for seamless source failover</span>
                  </div>
                </div>
              </div>
              <div className="dx-metrics">
                <div className="dx-m">
                  <span>
                    <Icon name="shield" />
                  </span>
                  <b data-n="">99.995%</b>
                  <small>Power Availability Target</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="leaf" />
                  </span>
                  <b>Energy Efficient</b>
                  <small>Lower OPEX</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="db" />
                  </span>
                  <b>Scalable</b>
                  <small>From MW to Multi-MW</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="net" />
                  </span>
                  <b>Resilient</b>
                  <small>No Single Point of Failure</small>
                </div>
              </div>
            </div>
            <div role="tabpanel" id="inf-pdu" aria-labelledby="inf-pdu-t" className="dx-tp" hidden>
              <div className="dx-ip one">
                <div className="dx-ip-copy">
                  <span className="dx-k">Rack-level distribution</span>
                  <h3>{"PDU & Power Distribution"}</h3>
                  <p className="dx-lede">
                    The right PDU strategy protects uptime at the last meter — from the busway down to every server’s
                    power inlet.
                  </p>
                </div>
              </div>
              <div className="dx-pdus">
                <div className="dx-pd">
                  <div className="dx-pd-top">
                    <em>01</em>
                    <span className="dx-lvl" aria-label="Capability level 1 of 5">
                      <i className="on" />
                      <i />
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>
                  <b>Basic PDU</b>
                  <p>Fixed distribution, no monitoring — lowest cost, low-risk loads.</p>
                </div>
                <div className="dx-pd">
                  <div className="dx-pd-top">
                    <em>02</em>
                    <span className="dx-lvl" aria-label="Capability level 2 of 5">
                      <i className="on" />
                      <i className="on" />
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>
                  <b>Metered PDU</b>
                  <p>{"Local/remote current & power readout at the unit level."}</p>
                </div>
                <div className="dx-pd">
                  <div className="dx-pd-top">
                    <em>03</em>
                    <span className="dx-lvl" aria-label="Capability level 3 of 5">
                      <i className="on" />
                      <i className="on" />
                      <i className="on" />
                      <i />
                      <i />
                    </span>
                  </div>
                  <b>Metered-by-Outlet</b>
                  <p>{"Per-outlet power & energy visibility for granular billing."}</p>
                </div>
                <div className="dx-pd">
                  <div className="dx-pd-top">
                    <em>04</em>
                    <span className="dx-lvl" aria-label="Capability level 4 of 5">
                      <i className="on" />
                      <i className="on" />
                      <i className="on" />
                      <i className="on" />
                      <i />
                    </span>
                  </div>
                  <b>Switched PDU</b>
                  <p>{"Remote on/off & reboot per outlet, sequenced start-up."}</p>
                </div>
                <div className="dx-pd">
                  <div className="dx-pd-top">
                    <em>05</em>
                    <span className="dx-lvl" aria-label="Capability level 4 of 5">
                      <i className="on" />
                      <i className="on" />
                      <i className="on" />
                      <i className="on" />
                      <i />
                    </span>
                  </div>
                  <b>ATS / Dual-Corded</b>
                  <p>Auto transfer between A/B feeds — zero-loss failover.</p>
                </div>
                <div className="dx-pd">
                  <div className="dx-pd-top">
                    <em>06</em>
                    <span className="dx-lvl" aria-label="Capability level 5 of 5">
                      <i className="on" />
                      <i className="on" />
                      <i className="on" />
                      <i className="on" />
                      <i className="on" />
                    </span>
                  </div>
                  <b>Intelligent / Networked</b>
                  <p>SNMP, environmental sensors, DCIM integration.</p>
                </div>
              </div>
              <div className="dx-metrics">
                <div className="dx-m">
                  <span>
                    <Icon name="bolt" />
                  </span>
                  <b>3-Phase</b>
                  <small>415V Distribution</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="server" />
                  </span>
                  <b>A + B</b>
                  <small>Redundant Feeds</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="chart" />
                  </span>
                  <b>Remote</b>
                  <small>DCIM Monitoring</small>
                </div>
                <div className="dx-m">
                  <span>
                    <Icon name="shield" />
                  </span>
                  <b>IEC 60309 /</b>
                  <small>C13-C19 Outlets</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
