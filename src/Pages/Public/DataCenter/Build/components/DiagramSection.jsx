import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DiagramSection() {
  return (
    <section className="dx " id="dcs-build-diagram">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Architecture</span>
          <h2 className="dx-h">
            Staged, <span>evidence-based commissioning</span>
          </h2>
        </div>
        <figure className="dcs-fig">
          <div className="cx-cov" data-reveal="">
            <div className="b" style={{ "--i": "0" }}>
              <span>
                <Icon name="factory" />
                <b>L1 · Factory acceptance</b>
              </span>
              <p>Equipment tested at the manufacturer before shipping</p>
            </div>
            <div className="g" style={{ "--i": "1" }}>
              <span>
                <Icon name="truck" />
                <b>L2 · Site inspection</b>
              </span>
              <p>Delivery and installation verified on site</p>
            </div>
            <div className="o" style={{ "--i": "2" }}>
              <span>
                <Icon name="bolt" />
                <b>L3 · Start-up</b>
              </span>
              <p>Each system energised and started individually</p>
            </div>
            <div className="t" style={{ "--i": "3" }}>
              <span>
                <Icon name="gear" />
                <b>L4 · Functional tests</b>
              </span>
              <p>Systems tested under load and failure modes</p>
            </div>
            <div className="p" style={{ "--i": "4" }}>
              <span>
                <Icon name="check" />
                <b>L5 · Integrated systems test</b>
              </span>
              <p>The whole facility tested together, including failover</p>
            </div>
          </div>
          <figcaption>
            Test boundaries, witnesses, acceptance criteria and retests are defined in each project’s commissioning
            plan.
          </figcaption>
        </figure>
        <h4 className="dcs-h4">Design considerations</h4>
        <div className="ix-tiles c3" data-reveal="">
          <div className="ix-tile" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="cart" />
            </span>
            <b>Long-lead items</b>
            <span>Tracked from tender to delivery</span>
          </div>
          <div className="ix-tile" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="layers" />
            </span>
            <b>Interfaces</b>
            <span>One owner for every boundary</span>
          </div>
          <div className="ix-tile" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="shield" />
            </span>
            <b>HSE</b>
            <span>Safety on site is non-negotiable</span>
          </div>
          <div className="ix-tile" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="check" />
            </span>
            <b>Quality</b>
            <span>Inspections before cover-up</span>
          </div>
          <div className="ix-tile" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="doc" />
            </span>
            <b>Defects</b>
            <span>Severity, owner and retest tracked</span>
          </div>
          <div className="ix-tile" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="users" />
            </span>
            <b>Readiness</b>
            <span>Operators trained before go-live</span>
          </div>
        </div>
      </div>
    </section>
  );
}
