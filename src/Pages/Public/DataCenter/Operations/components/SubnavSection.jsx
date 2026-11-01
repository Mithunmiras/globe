import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="dcs-operations-why">Overview</button>
        <button data-jump="dcs-operations-scope">Scope</button>
        <button data-jump="dcs-operations-diagram">Architecture</button>
        <button data-jump="dcs-operations-delivery">Delivery</button>
        <button data-jump="dcs-operations-std">Standards</button>
        <button data-jump="dcs-operations-rel">Related</button>
      </div>
    </div>
  );
}
