import React from "react";
import Icon from "../../../../../Component/Icon";

export default function RefSection() {
  return (
    <section className="dx ice" id="dc-ref">
      <img className="dx-globe" src="/images/img-95-b96c57ff5f.jpg" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">From vision to reality · Scalable. Secure. Sustainable.</span>
          <h2 className="dx-h">
            1 MW Tier III <span>Reference Concept</span>
          </h2>
          <p className="dx-lede">A proven blueprint for next-generation digital infrastructure.</p>
        </div>
        <div className="dx-spec">
          <div className="dx-spec-top">
            <div className="dx-spec-img">
              <img src="/images/img-122-ae58d51d10.jpg" alt="1 MW Tier III data center campus concept" loading="lazy" />
              <span className="dx-pill dark">Reference concept</span>
            </div>
            <div className="dx-spec-k">
              <div>
                <b>1 MW</b>
                <small>IT Capacity</small>
                <i>Scalable design</i>
              </div>
              <div>
                <b>₹65 Cr</b>
                <small>Estimated CAPEX</small>
                <i>Illustrative</i>
              </div>
              <div>
                <b>₹45 Cr</b>
                <small>Annual OPEX</small>
                <i>Illustrative</i>
              </div>
              <div>
                <b>12 Months</b>
                <small>Design to Go-Live</small>
                <i>Illustrative</i>
              </div>
            </div>
          </div>
          <div className="dx-spec-layers">
            <div>
              <span className="dx-ic c-navy ">
                <Icon name="bolt" />
              </span>
              <b>Power Infrastructure</b>
              <ul>
                <li>Dual utility feeds</li>
                <li>{"UPS & switchgear"}</li>
                <li>Generators (N+1)</li>
                <li>Redundant distribution</li>
              </ul>
            </div>
            <div>
              <span className="dx-ic c-navy ">
                <Icon name="snow" />
              </span>
              <b>Cooling System</b>
              <ul>
                <li>Precision cooling</li>
                <li>Containment</li>
                <li>Optimized airflow</li>
                <li>Energy efficient design</li>
              </ul>
            </div>
            <div>
              <span className="dx-ic c-navy ">
                <Icon name="server" />
              </span>
              <b>IT Infrastructure</b>
              <ul>
                <li>{"Racks & compute"}</li>
                <li>Storage</li>
                <li>High-speed network</li>
                <li>AI/HPC ready</li>
              </ul>
            </div>
            <div>
              <span className="dx-ic c-navy ">
                <Icon name="shield" />
              </span>
              <b>{"Security & DCIM"}</b>
              <ul>
                <li>Physical security</li>
                <li>{"CCTV & access control"}</li>
                <li>{"DCIM & monitoring"}</li>
                <li>24×7 NOC integration</li>
              </ul>
            </div>
          </div>
          <div className="dx-spec-foot">
            <div className="dx-attrs">
              <div>
                <Icon name="gear" />
                <p>
                  <b>{"Modular & Scalable"}</b>
                  <span>Designed for future growth (2–20 MW)</span>
                </p>
              </div>
              <div>
                <Icon name="leaf" />
                <p>
                  <b>Energy Efficient</b>
                  <span>Target PUE 1.3 – 1.5</span>
                </p>
              </div>
              <div>
                <Icon name="shield" />
                <p>
                  <b>High Availability</b>
                  <span>Tier III ready architecture</span>
                </p>
              </div>
              <div>
                <Icon name="chart" />
                <p>
                  <b>Cost Optimized</b>
                  <span>Right-sized for efficiency</span>
                </p>
              </div>
            </div>
            <div className="dx-cr">
              <b>
                <Icon name="doc" />
                Compliance Ready
              </b>
              <ul>
                <li>
                  <Icon name="check" />
                  TIA-942
                </li>
                <li>
                  <Icon name="check" />
                  IS:1646
                </li>
                <li>
                  <Icon name="check" />
                  NBC
                </li>
                <li>
                  <Icon name="check" />
                  Other applicable standards
                </li>
              </ul>
            </div>
          </div>
          <div className="dx-flow">
            <span className="lbl">End-to-end delivery</span>
            <ol>
              <li>
                <Icon name="spark" />
                Design
              </li>
              <li>
                <Icon name="gear" />
                Build
              </li>
              <li>
                <Icon name="net" />
                Integrate
              </li>
              <li>
                <Icon name="play" />
                Operate
              </li>
            </ol>
          </div>
          <p className="dx-note">
            Note: Financial and project parameters are illustrative reference values and not a customer quotation.
          </p>
        </div>
      </div>
    </section>
  );
}
