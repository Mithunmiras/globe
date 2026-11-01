import React from "react";
import Icon from "../../../../../Component/Icon";

export default function AiSection() {
  return (
    <section className="dx " id="dc-ai">
      <div className="wrap">
        <div className="dx-navy-panel">
          <div className="dx-ai">
            <div>
              <div className="dx-head">
                <span className="dx-pill">AI-ready infrastructure for a smarter tomorrow</span>
                <h2 className="dx-h">
                  {"AI & High-Density"} <span>Infrastructure</span>
                </h2>
                <p className="dx-sub">AI-ready infrastructure without compromising resilience.</p>
                <p className="dx-lede">Prepare the facility for GPU-heavy, data-intensive and HPC workloads.</p>
              </div>
              <div className="dx-aim">
                <div>
                  <b>10 – 30+ kW</b>
                  <small>Rack Density</small>
                </div>
                <div>
                  <b>GPU / HPC</b>
                  <small>Optimized</small>
                </div>
                <div>
                  <b>Efficient Cooling</b>
                  <small>Lower PUE</small>
                </div>
                <div>
                  <b>Future-Ready</b>
                  <small>For AI Innovation</small>
                </div>
              </div>
            </div>
            <div className="dx-ai-art">
              <figure className="dx-fig ">
                <img src="/images/img-07-62fce3caf3.jpg" alt="High-density AI rack pod" loading="lazy" />
              </figure>
              <div className="dx-ai-mini">
                <span>
                  <Icon name="cpu" />
                  <b>Built for</b>What's Next
                </span>
                <span>
                  <Icon name="chart" />
                  <b>Higher Performance</b>Greater Possibilities
                </span>
                <span>
                  <Icon name="shield" />
                  <b>Scalable Today</b>Ready for Tomorrow
                </span>
              </div>
            </div>
          </div>
          <div className="dx-ai4">
            <div>
              <em>01</em>
              <Icon name="server" />
              <b>High-Density Racks</b>
              <p>Design considerations for 10–30+ kW/rack and beyond.</p>
            </div>
            <div>
              <em>02</em>
              <Icon name="cpu" />
              <b>GPU / HPC Ready</b>
              <p>Infrastructure suited to compute-intensive AI/ML and analytics workloads.</p>
            </div>
            <div>
              <em>03</em>
              <Icon name="snow" />
              <b>Airflow Management</b>
              <p>Hot/cold aisle containment and disciplined cable management.</p>
            </div>
            <div>
              <em>04</em>
              <Icon name="layers" />
              <b>Scalable Pods</b>
              <p>Modular growth model so capacity can expand with demand.</p>
            </div>
          </div>
          <div className="dx-wl">
            <span className="dx-k">Powering tomorrow's possibilities</span>
            <span className="w">
              <Icon name="ai" />
              AI / ML
            </span>
            <span className="w">
              <Icon name="cpu" />
              High-Performance Computing
            </span>
            <span className="w">
              <Icon name="db" />
              Big Data Analytics
            </span>
            <span className="w">
              <Icon name="cloud" />
              Cloud Infrastructure
            </span>
            <span className="w">
              <Icon name="apps" />
              Enterprise Applications
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
