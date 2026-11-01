import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="dcs-standards-why">Overview</button>
        <button data-jump="dcs-standards-scope">Scope</button>
        <button data-jump="dcs-standards-diagram">Architecture</button>
        <button data-jump="dcs-standards-delivery">Delivery</button>
        <button data-jump="dcs-standards-std">Standards</button>
        <button data-jump="dcs-standards-rel">Related</button>
      </div>
    </div>
  );
}
