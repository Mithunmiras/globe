import React from "react";
import Icon from "../../../../../Component/Icon";

export default function DeckSection() {
  return (
    <section className="dx" id="dcs-fire-security-deck">
      <div className="wrap">
        <div className="dx-head">
          <span className="dx-pill">Capability deck</span>
          <h2 className="dx-h">
            Security <span>we deliver</span>
          </h2>
          <p className="dx-lede">From the DGC Data Center capability deck.</p>
        </div>
        <div className="dx-tabs" data-tabs="">
          <div className="dx-tpanes">
            <div role="tabpanel" id="inf-security" aria-labelledby="inf-security-t" className="dx-tp">
              <div className="dx-ip one">
                <div className="dx-ip-copy">
                  <span className="dx-k">{"Security, reliability & compliance"}</span>
                  <h3>Secure today. Assured tomorrow.</h3>
                  <p className="dx-lede">
                    Security embedded into the facility and its operations. Physical, infrastructure and operational
                    controls work together.
                  </p>
                </div>
              </div>
              <div className="dx-sgrid">
                <div className="dx-card tiercard">
                  <div className="dx-card-h">
                    <span className="dx-ic c-blue ">
                      <Icon name="chart" />
                    </span>
                    <div>
                      <b>Uptime Institute Tier Standards</b>
                      <small>Built for mission-critical workloads</small>
                    </div>
                  </div>
                  <div className="dx-tierrows">
                    <div className="">
                      <em>I</em>
                      <span>N (no redundancy)</span>
                      <b>99.671%</b>
                    </div>
                    <div className="">
                      <em>II</em>
                      <span>N+1 partial</span>
                      <b>99.741%</b>
                    </div>
                    <div className="">
                      <em>III</em>
                      <span>N+1, concurrently maintainable</span>
                      <b>99.982%</b>
                    </div>
                    <div className="g">
                      <em>IV</em>
                      <span>2N, fault tolerant</span>
                      <b>99.995%+</b>
                    </div>
                  </div>
                  <p className="dx-note">
                    Digital Globe designs and operates to Tier III / Tier IV standards, N to 2N redundancy as required
                    by workload criticality.
                  </p>
                </div>
                <div className="dx-card shield">
                  <img
                    src="/images/img-119-d6029987a8.jpg"
                    alt="People, process, technology and compliance"
                    loading="lazy"
                  />
                  <div className="dx-pdrc">
                    <span>Prevent</span>
                    <span>Detect</span>
                    <span>Respond</span>
                    <span>Comply</span>
                  </div>
                </div>
                <div className="dx-card">
                  <div className="dx-card-h">
                    <span className="dx-ic c-blue ">
                      <Icon name="lock" />
                    </span>
                    <div>
                      <b>Multi-Layer Security</b>
                      <small>People. Process. Technology.</small>
                    </div>
                  </div>
                  <ul className="dx-ml">
                    <li>
                      <Icon name="key" />
                      {"Biometric access control & mantrap entry"}
                    </li>
                    <li>
                      <Icon name="video" />
                      {"24x7 CCTV surveillance & guarded perimeter"}
                    </li>
                    <li>
                      <Icon name="net" />
                      Zero-trust network segmentation
                    </li>
                    <li>
                      <Icon name="fire" />
                      {"Advanced fire detection & gas suppression"}
                    </li>
                  </ul>
                </div>
                <div className="dx-pillars">
                  <div>
                    <em>1</em>
                    <Icon name="video" />
                    <b>Physical Security</b>
                    <span>Biometric access · CCTV · multi-layer access control</span>
                  </div>
                  <div>
                    <em>2</em>
                    <Icon name="server" />
                    <b>Infrastructure Security</b>
                    <span>Network segmentation · secure management · monitoring</span>
                  </div>
                  <div>
                    <em>3</em>
                    <Icon name="doc" />
                    <b>Compliance Alignment</b>
                    <span>TIA-942 · ISO 27001 · applicable local and industry requirements</span>
                  </div>
                  <div>
                    <em>4</em>
                    <Icon name="users" />
                    <b>{"Policies & Governance"}</b>
                    <span>Access policies · audits · continuous improvement</span>
                  </div>
                </div>
                <div className="dx-comp">
                  <div>
                    <span className="dx-ic c-blue ">
                      <Icon name="doc" />
                    </span>
                    <p>
                      <b>{"Compliance & Certification Alignment"}</b>
                      <small>Meeting global and industry standards</small>
                    </p>
                  </div>
                  <ul>
                    <li>
                      <Icon name="globe" />
                      ISO 27001
                    </li>
                    <li>
                      <Icon name="gear" />
                      ISO 22301
                    </li>
                    <li>
                      <Icon name="shield" />
                      SOC 2
                    </li>
                    <li>
                      <Icon name="db" />
                      PCI-DSS
                    </li>
                    <li>
                      <Icon name="doc" />
                      TIA-942
                    </li>
                    <li>
                      <Icon name="target" />
                      DPDP Act 2023
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
