import React from "react";
import Icon from "../../../../../Component/Icon";

export default function MsMapSection() {
  return (
    <section className="dx " id="ms-map">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Managed IT Services</span>
          <h2 className="dx-h">
            Eight managed services, <span>one accountable team</span>
          </h2>
          <p className="dx-lede">
            We design it, build it and run it — monitored around the clock, measured against agreed SLAs.
          </p>
        </div>
        <div className="cx-ring-wrap" data-reveal="">
          <div className="cx-side">
            <div className="cx-node l" style={{ "--i": "0" }}>
              <span className="dx-ic c-blue">
                <Icon name="eye" />
              </span>
              <div>
                <b>Managed NOC</b>
                <span>Network, servers, cloud — 24x7</span>
              </div>
            </div>
            <div className="cx-node l" style={{ "--i": "1" }}>
              <span className="dx-ic c-gold">
                <Icon name="shield" />
              </span>
              <div>
                <b>Managed SOC</b>
                <span>Detect, investigate, respond</span>
              </div>
            </div>
            <div className="cx-node l" style={{ "--i": "2" }}>
              <span className="dx-ic c-blue">
                <Icon name="headset" />
              </span>
              <div>
                <b>Service desk</b>
                <span>One number, L1 to L3</span>
              </div>
            </div>
            <div className="cx-node l" style={{ "--i": "3" }}>
              <span className="dx-ic c-gold">
                <Icon name="cloud" />
              </span>
              <div>
                <b>Managed cloud</b>
                <span>CloudOps, FinOps, patching</span>
              </div>
            </div>
          </div>
          <div className="cx-ring" aria-hidden="true">
            <i className="r1" />
            <i className="r2" />
            <i className="r3" />
            <span className="cx-core">
              <Icon name="spark" />
              <b>Digital Globe</b>
              <small>24x7 operations</small>
            </span>
          </div>
          <div className="cx-side">
            <div className="cx-node r" style={{ "--i": "0" }}>
              <span className="dx-ic c-blue">
                <Icon name="apps" />
              </span>
              <div>
                <b>Application support</b>
                <span>SLA-based AMS, L1–L3</span>
              </div>
            </div>
            <div className="cx-node r" style={{ "--i": "1" }}>
              <span className="dx-ic c-gold">
                <Icon name="dc" />
              </span>
              <div>
                <b>Data center operations</b>
                <span>Facilities, power, cooling</span>
              </div>
            </div>
            <div className="cx-node r" style={{ "--i": "2" }}>
              <span className="dx-ic c-blue">
                <Icon name="laptop" />
              </span>
              <div>
                <b>{"End-user & field"}</b>
                <span>Devices, IMAC, site support</span>
              </div>
            </div>
            <div className="cx-node r" style={{ "--i": "3" }}>
              <span className="dx-ic c-gold">
                <Icon name="db" />
              </span>
              <div>
                <b>{"Backup & DR"}</b>
                <span>Tested restores, DR drills</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cx-sys">
          <Icon name="layers" />
          One service desk · one SLA · one monthly report across infrastructure, security, cloud and applications.
        </div>
      </div>
    </section>
  );
}
