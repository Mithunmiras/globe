import React from "react";

export default function TransitionSection() {
  return (
    <section className="dx " id="ms-transition">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Transition</span>
          <h2 className="dx-h">
            A safe handover <span>from day one</span>
          </h2>
          <p className="dx-lede">Services move to us in planned stages, so users notice nothing but the improvement.</p>
        </div>
        <ol className="dx-timeline n6">
          <li>
            <i>1</i>
            <b>Due diligence</b>
            <p>Scope, assets, SLAs</p>
          </li>
          <li>
            <i>2</i>
            <b>Knowledge transfer</b>
            <p>Documents and sessions</p>
          </li>
          <li>
            <i>3</i>
            <b>Shadow</b>
            <p>We observe, you run</p>
          </li>
          <li>
            <i>4</i>
            <b>Reverse shadow</b>
            <p>We run, you observe</p>
          </li>
          <li>
            <i>5</i>
            <b>Steady state</b>
            <p>Full SLA in force</p>
          </li>
          <li>
            <i>6</i>
            <b>Improve</b>
            <p>Automation and savings</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
