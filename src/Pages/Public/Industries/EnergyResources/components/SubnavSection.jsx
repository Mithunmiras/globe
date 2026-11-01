import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="ins-re-why">Overview</button>
        <button data-jump="ins-re-ind">Industries</button>
        <button data-jump="ins-re-sol">Solutions</button>
        <button data-jump="ins-re-fw">Compliance</button>
        <button data-jump="ins-re-how">Approach</button>
        <button data-jump="ins-re-rel">Other sectors</button>
      </div>
    </div>
  );
}
