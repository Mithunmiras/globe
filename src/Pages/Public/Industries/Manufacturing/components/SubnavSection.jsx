import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="ins-pm-why">Overview</button>
        <button data-jump="ins-pm-ind">Industries</button>
        <button data-jump="ins-pm-sol">Solutions</button>
        <button data-jump="ins-pm-fw">Compliance</button>
        <button data-jump="ins-pm-how">Approach</button>
        <button data-jump="ins-pm-rel">Other sectors</button>
      </div>
    </div>
  );
}
