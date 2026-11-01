import React from "react";
import Icon from "../../../../Component/Icon";

export default function TypesSection() {
  return (
    <section className="dx " id="dc-types">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Data center types</span>
          <h2 className="dx-h">
            Every kind of facility, <span>one partner</span>
          </h2>
          <p className="dx-lede">Whether you are building, expanding, modernising or operating.</p>
        </div>
        <div className="dcs-types" data-reveal="">
          <div style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="building" />
            </span>
            <b>Enterprise / private</b>
            <p>Business-critical apps, security, compliance, DR</p>
            <em>Modernisation, resilience, hybrid cloud, managed operations</em>
          </div>
          <div style={{ "--i": "1" }}>
            <span className="dx-ic c-gold">
              <Icon name="layers" />
            </span>
            <b>Colocation</b>
            <p>Tenant separation, carrier connectivity, metering, phased fit-out</p>
            <em>Interconnect, capacity, modular expansion, onboarding</em>
          </div>
          <div style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="globe" />
            </span>
            <b>Hyperscale / large campus</b>
            <p>Phased capacity, high power demand, repeatable designs</p>
            <em>Master planning, power strategy, programme controls</em>
          </div>
          <div style={{ "--i": "3" }}>
            <span className="dx-ic c-gold">
              <Icon name="pin" />
            </span>
            <b>Edge / regional</b>
            <p>Compact footprint, remote management, unattended operation</p>
            <em>Modular systems, remote monitoring, maintainability</em>
          </div>
          <div style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="cpu" />
            </span>
            <b>AI / GPU / HPC</b>
            <p>High rack density, high-throughput network and storage</p>
            <em>AI architecture, liquid cooling, high-density power</em>
          </div>
          <div style={{ "--i": "5" }}>
            <span className="dx-ic c-gold">
              <Icon name="upload" />
            </span>
            <b>Disaster recovery site</b>
            <p>Recovery objectives, replication, independent failure domains</p>
            <em>BC/DR strategy, recovery testing, runbooks</em>
          </div>
        </div>
      </div>
    </section>
  );
}
