import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="dcs-monitoring-why">Overview</button>
        <button data-jump="dcs-monitoring-scope">Scope</button>
        <button data-jump="dcs-monitoring-diagram">Architecture</button>
        <button data-jump="dcs-monitoring-delivery">Delivery</button>
        <button data-jump="dcs-monitoring-std">Standards</button>
        <button data-jump="dcs-monitoring-rel">Related</button>
      </div>
    </div>
  );
}
