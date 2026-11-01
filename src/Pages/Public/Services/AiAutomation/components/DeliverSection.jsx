import React from "react";

export default function DeliverSection() {
  return (
    <section className="dx " id="ai-deliver">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">How we deliver</span>
          <h2 className="dx-h">
            From idea to <span>AI in daily use</span>
          </h2>
        </div>
        <div className="dx-deliver">
          <ol className="dx-timeline n4">
            <li>
              <i>1</i>
              <b>Discover</b>
              <p>Workshop, use-case scoring, data check</p>
            </li>
            <li>
              <i>2</i>
              <b>Pilot</b>
              <p>Scoped build on real data, agreed measures</p>
            </li>
            <li>
              <i>3</i>
              <b>Scale</b>
              <p>Production, integration, security, training</p>
            </li>
            <li>
              <i>4</i>
              <b>Operate</b>
              <p>Monitoring, retraining, cost control</p>
            </li>
          </ol>
          <div className="dx-models">
            <span className="dx-k">Engagement models</span>
            <div className="dx-chiprow">
              <span>AI readiness workshop</span>
              <span>Fixed-scope pilot</span>
              <span>AI Centre of Excellence</span>
              <span>Managed AI operations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
