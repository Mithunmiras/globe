import React from "react";

export default function DeliverSection() {
  return (
    <section className="dx " id="co-deliver">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Engagement models</span>
          <h2 className="dx-h">
            Engage the way <span>that suits you</span>
          </h2>
        </div>
        <div className="dx-deliver">
          <ol className="dx-timeline n4">
            <li>
              <i>1</i>
              <b>Assessment</b>
              <p>Fixed scope, fixed price</p>
            </li>
            <li>
              <i>2</i>
              <b>Advisory retainer</b>
              <p>Senior guidance on call</p>
            </li>
            <li>
              <i>3</i>
              <b>Programme PMO</b>
              <p>Plan, track, report</p>
            </li>
            <li>
              <i>4</i>
              <b>Advise-to-run</b>
              <p>Design, deliver, operate</p>
            </li>
          </ol>
          <div className="dx-models">
            <span className="dx-k">Engagement models</span>
            <div className="dx-chiprow">
              <span>Fixed-scope assessments</span>
              <span>Advisory retainers</span>
              <span>PMO as a service</span>
              <span>Advise, implement and operate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
