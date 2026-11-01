import React from "react";
import Icon from "../../../../../Component/Icon";

export default function JourneySection() {
  return (
    <section className="dx ice" id="cl-journey">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Adoption journey</span>
          <h2 className="dx-h">
            A five-step path <span>to the cloud</span>
          </h2>
        </div>
        <div className="ix-zt n5" data-reveal="">
          <div className="ix-zs" style={{ "--i": "0" }}>
            <Icon name="eye" />
            <b>Assess</b>
            <span>Discovery, TCO, readiness</span>
          </div>
          <div className="ix-zs" style={{ "--i": "1" }}>
            <Icon name="layout" />
            <b>Plan</b>
            <span>Provider, design, waves</span>
          </div>
          <div className="ix-zs" style={{ "--i": "2" }}>
            <Icon name="layers" />
            <b>Build</b>
            <span>Landing zone, network, identity</span>
          </div>
          <div className="ix-zs" style={{ "--i": "3" }}>
            <Icon name="arrow" />
            <b>Migrate</b>
            <span>Pilot, then waves</span>
          </div>
          <div className="ix-zs end" style={{ "--i": "4" }}>
            <Icon name="gear" />
            <b>Operate</b>
            <span>CloudOps and FinOps</span>
          </div>
          <i className="ix-zdot" aria-hidden="true" />
        </div>
        <div className="ix-bar">
          <small>Aligned to</small>
          <span>AWS Well-Architected · Microsoft CAF · Google Cloud framework</span>
        </div>
      </div>
    </section>
  );
}
