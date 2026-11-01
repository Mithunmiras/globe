import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="dw-map">Services</button>
        <button data-jump="dw-day">Employee journey</button>
        <button data-jump="dw-story">Workplace services</button>
        <button data-jump="dw-deliver">How we deliver</button>
        <button data-jump="dw-oem">Partners</button>
        <button data-jump="dw-why">Why us</button>
      </div>
    </div>
  );
}
