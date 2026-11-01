import React from "react";
import Icon from "../../../../../Component/Icon";

export default function PartnersSection() {
  return (
    <section className="band white" id="data-analytics-partners">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">Partners</div>
            <h2>
              Technology <em>partners</em>
            </h2>
          </div>
          <p>Global and Indian analytics platforms we design, build and support.</p>
        </div>
        <div className="pt-wrap ptm" data-partners="data-analytics" data-dyn="">
          <p style={{ color: "var(--muted)" }}>Partners will be listed here.</p>
        </div>
        <p className="note">
          <Icon name="doc" />
          Partner programme status and authorisations are confirmed for each engagement.
        </p>
      </div>
    </section>
  );
}
