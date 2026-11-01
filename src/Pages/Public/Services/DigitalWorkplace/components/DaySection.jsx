import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DaySection() {
  return (
    <section className="dx ice" id="dw-day">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">The employee journey</span>
          <h2 className="dx-h">
            One connected day, <span>every employee</span>
          </h2>
          <p className="dx-lede">Every step is designed, secured and supported by the same team.</p>
        </div>
        <div className="ix-zt n6" data-reveal="">
          <div className="ix-zs" style={{ "--i": "0" }}>
            <Icon name="key" />
            <b>Sign in</b>
            <span>One identity, MFA</span>
          </div>
          <div className="ix-zs" style={{ "--i": "1" }}>
            <Icon name="laptop" />
            <b>Managed device</b>
            <span>Patched and compliant</span>
          </div>
          <div className="ix-zs" style={{ "--i": "2" }}>
            <Icon name="mail" />
            <b>Microsoft 365</b>
            <span>Mail, files, Teams</span>
          </div>
          <div className="ix-zs" style={{ "--i": "3" }}>
            <Icon name="video" />
            <b>Meet</b>
            <span>One-touch rooms</span>
          </div>
          <div className="ix-zs" style={{ "--i": "4" }}>
            <Icon name="layout" />
            <b>Request</b>
            <span>Self-service portal</span>
          </div>
          <div className="ix-zs end" style={{ "--i": "5" }}>
            <Icon name="spark" />
            <b>Automated</b>
            <span>Bots do the routine</span>
          </div>
          <i className="ix-zdot" aria-hidden="true" />
        </div>
        <div className="ix-bar">
          <small>Outcome</small>
          <span>Faster onboarding, fewer tickets and more time for real work.</span>
        </div>
      </div>
    </section>
  );
}
