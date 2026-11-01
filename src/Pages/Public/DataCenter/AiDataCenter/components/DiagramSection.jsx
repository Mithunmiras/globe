import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DiagramSection() {
  return (
    <section className="dx " id="dcs-ai-diagram">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Architecture</span>
          <h2 className="dx-h">
            The integrated <span>AI stack</span>
          </h2>
        </div>
        <figure className="dcs-fig">
          <div className="ix-layers" data-reveal="">
            <div className="ix-layer" style={{ "--i": "0" }}>
              <span className="ix-lic">
                <Icon name="target" />
              </span>
              <b>Workloads</b>
              <span>Training, fine-tuning, inference</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "1" }}>
              <span className="ix-lic">
                <Icon name="layers" />
              </span>
              <b>Orchestration</b>
              <span>Scheduling, containers, resource allocation</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "2" }}>
              <span className="ix-lic">
                <Icon name="cpu" />
              </span>
              <b>GPU compute</b>
              <span>Accelerators and interconnects</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "3" }}>
              <span className="ix-lic">
                <Icon name="net" />
              </span>
              <b>AI fabric</b>
              <span>High-speed, low-latency network</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "4" }}>
              <span className="ix-lic">
                <Icon name="db" />
              </span>
              <b>{"Storage & data"}</b>
              <span>High-throughput pipelines</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "5" }}>
              <span className="ix-lic">
                <Icon name="bolt" />
              </span>
              <b>Power</b>
              <span>High-density distribution</span>
              <i className="ix-pulse" />
            </div>
            <div className="ix-layer" style={{ "--i": "6" }}>
              <span className="ix-lic">
                <Icon name="drop" />
              </span>
              <b>Cooling</b>
              <span>Direct-to-chip liquid and heat rejection</span>
              <i className="ix-pulse" />
            </div>
          </div>
          <figcaption>Illustrative stack; every layer is sized to the specific workload.</figcaption>
        </figure>
        <h4 className="dcs-h4">Design considerations</h4>
        <div className="ix-tiles c3" data-reveal="">
          <div className="ix-tile" style={{ "--i": "0" }}>
            <span className="dx-ic c-blue">
              <Icon name="cpu" />
            </span>
            <b>Workload-specific</b>
            <span>Designed from the workload, not a template</span>
          </div>
          <div className="ix-tile" style={{ "--i": "1" }}>
            <span className="dx-ic c-blue">
              <Icon name="bolt" />
            </span>
            <b>Power availability</b>
            <span>Often the deciding constraint</span>
          </div>
          <div className="ix-tile" style={{ "--i": "2" }}>
            <span className="dx-ic c-blue">
              <Icon name="drop" />
            </span>
            <b>Liquid cooling</b>
            <span>Serviceability and leak detection</span>
          </div>
          <div className="ix-tile" style={{ "--i": "3" }}>
            <span className="dx-ic c-blue">
              <Icon name="net" />
            </span>
            <b>Fabric</b>
            <span>Congestion planned, not discovered</span>
          </div>
          <div className="ix-tile" style={{ "--i": "4" }}>
            <span className="dx-ic c-blue">
              <Icon name="chart" />
            </span>
            <b>Utilisation</b>
            <span>Telemetry to keep GPUs busy</span>
          </div>
          <div className="ix-tile" style={{ "--i": "5" }}>
            <span className="dx-ic c-blue">
              <Icon name="trend" />
            </span>
            <b>Modular growth</b>
            <span>Pods added in phases</span>
          </div>
        </div>
      </div>
    </section>
  );
}
