import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="dcs-fire-security-why">Overview</button>
        <button data-jump="dcs-fire-security-scope">Scope</button>
        <button data-jump="dcs-fire-security-diagram">Architecture</button>
        <button data-jump="dcs-fire-security-deck">Capabilities</button>
        <button data-jump="dcs-fire-security-delivery">Delivery</button>
        <button data-jump="dcs-fire-security-std">Standards</button>
        <button data-jump="dcs-fire-security-rel">Related</button>
      </div>
    </div>
  );
}
