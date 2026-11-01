import React from "react";

export default function DeliverSection() {
  return (
    <section className="dx " id="ap-deliver">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">How we deliver</span>
          <h2 className="dx-h">
            A proven path from <span>idea to support</span>
          </h2>
        </div>
        <div className="dx-deliver">
          <ol className="dx-timeline n6">
            <li>
              <i>1</i>
              <b>Discover</b>
              <p>Processes, gaps</p>
            </li>
            <li>
              <i>2</i>
              <b>Design</b>
              <p>Solution, data</p>
            </li>
            <li>
              <i>3</i>
              <b>Build</b>
              <p>Configure, code</p>
            </li>
            <li>
              <i>4</i>
              <b>{"Test & train"}</b>
              <p>UAT, users</p>
            </li>
            <li>
              <i>5</i>
              <b>Go live</b>
              <p>Cutover, hypercare</p>
            </li>
            <li>
              <i>6</i>
              <b>Run</b>
              <p>Support, improve</p>
            </li>
          </ol>
          <div className="dx-models">
            <span className="dx-k">Engagement models</span>
            <div className="dx-chiprow">
              <span>L1–L3 support</span>
              <span>Upgrades and enhancements</span>
              <span>SLA-based AMS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
