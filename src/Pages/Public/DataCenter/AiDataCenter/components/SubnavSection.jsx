import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="dcs-ai-why">Overview</button>
        <button data-jump="dcs-ai-scope">Scope</button>
        <button data-jump="dcs-ai-diagram">Architecture</button>
        <button data-jump="dc-ai">AI-ready · 1 MW concept</button>
        <button data-jump="dcs-ai-delivery">Delivery</button>
        <button data-jump="dcs-ai-std">Standards</button>
        <button data-jump="dcs-ai-rel">Related</button>
      </div>
    </div>
  );
}
