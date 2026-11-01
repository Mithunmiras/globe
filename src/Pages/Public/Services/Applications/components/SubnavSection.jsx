import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="ap-map">Capability map</button>
        <button data-jump="ap-thread">Digital thread</button>
        <button data-jump="ap-story">Applications</button>
        <button data-jump="ap-deliver">How we deliver</button>
        <button data-jump="ap-oem">OEM ecosystem</button>
        <button data-jump="ap-why">Why us</button>
        <button data-jump="applications-cases">Case studies</button>
        <button data-jump="applications-partners">Partners</button>
      </div>
    </div>
  );
}
