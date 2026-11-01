import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="dc-life">Lifecycle</button>
        <button data-jump="dc-directory">Disciplines</button>
        <button data-jump="dc-types">Facility types</button>
        <button data-jump="dc-engage">Engagement</button>
        <button data-jump="dc-why">Why us</button>
        <button data-jump="data-center-cases">Case studies</button>
        <button data-jump="data-center-partners">Partners</button>
      </div>
    </div>
  );
}
