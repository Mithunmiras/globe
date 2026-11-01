import React from "react";
import Icon from "../../../../../Component/Icon";

export default function PropSection() {
  return (
    <section className="dx ice" id="dc-prop">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Our proposition</span>
          <h2 className="dx-h">
            One partner. <span>Every critical layer.</span>
          </h2>
          <p className="dx-lede">End-to-end Data Center Solutions from Strategy to 24/7 Operations.</p>
        </div>
        <div className="dx-layers">
          <div className="dx-layer">
            <em>01</em>
            <span className="dx-ic c-line ">
              <Icon name="spark" />
            </span>
            <b>{"Strategy & Design"}</b>
            <p>Capacity planning, criticality, density and build-ready engineering.</p>
          </div>
          <div className="dx-layer">
            <em>02</em>
            <span className="dx-ic c-line ">
              <Icon name="bolt" />
            </span>
            <b>{"Power & Cooling"}</b>
            <p>UPS, PDU, generator, dual feeds, precision cooling and containment.</p>
          </div>
          <div className="dx-layer">
            <em>03</em>
            <span className="dx-ic c-line ">
              <Icon name="server" />
            </span>
            <b>{"IT & Network"}</b>
            <p>Rack infrastructure, spine-leaf networking, compute, storage and high-speed connectivity.</p>
          </div>
          <div className="dx-layer">
            <em>04</em>
            <span className="dx-ic c-line ">
              <Icon name="lock" />
            </span>
            <b>{"Security & Compliance"}</b>
            <p>Physical security, monitoring and alignment to TIA-942 and industry frameworks.</p>
          </div>
          <div className="dx-layer">
            <em>05</em>
            <span className="dx-ic c-line ">
              <Icon name="gear" />
            </span>
            <b>{"Operate & Optimize"}</b>
            <p>DCIM, NOC, observability, incident response, SOPs and continuous optimization.</p>
          </div>
        </div>
        <div className="dx-deliver">
          <div className="dx-deliver-h">
            <div>
              <span className="dx-pill gold">Delivery model</span>
              <h3>From site assessment to 24/7 operations</h3>
              <p>A structured five-step method keeps capacity, cost, risk and growth aligned.</p>
            </div>
            <div className="dx-phase">
              <span>Plan</span>
              <span>Build</span>
              <span>Run</span>
              <span>Grow</span>
            </div>
          </div>
          <ol className="dx-timeline">
            <li>
              <i>1</i>
              <b>Assess</b>
              <p>Site, power, connectivity, criticality and growth assumptions.</p>
            </li>
            <li>
              <i>2</i>
              <b>Architect</b>
              <p>Reference architecture, redundancy and capacity model.</p>
            </li>
            <li>
              <i>3</i>
              <b>Engineer</b>
              <p>Detailed electrical, mechanical, network and security specifications.</p>
            </li>
            <li>
              <i>4</i>
              <b>Deploy</b>
              <p>Build, integrate, test, commission and hand over.</p>
            </li>
            <li>
              <i>5</i>
              <b>Operate</b>
              <p>DCIM, NOC, observability, optimization and lifecycle support.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
