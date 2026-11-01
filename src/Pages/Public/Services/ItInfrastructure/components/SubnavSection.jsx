import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="in-map">Capability map</button>
        <button data-jump="in-network">Network</button>
        <button data-jump="in-security">Security</button>
        <button data-jump="in-server">Server</button>
        <button data-jump="in-storage">Storage</button>
        <button data-jump="in-collab">Collaboration</button>
        <button data-jump="in-deliver">How we deliver</button>
        <button data-jump="in-oem">OEM ecosystem</button>
        <button data-jump="it-infrastructure-cases">Case studies</button>
      </div>
    </div>
  );
}
