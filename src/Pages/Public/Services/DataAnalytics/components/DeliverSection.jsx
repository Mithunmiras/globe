import React from "react";

export default function DeliverSection() {
  return (
    <section className="dx " id="da-deliver">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">How we deliver</span>
          <h2 className="dx-h">
            From KPI workshop <span>to managed BI</span>
          </h2>
        </div>
        <div className="dx-deliver">
          <ol className="dx-timeline n5">
            <li>
              <i>1</i>
              <b>Define</b>
              <p>KPI workshop with each team</p>
            </li>
            <li>
              <i>2</i>
              <b>Build data</b>
              <p>Connectors, platform, models</p>
            </li>
            <li>
              <i>3</i>
              <b>Design</b>
              <p>Prototype, review, refine</p>
            </li>
            <li>
              <i>4</i>
              <b>Adopt</b>
              <p>Training and champions</p>
            </li>
            <li>
              <i>5</i>
              <b>Run</b>
              <p>Managed BI and new reports</p>
            </li>
          </ol>
          <div className="dx-models">
            <span className="dx-k">Engagement models</span>
            <div className="dx-chiprow">
              <span>Dashboard quick-start</span>
              <span>Data platform build</span>
              <span>BI Centre of Excellence</span>
              <span>Managed BI support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
