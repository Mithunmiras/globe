import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="ins-fs-why">Overview</button>
        <button data-jump="ins-fs-ind">Industries</button>
        <button data-jump="ins-fs-sol">Solutions</button>
        <button data-jump="ins-fs-fw">Compliance</button>
        <button data-jump="ins-fs-how">Approach</button>
        <button data-jump="ins-fs-rel">Other sectors</button>
      </div>
    </div>
  );
}
