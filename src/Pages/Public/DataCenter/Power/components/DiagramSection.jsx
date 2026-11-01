import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DiagramSection() {
  return (
    <section className="dx " id="dcs-power-diagram">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Architecture</span>
          <h2 className="dx-h">
            The power <span>path</span>
          </h2>
          <p className="dx-lede">
            Normal operation flows left to right; standby generation and stored energy support the critical load when
            utility power is lost.
          </p>
        </div>
        <figure className="dcs-fig">
          <div className="dcs-chain " data-reveal="">
            <div className="dcs-row n6">
              <div className="dcs-node" style={{ "--i": "0" }}>
                <Icon name="globe" />
                <b>Utility</b>
                <small>Grid supply</small>
              </div>
              <div className="dcs-node" style={{ "--i": "1" }}>
                <Icon name="bolt" />
                <b>Substation</b>
                <small>MV/HV, protection</small>
              </div>
              <div className="dcs-node" style={{ "--i": "2" }}>
                <Icon name="layers" />
                <b>Transformer</b>
                <small>Voltage conversion</small>
              </div>
              <div className="dcs-node" style={{ "--i": "3" }}>
                <Icon name="layout" />
                <b>Switchgear</b>
                <small>Main distribution</small>
              </div>
              <div className="dcs-node" style={{ "--i": "4" }}>
                <Icon name="bolt" />
                <b>UPS</b>
                <small>Conditioned power</small>
              </div>
              <div className="dcs-node" style={{ "--i": "5" }}>
                <Icon name="server" />
                <b>PDU / busway</b>
                <small>To the rack</small>
              </div>
              <i className="dcs-flow" aria-hidden="true" />
            </div>
            <div className="dcs-branch">
              <div className="dcs-node alt" style={{ "--i": "0" }}>
                <Icon name="gear" />
                <b>Standby generation</b>
                <small>Takes load on utility failure</small>
              </div>
              <div className="dcs-node alt" style={{ "--i": "1" }}>
                <Icon name="db" />
                <b>Batteries</b>
                <small>Ride-through until generation</small>
              </div>
              <div className="dcs-node alt" style={{ "--i": "2" }}>
                <Icon name="eye" />
                <b>EPMS</b>
                <small>Metering, alarms, trends</small>
              </div>
            </div>
          </div>
          <figcaption>
            Illustrative power path; actual topology depends on capacity, redundancy and equipment design.
          </figcaption>
        </figure>
        <h4 className="dcs-h4">Design considerations</h4>
        <div className="ix-tiles c3" data-reveal="">
          <div className="ix-tile" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="shield" />
            </span>
            <b>Redundancy</b>
            <span>N, N+1 or 2N chosen per availability target</span>
          </div>
          <div className="ix-tile" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="gear" />
            </span>
            <b>Maintenance bypass</b>
            <span>Work without exposing the critical load</span>
          </div>
          <div className="ix-tile" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="chart" />
            </span>
            <b>Selectivity</b>
            <span>Faults isolated close to the source</span>
          </div>
          <div className="ix-tile" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="fire" />
            </span>
            <b>Battery safety</b>
            <span>Chemistry, monitoring and fire strategy</span>
          </div>
          <div className="ix-tile" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="leaf" />
            </span>
            <b>Efficiency</b>
            <span>Losses tracked from utility to rack</span>
          </div>
          <div className="ix-tile" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="trend" />
            </span>
            <b>Future capacity</b>
            <span>Space and ratings for growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
