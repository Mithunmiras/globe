import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="dcs-build-why">Overview</button>
        <button data-jump="dcs-build-scope">Scope</button>
        <button data-jump="dcs-build-diagram">Architecture</button>
        <button data-jump="dcs-build-delivery">Delivery</button>
        <button data-jump="dcs-build-std">Standards</button>
        <button data-jump="dcs-build-rel">Related</button>
      </div>
    </div>
  );
}
