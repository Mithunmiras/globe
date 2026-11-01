import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="ai-map">Capability map</button>
        <button data-jump="ai-value">Where the value is</button>
        <button data-jump="ai-story">Capabilities</button>
        <button data-jump="ai-use">Use cases</button>
        <button data-jump="ai-deliver">How we deliver</button>
        <button data-jump="ai-oem">OEM ecosystem</button>
        <button data-jump="ai-why">Why us</button>
        <button data-jump="ai-automation-cases">Case studies</button>
        <button data-jump="ai-automation-partners">Partners</button>
      </div>
    </div>
  );
}
