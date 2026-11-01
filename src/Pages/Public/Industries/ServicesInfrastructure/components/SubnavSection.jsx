import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="ins-si-why">Overview</button>
        <button data-jump="ins-si-ind">Industries</button>
        <button data-jump="ins-si-sol">Solutions</button>
        <button data-jump="ins-si-fw">Compliance</button>
        <button data-jump="ins-si-how">Approach</button>
        <button data-jump="ins-si-rel">Other sectors</button>
      </div>
    </div>
  );
}
