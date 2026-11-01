import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="ms-map">Services</button>
        <button data-jump="ms-model">Operating model</button>
        <button data-jump="ms-story">Managed services</button>
        <button data-jump="ms-sla">{"SLAs & governance"}</button>
        <button data-jump="ms-transition">Transition</button>
        <button data-jump="ms-oem">Platforms</button>
        <button data-jump="ms-why">Why us</button>
      </div>
    </div>
  );
}
