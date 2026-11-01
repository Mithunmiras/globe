import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="dcs-it-network-why">Overview</button>
        <button data-jump="dcs-it-network-scope">Scope</button>
        <button data-jump="dcs-it-network-diagram">Architecture</button>
        <button data-jump="dcs-it-network-deck">Capabilities</button>
        <button data-jump="dcs-it-network-delivery">Delivery</button>
        <button data-jump="dcs-it-network-std">Standards</button>
        <button data-jump="dcs-it-network-rel">Related</button>
      </div>
    </div>
  );
}
