import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="dcs-critical-why">Overview</button>
        <button data-jump="dcs-critical-scope">Scope</button>
        <button data-jump="dcs-critical-diagram">Architecture</button>
        <button data-jump="dc-what">Capabilities</button>
        <button data-jump="dcs-critical-delivery">Delivery</button>
        <button data-jump="dcs-critical-std">Standards</button>
        <button data-jump="dcs-critical-rel">Related</button>
      </div>
    </div>
  );
}
