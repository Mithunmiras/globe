import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="co-map">Services</button>
        <button data-jump="co-approach">Approach</button>
        <button data-jump="co-story">Consulting services</button>
        <button data-jump="co-advisory">Outputs</button>
        <button data-jump="co-deliver">Engagement models</button>
        <button data-jump="co-why">Why us</button>
        <button data-jump="consulting-cases">Case studies</button>
      </div>
    </div>
  );
}
