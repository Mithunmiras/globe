import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="cs-map">Portfolio</button>
        <button data-jump="cs-outcome">{"Outcome & risk"}</button>
        <button data-jump="cs-story">Security areas</button>
        <button data-jump="cs-coverage">Coverage</button>
        <button data-jump="cs-roadmap">Roadmap</button>
        <button data-jump="cs-measure">Measure</button>
        <button data-jump="cs-journey">Journey</button>
        <button data-jump="cybersecurity-cases">Case studies</button>
        <button data-jump="cybersecurity-partners">Partners</button>
      </div>
    </div>
  );
}
