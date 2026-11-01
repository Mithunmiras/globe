import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="da-map">Capabilities</button>
        <button data-jump="da-maturity">Maturity</button>
        <button data-jump="da-arch">Architecture</button>
        <button data-jump="da-platforms">Data stack</button>
        <button data-jump="da-dashboards">Dashboards</button>
        <button data-jump="da-advanced">Advanced</button>
        <button data-jump="da-deliver">How we deliver</button>
        <button data-jump="da-oem">OEM ecosystem</button>
        <button data-jump="data-analytics-cases">Case studies</button>
        <button data-jump="data-analytics-partners">Partners</button>
      </div>
    </div>
  );
}
