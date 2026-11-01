import React from "react";
import Icon from "../../../../../Component/Icon";

export default function ThreadSection() {
  return (
    <section className="dx ice" id="ap-thread">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">The digital thread</span>
          <h2 className="dx-h">
            One flow of data, <span>order to delivery</span>
          </h2>
          <p className="dx-lede">Integration layer: APIs, middleware and shared master data.</p>
        </div>
        <div className="ix-zt n6" data-reveal="">
          <div className="ix-zs" style={{ "--i": "0" }}>
            <Icon name="users" />
            <b>CRM</b>
            <span>Order captured</span>
          </div>
          <div className="ix-zs" style={{ "--i": "1" }}>
            <Icon name="cpu" />
            <b>CAD + CAE</b>
            <span>Design, simulate</span>
          </div>
          <div className="ix-zs" style={{ "--i": "2" }}>
            <Icon name="layers" />
            <b>PLM</b>
            <span>BOM, change</span>
          </div>
          <div className="ix-zs" style={{ "--i": "3" }}>
            <Icon name="erp" />
            <b>ERP</b>
            <span>Plan, buy, cost</span>
          </div>
          <div className="ix-zs" style={{ "--i": "4" }}>
            <Icon name="gear" />
            <b>CAM</b>
            <span>NC programs</span>
          </div>
          <div className="ix-zs end" style={{ "--i": "5" }}>
            <Icon name="factory" />
            <b>MES</b>
            <span>Make, trace</span>
          </div>
          <i className="ix-zdot" aria-hidden="true" />
        </div>
        <div className="ap-bus" aria-hidden="true">
          <span>APIs</span>
          <span>Middleware</span>
          <span>Shared master data</span>
        </div>
        <div className="ix-bar">
          <small>Result</small>
          <span>No re-keying, real delivery dates, full traceability.</span>
        </div>
      </div>
    </section>
  );
}
