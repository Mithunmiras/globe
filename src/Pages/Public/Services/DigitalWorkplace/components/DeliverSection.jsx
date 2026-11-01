import React from "react";

export default function DeliverSection() {
  return (
    <section className="dx " id="dw-deliver">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">How we deliver</span>
          <h2 className="dx-h">
            From assessment <span>to adoption</span>
          </h2>
        </div>
        <div className="dx-deliver">
          <ol className="dx-timeline n5">
            <li>
              <i>1</i>
              <b>Assess</b>
              <p>Users, devices, tools, pain points</p>
            </li>
            <li>
              <i>2</i>
              <b>Design</b>
              <p>Standards, security, automation backlog</p>
            </li>
            <li>
              <i>3</i>
              <b>Deploy</b>
              <p>Devices, M365, rooms, bots</p>
            </li>
            <li>
              <i>4</i>
              <b>Adopt</b>
              <p>Training and champions</p>
            </li>
            <li>
              <i>5</i>
              <b>Run</b>
              <p>Service desk and field support</p>
            </li>
          </ol>
          <div className="dx-models">
            <span className="dx-k">Engagement models</span>
            <div className="dx-chiprow">
              <span>Workplace assessment</span>
              <span>Microsoft 365 rollout</span>
              <span>Device-as-a-service</span>
              <span>Automation CoE</span>
              <span>Managed workplace</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
