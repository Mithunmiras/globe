import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="dcs-expansion-why">Overview</button>
        <button data-jump="dcs-expansion-scope">Scope</button>
        <button data-jump="dcs-expansion-diagram">Architecture</button>
        <button data-jump="dcs-expansion-delivery">Delivery</button>
        <button data-jump="dcs-expansion-std">Standards</button>
        <button data-jump="dcs-expansion-rel">Related</button>
      </div>
    </div>
  );
}
