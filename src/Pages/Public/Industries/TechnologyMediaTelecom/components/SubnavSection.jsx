import React from "react";

export default function SubnavSection() {
  return (
    <div className="subnav dx-subnav">
      <div className="wrap chips" role="navigation" aria-label="On this page">
        <button data-jump="ins-cmt-why">Overview</button>
        <button data-jump="ins-cmt-ind">Industries</button>
        <button data-jump="ins-cmt-sol">Solutions</button>
        <button data-jump="ins-cmt-fw">Compliance</button>
        <button data-jump="ins-cmt-how">Approach</button>
        <button data-jump="ins-cmt-rel">Other sectors</button>
      </div>
    </div>
  );
}
