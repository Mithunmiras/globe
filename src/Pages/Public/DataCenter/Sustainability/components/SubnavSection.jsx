import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="dcs-sustainability-why">Overview</button>
        <button data-jump="dcs-sustainability-scope">Scope</button>
        <button data-jump="dcs-sustainability-diagram">Architecture</button>
        <button data-jump="dc-green">Green data centers</button>
        <button data-jump="dcs-sustainability-delivery">Delivery</button>
        <button data-jump="dcs-sustainability-std">Standards</button>
        <button data-jump="dcs-sustainability-rel">Related</button>
      </div>
    </div>
  );
}
