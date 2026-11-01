import React from "react";

export default function CasesSection() {
  return (
    <section className="band" id="consulting-cases">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker">Case studies</div>
            <h2>
              Work we have <em>delivered</em>
            </h2>
          </div>
          <p>Client names withheld at their request.</p>
        </div>
        <div className="cases-grid" data-cases="consulting" data-dyn="">
          <p style={{ color: "var(--muted)" }}>Case studies will be listed here.</p>
        </div>
      </div>
    </section>
  );
}
