import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="dcs-design-why">Overview</button>
        <button data-jump="dcs-design-scope">Scope</button>
        <button data-jump="dcs-design-diagram">Architecture</button>
        <button data-jump="dc-arch">Layers</button>
        <button data-jump="dcs-design-delivery">Delivery</button>
        <button data-jump="dcs-design-std">Standards</button>
        <button data-jump="dcs-design-rel">Related</button>
      </div>
    </div>
  );
}
