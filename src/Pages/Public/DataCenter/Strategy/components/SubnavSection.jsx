import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="dcs-strategy-why">Overview</button>
        <button data-jump="dcs-strategy-scope">Scope</button>
        <button data-jump="dcs-strategy-diagram">Architecture</button>
        <button data-jump="dc-prop">Proposition</button>
        <button data-jump="dcs-strategy-delivery">Delivery</button>
        <button data-jump="dcs-strategy-std">Standards</button>
        <button data-jump="dcs-strategy-rel">Related</button>
      </div>
    </div>
  );
}
