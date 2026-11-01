import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="dcs-cooling-why">Overview</button>
        <button data-jump="dcs-cooling-scope">Scope</button>
        <button data-jump="dcs-cooling-diagram">Architecture</button>
        <button data-jump="dcs-cooling-deck">Capabilities</button>
        <button data-jump="dcs-cooling-delivery">Delivery</button>
        <button data-jump="dcs-cooling-std">Standards</button>
        <button data-jump="dcs-cooling-rel">Related</button>
      </div>
    </div>
  );
}
