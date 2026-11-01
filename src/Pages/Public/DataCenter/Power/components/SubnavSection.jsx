import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="dcs-power-why">Overview</button>
        <button data-jump="dcs-power-scope">Scope</button>
        <button data-jump="dcs-power-diagram">Architecture</button>
        <button data-jump="dcs-power-deck">Capabilities</button>
        <button data-jump="dcs-power-delivery">Delivery</button>
        <button data-jump="dcs-power-std">Standards</button>
        <button data-jump="dcs-power-rel">Related</button>
      </div>
    </div>
  );
}
