import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="ins-ph-why">Overview</button>
        <button data-jump="ins-ph-ind">Industries</button>
        <button data-jump="ins-ph-sol">Solutions</button>
        <button data-jump="ins-ph-fw">Compliance</button>
        <button data-jump="ins-ph-how">Approach</button>
        <button data-jump="ins-ph-rel">Other sectors</button>
      </div>
    </div>
  );
}
