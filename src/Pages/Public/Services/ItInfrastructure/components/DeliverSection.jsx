import React from "react";

export default function DeliverSection() {
  return (
    <section className="dx " id="in-deliver">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">How we deliver</span>
          <h2 className="dx-h">
            From assessment to <span>24x7 operations</span>
          </h2>
        </div>
        <div className="dx-deliver">
          <ol className="dx-timeline n5">
            <li>
              <i>1</i>
              <b>Assess</b>
              <p>Inventory, health, gaps</p>
            </li>
            <li>
              <i>2</i>
              <b>Design</b>
              <p>OEM-neutral plan and BOQ</p>
            </li>
            <li>
              <i>3</i>
              <b>Deploy</b>
              <p>Install, migrate, test</p>
            </li>
            <li>
              <i>4</i>
              <b>Operate</b>
              <p>24x7 NOC, SOC, SLAs</p>
            </li>
            <li>
              <i>5</i>
              <b>Optimize</b>
              <p>Capacity, cost, refresh</p>
            </li>
          </ol>
          <div className="dx-models">
            <span className="dx-k">Engagement models</span>
            <div className="dx-chiprow">
              <span>Fixed-scope projects</span>
              <span>AMC</span>
              <span>Fully managed services</span>
              <span>Resident engineers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
