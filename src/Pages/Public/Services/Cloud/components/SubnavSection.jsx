import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="cl-map">Multi-cloud model</button>
        <button data-jump="cl-journey">Journey</button>
        <button data-jump="cl-story">Cloud services</button>
        <button data-jump="cl-use">Use cases</button>
        <button data-jump="cl-oem">OEM ecosystem</button>
        <button data-jump="cl-why">Why us</button>
        <button data-jump="cloud-cases">Case studies</button>
        <button data-jump="cloud-partners">Partners</button>
      </div>
    </div>
  );
}
