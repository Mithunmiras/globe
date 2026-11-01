import React from "react";
import Icon from "../../../../../Component/Icon";

export default function ArchSection() {
  return (
    <section className="dx " id="dc-arch">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Mission-critical architecture</span>
          <h2 className="dx-h">
            Every layer engineered <span>to work as one system</span>
          </h2>
          <p className="dx-lede">
            Power, cooling, compute, network, security and visibility are designed together. Select a layer to explore.
          </p>
        </div>
        <div className="dx-explore" data-tabs="">
          <div className="dx-map-img">
            <img src="/images/img-98-d1191f4707.jpg" alt="Data center cutaway with every layer" loading="lazy" />
            <button
              type="button"
              className="dx-hot"
              style={{ left: "24%", top: "18%" }}
              data-tab-go="arch-1"
              aria-label="Utility + Generation"
            >
              1
            </button>
            <button
              type="button"
              className="dx-hot"
              style={{ left: "14%", top: "50%" }}
              data-tab-go="arch-2"
              aria-label="Power Chain"
            >
              2
            </button>
            <button
              type="button"
              className="dx-hot"
              style={{ left: "26%", top: "84%" }}
              data-tab-go="arch-3"
              aria-label="Security"
            >
              3
            </button>
            <button
              type="button"
              className="dx-hot"
              style={{ left: "58%", top: "12%" }}
              data-tab-go="arch-4"
              aria-label="Cooling"
            >
              4
            </button>
            <button
              type="button"
              className="dx-hot"
              style={{ left: "44%", top: "52%" }}
              data-tab-go="arch-5"
              aria-label="IT Floor"
            >
              5
            </button>
            <button
              type="button"
              className="dx-hot"
              style={{ left: "63%", top: "44%" }}
              data-tab-go="arch-6"
              aria-label="Network"
            >
              6
            </button>
            <button
              type="button"
              className="dx-hot"
              style={{ left: "80%", top: "70%" }}
              data-tab-go="arch-7"
              aria-label="DCIM + Operations"
            >
              7
            </button>
          </div>
          <div className="dx-side">
            <div className="dx-tablist v" role="tablist" aria-label="Architecture layers">
              <button type="button" role="tab" id="arch-1-t" aria-controls="arch-1" aria-selected="true">
                <em>1</em>Utility + Generation
              </button>
              <button type="button" role="tab" id="arch-2-t" aria-controls="arch-2" aria-selected="false">
                <em>2</em>Power Chain
              </button>
              <button type="button" role="tab" id="arch-3-t" aria-controls="arch-3" aria-selected="false">
                <em>3</em>Security
              </button>
              <button type="button" role="tab" id="arch-4-t" aria-controls="arch-4" aria-selected="false">
                <em>4</em>Cooling
              </button>
              <button type="button" role="tab" id="arch-5-t" aria-controls="arch-5" aria-selected="false">
                <em>5</em>IT Floor
              </button>
              <button type="button" role="tab" id="arch-6-t" aria-controls="arch-6" aria-selected="false">
                <em>6</em>Network
              </button>
              <button type="button" role="tab" id="arch-7-t" aria-controls="arch-7" aria-selected="false">
                <em>7</em>DCIM + Operations
              </button>
            </div>
            <div className="dx-panes">
              <div role="tabpanel" id="arch-1" aria-labelledby="arch-1-t" className="dx-pane">
                <span className="dx-ic c-blue ">
                  <Icon name="tower" />
                </span>
                <div>
                  <b>Utility + Generation</b>
                  <ul>
                    <li>
                      <Icon name="check" />
                      Dual utility feeds
                    </li>
                    <li>
                      <Icon name="check" />
                      DG sets
                    </li>
                    <li>
                      <Icon name="check" />
                      Fuel systems
                    </li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" id="arch-2" aria-labelledby="arch-2-t" className="dx-pane" hidden>
                <span className="dx-ic c-blue ">
                  <Icon name="bolt" />
                </span>
                <div>
                  <b>Power Chain</b>
                  <ul>
                    <li>
                      <Icon name="check" />
                      UPS
                    </li>
                    <li>
                      <Icon name="check" />
                      PDU
                    </li>
                    <li>
                      <Icon name="check" />
                      Switchgear
                    </li>
                    <li>
                      <Icon name="check" />
                      Distribution
                    </li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" id="arch-3" aria-labelledby="arch-3-t" className="dx-pane" hidden>
                <span className="dx-ic c-blue ">
                  <Icon name="video" />
                </span>
                <div>
                  <b>Security</b>
                  <ul>
                    <li>
                      <Icon name="check" />
                      Physical security
                    </li>
                    <li>
                      <Icon name="check" />
                      Access control
                    </li>
                    <li>
                      <Icon name="check" />
                      CCTV
                    </li>
                    <li>
                      <Icon name="check" />
                      Perimeter protection
                    </li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" id="arch-4" aria-labelledby="arch-4-t" className="dx-pane" hidden>
                <span className="dx-ic c-blue ">
                  <Icon name="snow" />
                </span>
                <div>
                  <b>Cooling</b>
                  <ul>
                    <li>
                      <Icon name="check" />
                      CRAC/CRAH
                    </li>
                    <li>
                      <Icon name="check" />
                      Containment
                    </li>
                    <li>
                      <Icon name="check" />
                      Optimized airflow
                    </li>
                    <li>
                      <Icon name="check" />
                      Energy efficient design
                    </li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" id="arch-5" aria-labelledby="arch-5-t" className="dx-pane" hidden>
                <span className="dx-ic c-blue ">
                  <Icon name="server" />
                </span>
                <div>
                  <b>IT Floor</b>
                  <ul>
                    <li>
                      <Icon name="check" />
                      Racks
                    </li>
                    <li>
                      <Icon name="check" />
                      Compute
                    </li>
                    <li>
                      <Icon name="check" />
                      Storage
                    </li>
                    <li>
                      <Icon name="check" />
                      GPU / HPC
                    </li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" id="arch-6" aria-labelledby="arch-6-t" className="dx-pane" hidden>
                <span className="dx-ic c-blue ">
                  <Icon name="net" />
                </span>
                <div>
                  <b>Network</b>
                  <ul>
                    <li>
                      <Icon name="check" />
                      Spine-leaf
                    </li>
                    <li>
                      <Icon name="check" />
                      ToR
                    </li>
                    <li>
                      <Icon name="check" />
                      Structured cabling
                    </li>
                    <li>
                      <Icon name="check" />
                      L1 – L4
                    </li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" id="arch-7" aria-labelledby="arch-7-t" className="dx-pane" hidden>
                <span className="dx-ic c-blue ">
                  <Icon name="chart" />
                </span>
                <div>
                  <b>DCIM + Operations</b>
                  <ul>
                    <li>
                      <Icon name="check" />
                      Real-time telemetry
                    </li>
                    <li>
                      <Icon name="check" />
                      Alarms
                    </li>
                    <li>
                      <Icon name="check" />
                      Analytics
                    </li>
                    <li>
                      <Icon name="check" />
                      NOC
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dx-tags">
          <span>
            <Icon name="gear" />
            Integrated by design
          </span>
          <span>
            <Icon name="shield" />
            Built for resilience
          </span>
          <span>
            <Icon name="chart" />
            Optimized for efficiency
          </span>
          <span>
            <Icon name="spark" />
            {"Ready for AI & growth"}
          </span>
          <span>
            <Icon name="users" />
            Managed end-to-end
          </span>
        </div>
      </div>
    </section>
  );
}
